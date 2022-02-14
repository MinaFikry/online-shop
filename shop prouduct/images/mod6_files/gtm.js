
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"66",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var f=17;return function(c){var d=\"_\"+c.get(\"trackingId\")+\"_sendHitTask\",e=window[d]=window[d]||c.get(\"sendHitTask\");c.set(\"sendHitTask\",function(a){try{var c=a.get(\"hitPayload\"),b=a.get(\"hitPayload\"),d=\"\\x26cd\"+f;-1\u003Cb.indexOf(d+\"\\x3d\")?console.log(\"Google Analytics error: tried to send hit payload length in an already assigned Custom Dimension\"):(b+=d+\"\\x3d\",b+=b.length+b.length.toString().length,a.set(\"hitPayload\",b,!0));e(a)}catch(g){console.error(\"Error sending hit payload length to Google Analytics\"),\na.set(\"hitPayload\",c,!0),e(a)}})}})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1\u003Cdocument.referrer.indexOf(\"dialog\/oauth\")||-1\u003C",["escape",["macro",4],8,16],".indexOf(\"checkout\/confirmation\")\u0026\u0026-1===document.referrer.indexOf(",["escape",["macro",5],8,16],")?null:document.referrer})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"discountAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"deliveryOption"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",9],8,16],";if(a\u0026\u0026b)return a})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",10],
      "vtp_map":["list",["map","key","Home Delivery","value","5"],["map","key","Click and Collect","value","6"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customerType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],",b=",["escape",["macro",9],8,16],";if(a\u0026\u0026b)return a})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",13],
      "vtp_map":["list",["map","key","New Customer","value","7"],["map","key","Repeat Customer","value","8"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"privilegeCustomer"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",15],
      "vtp_map":["list",["map","key","Privilege Customer","value","9"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"stockStatus"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",17],
      "vtp_map":["list",["map","key","in stock","value","13"],["map","key","out of stock","value","14"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productPrice"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],",b=",["escape",["macro",17],8,16],";if(\"out of stock\"===b)return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productOldPrice"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"deliveryType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"deliveryArea"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cartItemsCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"storeLocation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"storeAddress"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentOption"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"majorCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",31],8,16],",b=",["escape",["macro",1],8,16],";if(a\u0026\u0026(\"product listing page\"===b||\"department page\"===b))return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"minorCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",33],8,16],",b=",["escape",["macro",1],8,16],";if(a\u0026\u0026\"product listing page\"===b)return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",35],8,16],",b=",["escape",["macro",1],8,16],";if(a\u0026\u0026\"product listing page\"===b)return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",31],8,16],",b=",["escape",["macro",1],8,16],";if(a\u0026\u0026\"product detail page\"===b)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"keywords",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"deliveryCity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"departmentId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"listingId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"listingName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productStyleCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"firstTimeTransaction"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_map":["list",["map","key","eg.hm.com","value","UA-104630328-9"],["map","key","hmeg2-pprod.factory.alshaya.com","value","UA-104630328-12"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",1]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":"knetpay.com.kw,secureacceptance.cybersource.com",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",2]],["map","fieldName","customTask","value",["macro",3]],["map","fieldName","referrer","value",["macro",6]]],
      "vtp_metric":["list",["map","index","3","metric","1"],["map","index","4","metric",["macro",7]],["map","index",["macro",11],"metric","1"],["map","index",["macro",14],"metric","1"],["map","index",["macro",16],"metric","1"],["map","index",["macro",18],"metric","1"],["map","index","15","metric",["macro",20]],["map","index","19","metric",["macro",21]],["map","index","20","metric",["macro",19]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","10","dimension",["macro",22]],["map","index","11","dimension",["macro",23]],["map","index","12","dimension",["macro",2]],["map","index","13","dimension",["macro",24]],["map","index","14","dimension",["macro",1]],["map","index","15","dimension",["macro",12]],["map","index","16","dimension",["macro",15]],["map","index","18","dimension",["macro",8]],["map","index","19","dimension",["macro",25]],["map","index","20","dimension",["macro",26]],["map","index","21","dimension",["macro",27]],["map","index","22","dimension",["macro",17]],["map","index","23","dimension",["macro",28]],["map","index","24","dimension",["macro",29]],["map","index","25","dimension",["macro",30]],["map","index","26","dimension",["macro",32]],["map","index","27","dimension",["macro",34]],["map","index","28","dimension",["macro",36]],["map","index","29","dimension",["macro",32]],["map","index","30","dimension",["macro",34]],["map","index","31","dimension",["macro",36]],["map","index","32","dimension",["macro",37]],["map","index","38","dimension",["macro",38]],["map","index","39","dimension",["macro",39]],["map","index","40","dimension",["macro",39]],["map","index","41","dimension",["macro",40]],["map","index","45","dimension",["macro",41]],["map","index","47","dimension",["macro",22]],["map","index","49","dimension",["macro",42]],["map","index","50","dimension",["macro",43]],["map","index","51","dimension",["macro",44]],["map","index","52","dimension",["macro",45]],["map","index","56","dimension",["macro",46]],["map","index","60","dimension",["macro",47]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",22],
      "vtp_defaultValue":"68264",
      "vtp_map":["list",["map","key","en","value","68264"],["map","key","ar","value","68265"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"platformType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cartItemsFlocktory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[],c=",["escape",["macro",52],8,16],";c.forEach(function(a){b.push({id:a.id,price:a.price,quantity:a.count})});return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.impressions"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",54],8,16],",b=[],a=0;a\u003C",["escape",["macro",54],8,16],".length;a++)b.push(c[a].id);return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[],c=",["escape",["macro",57],8,16],";c.forEach(function(a){b.push({id:a.id,price:a.price,quantity:a.quantity})});return b})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",2]],["map","fieldName","referrer","value",["macro",6]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","10","dimension",["macro",22]],["map","index","12","dimension",["macro",2]],["map","index","13","dimension",["macro",24]],["map","index","14","dimension",["macro",1]],["map","index","15","dimension",["macro",12]],["map","index","16","dimension",["macro",15]],["map","index","41","dimension",["macro",40]],["map","index","46","dimension",["macro",4]],["map","index","47","dimension",["macro",22]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.actionField.step"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout_option.actionField.step"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout_option.actionField.option"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteSection"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",64],8,16],",b=",["escape",["macro",65],8,16],",c=",["escape",["macro",31],8,16],";if(void 0!==a)return c+\" | \"+b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",64],8,16],";if(void 0!==a)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",41],8,16],";if(void 0!==a)return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",2]],["map","fieldName","customTask","value",["macro",3]],["map","fieldName","referrer","value",["macro",6]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","10","dimension",["macro",22]],["map","index","12","dimension",["macro",2]],["map","index","13","dimension",["macro",24]],["map","index","14","dimension",["macro",1]],["map","index","15","dimension",["macro",12]],["map","index","16","dimension",["macro",15]],["map","index","41","dimension",["macro",40]],["map","index","46","dimension",["macro",4]],["map","index","47","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"couponStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"couponCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fsKeyword"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fsNoOfResult"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"leadType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"\"!==",["escape",["macro",79],8,16],")return!0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sortValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"storeName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",69],8,16],";a=a.substring(a.indexOf(\"sub-nav-\")+8,a.length);return a.trim()})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByClassName(\"c-page-title\")[0].innerText,b=",["escape",["macro",71],8,16],",c=",["escape",["macro",1],8,16],";if(a\u0026\u0026b\u0026\u0026\"department page\"===c)return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__c",
      "vtp_value":"0.064"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",90],8,16],"*",["escape",["macro",91],8,16],";return parseFloat(Number(a).toFixed(2))})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userEmailID"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.category"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\".spc-message.spc-checkout-error-message\").innerText.trim();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"#email-error\").innerText.trim();if(\"\"!==a)return!0})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"CookieSource30d"
    },{
      "function":"__c",
      "vtp_value":"1101l737"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.coupon"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.shipping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.tax"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=parseFloat(",["escape",["macro",103],8,16],")-parseFloat(",["escape",["macro",104],8,16],")-parseFloat(",["escape",["macro",105],8,16],");return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003C",["escape",["macro",107],8,16],".length)for(var c=[],a=0;a\u003C",["escape",["macro",107],8,16],".length;a++){var b=",["escape",["macro",107],8,16],"[a].category.split(\"\/\").length-1;b=",["escape",["macro",107],8,16],"[a].category.split(\"\/\")[b];c.push(b)}return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",57],8,16],",f=",["escape",["macro",7],8,16],",c=[],d=0,e=[],a=0;a\u003Cb.length;a++)d+=b[a].price*b[a].quantity,c.push(b[a].price);b=-(f\/d);for(a=0;a\u003Cc.length;a++)e.push(c[a]-c[a]*b);return e})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";for(i=0;i\u003C",["escape",["macro",107],8,16],".length;i++)a=a+\"[category:\"+",["escape",["macro",108],8,16],"[i]+\"\/sku:\"+",["escape",["macro",107],8,16],"[i].id+\"\/value:\"+",["escape",["macro",109],8,16],"[i]+\"\/quantity:\"+",["escape",["macro",107],8,16],"[i].quantity.toString()+\"\/product_name:\"+",["escape",["macro",107],8,16],"[i].name+\"\/product_brand:\"+",["escape",["macro",107],8,16],"[i].brand+\"\/product_style_code:\"+",["escape",["macro",107],8,16],"[i].variant+\"]\";return a})();"]
    },{
      "function":"__c",
      "vtp_value":"88ff8e5d-56d1-47cb-9222-e8e1203204e3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003C",["escape",["macro",113],8,16],".purchase.products.length)for(var b=[],a=0;a\u003C",["escape",["macro",113],8,16],".purchase.products.length;a++)b.push(",["escape",["macro",113],8,16],".purchase.products[a].id);return b})();"]
    },{
      "function":"__c",
      "vtp_value":"2626777380734831"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByClassName(\"desc-value\")[0].innerText;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productPictureUrl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productBrand"
    },{
      "function":"__e"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",60],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","1","value","InitiateCheckout"],["map","key","3","value","AddPaymentInfo"],["map","key","2","value","AddDeliverydetails"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",82],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","Successful Search","value","Search"],["map","key","Registration Success","value","CompleteRegistration"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",119],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","productDetailView","value","ViewContent"],["map","key","addToCart","value","AddToCart"],["map","key","checkout","value",["macro",120]],["map","key","purchaseSuccess","value","Purchase"],["map","key","productImpression","value","ViewCategory"],["map","key","eventTracker","value",["macro",121]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",124],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].id);return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.impressions"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",126],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].id);return JSON.stringify(c)})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",119],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","productDetailView","value",["macro",37]],["map","key","addToCart","value",["macro",123]],["map","key","checkout","value",["macro",125]],["map","key","purchaseSuccess","value",["macro",114]],["map","key","productImpression","value",["macro",127]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.category"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",124],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].category);return JSON.stringify(c)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",57],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].name);return JSON.stringify(c)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"departmentName"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",119],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","productDetailView","value",["macro",96]],["map","key","addToCart","value",["macro",129]],["map","key","checkout","value",["macro",130]],["map","key","purchaseSuccess","value",["macro",131]],["map","key","productImpression","value",["macro",132]],["map","key","eventTracker","value",["macro",79]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003C",["escape",["macro",113],8,16],".checkout.products.length)for(var b=[],a=0;a\u003C",["escape",["macro",113],8,16],".checkout.products.length;a++)b.push(",["escape",["macro",113],8,16],".checkout.products[a].name);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003C",["escape",["macro",113],8,16],".purchase.products.length)for(var b=[],a=0;a\u003C",["escape",["macro",113],8,16],".purchase.products.length;a++)b.push(",["escape",["macro",113],8,16],".purchase.products[a].name);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",126],8,16],",b=[],a=0;3\u003Ea;a++)b.push(c[a].name);return b})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",119],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","productDetailView","value",["macro",134]],["map","key","addToCart","value",["macro",135]],["map","key","checkout","value",["macro",136]],["map","key","purchaseSuccess","value",["macro",137]],["map","key","productImpression","value",["macro",138]],["map","key",["macro",121],"value",["macro",41]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],"*",["escape",["macro",91],8,16],";return parseFloat(Number(a).toFixed(2))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",141],8,16],"*",["escape",["macro",91],8,16],";return parseFloat(Number(a).toFixed(2))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cartTotalValue"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",143],8,16],"*",["escape",["macro",91],8,16],";return parseFloat(Number(a).toFixed(2))})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",119],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","productDetailView","value",["macro",140]],["map","key","addToCart","value",["macro",142]],["map","key","checkout","value",["macro",144]],["map","key","purchaseSuccess","value",["macro",92]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",146],8,16],".split(\" \")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",146],8,16],".split(\" \")[1]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userPhone"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.quantity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.variant"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.category"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return category_1=",["escape",["macro",153],8,16],".split(\"\/\")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return category_2=",["escape",["macro",153],8,16],".split(\"\/\")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return category_3=",["escape",["macro",153],8,16],".split(\"\/\")[2]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[],c=",["escape",["macro",157],8,16],";c.forEach(function(b){a.push({item_id:b.id,quantity:b.quantity})});return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.variant"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return category_1=",["escape",["macro",163],8,16],".split(\"\/\")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return category_2=",["escape",["macro",163],8,16],".split(\"\/\")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return category_3=",["escape",["macro",163],8,16],".split(\"\/\")[2]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.quantity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"couponCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"couponStatus"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[],c=",["escape",["macro",124],8,16],";c.forEach(function(b){a.push({item_id:b.id,quantity:b.quantity})});return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",124],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].id);return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",124],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].variant);return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[],c=",["escape",["macro",107],8,16],";c.forEach(function(b){a.push({item_id:b.id,quantity:b.quantity})});return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003C",["escape",["macro",113],8,16],".purchase.products.length)for(var b=[],a=0;a\u003C",["escape",["macro",113],8,16],".purchase.products.length;a++)b.push(",["escape",["macro",113],8,16],".purchase.products[a].variant);return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"edit-email\").value;if(\"\"!==a)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"\"!==",["escape",["macro",94],8,16],")return DYO.dyhash.sha256(",["escape",["macro",94],8,16],")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return DYO.dyhash.sha256(",["escape",["macro",176],8,16],")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[],c=",["escape",["macro",179],8,16],";c.forEach(function(a){b.push({productId:a.variant,quantity:a.quantity,itemPrice:a.price})});return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[],c=",["escape",["macro",124],8,16],";c.forEach(function(a){b.push({productId:a.variant,quantity:a.quantity,itemPrice:a.price})});return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"#block-content\\x3ep\\x3ea\").innerText.trim();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"\"!==",["escape",["macro",182],8,16],")return DYO.dyhash.sha256(",["escape",["macro",182],8,16],")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"signinType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\".message\").innerText.trim();return a})();"]
    },{
      "function":"__c",
      "vtp_value":"799701213"
    },{
      "function":"__c",
      "vtp_value":"KwQeCI2bvJcBEN3xqf0C"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"fb_sessionSourcePaid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"magentoProductID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",52],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].count);return JSON.stringify(c)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",52],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].id);return JSON.stringify(c)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",52],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].price);return JSON.stringify(c)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",52],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].title);return JSON.stringify(c)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",124],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].brand);return JSON.stringify(c)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",124],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].name);return JSON.stringify(c)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",124],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].price);return JSON.stringify(c)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",124],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].quantity);return JSON.stringify(c)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.actionField.step"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"testClickText"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.coupon"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fsLocation"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\"True\"==",["escape",["macro",47],8,16],"?",["escape",["macro",103],8,16],":0})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",119],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^(productDetailView|checkout|purchaseSuccess|productImpression|promotionImpression|eventTracker)$","value",["macro",1]],["map","key","^addToCart$","value","add To cart"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pcType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"privilegeOrder"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"privilegesCardNumber"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productSKU"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",57],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].brand);return JSON.stringify(c)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",57],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].category);return JSON.stringify(c)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",57],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].price);return JSON.stringify(c)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",57],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].quantity);return JSON.stringify(c)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.shippping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.tax"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",57],8,16],",c=0,a=0;a\u003Cb.length;a++)c+=Math.round(parseInt(b[a].quantity));return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"edit-guest-delivery-home-address-shipping-organization\").value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"edit-guest-delivery-home-address-shipping-given-name\").value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"edit-guest-delivery-home-address-shipping-family-name\").value})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"edit-guest-delivery-home-address-shipping-mobile-number-mobile\").value})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.brand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.brand"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"#email-error\").innerText.trim();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\".spc-checkout-empty-delivery-text\\x3espan\").innerText.trim();return a})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__dbg"
    },{
      "function":"__r"
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",126,0]],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",49],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":2
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":5
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":6
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":7
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":8
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":9
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":10
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":12
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":13
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",50],
      "vtp_tagType":"BASKET_TAG",
      "vtp_siteType":["macro",51],
      "vtp_basketArray":["macro",53],
      "tag_id":14
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",50],
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",51],
      "tag_id":15
    },{
      "function":"__crto",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_accountId":["macro",50],
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",55],
      "vtp_siteType":["macro",51],
      "tag_id":16
    },{
      "function":"__crto",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_accountId":["macro",50],
      "vtp_productID":["macro",56],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",51],
      "tag_id":17
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",50],
      "vtp_hashedEmail":"\"\"",
      "vtp_tagType":"TRANSACTION_TAG",
      "vtp_siteType":["macro",51],
      "vtp_TransactionID":["macro",9],
      "vtp_TransactionArray":["macro",58],
      "tag_id":18
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Add To Cart",
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":35
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Checkout Step",
      "vtp_eventLabel":["template",["macro",1]," - ",["macro",60]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":36
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Checkout Option",
      "vtp_eventLabel":["template",["macro",1]," - ",["macro",61]," - ",["macro",62]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":37
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","17","metric","1"]],
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Product Click",
      "vtp_eventLabel":["macro",1],
      "vtp_dimension":["list",["map","index","38","dimension",["macro",63]],["map","index","43","dimension",["macro",66]],["map","index","44","dimension",["macro",67]],["map","index","45","dimension",["macro",68]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":38
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Product Detail Quick View",
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Product Impression",
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":40
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Promotion Click",
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Promotion Impression",
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Remove from Cart",
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":43
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Dept Static Banner and Category",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",69],
      "vtp_eventLabel":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Coupon Code",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",72],
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":54
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Filter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","10","metric","1"]],
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["template",["macro",31]," | ",["macro",65]],
      "vtp_eventLabel":["template",["macro",74]," - ",["macro",64]],
      "vtp_dimension":["list",["map","index","43","dimension",["template",["macro",31]," | ",["macro",65]]],["map","index","44","dimension",["macro",64]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Find Store Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["template",["macro",75]," - ",["macro",76]," Results"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":"Footer Navigation",
      "vtp_eventLabel":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Social Link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":"Social Link Footer",
      "vtp_eventLabel":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":58
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":59
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Language Switch",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":"Language Switch Click",
      "vtp_eventLabel":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Mobile Hamburger",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":"Hamburger Menu",
      "vtp_eventLabel":"Hamburger Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":61
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":"Breadcrumb Navigation",
      "vtp_eventLabel":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":62
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Newsletter Subscribers",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","12","metric","1"]],
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":"Complete",
      "vtp_eventLabel":["macro",77],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Payment Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":"Button Click",
      "vtp_eventLabel":"Place Order",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":64
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",81],
      "vtp_eventCategory":["macro",78],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","16","metric","1"]],
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",82],
      "vtp_eventLabel":["macro",79],
      "vtp_dimension":["list",["map","index","45","dimension",["macro",79]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Sort",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","11","metric","1"]],
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["template",["macro",31]," | ",["macro",65]],
      "vtp_eventLabel":["macro",83],
      "vtp_dimension":["list",["map","index","35","dimension",["template",["macro",31]," | ",["macro",65]]],["map","index","36","dimension",["macro",83]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Store Select",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",84],
      "vtp_eventLabel":["macro",29],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":"Sub Navigation",
      "vtp_eventLabel":["macro",85],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":68
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":"Top Navigation",
      "vtp_eventLabel":["template","Department Click - ",["macro",71]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":69
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User Login \u0026 Register",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":70
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Home Page Static Banner",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",69],
      "vtp_eventLabel":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":71
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Home Page Static Banner",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",86],
      "vtp_eventLabel":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":72
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Left Navigation DP",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",87],
      "vtp_eventLabel":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":73
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":74
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":76
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",59],
      "vtp_eventAction":"Purchase Success",
      "vtp_eventLabel":["template",["macro",1]," : ",["macro",9]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":104
    },{
      "function":"__awct",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",89],
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",92],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"698999881",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"qQ_DCJ6Pt7QBEMnIp80C",
      "vtp_rdp":false,
      "vtp_url":["macro",93],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":108
    },{
      "function":"__awct",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",89],
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",92],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"698915877",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"YmLXCIj1grQBEKW4os0C",
      "vtp_rdp":false,
      "vtp_url":["macro",93],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":109
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":127
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":137
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Update cart error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",82],
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":241
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template","\/search?query=",["macro",79]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",70],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":257
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"GTM - Sizes Disabled",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",95],
      "vtp_eventLabel":["macro",96],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":259
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",97],
      "vtp_eventLabel":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":266
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Customer exist warning on Checkout page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",24],
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":294
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Click on Add Address on Checkout page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",24],
      "vtp_eventLabel":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":295
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Save Address on Checkout page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",24],
      "vtp_eventLabel":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":296
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Delivery Option on Checkout page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",79],
      "vtp_eventLabel":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":297
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Payment Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",82],
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":298
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Delivery option on PDP page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",71],
      "vtp_eventLabel":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":305
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.error",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"13312748_6",
      "tag_id":306
    },{
      "function":"__cl",
      "tag_id":307
    },{
      "function":"__cl",
      "tag_id":308
    },{
      "function":"__cl",
      "tag_id":309
    },{
      "function":"__cl",
      "tag_id":310
    },{
      "function":"__cl",
      "tag_id":311
    },{
      "function":"__cl",
      "tag_id":312
    },{
      "function":"__cl",
      "tag_id":313
    },{
      "function":"__cl",
      "tag_id":314
    },{
      "function":"__cl",
      "tag_id":315
    },{
      "function":"__cl",
      "tag_id":316
    },{
      "function":"__cl",
      "tag_id":317
    },{
      "function":"__cl",
      "tag_id":318
    },{
      "function":"__cl",
      "tag_id":319
    },{
      "function":"__cl",
      "tag_id":320
    },{
      "function":"__cl",
      "tag_id":321
    },{
      "function":"__cl",
      "tag_id":322
    },{
      "function":"__jel",
      "tag_id":323
    },{
      "function":"__cl",
      "tag_id":324
    },{
      "function":"__cl",
      "tag_id":325
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"li.disabled",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"13312748_258",
      "tag_id":326
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.spc-message.spc-checkout-error-message",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"13312748_265",
      "tag_id":327
    },{
      "function":"__cl",
      "tag_id":328
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.spc-address-form",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"13312748_300",
      "tag_id":329
    },{
      "function":"__evl",
      "vtp_elementId":"email-error",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"13312748_301",
      "tag_id":330
    },{
      "function":"__cl",
      "tag_id":331
    },{
      "function":"__cl",
      "tag_id":332
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg alt=\"\" src=\"\/\/prf.hn\/conversion\/campaign:",["escape",["macro",100],3],"\/conversionref:",["escape",["macro",89],3],"\/country:EG\/currency:",["escape",["macro",101],3],"\/voucher:",["escape",["macro",102],3],"\/delivery_option:",["escape",["macro",8],3],"\/delivery_type:",["escape",["macro",25],3],"\/payment_option:",["escape",["macro",30],3],"\/totalvalue:",["escape",["macro",106],3],"\/first_time_transaction:",["escape",["macro",47],3],"\/",["escape",["macro",110],3],"\" width=\"1\" height=\"2\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"",["escape",["macro",111],7],"\",{user_email:\"",["escape",["macro",94],7],"\"});\n\"product detail page\"===",["escape",["macro",1],8,16],"?snaptr(\"track\",\"PAGE_VIEW\",{item_ids:\"",["escape",["macro",56],7],"\"}):snaptr(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"",["escape",["macro",111],7],"\",{user_email:",["escape",["macro",94],8,16],"});snaptr(\"track\",\"ADD_CART\",{item_ids:",["escape",["macro",112],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"",["escape",["macro",111],7],"\",{user_email:",["escape",["macro",94],8,16],"});\nsnaptr(\"track\",\"PURCHASE\",{item_ids:",["escape",["macro",114],8,16],",currency:\"",["escape",["macro",101],7],"\",price:",["escape",["macro",103],8,16],",transaction_id:\"",["escape",["macro",9],7],"\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"",["escape",["macro",111],7],"\",{user_email:",["escape",["macro",94],8,16],"});snaptr(\"track\",\"VIEW_CONTENT\",{item_ids:",["escape",["macro",56],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar urlParameters;(window.onpopstate=function(){var a,b=\/\\+\/g,c=\/([^\u0026=]+)=?([^\u0026]*)\/g,d=window.location.href.split(\"?\")[1];for(urlParameters={};a=c.exec(d);)urlParameters[decodeURIComponent(a[1].replace(b,\" \"))]=decodeURIComponent(a[2].replace(b,\" \"))})();var date=new Date;date.setTime(date.getTime()+2592E6);var expireDate=\"expires\\x3d\"+date.toUTCString(),utmhref=window.location.href,cookieUtmSource;cookieUtmSource=-1\u003Cdocument.cookie.indexOf(\"CookieSource30d\\x3d\")?\"available\":\"not available\";\nif(-1\u003Cutmhref.indexOf(\"utm_\")){var source=urlParameters.utm_source,medium=urlParameters.utm_medium,campaign=urlParameters.utm_campaign;if(\"undefined\"==typeof source||\"\"==source)source=\"not set\";if(\"undefined\"==typeof medium||\"\"==medium)medium=\"not set\";if(\"undefined\"==typeof campaign||\"\"==campaign)campaign=\"not set\";\"partnerize\"===source\u0026\u0026(source=\"partnerize\",document.cookie=\"CookieCampaign30d\\x3d\"+campaign+\"; \"+expireDate+\"; path\\x3d\/;\",document.cookie=\"CookieSource30d\\x3d\"+source+\"; \"+expireDate+\n\"; path\\x3d\/;\",document.cookie=\"CookieMedium30d\\x3d\"+medium+\"; \"+expireDate+\"; path\\x3d\/;\")};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"set\",\"autoConfig\",!1,\"",["escape",["macro",115],7],"\");fbq(\"init\",\"",["escape",["macro",115],7],"\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",115],12],"\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cmeta property=\"og:title\" content=\"",["escape",["macro",38],3],"\"\u003E\n\u003Cmeta property=\"og:description\" content=\"",["escape",["macro",116],3],"\"\u003E\n\u003Cmeta property=\"og:url\" content=\"",["escape",["macro",95],3],"\"\u003E\n\u003Cmeta property=\"og:image\" content=\"",["escape",["macro",117],3],"\"\u003E\n\u003Cmeta property=\"product:brand\" content=\"",["escape",["macro",118],3],"\"\u003E\n\u003Cmeta property=\"product:availability\" content=\"",["escape",["macro",17],3],"\"\u003E\n\u003Cmeta property=\"product:condition\" content=\"new\"\u003E\n\u003Cmeta property=\"product:price:amount\" content=\"",["escape",["macro",19],3],"\"\u003E\n\u003Cmeta property=\"product:price:currency\" content=\"",["escape",["macro",101],3],"\"\u003E\n\u003Cmeta property=\"product:retailer_item_id\" content=\"",["escape",["macro",46],3],"\"\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"set\",\"autoConfig\",!1,\"",["escape",["macro",115],7],"\");fbq(\"init\",\"",["escape",["macro",115],7],"\");fbq(\"track\",\"PageView\");\nfbq(\"track\",\"",["escape",["macro",122],7],"\",{content_type:\"product\",content_ids:\"",["escape",["macro",128],7],"\",content_category:\"",["escape",["macro",133],7],"\",content_name:\"",["escape",["macro",139],7],"\",value:",["escape",["macro",145],8,16],",currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1672987762794537\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,d){if(!b.exponea){var a=function(a,e){function f(e){return function(){var c=arguments;\"\"==a\u0026\u0026\"initialize\"==e\u0026\u0026c\u0026\u0026c[0].modify\u0026\u0026c[0].modify.overlay\u0026\u0026\"loading\"==d.readyState\u0026\u0026(d.write('\\x3cdiv id\\x3d\"__inf__overlay__\" style\\x3d\"position:absolute;background:#fff;left:0;top:0;width:100%;height:100%;z-index:1000000\"\\x3e\\x3c\/div\\x3e'),setTimeout(function(){var a=d.getElementById(\"__inf__overlay__\");a\u0026\u0026d.body.removeChild(a);res.__=!0},c[0].modify.delay||500));b.exponea._.push([a+e,arguments])}}\ne=e.split(\" \");var c;res={_:[]};for(c=0;c\u003Ce.length;c++){var g=e[c];res[g]=f(g)}return res};b.exponea=a(\"\",\"initialize identify update track trackLink trackEnhancedEcommerce getHtml showHtml showBanner showForm ping getAbTest\");b.exponea.notifications=a(\"notifications.\",\"isAvailable isSubscribed subscribe unsubscribe\");a=d.createElement(\"script\");var f=\"https:\"===d.location.protocol?\"https:\":\"http:\";a.type=\"text\/javascript\";a.async=!0;a.src=f+\"\/\/api.exponea.com\/js\/exponea.min.js\";d.getElementsByTagName(\"head\")[0].appendChild(a);\nb.webxpClient=b.webxpClient||{};b.webxpClient.sdk=b.exponea;b.webxpClient.sdkObjectName=\"exponea\"}})(window,document);\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Eexponea.initialize({token:\"ed2c70a4-2006-11ea-a384-5eb5c90936dd\",track:{visits:!0,default_properties:{brand:\"HnM\",market:\"EGY\",site:\"HnM_EGY\",currency:\"",["escape",["macro",101],7],"\",Language:\"",["escape",["macro",22],7],"\",PageType:\"",["escape",["macro",1],7],"\"}}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",97,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eexponea.identify({email:",["escape",["macro",94],8,16],"},{email:",["escape",["macro",94],8,16],",first_name:",["escape",["macro",147],8,16],",last_name:",["escape",["macro",148],8,16],",phone:",["escape",["macro",149],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",97,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eexponea.track(\"cart_update\",{items:\"[{item_id: ",["escape",["macro",112],7],", quantity:",["escape",["macro",150],7],"}]\",action:\"add\",product_id:\"",["escape",["macro",112],7],"\",price:",["escape",["macro",151],8,16],",variant_id:\"",["escape",["macro",152],7],"\",title:\"",["escape",["macro",135],7],"\",category_1:\"",["escape",["macro",154],7],"\",category_2:\"",["escape",["macro",155],7],"\",category_3:\"",["escape",["macro",156],7],"\",categories_path:\"",["escape",["macro",153],7],"\",total_price:\"",["escape",["macro",151],7],"\",total_quantity:",["escape",["macro",150],8,16],",page_type:\"",["escape",["macro",1],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",97,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eexponea.track(\"cart_update\",{items:",["escape",["macro",158],8,16],",action:\"remove\",product_id:\"",["escape",["macro",159],7],"\",price:",["escape",["macro",160],8,16],",variant_id:\"",["escape",["macro",161],7],"\",title:\"",["escape",["macro",162],7],"\",category_1:\"",["escape",["macro",164],7],"\",category_2:\"",["escape",["macro",165],7],"\",category_3:\"",["escape",["macro",166],7],"\",categories_path:\"",["escape",["macro",163],7],"\",item_quantity:",["escape",["macro",167],8,16],",total_price:",["escape",["macro",167],8,16],"*",["escape",["macro",160],8,16],",total_quantity:",["escape",["macro",167],8,16],",page_type:\"",["escape",["macro",1],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",97,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eexponea.track(\"checkout\",{total_price:",["escape",["macro",143],8,16],",step_number:",["escape",["macro",60],8,16],",step_title:",["escape",["macro",1],8,16],",voucher_code:\"",["escape",["macro",168],7],"\",voucher_status:\"",["escape",["macro",169],7],"\",product_list:",["escape",["macro",170],8,16],",product_ids:",["escape",["macro",171],8,16],",variant_ids:",["escape",["macro",172],8,16],",total_quantity:",["escape",["macro",27],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":130
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",97,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eexponea.track(\"purchase\",{purchase_status:\"success\",product_list:",["escape",["macro",173],8,16],",purchase_id:\"",["escape",["macro",89],7],"\",total_price:",["escape",["macro",103],8,16],",payment_type:\"",["escape",["macro",30],7],"\",voucher_code:\"",["escape",["macro",102],7],"\",voucher_value:",["escape",["macro",7],8,16],",shipping_type:\"",["escape",["macro",8],7],"\",shipping_cost:\"",["escape",["macro",104],7],"\",shipping_country:\"",["escape",["macro",23],7],"\",shipping_city:\"",["escape",["macro",42],7],"\",tax_value:",["escape",["macro",105],8,16],",product_ids:",["escape",["macro",114],8,16],",variant_ids:",["escape",["macro",174],8,16],",\ntotal_quantity:",["escape",["macro",27],8,16],",total_price_without_tax:",["escape",["macro",106],8,16],",Currency:",["escape",["macro",101],8,16],",purchase_source_type:\"Website\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",97,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(i=0;i\u003C",["escape",["macro",107],8,16],".length;i++)exponea.track(\"purchase_item\",{purchase_status:\"success\",purchase_id:\"",["escape",["macro",89],7],"\",purchase_source_name:\"Website\",product_id:",["escape",["macro",107],8,16],"[i].id,variant_id:",["escape",["macro",107],8,16],"[i].variant,price:",["escape",["macro",107],8,16],"[i].price,total_price:",["escape",["macro",107],8,16],"[i].price*",["escape",["macro",107],8,16],"[i].quantity,title:",["escape",["macro",107],8,16],"[i].name,quantity:",["escape",["macro",107],8,16],"[i].quantity,category_1:",["escape",["macro",107],8,16],"[i].category.split(\"\/\")[0],\ncategory_2:",["escape",["macro",107],8,16],"[i].category.split(\"\/\")[1],category_3:",["escape",["macro",107],8,16],"[i].category.split(\"\/\")[2],categories_ids:",["escape",["macro",107],8,16],"[i].category.split(\"\/\"),categories_path:",["escape",["macro",107],8,16],"[i].category});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":132
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",97,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eexponea.track(\"registration\",{email_opt_in:!0});\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",97,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eexponea.track(\"search_result\",{query:\"",["escape",["macro",79],7],"\",results_count:",["escape",["macro",81],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",97,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eexponea.track(\"view_category\",{category_id:\"",["escape",["macro",44],7],"\",category_name:\"",["escape",["macro",45],7],"\",category_listed_products:",["escape",["macro",55],8,16],",category_1:\"",["escape",["macro",31],7],"\",category_2:\"",["escape",["macro",33],7],"\",category_3:\"",["escape",["macro",35],7],"\",categories_path:\"",["escape",["macro",132],7],"\",Currency:\"",["escape",["macro",101],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",97,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eexponea.track(\"view_item\",{product_id:\"",["escape",["macro",56],7],"\",price:",["escape",["macro",175],8,16],",title:\"",["escape",["macro",134],7],"\",categories_path:\"",["escape",["macro",96],7],"\",category_1:\"",["escape",["macro",31],7],"\",category_2:\"",["escape",["macro",33],7],"\",category_3:\"",["escape",["macro",35],7],"\",category_id:\"",["escape",["macro",44],7],"\",original_price:",["escape",["macro",21],8,16],",Currency:\"",["escape",["macro",101],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",97,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eexponea.identify({email:",["escape",["macro",176],8,16],"},{email:",["escape",["macro",176],8,16],"});exponea.track(\"consent\",{action:\"accept\",category:\"newsletter\",valid_until:\"unlimited\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":138
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EDY.API(\"event\",{name:\"Add to Cart\",properties:{dyType:\"add-to-cart-v1\",value:",["escape",["macro",151],8,16],"*",["escape",["macro",150],8,16],",currency:",["escape",["macro",101],8,16],",productId:",["escape",["macro",152],8,16],",quantity:",["escape",["macro",150],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":247
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EDY.API(\"event\",{name:\"Login\",properties:{dyType:\"login-v1\",hashedEmail:",["escape",["macro",177],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":248
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EDY.API(\"event\",{name:\"Newsletter Subscription\",properties:{dyType:\"newsletter-subscription-v1\",hashedEmail:",["escape",["macro",178],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":249
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EDY.API(\"event\",{name:\"Promo Code Entered\",properties:{dyType:\"enter-promo-code-v1\",code:",["escape",["macro",73],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":250
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EDY.API(\"event\",{name:\"Purchase\",properties:{uniqueTransactionId:",["escape",["macro",9],8,16],",dyType:\"purchase-v1\",value:",["escape",["macro",90],8,16],",currency:",["escape",["macro",101],8,16],",cart:",["escape",["macro",180],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":251
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EDY.API(\"event\",{name:\"Remove from Cart\",properties:{dyType:\"remove-from-cart-v1\",value:",["escape",["macro",160],8,16],"*",["escape",["macro",167],8,16],",currency:",["escape",["macro",101],8,16],",productId:",["escape",["macro",161],8,16],",quantity:",["escape",["macro",167],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":252
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EDY.API(\"event\",{name:\"Keyword Search\",properties:{dyType:\"keyword-search-v1\",keywords:",["escape",["macro",79],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":253
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EDY.API(\"event\",{name:\"Sync cart\",properties:{dyType:\"sync-cart-v1\",currency:",["escape",["macro",101],8,16],",cart:",["escape",["macro",181],8,16],"}});\u003C\/script\u003E\n "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":254
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EDY.API(\"event\",{name:\"Signup\",properties:{dyType:\"signup-v1\",hashedEmail:",["escape",["macro",183],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":269
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"https:\/\/creativecdn.com\/tags?id=pr_xYbTOsZHLBaF03lu7Dri_home\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":270
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Ciframe src=\"https:\/\/creativecdn.com\/tags?id=pr_xYbTOsZHLBaF03lu7Dri_startorder\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":271
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/creativecdn.com\/tags?id=pr_xYbTOsZHLBaF03lu7Dri_basketadd_",["escape",["macro",112],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":272
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/creativecdn.com\/tags?id=pr_xYbTOsZHLBaF03lu7Dri_basketstatus_",["escape",["macro",125],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display:\nnone;\"\u003E\u003C\/iframe\u003E\n\u0026lt;"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":273
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/creativecdn.com\/tags?id=pr_xYbTOsZHLBaF03lu7Dri_orderstatus2_",["escape",["macro",92],12],"_",["escape",["macro",9],12],"_",["escape",["macro",114],12],"\u0026amp;cd=\ndefault\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":274
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/creativecdn.com\/tags?id=pr_xYbTOsZHLBaF03lu7Dri_offer_",["escape",["macro",56],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":275
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/creativecdn.com\/tags?id=pr_xYbTOsZHLBaF03lu7Dri_listing_",["escape",["macro",55],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":276
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",94,0]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"SearchKeyword\",{search_string:\"",["escape",["macro",79],7],"\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1672987762794537\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":280
    },{
      "function":"__opt",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-5ZQXH7P",
      "vtp_gaSettings":["macro",49],
      "tag_id":263
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"checkout\/confirmation"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"cart page"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"home page"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"product listing page"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productImpression"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productDetailView"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"checkoutOption"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"productClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"promotionClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"promotionImpression"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"removeFromCart"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"dp-l2-|dp-m2|dp-m1",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"banner-2 slug light|headline",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"department page"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"promoCode"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"filter"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"findStore"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"c-footer-menu__link"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"c-social-links"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.pageError"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"language-link"
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"hamburger--menu mobile--menu is-active"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"brdcrb-nav"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"leads"
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"checkout-link"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"[en|ar]\/checkout",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",78],
      "arg1":"Internal Site Search"
    },{
      "function":"_eq",
      "arg0":["macro",80],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"eventTracker"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"sort"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"storeSelect"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"menu__link menu--three__link|menu__link menu-two__link",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"menu__link menu--one__link"
    },{
      "function":"_eq",
      "arg0":["macro",78],
      "arg1":"Login \u0026 Register"
    },{
      "function":"_cn",
      "arg0":["macro",82],
      "arg1":"Login Success"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"hp-slug|hp-hero",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"home page"
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"mobile-btn show-menu"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"vert-nav-|left-nav-",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)13312748_6($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"purchaseSuccess"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"select2"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"checkout delivery page"
    },{
      "function":"_re",
      "arg0":["macro",94],
      "arg1":"^(undefined|null|0|false|NaN|)$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",78],
      "arg1":"cart error"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"product detail page"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)13312748_258($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"[en|ar]\/checkout$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",97],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)13312748_265($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",98],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)13312748_301($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)13312748_300($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",86],
      "arg1":"save-address"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"deliveryOption"
    },{
      "function":"_eq",
      "arg0":["macro",78],
      "arg1":"payment errors"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":"Click \u0026 Collect Order now"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":"Home Delivery Free delivery"
    },{
      "function":"_re",
      "arg0":["macro",99],
      "arg1":"affiliate|partnerize",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"factory.alshaya.com"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"product detail page"
    },{
      "function":"_eq",
      "arg0":["macro",82],
      "arg1":"Registration Success"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"product listing page"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"ladda-label"
    },{
      "function":"_eq",
      "arg0":["macro",176],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"cart page"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"delivery page"
    }],
  "rules":[
    [["if",0],["add",0,1,3,4,6,7,93,94,97,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87]],
    [["if",1,3],["unless",2],["add",2,5,8,13,47,48,91,98,102,103]],
    [["if",3,4],["add",9,121]],
    [["if",3,5],["add",10,118]],
    [["if",6,7],["add",11,45,96,124]],
    [["if",8],["add",12,18,45,96,107,123]],
    [["if",9],["add",14,45,90,96,99,109,120]],
    [["if",10],["add",15,45,96,101]],
    [["if",11],["add",16]],
    [["if",12],["add",17]],
    [["if",7],["add",19]],
    [["if",13],["add",20]],
    [["if",14],["add",21]],
    [["if",15],["add",22,100,114]],
    [["if",16,17],["add",23]],
    [["if",17,18,19],["add",23]],
    [["if",20],["add",24,101,112]],
    [["if",21],["add",25]],
    [["if",22],["add",26]],
    [["if",17,23],["add",27],["block",39]],
    [["if",17,24],["add",28]],
    [["if",25],["add",29]],
    [["if",17,26],["add",30]],
    [["if",17,27],["add",31]],
    [["if",17,28],["add",32]],
    [["if",29],["add",33]],
    [["if",17,30,31],["add",34]],
    [["if",32,33,34],["add",35,45,52,96,105,115,124,125]],
    [["if",35],["add",36]],
    [["if",36],["add",37]],
    [["if",17,37],["add",38]],
    [["if",17,38],["add",39]],
    [["if",34,39,40],["add",40,110]],
    [["if",17,41,42],["add",41]],
    [["if",17,42,43],["add",42]],
    [["if",17,44],["add",43]],
    [["if",45,46],["add",44]],
    [["if",47],["add",45,46,96,113,122]],
    [["if",17,48,49],["add",49]],
    [["if",3],["unless",50],["add",50,98]],
    [["if",34,51,52],["add",51]],
    [["if",45,52,53],["add",53]],
    [["if",45,54,56],["unless",55],["add",54]],
    [["if",45,54,57,58],["add",55]],
    [["if",45,54,59],["add",56]],
    [["if",17,54,60],["add",57]],
    [["if",61],["add",58]],
    [["if",34,62],["add",59]],
    [["if",17,52,63],["add",60]],
    [["if",17,52,64],["add",60]],
    [["if",47,65],["add",88]],
    [["if",3,66],["add",89]],
    [["if",3,68],["add",92]],
    [["if",0,68],["add",95]],
    [["if",34,69],["add",96,104,117]],
    [["if",7,70],["add",106]],
    [["if",17,71],["unless",72],["add",108,111]],
    [["if",10,73],["add",116]],
    [["if",10,74],["add",119]],
    [["if",0,67],["block",89,94]]]
},
"runtime":[[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]]]
,"permissions":{"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__crto"]}

};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}fa=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=fa,ma=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ri=b.prototype},na=this||self,ra=function(a){if(a&&a!=na)return pa(a.document);null===qa&&(qa=pa(na.document));return qa},sa=/^[\w+/_-]+[=]{0,2}$/,qa=null,pa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&sa.test(c))return c}return""},va=function(a){return a};var ya=function(a,b){this.g=a;this.o=b};var za=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Aa=function(){this.D={};this.o=!1;this.J={}};Aa.prototype.get=function(a){return this.D["dust."+a]};Aa.prototype.set=function(a,b){this.o||(a="dust."+a,this.J.hasOwnProperty(a)||(this.D[a]=b))};Aa.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};
var Ba=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b},Ca=function(a,b){b="dust."+b;a.o||a.J.hasOwnProperty(b)||delete a.D[b]};var Da=function(a){this.o=new Aa;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(za(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};ba=Da.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof Da?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"===a){if(!za(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else za(a)?this.g[Number(a)]=b:this.o.set(a,b)};ba.get=function(a){return"length"===a?this.length():za(a)?this.g[Number(a)]:this.o.get(a)};ba.length=function(){return this.g.length};ba.Rb=function(){for(var a=Ba(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new Da(a)};var Fa=function(a,b){za(b)?delete a.g[Number(b)]:Ca(a.o,b)};ba=Da.prototype;ba.pop=function(){return this.g.pop()};
ba.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.g.shift()};ba.splice=function(a,b,c){return new Da(this.g.splice.apply(this.g,arguments))};ba.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};ba.has=function(a){return za(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Ha=function(){function a(f,g){if(b[f]){if(b[f].Ec+g>b[f].max)throw Error("Quota exceeded");b[f].Ec+=g}}var b={},c=void 0,d=void 0,e={Kh:function(f){c=f},xf:function(){c&&a(c,1)},Mh:function(f){d=f},Sa:function(f){d&&a(d,f)},Xh:function(f,g){b[f]=b[f]||{Ec:0};b[f].max=g},qh:function(f){return b[f]&&b[f].Ec||0},reset:function(){b={}},dh:a};e.onFnConsume=e.Kh;e.consumeFn=e.xf;e.onStorageConsume=e.Mh;e.consumeStorage=e.Sa;e.setMax=e.Xh;e.getConsumed=e.qh;e.reset=e.reset;e.consume=e.dh;return e};var Ia=function(a,b){this.s=a;this.N=function(c,d,e){return c.apply(d,e)};this.D=b;this.o=new Aa;this.g=this.J=void 0};Ia.prototype.add=function(a,b){Ja(this,a,b,!1)};var Ja=function(a,b,c,d){if(!a.o.o)if(a.s.Sa(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.J["dust."+b]=!0}else a.o.set(b,c)};
Ia.prototype.set=function(a,b){this.o.o||(!this.o.has(a)&&this.D&&this.D.has(a)?this.D.set(a,b):(this.s.Sa(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Ia.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.D?this.D.get(a):void 0};Ia.prototype.has=function(a){return!!this.o.has(a)||!(!this.D||!this.D.has(a))};var Ka=function(a){var b=new Ia(a.s,a);a.J&&(b.J=a.J);b.N=a.N;b.g=a.g;return b};var Ma={},Na=function(a,b){Ma[a]=Ma[a]||[];Ma[a][b]=!0},Oa=function(a){for(var b=[],c=Ma[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Qa=function(){},Ra=function(a){return"function"==typeof a},k=function(a){return"string"==typeof a},Sa=function(a){return"number"==typeof a&&!isNaN(a)},Ta=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Na("TAGGING",4):Na("TAGGING",5);return b},Ua=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Wa=function(a,b){if(a&&Ta(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Xa=function(a,b){if(!Sa(a)||!Sa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Za=function(a,b){for(var c=new Ya,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},$a=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ab=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},fb=
function(a){return Math.round(Number(a))||0},gb=function(a){return"false"==String(a).toLowerCase()?!1:!!a},hb=function(a){var b=[];if(Ta(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},ib=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},jb=function(){return(new Date).getTime()},Ya=function(){this.prefix="gtm.";this.values={}};Ya.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ya.prototype.get=function(a){return this.values[this.prefix+a]};
var lb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ob=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},pb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},qb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},sb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},ub=function(a,b){var c=n;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Ua(b,d))return}return d},vb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},wb=function(a){var b=[];$a(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var xb=function(a,b){Aa.call(this);this.N=a;this.oa=b};ma(xb,Aa);xb.prototype.toString=function(){return this.N};xb.prototype.Rb=function(){return new Da(Ba(this))};xb.prototype.g=function(a,b){a.s.xf();return this.oa.apply(new yb(this,a),Array.prototype.slice.call(arguments,1))};xb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var Ab=function(a,b){for(var c,d=0;d<b.length&&!(c=zb(a,b[d]),c instanceof ya);d++);return c},zb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof xb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.J;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},yb=function(a,b){this.o=a;this.g=b},z=function(a,b){var c=a.g;return Ta(b)?zb(c,b):b},F=function(a){return a.o.N};var Cb=function(){Aa.call(this)};ma(Cb,Aa);Cb.prototype.Rb=function(){return new Da(Ba(this))};var Fb={control:function(a,b){return new ya(a,z(this,b))},fn:function(a,b,c){var d=this.g,e=z(this,b);if(!(e instanceof Da))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.s.Sa(a.length+f.length);return new xb(a,function(){return function(g){var h=Ka(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=z(this,l[m]),l[m]instanceof ya)return l[m];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new Da(l));var r=Ab(h,f);if(r instanceof ya)return"return"===r.g?r.o:r}}())},list:function(a){var b=this.g.s;b.Sa(arguments.length);for(var c=new Da,d=0;d<arguments.length;d++){var e=z(this,arguments[d]);"string"===typeof e&&b.Sa(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.s,c=new Cb,d=0;d<arguments.length-1;d+=2){var e=z(this,arguments[d])+"",f=z(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Sa(g);c.set(e,f)}return c},undefined:function(){}};var Gb=function(){this.s=Ha();this.g=new Ia(this.s)},Hb=function(a,b,c){var d=new xb(b,c);d.o=!0;a.g.set(b,d)};Gb.prototype.Ic=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};Gb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=zb(this.g,arguments[c]);return b};Gb.prototype.D=function(a,b){var c=Ka(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=zb(c,arguments[e]);return d};var Ib=function(a){if(a instanceof Ib)return a;this.va=a};Ib.prototype.toString=function(){return String(this.va)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Jb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Kb=function(a){if(null==a)return String(a);var b=Jb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Lb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Mb=function(a){if(!a||"object"!=Kb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Lb(a,"constructor")&&!Lb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Lb(a,b)},G=function(a,b){var c=b||("array"==Kb(a)?[]:{}),d;for(d in a)if(Lb(a,d)){var e=a[d];"array"==Kb(e)?("array"!=Kb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Mb(e)?(Mb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Pb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Ua(d,h);if(-1<l)return e[l];if(h instanceof Da){var m=[];d.push(h);e.push(m);for(var p=h.Rb(),q=0;q<p.length();q++)m[p.get(q)]=g(h.get(p.get(q)));return m}if(h instanceof Cb){var r={};d.push(h);e.push(r);f(h,r);return r}if(h instanceof xb){var u=function(){for(var t=Array.prototype.slice.call(arguments,0),v=0;v<t.length;v++)t[v]=Nb(t[v],b,!!c);var x=b?b.s:Ha(),y=new Ia(x);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(t)))};d.push(h);e.push(u);f(h,u);return u}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Nb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Ua(d,
h);if(-1<l)return e[l];if(Ta(h)||ab(h)){var m=new Da([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Mb(h)){var q=new Cb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var r=new xb("",function(t){for(var v=Array.prototype.slice.call(arguments,0),x=0;x<v.length;x++)v[x]=Pb(z(this,v[x]),b,!!c);return g((0,this.g.N)(h,h,v))});d.push(h);e.push(r);f(h,r);return r}var u=typeof h;if(null===h||"string"===u||"number"===u||"boolean"===u)return h;};return g(a)};var Qb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Rb=function(a){if(void 0===a||Ta(a)||Mb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Sb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof Da)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new Da(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new Da(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new Da(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Qb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Fa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new Da(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Qb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Fa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Ub="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Vb=new ya("break"),Wb=new ya("continue"),Xb=function(a,b){return z(this,a)+z(this,b)},Yb=function(a,b){return z(this,a)&&z(this,b)},Zb=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);if(!(c instanceof Da))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Ua(Ub,b)){var d=Qb(c);d=Pb(c);return Nb(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof Da){if(a.has(b)){var e=a.get(b);if(e instanceof
xb){var f=Qb(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ua(Sb.supportedMethods,b)){var g=Qb(c);g.unshift(this.g);return Sb[b].apply(a,g)}}if(a instanceof xb||a instanceof Cb){if(a.has(b)){var h=a.get(b);if(h instanceof xb){var l=Qb(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof xb?a.N:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Qb(c))}if(a instanceof
Ib&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},$b=function(a,b){a=z(this,a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=z(this,b);c.set(a,d);return d},ac=function(a){var b=Ka(this.g),c=Ab(b,Array.prototype.slice.apply(arguments));if(c instanceof ya)return c},bc=function(){return Vb},ec=function(a){for(var b=z(this,a),c=0;c<b.length;c++){var d=
z(this,b[c]);if(d instanceof ya)return d}},fc=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=z(this,arguments[c+1]);Ja(b,d,e,!0)}}},gc=function(){return Wb},hc=function(a,b,c){var d=new Da;b=z(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,z(this,f))},ic=function(a,b){return z(this,a)/z(this,b)},jc=function(a,b){a=z(this,a);b=z(this,b);var c=
a instanceof Ib,d=b instanceof Ib;return c||d?c&&d?a.va==b.va:!1:a==b},kc=function(a){for(var b,c=0;c<arguments.length;c++)b=z(this,arguments[c]);return b};function lc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=Ab(f,d);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}}}
function mc(a,b,c){if("string"===typeof b)return lc(a,function(){return b.length},function(f){return f},c);if(b instanceof Cb||b instanceof Da||b instanceof xb){var d=b.Rb(),e=d.length();return lc(a,function(){return e},function(f){return d.get(f)},c)}}
var nc=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);var d=this.g;return mc(function(e){d.set(a,e);return d},b,c)},oc=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);var d=this.g;return mc(function(e){var f=Ka(d);Ja(f,a,e,!0);return f},b,c)},pc=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);var d=this.g;return mc(function(e){var f=Ka(d);f.add(a,e);return f},b,c)},rc=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);var d=this.g;return qc(function(e){d.set(a,e);return d},b,c)},sc=
function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);var d=this.g;return qc(function(e){var f=Ka(d);Ja(f,a,e,!0);return f},b,c)},tc=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);var d=this.g;return qc(function(e){var f=Ka(d);f.add(a,e);return f},b,c)};
function qc(a,b,c){if("string"===typeof b)return lc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof Da)return lc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var uc=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var u=f.get(r);q.add(u,p.get(u))}}var f=z(this,a);if(!(f instanceof Da))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=z(this,d);var h=Ka(g);for(e(g,h);zb(h,b);){var l=Ab(h,d);if(l instanceof ya){if("break"===l.g)break;if("return"===l.g)return l}var m=Ka(g);e(h,m);zb(m,c);h=m}},vc=function(a){a=z(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},wc=function(a,b){var c;a=z(this,a);b=z(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof Cb||a instanceof Da||a instanceof xb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:za(b)&&(c=a[b]);else if(a instanceof Ib)return;return c},zc=function(a,b){return z(this,a)>z(this,
b)},Ac=function(a,b){return z(this,a)>=z(this,b)},Bc=function(a,b){a=z(this,a);b=z(this,b);a instanceof Ib&&(a=a.va);b instanceof Ib&&(b=b.va);return a===b},Cc=function(a,b){return!Bc.call(this,a,b)},Dc=function(a,b,c){var d=[];z(this,a)?d=z(this,b):c&&(d=z(this,c));var e=Ab(this.g,d);if(e instanceof ya)return e},Ec=function(a,b){return z(this,a)<z(this,b)},Fc=function(a,b){return z(this,a)<=z(this,b)},Gc=function(a,b){return z(this,a)%z(this,b)},Hc=function(a,b){return z(this,a)*z(this,b)},Ic=function(a){return-z(this,
a)},Mc=function(a){return!z(this,a)},Nc=function(a,b){return!jc.call(this,a,b)},Oc=function(){return null},Pc=function(a,b){return z(this,a)||z(this,b)},Qc=function(a,b){var c=z(this,a);z(this,b);return c},Rc=function(a){return z(this,a)},Sc=function(a){return Array.prototype.slice.apply(arguments)},Tc=function(a){return new ya("return",z(this,a))},Uc=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
xb||a instanceof Da||a instanceof Cb)&&a.set(b,c);return c},Vc=function(a,b){return z(this,a)-z(this,b)},Wc=function(a,b,c){a=z(this,a);var d=z(this,b),e=z(this,c);if(!Ta(d)||!Ta(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===z(this,d[h]))if(f=z(this,e[h]),f instanceof ya){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=z(this,e[e.length-1]),f instanceof ya&&("return"===f.g||"continue"===
f.g)))return f},Xc=function(a,b,c){return z(this,a)?z(this,b):z(this,c)},Yc=function(a){a=z(this,a);return a instanceof xb?"function":typeof a},Zc=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},$c=function(a,b,c,d){var e=z(this,d);if(z(this,c)){var f=Ab(this.g,e);if(f instanceof ya){if("break"===f.g)return;if("return"===f.g)return f}}for(;z(this,a);){var g=Ab(this.g,e);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}z(this,
b)}},ad=function(a){return~Number(z(this,a))},bd=function(a,b){return Number(z(this,a))<<Number(z(this,b))},cd=function(a,b){return Number(z(this,a))>>Number(z(this,b))},dd=function(a,b){return Number(z(this,a))>>>Number(z(this,b))},ed=function(a,b){return Number(z(this,a))&Number(z(this,b))},fd=function(a,b){return Number(z(this,a))^Number(z(this,b))},gd=function(a,b){return Number(z(this,a))|Number(z(this,b))};var id=function(){this.g=new Gb;hd(this)};id.prototype.Ic=function(a){return jd(this.g.o(a))};
var od=function(a,b){return jd(nd.g.D(a,b))},hd=function(a){var b=function(d,e){var f=a.g,g=String(e);Fb.hasOwnProperty(d)&&Hb(f,g||d,Fb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){Hb(a.g,String(d),e)};c(0,Xb);c(1,Yb);c(2,Zb);c(3,$b);c(53,ac);c(4,bc);c(5,ec);c(52,fc);c(6,gc);c(9,ec);c(50,hc);c(10,ic);c(12,jc);c(13,kc);c(47,nc);c(54,oc);c(55,pc);c(63,uc);c(64,rc);c(65,sc);c(66,tc);c(15,vc);c(16,wc);c(17,wc);c(18,zc);c(19,Ac);c(20,Bc);c(21,Cc);c(22,Dc);
c(23,Ec);c(24,Fc);c(25,Gc);c(26,Hc);c(27,Ic);c(28,Mc);c(29,Nc);c(45,Oc);c(30,Pc);c(32,Qc);c(33,Qc);c(34,Rc);c(35,Rc);c(46,Sc);c(36,Tc);c(43,Uc);c(37,Vc);c(38,Wc);c(39,Xc);c(40,Yc);c(41,Zc);c(42,$c);c(58,ad);c(57,bd);c(60,cd);c(61,dd);c(56,ed);c(62,fd);c(59,gd)},qd=function(){var a=nd,b=pd();Hb(a.g,"require",b)},rd=function(a,b){a.g.g.N=b};
function jd(a){if(a instanceof ya||a instanceof xb||a instanceof Da||a instanceof Cb||a instanceof Ib||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var sd=function(){var a=function(b){return{toString:function(){return b}}};return{Xf:a("consent"),Zc:a("consent_always_fire"),qe:a("convert_case_to"),se:a("convert_false_to"),te:a("convert_null_to"),ue:a("convert_true_to"),ve:a("convert_undefined_to"),di:a("debug_mode_metadata"),Ra:a("function"),Kg:a("instance_name"),Mg:a("live_only"),Ng:a("malware_disabled"),Og:a("metadata"),gi:a("original_activity_id"),hi:a("original_vendor_template_id"),Qg:a("once_per_event"),jf:a("once_per_load"),pf:a("setup_tags"),
qf:a("tag_id"),rf:a("teardown_tags")}}();
var td=[],ud={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},vd=function(a){return ud[a]},wd=/[\x00\x22\x26\x27\x3c\x3e]/g;td[3]=function(a){return String(a).replace(wd,vd)};var Ad=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Bd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Cd=function(a){return Bd[a]};td[7]=function(a){return String(a).replace(Ad,Cd)};
td[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ad,Cd)+"'"}};var Id=/['()]/g,Jd=function(a){return"%"+a.charCodeAt(0).toString(16)};td[12]=function(a){var b=
encodeURIComponent(String(a));Id.lastIndex=0;return Id.test(b)?b.replace(Id,Jd):b};var Kd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ld={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Md=function(a){return Ld[a]};td[16]=function(a){return a};var Od;
var Pd=[],Qd=[],Rd=[],Sd=[],Td=[],Ud={},Vd,Wd,Xd,Yd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Ud[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.uf&&b.uf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===sd.Zc.toString()&&a[f]){}return void 0!==d?d(e):Od(c,e,b)},ae=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$d(a[e],b,c));return d},$d=function(a,b,c){if(Ta(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($d(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Pd[f];if(!g||b.Rd(g))return;c[f]=!0;try{var h=ae(g,b,c);h.vtp_gtmEventId=b.id;d=Zd(h,b);Xd&&(d=Xd.eh(d,h))}catch(y){b.If&&
b.If(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[$d(a[l],b,c)]=$d(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var q=$d(a[p],b,c);Wd&&(m=m||q===Wd.wc);d.push(q)}return Wd&&m?Wd.hh(d):d.join("");case "escape":d=$d(a[1],b,c);if(Wd&&Ta(a[1])&&"macro"===a[1][0]&&Wd.yh(a))return Wd.Ph(d);d=String(d);for(var r=2;r<a.length;r++)td[a[r]]&&(d=td[a[r]](d));return d;case "tag":var u=a[1];if(!Sd[u])throw Error("Unable to resolve tag reference "+
u+".");return d={Bf:a[2],index:u};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=be(t,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},be=function(a,b,c){try{return Vd(ae(a,b,c))}catch(d){JSON.stringify(a)}return 2};var ce=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};ma(ce,Error);function de(a,b){if(Ta(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)de(a[c],b[c])}};var ee=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};ma(ee,Error);var ge=function(){return function(a,b){a instanceof ee||(a=new ee(a,fe));b&&a.g.push(b);throw a;}};function fe(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Sa(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var he=null,ke=function(a){function b(q){for(var r=0;r<q.length;r++)d[q[r]]=!0}var c=[],d=[];he=ie(a);for(var e=0;e<Qd.length;e++){var f=Qd[e],g=je(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],p=0;p<Sd.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},je=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=he(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=he(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},ie=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=be(Rd[c],a));return b[c]}};var le={eh:function(a,b){b[sd.qe]&&"string"===typeof a&&(a=1==b[sd.qe]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(sd.te)&&null===a&&(a=b[sd.te]);b.hasOwnProperty(sd.ve)&&void 0===a&&(a=b[sd.ve]);b.hasOwnProperty(sd.ue)&&!0===a&&(a=b[sd.ue]);b.hasOwnProperty(sd.se)&&!1===a&&(a=b[sd.se]);return a}};var me=function(){this.g={}};function ne(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new ce(c,d,g);}}function oe(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));ne(e,b,d,g);ne(f,b,d,g)}}}};var se=function(a){var b=pe.F,c=this;this.o=new me;this.g={};var d={},e=oe(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});$a(a,function(f,g){var h={};$a(g,function(l,m){var p=qe(l,m);h[l]=p.assert;d[l]||(d[l]=p.O)});c.g[f]=function(l,m){var p=h[l];if(!p)throw re(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},ue=function(a){return te.g[a]||
function(){}};function qe(a,b){var c=Yd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=re;try{return Zd(c)}catch(d){return{assert:function(e){throw new ce(e,{},"Permission "+e+" is unknown.");},O:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function re(a,b,c){return new ce(a,b,c)};var ve=!1;var we={};we.ci=gb('');we.kh=gb('');var xe=ve,ye=we.kh,ze=we.ci;
var Oe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Pe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Oe(b,"/*")&&(b=b.slice(0,-2));Oe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Qe=/^[a-z0-9-]+$/i,Re=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Te=function(a,b){var c;if(!(c=!Se(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Qe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Re.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),q=p.slice(0,p.indexOf("/")),r;var u=l.hostname,t=q;if(0!==t.indexOf("*."))r=u.toLowerCase()===t.toLowerCase();else{t=t.slice(2);var v=u.toLowerCase().indexOf(t.toLowerCase());r=-1===v?!1:u.length===t.length?
!0:u.length!==t.length+v?!1:"."===u[v-1]}if(r){var x=p.slice(p.indexOf("/"));h=Pe(l.pathname+l.search,x)?!0:!1}else h=!1;if(h)return!0}return!1},Se=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var Ue=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Ve={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ue.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof xb?p="Fn":l instanceof Da?p="List":l instanceof Cb?p="DustMap":
l instanceof Ib&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Ve[h]||h)+".");}}};function We(a){return""+a}
function Xe(a,b){var c=[];return c};var Ye=function(a,b){var c=new xb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=z(this,d[e]);return b.apply(this,d)});c.o=!0;return c},Ze=function(a,b){var c=new Cb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ra(e)?c.set(d,Ye(a+"_"+d,e)):(Sa(e)||k(e)||"boolean"==typeof e)&&c.set(d,e)}c.o=!0;return c};var $e=function(a,b){H(F(this),["apiName:!string","message:?string"],arguments);var c={},d=new Cb;return d=Ze("AssertApiSubject",c)};var af=function(a,b){H(F(this),["actual:?*","message:?string"],arguments);var c={},d=new Cb;
return d=Ze("AssertThatSubject",c)};function bf(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Pb(arguments[d],c));return Nb(a.apply(null,b))}}var df=function(){for(var a=Math,b=cf,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=bf(a[e].bind(a)))}return c};var ef=function(a){var b;return b};var ff=function(a){var b;return b};var gf=function(a){H(F(this),["uri:!string"],arguments);return encodeURI(a)};var hf=function(a){H(F(this),["uri:!string"],arguments);return encodeURIComponent(a)};var jf=function(a){H(F(this),["message:?string"],arguments);};var kf=function(a,b){H(F(this),["min:!number","max:!number"],arguments);return Xa(a,b)};var lf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.$g.apply(null,Array.prototype.slice.call(arguments,1))};var mf=function(){lf(this,"read_container_data");var a=new Cb;a.set("containerId",'GTM-NSGRLVC');a.set("version",'66');a.set("environmentName",'');a.set("debugMode",xe);a.set("previewMode",ze);a.set("environmentMode",ye);a.o=!0;return a};var nf=function(){return(new Date).getTime()};var of=function(a){if(null===a)return"null";if(a instanceof Da)return"array";if(a instanceof xb)return"function";if(a instanceof Ib){a=a.va;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var pf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(xe||ze)&&a.call(this,e.message)}}}return{parse:b(function(c){return Nb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Pb(c))})}};var qf=function(a){return fb(Pb(a,this.g))};var rf=function(a){return Number(Pb(a,this.g))};var sf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var tf=function(a,b,c){var d=null,e=!1;return e?d:null};var cf="floor ceil round max min abs pow sqrt".split(" ");var uf=function(){var a={};return{rh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Yh:function(b,c){a[b]=c},reset:function(){a={}}}},vf=function(a,b){H(F(this),["apiName:!string","mock:?*"],arguments);};var wf=function(){this.g={};this.o={};};wf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
wf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ra(b)?Ye(a,b):Ze(a,b)};
var xf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Ra(c)?Ye(b,c):Ze(b,c)};function yf(){var a={};return a};var I={Eb:"_ee",Ad:"_syn",ji:"_uei",td:"_eu",ii:"_pci",gd:"event_callback",mc:"event_timeout",aa:"gtag.config",Ca:"gtag.get",qa:"purchase",$a:"refund",Oa:"begin_checkout",Ya:"add_to_cart",Za:"remove_from_cart",eg:"view_cart",ze:"add_to_wishlist",Ba:"view_item",ye:"view_promotion",xe:"select_promotion",bd:"select_item",ic:"view_item_list",we:"add_payment_info",dg:"add_shipping_info",Ea:"value_key",Da:"value_callback",ja:"allow_ad_personalization_signals",pd:"restricted_data_processing",ub:"allow_google_signals",
ka:"cookie_expires",xb:"cookie_update",Bb:"session_duration",sc:"session_engaged_time",sa:"user_properties",Ga:"transport_url",P:"ads_data_redaction",Xe:"user_data",nc:"first_party_collection",C:"ad_storage",K:"analytics_storage",$c:"region",pe:"wait_for_update"};I.$e=[I.qa,I.$a,I.Oa,I.Ya,I.Za,I.eg,I.ze,I.Ba,I.ye,I.xe,I.ic,I.bd,I.we,I.dg];I.Ze=[I.ja,I.ub,I.xb];I.af=[I.ka,I.mc,I.Bb,I.sc];var zf=function(a){Na("GTM",a)};var Af=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Bf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Cf,Df=function(){if(void 0===Cf){var a=null,b=na.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:va,createScript:va,createScriptURL:va})}catch(c){na.console&&na.console.error(c.message)}Cf=a}else Cf=a}return Cf};var Ff=function(a,b){this.g=b===Ef?a:""};Ff.prototype.toString=function(){return this.g+""};var Ef={};var Gf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Hf;a:{var If=na.navigator;if(If){var Jf=If.userAgent;if(Jf){Hf=Jf;break a}}Hf=""}var Kf=function(a){return-1!=Hf.indexOf(a)};var Mf=function(a,b,c){this.g=c===Lf?a:""};Mf.prototype.toString=function(){return this.g.toString()};var Nf=function(a){return a instanceof Mf&&a.constructor===Mf?a.g:"type_error:SafeHtml"},Lf={},Of=new Mf(na.trustedTypes&&na.trustedTypes.emptyHTML||"",0,Lf);var Pf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Nf(Of);return!c.parentElement}),Qf=function(a,b){if(Pf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Nf(b)};var Rf=function(a){var b=Df(),c=b?b.createHTML(a):a;return new Mf(c,null,Lf)};var n=window,K=document,Sf=navigator,Tf=K.currentScript&&K.currentScript.src,Uf=function(a,b){var c=n[a];n[a]=void 0===c?b:c;return n[a]},Vf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Wf=function(a,b,c){var d=K.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Df(),g=f?f.createScriptURL(a):a;e=new Ff(g,Ef);d.src=e instanceof Ff&&e.constructor===Ff?e.g:"type_error:TrustedResourceUrl";
var h=ra(d.ownerDocument&&d.ownerDocument.defaultView);h&&d.setAttribute("nonce",h);Vf(d,b);c&&(d.onerror=c);var l=ra();l&&d.setAttribute("nonce",l);var m=K.getElementsByTagName("script")[0]||K.body||K.head;m.parentNode.insertBefore(d,m);return d},Xf=function(){if(Tf){var a=Tf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Yf=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";
var d=K.body&&K.body.lastChild||K.body||K.head;d.parentNode.insertBefore(c,d);Vf(c,b);void 0!==a&&(c.src=a);return c},Zf=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},$f=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},ag=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},M=function(a){n.setTimeout(a,
0)},bg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},cg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},dg=function(a){var b=K.createElement("div"),c=Rf("A<div>"+a+"</div>");Qf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},eg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=
a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},fg=function(a){Sf.sendBeacon&&Sf.sendBeacon(a)||Zf(a)},gg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var hg={},ig=function(a){return void 0==hg[a]?!1:hg[a]};var jg=[];function kg(){var a=Uf("google_tag_data",{});a.ics||(a.ics={entries:{},set:og,update:pg,addListener:qg,notifyListeners:rg,active:!1,usedDefault:!1});return a.ics}
function og(a,b,c,d,e,f){var g=kg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?m!==e:!p&&!m)){var q=!!(f&&0<f&&void 0===l.update),r={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=r;q&&n.setTimeout(function(){h[a]===r&&r.quiet&&(r.quiet=!1,sg(a),rg(),Na("TAGGING",2))},f)}}}
function pg(a,b){var c=kg();c.active=!0;if(void 0!=b){var d=tg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=tg(a);f.quiet?(f.quiet=!1,sg(a)):g!==d&&sg(a)}}function qg(a,b){jg.push({wf:a,mh:b})}function sg(a){for(var b=0;b<jg.length;++b){var c=jg[b];Ta(c.wf)&&-1!==c.wf.indexOf(a)&&(c.Kf=!0)}}function rg(a){for(var b=0;b<jg.length;++b){var c=jg[b];if(c.Kf){c.Kf=!1;try{c.mh({vf:a})}catch(d){}}}}
var tg=function(a){var b=kg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},ug=function(a){return(kg().entries[a]||{}).initial},vg=function(a){return!(kg().entries[a]||{}).quiet},wg=function(){return ig("gtag_cs_api")?kg().active:!1},xg=function(){return kg().usedDefault},yg=function(a,b){kg().addListener(a,b)},zg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!vg(b[e]))return!0;return!1}if(c()){var d=!1;yg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},
Ag=function(a,b){if(!1===tg(b)){var c=!1;yg([b],function(d){!c&&tg(b)&&(a(d),c=!0)})}};function Bg(a){for(var b=[],c=0;c<Cg.length;c++){var d=a(Cg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Cg=[I.C,I.K],Dg=function(a){var b=a[I.$c];b&&zf(40);var c=a[I.pe];c&&zf(41);for(var d=Ta(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==I.$c&&f!==I.pe)if(-1<Ua(Cg,f)){var g=f,h=a[f],l=d[e];kg().set(g,h,l,"EG","EG-C",c)}else{}},Eg=function(a,
b){for(var c in a)if(a.hasOwnProperty(c))if(-1<Ua(Cg,c)){var d=c,e=a[c];kg().update(d,e)}else{}kg().notifyListeners(b)},Fg=function(a){var b=tg(a);return void 0!=b?b:!0},Gg=function(){return"G1"+Bg(tg)},Hg=function(a,b){yg(a,b)},Ig=function(a,b){zg(a,b)};var Kg=function(a){return Jg?K.querySelectorAll(a):null},Lg=function(a,b){if(!Jg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Mg=!1;if(K.querySelectorAll)try{var Ng=K.querySelectorAll(":root");Ng&&1==Ng.length&&Ng[0]==K.documentElement&&(Mg=!0)}catch(a){}var Jg=Mg;var Og=function(a){if(K.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!n.getComputedStyle)return!0;var c=n.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=n.getComputedStyle(d,
null))}return!1};
var Pg=function(){var a=K.body,b=K.documentElement||a&&a.parentElement,c,d;if(K.compatMode&&"BackCompat"!==K.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};zf(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Qg=function(a){var b=Pg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Rg=[],Sg=!(!n.IntersectionObserver||!n.IntersectionObserverEntry),Tg=function(a,b,c){for(var d=new n.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Rg.length;f++)if(!Rg[f])return Rg[f]=d,f;return Rg.push(d)-1},Ug=function(a,b,c){function d(h,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},p={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:h,time:jb()};M(function(){return a(p)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=Qg(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},Vg=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Sg){var e=!1;M(function(){e||
Ug(a,b,c)()});return Tg(function(f){e=!0;for(var g={pb:0};g.pb<f.length;g={pb:g.pb},g.pb++)M(function(h){return function(){return a(f[h.pb])}}(g))},b,c)}return n.setInterval(Ug(a,b,c),1E3)},Wg=function(a){Sg?0<=a&&a<Rg.length&&Rg[a]&&(Rg[a].disconnect(),Rg[a]=void 0):n.clearInterval(a)};var Xg=/:[0-9]+$/,Yg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},ah=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Zg(a.protocol)||Zg(n.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
n.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||n.location.hostname).replace(Xg,"").toLowerCase());return $g(a,b,c,d,e)},$g=function(a,b,c,d,e){var f,g=Zg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=bh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Xg,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Na("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ua(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Yg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Zg=function(a){return a?a.replace(":",
"").toLowerCase():""},bh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},ch=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Na("TAGGING",1),c="/"+c);var d=b.hostname.replace(Xg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},dh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gbraid gclaw gcldc gclgp gclha gclgf gclgb _gl".split(" "),e=ch(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var eh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),fh=new RegExp(/support|noreply/i),gh=["SCRIPT","IMG","SVG","PATH","BR"],hh=["BR"];function ih(a){var b;if(a===K.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=ih(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var lh=function(){var a=!0;var b=a,c;var d=[],e=K.body;if(e){for(var f=e.querySelectorAll("*"),g=0;g<f.length&&1E4>g;g++){var h=f[g];if(!(0<=gh.indexOf(h.tagName.toUpperCase()))){for(var l=!1,m=0;m<h.childElementCount&&1E4>m;m++)if(!(0<=hh.indexOf(h.children[m].tagName.toUpperCase()))){l=!0;break}l||d.push(h)}}c={elements:d,status:1E4<f.length?"2":"1"}}else c=
{elements:d,status:"4"};for(var p=c,q=p.elements,r=[],u=0;u<q.length;u++){var t=q[u],v=t.textContent;t.value&&(v=t.value);if(v){var x=v.match(eh);if(x){var y=x[0],w;if(n.location){var A=$g(n.location,"host",!0);w=0<=y.toLowerCase().indexOf(A)}else w=!1;w||r.push({element:t,Yc:y})}}}var B;for(var C=[],D=10<r.length?"3":p.status,E=0;E<r.length&&
10>E;E++){var J=r[E].element,P=r[E].Yc,Q=!1;C.push({Yc:P,querySelector:ih(J),tagName:J.tagName,isVisible:!Og(J),type:1,Nc:!!Q})}return{elements:C,status:D}};var pe={},N=null,zh=Math.random();pe.F="GTM-NSGRLVC";pe.Ac="2o0";pe.fi="";pe.Yf="ChEIgIT9gQYQhreEyJPDl9bLARIkAGMRGj9nS4HvT9NYptjYkxFSCczo25I5U/ANRZL3/r5IGzbnGgKNKA\x3d\x3d";var Ah={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Bh={__paused:!0,__tg:!0},Ch;for(Ch in Ah)Ah.hasOwnProperty(Ch)&&(Bh[Ch]=!0);var Dh="www.googletagmanager.com/gtm.js";
var Eh=Dh,Fh=gb(""),Gh=null,Hh=null,Ih="//www.googletagmanager.com/a?id="+pe.F+"&cv=66",Jh={},Kh={},Lh=function(){var a=N.sequence||1;N.sequence=a+1;return a};var Mh={},Nh=new Ya,Oh={},Ph={},Sh={name:"dataLayer",set:function(a,b){G(vb(a,b),Oh);Qh()},get:function(a){return Rh(a,2)},reset:function(){Nh=new Ya;Oh={};Qh()}},Rh=function(a,b){return 2!=b?Nh.get(a):Th(a)},Th=function(a,b){var c=a.split(".");b=b||[];for(var d=Oh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Ua(b,d))return}return d},Uh=function(a,b){Ph.hasOwnProperty(a)||(Nh.set(a,b),G(vb(a,b),Oh),Qh())},Vh=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=Rh(c,1);if(Ta(d)||Mb(d))d=G(d);Ph[c]=d}},Qh=function(a){$a(Ph,function(b,c){Nh.set(b,c);G(vb(b,void 0),Oh);G(vb(b,c),Oh);a&&delete Ph[b]})},Wh=function(a,b,c){Mh[a]=Mh[a]||{};var d=1!==c?Th(b):Nh.get(b);"array"===Kb(d)||"object"===Kb(d)?Mh[a][b]=G(d):Mh[a][b]=d},Xh=function(a,b){if(Mh[a])return Mh[a][b]},Yh=function(a,b){Mh[a]&&delete Mh[a][b]};var ai={},bi=function(a,b){if(n._gtmexpgrp&&n._gtmexpgrp.hasOwnProperty(a))return n._gtmexpgrp[a];void 0===ai[a]&&(ai[a]=Math.floor(Math.random()*b));return ai[a]};var ci=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function di(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var fi=function(a,b,c,d){return ei(d)?di(a,String(b||document.cookie),c):[]},ii=function(a,b,c,d,e){if(ei(e)){var f=gi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=hi(f,function(g){return g.Hc},b);if(1===f.length)return f[0].id;f=hi(f,function(g){return g.Xb},c);return f[0]?f[0].id:void 0}}};function ji(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=fi(b,f,!1,d).indexOf(c)}
var ni=function(a,b,c,d){function e(x,y,w){if(null==w)return delete h[y],x;h[y]=w;return x+"; "+y+"="+w}function f(x,y){if(null==y)return delete h[y],x;h[y]=!0;return x+"; "+y}if(!ei(c.za))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ki(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Ih);g=e(g,"samesite",
c.Th);c.Vh&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=li(),q=void 0,r=!1,u=0;u<p.length;++u){var t="none"!==p[u]?p[u]:void 0,v=e(g,"domain",t);v=f(v,c.flags);try{d&&d(a,h)}catch(x){q=x;continue}r=!0;if(!mi(t,c.path)&&ji(v,a,b,c.za))return 0}if(q&&!r)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return mi(m,c.path)?1:ji(g,a,b,c.za)?0:1},oi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return ni(a,b,c)};
function hi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function gi(a,b,c){for(var d=[],e=fi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Hc:1*l[0]||1,Xb:1*l[1]||1}))}}return d}
var ki=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},pi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,qi=/(^|\.)doubleclick\.net$/i,mi=function(a,b){return qi.test(document.location.hostname)||"/"===b&&pi.test(a)},li=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;qi.test(e)||pi.test(e)||a.push("none");
return a},ei=function(a){if(!ig("gtag_cs_api")||!a||!wg())return!0;if(!vg(a))return!1;var b=tg(a);return null==b?!0:!!b};var ri=function(){for(var a=Sf.userAgent+(K.cookie||"")+(K.referrer||""),b=a.length,c=n.history.length;0<c;)a+=c--^b++;return[Math.round(2147483647*Math.random())^ci(a)&2147483647,Math.round(jb()/1E3)].join(".")},ui=function(a,b,c,d,e){var f=si(b);return ii(a,f,ti(c),d,e)},vi=function(a,b,c,d){var e=""+si(c),f=ti(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},si=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ti=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&
(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function wi(a,b,c){var d,e=a.Wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||jb())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var xi=["1"],yi={},Bi=function(a){var b=zi(a.prefix),c=yi[b];c&&Ai(b,c,a)},Di=function(a){var b=zi(a.prefix);if(!yi[b]&&!Ci(b,a.path,a.domain)){var c=ri();if(0===Ai(b,c,a)){var d=Uf("google_tag_data",{});d._gcl_au?Na("GTM",57):d._gcl_au=c}Ci(b,a.path,a.domain)}};function Ai(a,b,c){var d=vi(b,"1",c.domain,c.path),e=wi(c);e.za="ad_storage";return oi(a,d,e)}function Ci(a,b,c){var d=ui(a,b,c,xi,"ad_storage");d&&(yi[a]=d);return d}function zi(a){return(a||"_gcl")+"_au"};function Ei(){for(var a=Fi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Gi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Fi,Hi;
function Ii(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Hi[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Fi=Fi||Gi();Hi=Hi||Ei();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Ji;var Ni=function(){var a=Ki,b=Li,c=Mi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){$f(K,"mousedown",d);$f(K,"keyup",d);$f(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Oi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Mi().decorators.push(f)},Pi=function(a,b,c){for(var d=Mi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==K.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||p&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&pb(e,g.callback())}}return e},Mi=function(){var a=Uf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Qi=/(.*?)\*(.*?)\*(.*)/,Ri=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Si=/^(?:www\.|m\.|amp\.)+/,Ti=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ui(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var $i=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Fi=Fi||Gi();Hi=Hi||Ei();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,q=m+2<h.length,r=h.charCodeAt(m),u=p?h.charCodeAt(m+1):0,t=q?h.charCodeAt(m+2):0,v=r>>2,x=(r&3)<<4|u>>4,y=(u&15)<<2|t>>6,w=t&63;q||(w=64,p||(y=64));l.push(Fi[v],Fi[x],Fi[y],Fi[w])}g=l.join("");f.call(e,g)}}var A=b.join("*");return["1",Zi(A),
A].join("*")},Zi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ji)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Ji=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ji[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},bj=function(){return function(a){var b=ch(n.location.href),
c=b.search.replace("?",""),d=Yg(c,"_gl",!1,!0)||"";a.query=aj(d)||{};var e=ah(b,"fragment").match(Ui("_gl"));a.fragment=aj(e&&e[3]||"")||{}}},cj=function(a){var b=bj(),c=Mi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(pb(d,e.query),a&&pb(d,e.fragment));return d},aj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Qi.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===Zi(h,p)){l=!0;break a}l=!1}if(l){for(var q={},r=h?h.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=Ii(r[u+1]);return q}}}}catch(t){}};function dj(a,b,c,d){function e(p){var q=p,r=Ui(a).exec(q),u=q;if(r){var t=r[2],v=r[4];u=r[1];v&&(u=u+t+v)}p=u;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Ti.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function ej(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Pi(b,1,c),e=Pi(b,2,c),f=Pi(b,3,c);if(qb(d)){var g=$i(d);c?fj("_gl",g,a):gj("_gl",g,a,!1)}if(!c&&qb(e)){var h=$i(e);gj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){gj(m,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){fj(m,p,q);break a}}"string"==typeof q&&dj(m,p,q,void 0)}}
function gj(a,b,c,d){if(c.href){var e=dj(a,b,c.href,void 0===d?!1:d);Gf.test(e)&&(c.href=e)}}
function fj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=dj(a,b,c.action);Gf.test(m)&&(c.action=m)}}}
var Ki=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||ej(e,e.hostname)}}catch(g){}},Li=function(a){try{if(a.action){var b=ah(ch(a.action),"host");ej(a,b)}}catch(c){}},hj=function(a,b,c,d){Ni();Oi(a,b,"fragment"===c?2:1,!!d,!1)},ij=function(a,b){Ni();Oi(a,[$g(n.location,"host",!0)],b,!0,!0)},jj=function(){var a=K.location.hostname,b=Ri.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Si,""),l=e.replace(Si,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},kj=function(a,b){return!1===a?!1:a||b||jj()};var lj=/^\w+$/,mj=/^[\w-]+$/,nj=/^~?[\w-]+$/,oj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},pj=function(){if(!ig("gtag_cs_api")||!wg())return!0;var a=tg("ad_storage");return null==a?!0:!!a},qj=function(a,b){vg("ad_storage")?pj()?a():Ag(a,"ad_storage"):b?Na("TAGGING",3):zg(function(){qj(a,!0)},["ad_storage"])},sj=function(a){return rj(a).map(function(b){return b.Ma})},rj=function(a){var b=[];if(!K.cookie)return b;var c=fi(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},
e=0;e<c.length;d={ob:d.ob},e++){d.ob=tj(c[e]);var f=uj(c[e]);if(d.ob&&f){var g=Wa(b,function(h){return function(l){return l.Ma===h.ob}}(d));g&&g.timestamp<f?g.timestamp=f:g||b.push({Ma:d.ob,timestamp:f})}}return vj(b)};function wj(a){return a&&"string"==typeof a&&a.match(lj)?a:"_gcl"}
var yj=function(){var a=ch(n.location.href),b=ah(a,"query",!1,void 0,"gclid"),c=ah(a,"query",!1,void 0,"gclsrc"),d=ah(a,"query",!1,void 0,"gbraid"),e=ah(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||Yg(f,"gclid",!1,void 0);c=c||Yg(f,"gclsrc",!1,void 0);d=d||Yg(f,"gbraid",!1,void 0)}return xj(b,c,e,d)},xj=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&mj.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(mj))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha");break;case "gp":f(a,"gp")}c&&f(c,"dc");return e},zj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b;case "gp":return"gp"===b}return!1},Bj=function(a){var b=yj();qj(function(){Aj(b,
a)})};function Aj(a,b,c){function d(m,p){var q=Cj(m,e);q&&(oi(q,p,f),g=!0)}b=b||{};var e=wj(b.prefix);c=c||jb();var f=wi(b,c,!0);f.za="ad_storage";var g=!1,h=Math.round(c/1E3),l=function(m){return["GCL",h,m].join(".")};a.aw&&(!0===b.si?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));ig("enable_gbraid_cookie_write")&&!g&&a.oh&&(oi(e+"_gb",l(a.oh),f),g=!0)}
var Dj=function(a,b){var c=cj(!0);qj(function(){for(var d=wj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==oj[f]){var g=Cj(f,d),h=c[g];if(h){var l=Math.min(uj(h),jb()),m;b:{for(var p=l,q=fi(g,K.cookie,void 0,"ad_storage"),r=0;r<q.length;++r)if(uj(q[r])>p){m=!0;break b}m=!1}if(!m){var u=wi(b,l,!0);u.za="ad_storage";oi(g,h,u)}}}}Aj(xj(c.gclid,c.gclsrc),b)})},Cj=function(a,b){var c=oj[a];if(void 0!==c)return b+c},uj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function tj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Ej=function(a,b,c,d,e){if(Ta(b)){var f=wj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Cj(a[l],f);if(m){var p=fi(m,K.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};qj(function(){hj(g,b,c,d)})}},vj=function(a){return a.filter(function(b){return nj.test(b.Ma)})},Fj=function(a,b){for(var c=wj(b.prefix),d={},e=0;e<a.length;e++)oj[a[e]]&&(d[a[e]]=oj[a[e]]);qj(function(){$a(d,function(f,g){var h=fi(c+g,K.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=uj(l),
p={};p[f]=[tj(l)];Aj(p,b,m)}})})};function Gj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Hj=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(wg()){var c=yj();if(Gj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);ij(function(){return d},3);ij(function(){var e={};return e._up="1",e},1)}}},Ij=function(){var a;if(pj()){for(var b=[],c=K.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({je:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].je]||(g[b[h].je]=[]),g[b[h].je].push({timestamp:l[1],Ma:l[2]}))}a=g}else a={};return a};var Jj=/^\d+\.fls\.doubleclick\.net$/,Kj=!1;function Lj(a,b){vg(I.C)?Fg(I.C)?a():Ag(a,I.C):b?zf(42):Ig(function(){Lj(a,!0)},[I.C])}function Mj(a){var b=ch(n.location.href),c=ah(b,"host",!1);if(c&&c.match(Jj)){var d=ah(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Nj(a,b,c){if("aw"==a||"dc"==a){var d=Mj("gcl"+a);if(d)return d.split(".")}var e=wj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Fg(I.C)&&c,g;g=yj()[a]||[];if(0<g.length)return f?["0"]:g}var h=Cj(a,e);return h?sj(h):[]}
var Oj=function(a){var b=Mj("gac");if(b)return!Fg(I.C)&&a?"0":decodeURIComponent(b);var c=Ij(),d=[];$a(c,function(e,f){f=vj(f);for(var g=[],h=0;h<f.length;h++)g.push(f[h].Ma);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Qj=function(a,b){if(Kj)Pj(a,b,"dc");else{var c=yj().dc||[];Lj(function(){Di(b);var d=yi[zi(b.prefix)],e=!1;if(d&&0<c.length){var f=N.joined_au=N.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+
d;fg(l);e=f[g]=!0}}null==a&&(a=e);a&&d&&Bi(b)})}},Pj=function(a,b,c){var d=yj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!zj(h,c)||e.push({Ma:f,Ef:h});!g||c&&"dc"!==c||e.push({Ma:g,Ef:"ds"});Lj(function(){Di(b);var l=yi[zi(b.prefix)],m=!1;if(l&&0<e.length)for(var p=N.joined_auid=N.joined_auid||{},q=0;q<e.length;q++){var r=e[q],u=r.Ma,t=r.Ef,v=(b.prefix||"_gcl")+"."+t+"."+u;if(!p[v]){var x="https://adservice.google.com/pagead/regclk";x=x+"?gclid="+u+"&auid="+l+"&gclsrc="+t;fg(x);
m=p[v]=!0}}null==a&&(a=m);a&&l&&Bi(b)})};var Rj=/[A-Z]+/,Sj=/\s/,Tj=function(a){if(k(a)&&(a=ib(a),!Sj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Rj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},Vj=function(a){for(var b={},c=0;c<a.length;++c){var d=Tj(a[c]);d&&(b[d.id]=d)}Uj(b);var e=[];$a(b,function(f,g){e.push(g)});return e};
function Uj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Wj=function(){var a=!1;return a};var Yj=function(a,b,c,d){return(2===Xj()||d||"http:"!=n.location.protocol?a:b)+c},Xj=function(){var a=Xf(),b;if(1===a)a:{var c=Eh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var mk=function(a){return Fg(I.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=dh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},nk=function(){var a;if(!(a=Fh)){var b;if(!0===n._gtmdgs)b=!0;else{var c=Sf&&Sf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=fb("1");return bi(1,100)<d?bi(2,2):-1},ok=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var pk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),qk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},rk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},sk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var uk=function(a){var b=Rh("gtm.allowlist")||Rh("gtm.whitelist");b&&zf(9);var c=b&&sb(hb(b),qk),d=Rh("gtm.blocklist")||Rh("gtm.blacklist");d||(d=Rh("tagTypeBlacklist"))&&
zf(3);d?zf(8):d=[];tk()&&(d=hb(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ua(hb(d),"google")&&zf(2);var e=d&&sb(hb(d),rk),f={};return function(g){var h=g&&g[sd.Ra];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Kh[h]||[],m=a(h,l);if(b){var p;if(p=m)a:{if(0>Ua(c,h))if(l&&0<l.length)for(var q=0;q<
l.length;q++){if(0>Ua(c,l[q])){zf(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var u=0<=Ua(e,h);if(u)r=u;else{var t=Za(e,l||[]);t&&zf(10);r=t}}var v=!m||r;v||!(0<=Ua(l,"sandboxedScripts"))||c&&-1!==Ua(c,"sandboxedScripts")||(v=Za(e,sk));return f[h]=v}},tk=function(){return pk.test(n.location&&n.location.hostname)};var vk={active:!0,isAllowed:function(){return!0}},wk=function(a){var b=N.zones;return b?b.checkState(pe.F,a):vk},xk=function(a){var b=N.zones;!b&&a&&(b=N.zones=a());return b};var yk=function(){},zk=function(){};var Ak=!1,Bk=0,Ck=[];function Dk(a){if(!Ak){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ak=!0;for(var e=0;e<Ck.length;e++)M(Ck[e])}Ck.push=function(){for(var f=0;f<arguments.length;f++)M(arguments[f]);return 0}}}function Ek(){if(!Ak&&140>Bk){Bk++;try{K.documentElement.doScroll("left"),Dk()}catch(a){n.setTimeout(Ek,50)}}}var Fk=function(a){Ak?a():Ck.push(a)};var Hk=function(a,b){this.g=!1;this.D=[];this.J={tags:[]};this.N=!1;this.o=this.s=0;Gk(this,a,b)},Ik=function(a,b,c,d){if(Bh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Mb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return a.J.tags.push(e)-1},Jk=function(a,b,c,d){var e=a.J.tags[b];e&&(e.status=c,e.executionTime=d)},Kk=function(a){if(!a.g){for(var b=a.D,c=0;c<b.length;c++)b[c]();a.g=!0;a.D.length=0}},Gk=function(a,b,c){Ra(b)&&a.Kb(b);c&&n.setTimeout(function(){return Kk(a)},Number(c))};
Hk.prototype.Kb=function(a){var b=this,c=ob(function(){return M(function(){a(pe.F,b.J)})});this.g?c():this.D.push(c)};var Lk=function(a){a.s++;return ob(function(){a.o++;a.N&&a.o>=a.s&&Kk(a)})};var Mk=function(){function a(d){return!Sa(d)||0>d?0:d}if(!N._li&&n.performance&&n.performance.timing){var b=n.performance.timing.navigationStart,c=Sa(Sh.get("gtm.start"))?Sh.get("gtm.start"):0;N._li={cst:a(c-b),cbt:a(Hh-b)}}};var Qk={},Rk=function(){return n.GoogleAnalyticsObject&&n[n.GoogleAnalyticsObject]},Sk=!1;
var Tk=function(a){n.GoogleAnalyticsObject||(n.GoogleAnalyticsObject=a||"ga");var b=n.GoogleAnalyticsObject;if(n[b])n.hasOwnProperty(b)||zf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);n[b]=c}Mk();return n[b]},Uk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Rk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Vk=function(a){};
var Xk=function(a){},Wk=function(){return n.GoogleAnalyticsObject||"ga"},Yk=function(a,b){return function(){var c=Rk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var cl=function(){return"&tc="+Sd.filter(function(a){return a}).length},fl=function(){2022<=dl().length&&el()},hl=function(){gl||(gl=n.setTimeout(el,500))},el=function(){gl&&(n.clearTimeout(gl),gl=void 0);void 0===il||jl[il]&&!kl&&!ll||(ml[il]||nl.zh()||0>=ol--?(zf(1),ml[il]=!0):(nl.Rh(),Zf(dl()),jl[il]=!0,pl=ql=rl=ll=kl=""))},dl=function(){var a=il;if(void 0===a)return"";var b=Oa("GTM"),c=Oa("TAGGING");return[sl,jl[a]?"":"&es=1",tl[a],b?"&u="+b:"",c?"&ut="+c:"",cl(),kl,ll,rl?rl:"",ql,pl,"&z=0"].join("")},
ul=function(){return[Ih,"&v=3&t=t","&pid="+Xa(),"&rv="+pe.Ac].join("")},vl="0.005000">Math.random(),sl=ul(),wl=function(){sl=ul()},jl={},kl="",ll="",pl="",ql="",rl="",il=void 0,tl={},ml={},gl=void 0,nl=function(a,b){var c=0,d=0;return{zh:function(){if(c<a)return!1;jb()-d>=b&&(c=0);return c>=a},Rh:function(){jb()-d>=b&&(c=0);c++;d=jb()}}}(2,1E3),ol=1E3,xl=function(a,b,c){if(vl&&!ml[a]&&b){a!==il&&(el(),il=a);var d,e=String(b[sd.Ra]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;kl=kl?kl+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Ud[g]?"1":"2")+d;pl=pl?pl+"."+h:"&ti="+h;hl();fl()}},yl=function(a,b,c){if(vl&&!ml[a]){a!==il&&(el(),il=a);var d=c+b;ll=ll?ll+"."+d:"&epr="+d;hl();fl()}},zl=function(a,b,c){};
var Al=function(){return!1},Bl=function(){var a={};return function(b,c,d){}};function Cl(a,b,c,d){var e=Sd[a],f=Dl(a,b,c,d);if(!f)return null;var g=$d(e[sd.pf],c,[]);if(g&&g.length){var h=g[0];f=Cl(h.index,{onSuccess:f,onFailure:1===h.Bf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Dl(a,b,c,d){function e(){if(f[sd.Ng])h();else{var x=ae(f,c,[]);var A=Ik(c.Ja,String(f[sd.Ra]),Number(f[sd.qf]),x[sd.Og]),B=!1;x.vtp_gtmOnSuccess=function(){if(!B){B=!0;var E=jb()-D;xl(c.id,Sd[a],"5");Jk(c.Ja,A,"success",
E);g()}};x.vtp_gtmOnFailure=function(){if(!B){B=!0;var E=jb()-D;xl(c.id,Sd[a],"6");Jk(c.Ja,A,"failure",E);h()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;xl(c.id,f,"1");var C=function(){var E=jb()-D;xl(c.id,f,"7");Jk(c.Ja,A,"exception",E);B||(B=!0,h())};var D=jb();try{Zd(x,c)}catch(E){C(E)}}}var f=Sd[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Rd(f))return null;var m=$d(f[sd.rf],c,[]);if(m&&m.length){var p=m[0],q=Cl(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.Bf?l:q}if(f[sd.jf]||f[sd.Qg]){var r=f[sd.jf]?Td:
c.Zh,u=g,t=h;if(!r[a]){e=ob(e);var v=El(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](u,t)}}return e}function El(a,b,c){var d=[],e=[];b[a]=Fl(d,e,c);return{onSuccess:function(){b[a]=Gl;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Hl;for(var f=0;f<e.length;f++)e[f]()}}}function Fl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Gl(a){a()}function Hl(a,b){b()};var Kl=function(a,b){for(var c=[],d=0;d<Sd.length;d++)if(a[d]){var e=Sd[d];var f=Lk(b.Ja);try{var g=Cl(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Ud[p];l.call(h,{Sf:m,Lf:q?q.priorityOverride||0:0,Ic:g})}else Il(d,b),f()}catch(t){f()}}var r=b.Ja;r.N=!0;r.o>=r.s&&Kk(r);c.sort(Jl);for(var u=0;u<c.length;u++)c[u].Ic();
return 0<c.length};function Jl(a,b){var c,d=b.Lf,e=a.Lf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Sf,h=b.Sf;f=g>h?1:g<h?-1:0}return f}function Il(a,b){if(!vl)return;var c=function(d){var e=b.Rd(Sd[d])?"3":"4",f=$d(Sd[d][sd.pf],b,[]);f&&f.length&&c(f[0].index);xl(b.id,Sd[d],e);var g=$d(Sd[d][sd.rf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Ll=!1,Ql=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Ll)return!1;Ll=!0}var d=wk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=wk(Number.MAX_SAFE_INTEGER)}vl&&!ml[b]&&il!==b&&(el(),il=b,pl=kl="",tl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,hl());var f=a.eventCallback,g=a.eventTimeout,h={id:b,name:c,Rd:uk(d.isAllowed),Zh:[],If:function(){zf(6)},uf:Ml(b),Ja:new Hk(f,
g)};Nl(b,h.Ja);var l=ke(h);e&&(l=Ol(l));var m=Kl(l,h);"gtm.js"!==c&&"gtm.sync"!==c||Xk(pe.F);switch(c){case "gtm.init":m&&zf(20)}return Pl(l,m)};function Ml(a){return function(b){vl&&(Rb(b)||zl(a,"input",b))}}
function Nl(a,b){Wh(a,"event",1);Wh(a,"ecommerce",1);Wh(a,"gtm");Wh(a,"eventModel");}function Ol(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Ah[String(Sd[c][sd.Ra])]&&(b[c]=!0);return b}function Pl(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Sd[c]&&!Bh[String(Sd[c][sd.Ra])])return!0;return!1}function Rl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return ch(""+c+b).href}}function Sl(a,b){return Tl()?Rl(a,b):void 0}function Tl(){var a=!1;return a};var Ul=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},Vl=function(a){var b=new Ul;b.eventModel=a;return b},Wl=function(a,b){a.targetConfig=b;return a},Xl=function(a,b){a.containerConfig=b;return a},Yl=function(a,b){a.remoteConfig=b;return a},Zl=function(a,b){a.globalConfig=
b;return a},$l=function(a,b){a.onSuccess=b;return a},am=function(a,b){a.setContainerTypeLoaded=b;return a},bm=function(a,b){a.getContainerTypeLoaded=b;return a},cm=function(a,b){a.onFailure=b;return a};Ul.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var dm=function(a){function b(e){$a(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];$a(c,function(e){d.push(e)});return d};var em;if(3===pe.Ac.length)em="g";else{var fm="G";em=fm}
var gm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:em,OPT:"o"},hm=function(a){var b=pe.F.split("-"),c=b[0].toUpperCase(),d=gm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===pe.Ac.length){var g="w";f="2"+g}else f="";return f+d+pe.Ac+e};var im=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var jm=function(){return Kf("iPhone")&&!Kf("iPod")&&!Kf("iPad")};Kf("Opera");Kf("Trident")||Kf("MSIE");Kf("Edge");!Kf("Gecko")||-1!=Hf.toLowerCase().indexOf("webkit")&&!Kf("Edge")||Kf("Trident")||Kf("MSIE")||Kf("Edge");-1!=Hf.toLowerCase().indexOf("webkit")&&!Kf("Edge")&&Kf("Mobile");Kf("Macintosh");Kf("Windows");Kf("Linux")||Kf("CrOS");var km=na.navigator||null;km&&(km.appVersion||"").indexOf("X11");Kf("Android");jm();Kf("iPad");Kf("iPod");jm()||Kf("iPad")||Kf("iPod");Hf.toLowerCase().indexOf("kaios");var lm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var mm=function(){};var nm=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},om=function(a,b){this.o=a;this.g=null;this.D={};this.N=0;this.J=void 0===b?500:b;this.s=null};ma(om,mm);
var qm=function(a){return"function"===typeof a.o.__tcfapi||null!=pm(a)};
om.prototype.addEventListener=function(a){var b={},c=Bf(function(){return a(b)}),d=0;-1!==this.J&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.J));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=nm(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{rm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};om.prototype.removeEventListener=function(a){a&&a.listenerId&&rm(this,"removeEventListener",null,a.listenerId)};
var tm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=sm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&sm(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?sm(a.purpose.legitimateInterests,
b)&&sm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},sm=function(a,b){return!(!a||!a[b])},rm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(pm(a)){um(a);var f=++a.N;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},pm=function(a){if(a.g)return a.g;a.g=lm(a.o,"__tcfapiLocator");return a.g},um=function(a){a.s||(a.s=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},im(a.o,a.s))};var vm=!0;var wm={1:0,3:0,4:0,7:3,9:3,10:3};function xm(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var ym=xm("",550),zm=xm("",500);function Am(){var a=N.tcf||{};return N.tcf=a}
var Bm=function(a,b){this.s=a;this.g=b;this.o=jb();},Cm=function(a){},Dm=function(a){},Jm=function(){var a=Am(),b=new om(n,vm?3E3:-1),c=new Bm(b,a);if((Em()?!0===n.gtag_enable_tcf_support:!1!==n.gtag_enable_tcf_support)&&!a.active&&("function"===typeof n.__tcfapi||qm(b))){a.active=!0;a.Zb={};Fm();var d=null;vm?d=n.setTimeout(function(){Gm(a);Hm(a);d=null},zm):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Gm(a),Hm(a),Cm(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=Im(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in wm)if(wm.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var p;var q=l;!1===q.gdprApplies?p=!0:(void 0===q.internalErrorState&&(q.internalErrorState=nm(q)),p="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===
q.eventStatus)?!0:!1);g["1"]=p?!1===l.gdprApplies||"tcunavailable"===l.tcString||void 0===l.gdprApplies&&!m||"string"!==typeof l.tcString||!l.tcString.length?!0:tm(l,"1",0):!1}else g[h]=tm(e,h,wm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Zb=f,Hm(a),Cm(c))}}),Dm(c)}catch(e){d&&(clearTimeout(d),d=null),Gm(a),Hm(a)}}};function Gm(a){a.type="e";a.tcString="tcunavailable";vm&&(a.Zb=Im())}function Fm(){var a={};Dg((a.ad_storage="denied",a.wait_for_update=ym,a))}
var Em=function(){var a=!1;a=!0;return a};function Im(){var a={},b;for(b in wm)wm.hasOwnProperty(b)&&(a[b]=!0);return a}function Hm(a){var b={};Eg((b.ad_storage=a.Zb["1"]?"granted":"denied",b))}
var Km=function(){var a=Am();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Lm=function(){var a=Am();return a.active?a.tcString||"":""},Mm=function(){var a=Am();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},Nm=function(a){if(!wm.hasOwnProperty(String(a)))return!0;var b=Am();return b.active&&b.Zb?!!b.Zb[String(a)]:!0};var Om=!1;function Pm(a){var b=String(n.location).split(/[?#]/)[0],c=pe.Yf||n._CONSENT_MODE_SALT;return a?c?String(ci(b+a+c)):"0":""}
function Qm(a){function b(u){var t;N.reported_gclid||(N.reported_gclid={});t=N.reported_gclid;var v;v=Om&&g&&(!wg()||Fg(I.C))?l+"."+(f.prefix||"_gcl")+(u?"gcu":"gcs"):l+(u?"gcu":"gcs");if(!t[v]){t[v]=!0;var x=[],y=function(E,J){J&&x.push(E+"="+encodeURIComponent(J))},w="https://www.google.com";if(wg()){var A=Fg(I.C);y("gcs",Gg());u&&y("gcu","1");N.dedupe_gclid||(N.dedupe_gclid=
""+ri());y("rnd",N.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Fg(I.C)){var B=sj("_gcl_aw");y("gclaw",B.join("."))}y("url",String(n.location).split(/[?#]/)[0]);y("dclid",Rm(d,p));var C=!1;A||!d&&!C||(w="https://pagead2.googlesyndication.com")}
y("gdpr_consent",Lm()),y("gdpr",Mm());"1"===cj(!1)._up&&y("gtm_up","1");y("gclid",Rm(d,l));y("gclsrc",m);y("gtm",hm(!e));Om&&g&&Fg(I.C)&&(Di(f||{}),y("auid",yi[zi(f.prefix)]||""));var D=w+"/pagead/landing?"+x.join("&");fg(D)}}var c=!!a.Fd,d=!!a.na,e=a.U,f=void 0===a.Fc?{}:a.Fc,g=void 0===a.Mc?!0:a.Mc,h=yj(),l=h.gclid||"",m=h.gclsrc,
p=h.dclid||"",q=!c&&(!l||m&&"aw.ds"!==m?!1:!0),r=wg();if(q||r)r?Ig(function(){b();Fg(I.C)||Ag(function(u){return b(!0,u.vf)},I.C)},[I.C]):b()}function Rm(a,b){var c=a&&!Fg(I.C);return b&&c?"0":b}var Bn=function(){var a=!0;Nm(7)&&Nm(9)&&Nm(10)||(a=!1);var b=!0;b=!1;b&&!An()&&(a=!1);return a},An=function(){var a=!0;Nm(3)&&Nm(4)||(a=!1);return a};var Zn=!1;function $n(){var a=N;return a.gcq=a.gcq||new ao}
var bo=function(a,b,c){$n().register(a,b,c)},co=function(a,b,c,d){$n().push("event",[b,a],c,d)},eo=function(a,b){$n().push("config",[a],b)},fo=function(a,b,c,d){$n().push("get",[a,b],c,d)},go=function(a){return $n().getRemoteConfig(a)},ho={},io=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},jo=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},ao=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
ko=function(a,b){var c=Tj(b);return a.D[c.containerId]=a.D[c.containerId]||new io},lo=function(a,b,c){if(b){var d=Tj(b);if(d&&1===ko(a,b).status){ko(a,b).status=2;var e={};vl&&(e.timeoutId=n.setTimeout(function(){zf(38);hl()},3E3));a.push("require",[e],d.containerId);ho[d.containerId]=jb();if(Wj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=n.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Sl(c,g)||h;Wf(l)}}}},mo=function(a,b,c,d){if(d.U){var e=ko(a,d.U),f=e.o;if(f){var g=G(c),h=G(e.targetConfig[d.U]),l=G(e.containerConfig),m=G(e.remoteConfig),p=G(a.o),q=Rh("gtm.uniqueEventId"),r=Tj(d.U).prefix,u=bm(am(cm($l(Zl(Yl(Xl(Wl(Vl(g),h),l),m),p),function(){
yl(q,r,"2");}),function(){yl(q,r,"3");}),function(t,v){a.s[t]=v}),function(t){return a.s[t]});try{yl(q,r,"1");f(d.U,b,d.s,u)}catch(t){yl(q,r,"4");}}}};ba=ao.prototype;
ba.register=function(a,b,c){var d=ko(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){G(d.remoteConfig,c);d.remoteConfig=c}var e=Tj(a),f=ho[e.containerId];if(void 0!==f){var g=N[e.containerId].bootstrap,h=e.prefix.toUpperCase();N[e.containerId]._spx&&(h=h.toLowerCase());var l=Rh("gtm.uniqueEventId"),m=h,p=jb()-g;if(vl&&!ml[l]){l!==il&&(el(),il=l);var q=m+"."+Math.floor(g-f)+
"."+Math.floor(p);ql=ql?ql+","+q:"&cl="+q}delete ho[e.containerId]}this.flush()}};ba.push=function(a,b,c,d){var e=Math.floor(jb()/1E3);lo(this,c,b[0][I.Ga]||this.o[I.Ga]);Zn&&c&&ko(this,c).g&&(d=!1);this.g.push(new jo(a,e,c,b,d));d||this.flush()};ba.insert=function(a,b,c){var d=Math.floor(jb()/1E3);0<this.g.length?this.g.splice(1,0,new jo(a,d,c,b,!1)):this.g.push(new jo(a,d,c,b,!1))};
ba.flush=function(a){for(var b=this,c=[],d=!1;this.g.length;){var e=this.g[0];if(e.o)Zn?!e.U||ko(this,e.U).g?(e.o=!1,this.g.push(e)):c.push(e):(e.o=!1,this.g.push(e));else switch(e.type){case "require":if(3!==ko(this,e.U).status&&!a){Zn&&this.g.push.apply(this.g,c);return}vl&&n.clearTimeout(e.g[0].timeoutId);break;case "set":$a(e.g[0],function(r,u){G(vb(r,u),b.o)});break;case "config":var f=e.g[0],g=!!f[I.vc];delete f[I.vc];var h=ko(this,e.U),l=Tj(e.U),m=l.containerId===l.id;g||(m?h.containerConfig=
{}:h.targetConfig[e.U]={});h.g&&g||mo(this,I.aa,f,e);h.g=!0;delete f[I.Eb];m?G(f,h.containerConfig):G(f,h.targetConfig[e.U]);Zn&&(d=!0);break;case "event":mo(this,e.g[1],e.g[0],e);break;case "get":var p={},q=(p[I.Ea]=e.g[0],p[I.Da]=e.g[1],p);mo(this,I.Ca,q,e)}this.g.shift()}Zn&&(this.g.push.apply(this.g,c),d&&this.flush())};ba.getRemoteConfig=function(a){return ko(this,a).remoteConfig};function no(a,b){var c=this;};function oo(a,b,c){};function po(a,b,c,d){};function qo(a){};var ro=function(a,b,c){function d(f,g){var h=f[g];h=gg(f,g);return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||bg(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},so=function(a){N.hasOwnProperty("autoEventsSettings")||(N.autoEventsSettings={});var b=N.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},to=function(a,b,c){so(a)[b]=c},uo=function(a,b,c,d){var e=so(a),f=lb(e,b,d);e[b]=c(f)},vo=function(a,b,c){var d=so(a);return lb(d,b,c)};var wo={},xo=[];
var Eo=function(a,b){};

function Ho(a,b){};var Io=/^\s*$/,Jo,Ko=!1;
function Vo(a,b){}function Wo(a,b,c){};var Xo=!!n.MutationObserver,Yo=void 0,Zo=function(a){if(!Yo){var b=function(){var c=K.body;if(c)if(Xo)(new MutationObserver(function(){for(var e=0;e<Yo.length;e++)M(Yo[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;$f(c,"DOMNodeInserted",function(){d||(d=!0,M(function(){d=!1;for(var e=0;e<Yo.length;e++)M(Yo[e])}))})}};Yo=[];K.body?b():M(b)}Yo.push(a)};var ap=["www.youtube.com","www.youtube-nocookie.com"],bp,cp=!1,dp=0;
function np(a,b){}function op(a,b){
return!0};function pp(a,b,c){};function qp(a,b){var c;return c};function rp(a){};function sp(a){};var tp=!1,up=[];function vp(){if(!tp){tp=!0;for(var a=0;a<up.length;a++)M(up[a])}}var wp=function(a){tp?M(a):up.push(a)};function xp(a){H(F(this),["listener:!Fn"],arguments);lf(this,"process_dom_events","window","load");wp(Pb(a))};function yp(a){var b;return b};function zp(a,b){var c;var e=!1;var f=Nb(c,this.g,e);void 0===f&&void 0!==c&&zf(45);return f};function Ap(a){var b;var f=!1;var g=Nb(b,this.g,f);void 0===g&&void 0!==b&&zf(45);return g};function Bp(a,b){var c=null,d=!1;
return Nb(c,this.g,d)};function Cp(a){var b;H(F(this),["path:!string"],arguments);lf(this,"access_globals","readwrite",a);var c=a.split("."),d=[];var e=ub(c,d),f=c[c.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];void 0===g&&(g=[],e[f]=g);b=function(){if(!Ra(g.push))throw Error("Object at "+a+" in window is not an array.");
g.push.apply(g,Array.prototype.slice.call(arguments,0))};var h=!1;return Nb(b,this.g,h)};var Dp=function(a){var b;return b};function Ep(a,b){b=void 0===b?!0:b;var c;return c};function Fp(a){var b=null;return b};function Gp(a,b){var c;return c};function Hp(a,b){var c;return c};function Ip(a){var b="";return b};function Jp(a,b){var c;return c};function Kp(a){var b="";return b};function Lp(){lf(this,"get_user_agent");return n.navigator.userAgent};function Mp(a,b){};var Np={};
function Op(a,b,c,d){H(F(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);lf(this,"inject_script",a);var e=this.g,f=function(){b instanceof xb&&b.s(e)},g=function(){c instanceof xb&&c.s(e)};if(!d){Wf(a,f,g);return}var h=d;Np[h]?(Np[h].onSuccess.push(f),Np[h].onFailure.push(g)):(Np[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Np[h].onSuccess,m=0;m<l.length;m++)M(l[m]);l.push=function(p){M(p);return 0}},
g=function(){for(var l=Np[h].onFailure,m=0;m<l.length;m++)M(l[m]);Np[h]=null},Wf(a,f,g));};function Pp(a){var b=!0;return b};var Qp=function(){return!1},Rp={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Sp(){};function Tp(a){var b=void 0;return b};function Up(a,b){var c=!1;return c};function Vp(){var a="";return a};function Wp(){var a="";return a};function Xp(){};function Yp(a,b,c,d){d=void 0===d?!1:d;};function Zp(a,b,c){};function $p(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function aq(a){H(F(this),["consentSettings:!DustMap"],arguments);for(var b=a.Rb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==I.$c&&lf(this,"access_consent",e,"write")}Dg(Pb(a))};function bq(a,b,c){return!1};function cq(a,b,c){}
;var dq=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function eq(a,b,c,d){var e=this;};function fq(a,b,c){}
;var gq={},hq={};gq.getItem=function(a){var b=null;return b};
gq.setItem=function(a,b){};
gq.removeItem=function(a){};gq.clear=function(){};var iq=function(a){var b;return b};function jq(a){H(F(this),["consentSettings:!DustMap"],arguments);var b=Pb(a),c;for(c in b)b.hasOwnProperty(c)&&lf(this,"access_consent",c,"write");Eg(b)};var pd=function(){var a=new wf;Wj()?(a.add("injectHiddenIframe",Qa),a.add("injectScript",Qa)):(a.add("injectHiddenIframe",Mp),a.add("injectScript",Op));var b=Zp;a.add("Math",df());a.add("TestHelper",yf());a.add("addEventCallback",qo);a.add("aliasInWindow",op);a.add("assertApi",$e);a.add("assertThat",af);a.add("callInWindow",
qp);a.add("callLater",rp);a.add("copyFromDataLayer",zp);a.add("copyFromWindow",Ap);a.add("createArgumentsQueue",Bp);a.add("createQueue",Cp);a.add("decodeUri",ef);a.add("decodeUriComponent",ff);a.add("encodeUri",gf);a.add("encodeUriComponent",hf);a.add("fail",jf);a.add("fromBase64",Dp,!("atob"in n));a.add("generateRandom",kf);a.add("getContainerVersion",mf);a.add("getCookieValues",Ep);a.add("getQueryParameters",Gp);a.add("getReferrerQueryParameters",Hp);a.add("getReferrerUrl",Ip);a.add("getTimestamp",
nf);a.add("getTimestampMillis",nf);a.add("getType",of);a.add("getUrl",Kp);a.add("localStorage",Rp,!Qp());a.add("logToConsole",Sp);a.add("makeInteger",qf);a.add("makeNumber",rf);a.add("makeString",sf);a.add("makeTableMap",tf);a.add("mock",vf);a.add("parseUrl",Tp);a.add("queryPermission",Up);a.add("readCharacterSet",Vp);a.add("readTitle",Wp);a.add("sendPixel",b);a.add("setCookie",$p);a.add("setInWindow",bq);a.add("sha256",eq);a.add("templateStorage",gq);a.add("toBase64",iq,!("btoa"in n));a.add("JSON",
pf(function(c){var d=this.g.g;d&&d.log.call(this,"error",c)}));
return function(c){var d;if(a.g.hasOwnProperty(c))d=a.get(c,this);else{var e;
if(e=a.o.hasOwnProperty(c)){var f=!1,g=this.g.g;if(g){var h=g.Qb();if(h){0!==h.indexOf("__cvt_")&&(f=!0);}}e=f}if(e)d=a.o.hasOwnProperty(c)?a.o[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var nd,te;
function kq(){var a=data.runtime||[],b=data.runtime_lines;nd=new id;lq();Od=function(e,f,g){mq(f);var h=new Cb;$a(f,function(u,t){var v=Nb(t);void 0===v&&void 0!==t&&zf(44);h.set(u,v)});nd.g.g.J=ge();var l={$g:ue(e),eventId:void 0!==g?g.id:void 0,Kb:void 0!==g?function(u){return g.Ja.Kb(u)}:void 0,Qb:function(){return e},log:function(){}};if(Al()){var m=Bl(),
p=void 0,q=void 0;l.ia={Lb:{},kb:function(u,t,v){1===t&&(p=u);7===t&&(q=v);m(u,t,v)},Ud:uf()};l.log=function(u,t){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:u,source:q,message:v})}}}var r=od(l,[e,h]);nd.g.g.J=void 0;r instanceof ya&&"return"===r.g&&(r=r.o);return Pb(r)};qd();for(var c=0;c<a.length;c++){var d=a[c];if(!Ta(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&de(d,b[c]);nd.Ic(d)}}
function mq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ra(b)&&(a.gtmOnSuccess=function(){M(b)});Ra(c)&&(a.gtmOnFailure=function(){M(c)})}function lq(){var a=nd;N.SANDBOXED_JS_SEMAPHORE=N.SANDBOXED_JS_SEMAPHORE||0;rd(a,function(b,c,d){N.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{N.SANDBOXED_JS_SEMAPHORE--}})}function nq(a){void 0!==a&&$a(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Kh[e]=Kh[e]||[];Kh[e].push(b)}})};var oq="HA GF G UA AW DC".split(" "),pq=!1,qq={},rq=!1;function sq(a,b){var c={event:a};b&&(c.eventModel=G(b),b[I.gd]&&(c.eventCallback=b[I.gd]),b[I.mc]&&(c.eventTimeout=b[I.mc]));return c}function tq(){return pq}
var wq={config:function(a){var b;return b},consent:function(a){function b(){tq()&&
G(a[2],{subcommand:a[1]})}if(3===a.length){zf(39);var c=Lh(),d=a[1];"default"===d?(b(),Dg(a[2])):"update"===d&&(b(),Eg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&k(b)){var c;if(2<a.length){if(!Mb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=sq(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return rq=!0,tq(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=te.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Mb(a[1])?b=G(a[1]):3==a.length&&k(a[1])&&(b={},Mb(a[2])||Ta(a[2])?b[a[1]]=
G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},xq={policy:!0};var yq=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Aq=function(a){var b=zq(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Rq=function(a){if(Qq(a))return a;this.g=a};Rq.prototype.uh=function(){return this.g};var Qq=function(a){return!a||"object"!==Kb(a)||Mb(a)?!1:"getUntrustedUpdateValue"in a};Rq.prototype.getUntrustedUpdateValue=Rq.prototype.uh;var Sq=[],Tq=!1,Uq=!1,Vq=!1,Wq=function(a){return n["dataLayer"].push(a)},Xq=function(a){var b=N["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Yq(a){var b=a._clear;$a(a,function(d,e){"_clear"!==d&&(b&&Uh(d,void 0),Uh(d,e))});Gh||(Gh=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Lh(),a["gtm.uniqueEventId"]=c,Uh("gtm.uniqueEventId",c));return Ql(a)}function Zq(){var a=Sq[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(ab(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function $q(){for(var a=!1;!Vq&&0<Sq.length;){var b=!1;if(b&&!Uq&&Zq()){var c={};Sq.unshift((c.event=
"gtm.init",c));Uq=!0}var d=!1;if(d&&!Tq&&Zq()){var e={};Sq.unshift((e.event="gtm.init_consent",e));Tq=!0}Vq=!0;delete Oh.eventModel;Qh();var f=Sq.shift();if(null!=f){var g=Qq(f);
if(g){var h=f;f=Qq(h)?h.getUntrustedUpdateValue():void 0;Vh()}try{if(Ra(f))try{f.call(Sh)}catch(v){}else if(Ta(f)){var l=f;if(k(l[0])){var m=l[0].split("."),p=m.pop(),q=l.slice(1),r=Rh(m.join("."),2);if(void 0!==r&&null!==r)try{r[p].apply(r,q)}catch(v){}}}else{if(ab(f)){a:{var u=f;if(u.length&&k(u[0])){var t=wq[u[0]];if(t&&(!g||!xq[u[0]])){f=t(u);break a}}f=void 0}if(!f){Vq=!1;continue}}a=Yq(f)||a}}finally{g&&Qh(!0)}}Vq=!1}
return!a}function ar(){var a=$q();try{yq(n["dataLayer"],pe.F)}catch(b){}return a}
var cr=function(){var a=Uf("dataLayer",[]),b=Uf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Fk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});wp(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<N.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Rq(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Sq.push.apply(Sq,e);if(300<
this.length)for(zf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return $q()&&h};var d=a.slice(0);Sq.push.apply(Sq,d);br()&&M(ar)},br=function(){var a=!0;return a};var dr={};dr.wc=new String("undefined");
var er=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===dr.wc?b:a[d]);return c.join("")}};er.prototype.toString=function(){return this.g("undefined")};er.prototype.valueOf=er.prototype.toString;dr.Tg=er;dr.yd={};dr.hh=function(a){return new er(a)};var fr={};dr.Sh=function(a,b){var c=Lh();fr[c]=[a,b];return c};dr.yf=function(a){var b=a?0:1;return function(c){var d=fr[c];if(d&&"function"===typeof d[b])d[b]();fr[c]=void 0}};dr.yh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};dr.Ph=function(a){if(a===dr.wc)return a;var b=Lh();dr.yd[b]=a;return'google_tag_manager["'+pe.F+'"].macro('+b+")"};dr.Jh=function(a,b,c){a instanceof dr.Tg&&(a=a.g(dr.Sh(b,c)),b=Qa);return{vh:a,onSuccess:b}};var gr=["input","select","textarea"],hr=["button","hidden","image","reset","submit"],ir=function(a){var b=a.tagName.toLowerCase();return!Wa(gr,function(c){return c===b})||"input"===b&&Wa(hr,function(c){return c===a.type.toLowerCase()})?!1:!0},jr=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):eg(a,["form"],100)},kr=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(ir(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var vr=n.clearTimeout,wr=n.setTimeout,O=function(a,b,c){if(Wj()){b&&M(b)}else return Wf(a,b,c)},xr=function(){return new Date},yr=function(){return n.location.href},zr=function(a){return ah(ch(a),"fragment")},Ar=function(a){return bh(ch(a))},Br=function(a,b){return Rh(a,b||2)},Cr=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Wq(a)):d=Wq(a);return d},Dr=function(a,b){n[a]=b},R=function(a,b,c){b&&
(void 0===n[a]||c&&!n[a])&&(n[a]=b);return n[a]},Er=function(a,b,c){return fi(a,b,void 0===c?!0:!!c)},Fr=function(a,b,c){return 0===oi(a,b,c)},Gr=function(a,b){if(Wj()){b&&M(b)}else Yf(a,b)},Hr=function(a){return!!vo(a,"init",!1)},Ir=function(a){to(a,"init",!0)},Jr=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Eh;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";O(Yj("https://","http://",c))},Kr=function(a,
b){var c=a[b];c=gg(a,b);return c},Lr=function(a,b,c){vl&&(Rb(a)||zl(c,b,a))};
var Mr=dr.Jh;function is(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var js=new Ya;function ks(a,b){function c(g){var h=ch(g),l=ah(h,"protocol"),m=ah(h,"host",!0),p=ah(h,"port"),q=ah(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ls(a){return ms(a)?1:0}
function ms(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ta(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if(ls(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(u){}}f=!1}return f;case "_ew":return is(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ua(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,r=js.get(q);r||(r=new RegExp(c,p),js.set(q,r));m=r.test(b)}catch(u){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ks(b,c)}return!1};var ns=encodeURI,X=encodeURIComponent,os=Zf;var ps=function(a,b){if(!a)return!1;var c=ah(ch(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var qs=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Wt(){return n.gaGlobal=n.gaGlobal||{}}var Xt=function(){var a=Wt();a.hid=a.hid||Xa();return a.hid},Yt=function(a,b){var c=Wt();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Iu=window,Ju=document,Ku=function(a){var b=Iu._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Iu["ga-disable-"+a])return!0;try{var c=Iu.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=di("AMP_TOKEN",String(Ju.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Ju.getElementById("__gaOptOutExtension")?!0:!1};var Lu={};function Nu(a){delete a.eventModel[I.Eb];Pu(a.eventModel)}var Pu=function(a){$a(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[I.sa]||{};$a(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Su=function(a,b,c){co(b,c,a)},Tu=function(a,b,c){co(b,c,a,!0)},Zu=function(a,b){};
function Uu(a,b){}var Y={h:{}};Y.h.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.i="ctv";Y.__ctv.m=!0;Y.__ctv.priorityOverride=0})(function(){return"66"})}();

Y.h.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.i="jsm";Y.__jsm.m=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=R("google_tag_manager");var d=c&&c.e&&c.e(b);Lr(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Y.h.c=["google"],function(){(function(a){Y.__c=a;Y.__c.i="c";Y.__c.m=!0;Y.__c.priorityOverride=0})(function(a){Lr(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Y.h.e=["google"],function(){(function(a){Y.__e=a;Y.__e.i="e";Y.__e.m=!0;Y.__e.priorityOverride=0})(function(a){return String(Xh(a.vtp_gtmEventId,"event"))})}();
Y.h.f=["google"],function(){(function(a){Y.__f=a;Y.__f.i="f";Y.__f.m=!0;Y.__f.priorityOverride=0})(function(a){var b=Br("gtm.referrer",1)||K.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ah(ch(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Ar(String(b)):String(b)})}();
Y.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=ro(c,"gtm.click");Cr(d)}}(function(b){Y.__cl=b;Y.__cl.i="cl";Y.__cl.m=!0;Y.__cl.priorityOverride=0})(function(b){if(!Hr("cl")){var c=R("document");$f(c,"click",a,!0);Ir("cl")}M(b.vtp_gtmOnSuccess)})}();Y.h.k=["google"],function(){(function(a){Y.__k=a;Y.__k.i="k";Y.__k.m=!0;Y.__k.priorityOverride=0})(function(a){return Er(a.vtp_name,Br("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.i="access_globals";Y.__access_globals.m=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,q,r){if(!k(r))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Ua(e,r))return}else if("write"===q){if(-1<Ua(f,r))return}else if("readwrite"===q){if(-1<Ua(f,r)&&-1<Ua(e,r))return}else if("execute"===q){if(-1<Ua(g,r))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
r+".");},O:a}})}();Y.h.r=["google"],function(){(function(a){Y.__r=a;Y.__r.i="r";Y.__r.m=!0;Y.__r.priorityOverride=0})(function(a){return Xa(a.vtp_min,a.vtp_max)})}();
Y.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.i="u";Y.__u.m=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Br("gtm.url",1))||yr();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ar(String(c));var e=ch(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ta(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var q=ah(e,"QUERY",void 0,void 0,m[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=ah(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.h.v=["google"],function(){(function(a){Y.__v=a;Y.__v.i="v";Y.__v.m=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Br(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Lr(d,"v",a.vtp_gtmEventId);return d})}();
Y.h.ua=["google"],function(){function a(q){return Fg(q)}function b(q,r){var u=!1;if(wg()&&!u&&!e[q]){var t=function(){var v=Rk(),x="gtm"+Lh(),y=m(r),w={name:x};l(y,w,!0);v("create",q,w);v(function(){v.remove(x)})};Ag(t,I.K);Ag(t,I.C);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,
allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},
l=function(q,r,u){var t=0;if(q)for(var v in q)if(!h[v]&&q.hasOwnProperty(v)&&(u&&f[v]||!u&&void 0===f[v])){var x=g[v]?gb(q[v]):q[v];"anonymizeIp"!=v||x||(x=void 0);r[v]=x;t++}return t},m=function(q){var r={};q.vtp_gaSettings&&G(qs(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);G(qs(q.vtp_fieldsToSet,"fieldName","value"),r);Fg(I.K)||(r.storage="none");Fg(I.C)||(r.allowAdFeatures=!1,r.storeGac=!1);Bn()||(r.allowAdFeatures=!1);An()||(r.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&
(r._x_19=q.vtp_transportUrl);return r},
p=function(q){function r(oa,Z){void 0!==Z&&E("set",oa,Z)}var u={},t={},v={},x={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;G(qs(y.vtp_contentGroup,"index","group"),t);G(qs(y.vtp_dimension,"index","dimension"),v);G(qs(y.vtp_metric,"index","metric"),x);var w=G(y);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=void 0;w.vtp_metric=void 0;q=G(q,w)}G(qs(q.vtp_contentGroup,"index","group"),t);G(qs(q.vtp_dimension,"index","dimension"),v);G(qs(q.vtp_metric,"index","metric"),x);var A=
m(q),B=Tk(q.vtp_functionName);if(Ra(B)){var C="",D="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(D=q.vtp_trackerName,C=D+"."):(D="gtm"+Lh(),C=D+".");var E=function(oa){var Z=[].slice.call(arguments,0);Z[0]=C+Z[0];B.apply(window,Z)},J=function(oa,Z){return void 0===Z?Z:oa(Z)},P=function(oa,Z){if(Z)for(var Va in Z)Z.hasOwnProperty(Va)&&E("set",oa+Va,Z[Va])},Q=function(){var oa={transaction_id:"id",
affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},Z={},Va=(Z[I.bd]="click",Z[I.Ba]="detail",Z[I.Ya]="add",Z[I.Za]="remove",Z[I.Oa]="checkout",Z[I.qa]="purchase",Z[I.$a]="refund",Z),cc={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_category:"category",item_variant:"variant",index:"position",promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},dc=function(db,mb){for(var eb in db)oa.hasOwnProperty(eb)&&
(db[mb]=db[mb]||{},db[mb].actionField=db[mb].actionField||{},db[mb].actionField[oa[eb]]=db[eb])},Db=function(db){for(var mb=[],eb={},nb=0;nb<db.length;eb={sb:eb.sb},nb++)eb.sb={},$a(db[nb],function(Tb){return function(Kc,mg){cc.hasOwnProperty(Kc)?Tb.sb[cc[Kc]]=mg:Tb.sb[Kc]=mg}}(eb)),mb.push(eb.sb);return mb},bb=function(db,mb,eb){if(!Mb(mb))return!1;for(var nb=lb(Object(mb),eb,[]),Tb=0;nb&&Tb<nb.length;Tb++)E(db,nb[Tb]);return!!nb&&0<nb.length},U;if(q.vtp_useEcommerceDataLayer){var tb=!1;q.vtp_useGA4SchemaForEcommerce&&
(U=Xh(q.vtp_gtmEventId,"eventModel"),tb=!!U);tb||(U=Br("ecommerce",1))}else q.vtp_ecommerceMacroData&&(U=q.vtp_ecommerceMacroData.ecommerce,!U&&q.vtp_useGA4SchemaForEcommerce&&(U=q.vtp_ecommerceMacroData));if(!Mb(U))return;U=Object(U);if(q.vtp_useGA4SchemaForEcommerce){U=G(U);U.currencyCode=U.currencyCode||U.currency;var Eb=String(Xh(q.vtp_gtmEventId,
"event"));if("view_item_list"===Eb&&!U.impressions&&U.items)U.impressions=Db(U.items);else if("view_promotion"===Eb&&!U.promoView&&U.items)U.promoView={},U.promoView.promotions=Db(U.items);else if("select_promotion"===Eb&&!U.promoClick)U.items&&(U.promoClick={},U.promoClick.promotions=Db(U.items)),dc(U,"promoClick");else if(Va.hasOwnProperty(Eb)){var xc=Va[Eb];U[xc]||(U.items&&(U[xc]={},U[xc].products=Db(U.items)),dc(U,xc))}}var Ke=lb(A,"currencyCode",U.currencyCode);void 0!==Ke&&E("set","&cu",Ke);
bb("ec:addImpression",U,"impressions");if(bb("ec:addPromo",U[U.promoClick?"promoClick":"promoView"],"promotions")&&U.promoClick){E("ec:setAction","promo_click",U.promoClick.actionField);return}for(var kd="detail checkout checkout_option click add remove purchase refund".split(" "),lg="refund purchase remove checkout checkout_option add click detail".split(" "),Jc=0;Jc<kd.length;Jc++){var ld=U[kd[Jc]];if(ld){bb("ec:addProduct",ld,"products");E("ec:setAction",kd[Jc],ld.actionField);if(vl)for(var md=
0;md<lg.length;md++){var yc=U[lg[md]];if(yc){yc!==ld&&zf(13);break}}break}}},V={name:D};l(A,V,!0);var ta=q.vtp_trackingId||u.trackingId;B("create",ta,V);E("set","&gtm",hm(!0));var S=!1;
wg()&&!S&&(E("set","&gcs",Gg()),b(ta,q));A._x_19&&(null==Tf&&delete A._x_19,A._x_20&&!d[D]&&(d[D]=!0,B(Yk(D,String(A._x_20)))));q.vtp_enableRecaptcha&&E("require","recaptcha","recaptcha.js");(function(oa,Z){void 0!==q[Z]&&E("set",oa,q[Z])})("nonInteraction","vtp_nonInteraction");P("contentGroup",t);P("dimension",v);P("metric",x);var L={};l(A,L,!1)&&E("set",L);var W;
q.vtp_enableLinkId&&E("require","linkid","linkid.js");E("set","hitCallback",function(){var oa=A&&A.hitCallback;Ra(oa)&&oa();q.vtp_gtmOnSuccess()});var aa=function(oa,Z){return void 0===q[oa]?u[Z]:q[oa]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(E("require","ec","ec.js"),Q());var ua={hitType:"event",eventCategory:String(aa("vtp_eventCategory","category")),eventAction:String(aa("vtp_eventAction","action")),eventLabel:J(String,
aa("vtp_eventLabel","label")),eventValue:J(fb,aa("vtp_eventValue","value"))};l(W,ua,!1);E("send",ua);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(E("require","ec","ec.js"),Q());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var Pa="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","displayfeatures",void 0,{cookieName:Pa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var kb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","adfeatures",{cookieName:kb})}W?E("send","pageview",W):E("send","pageview");
q.vtp_autoLinkDomains&&Uk(C,q.vtp_autoLinkDomains,!!q.vtp_useHashAutoLink,!!q.vtp_decorateFormsAutoLink);gb(A.urlPassthrough)&&Vk(C)}if(!c){var rb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(rb="internal/"+rb);c=!0;var Ob=Sl(A._x_19,"/analytics.js"),cb=Yj("https:","http:","//www.google-analytics.com/"+rb,A&&!!A.forceSSL);O("analytics.js"===rb&&Ob?Ob:cb,function(){var oa=
Rk();oa&&oa.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else M(q.vtp_gtmOnFailure)};(function(q){Y.__ua=q;Y.__ua.i="ua";Y.__ua.m=!0;Y.__ua.priorityOverride=0})(function(q){Ig(function(){p(q)},
[I.K,I.C])})}();
Y.h.jel=["google"],function(){(function(a){Y.__jel=a;Y.__jel.i="jel";Y.__jel.m=!0;Y.__jel.priorityOverride=0})(function(a){if(!Hr("jel")){var b=R("self"),c=b.onerror;b.onerror=function(d,e,f,g,h){c&&c(d,e,f,g,h);Cr({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":f});return!1};Ir("jel")}M(a.vtp_gtmOnSuccess)})}();

Y.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.i="inject_script";Y.__inject_script.m=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!k(f))throw d(e,{},"Script URL must be a string.");try{if(Te(ch(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},O:a}})}();


Y.h.opt=["google"],function(){var a;(function(b){Y.__opt=b;Y.__opt.i="opt";Y.__opt.m=!0;Y.__opt.priorityOverride=0})(function(b){var c={};if(b.vtp_gaSettings){var d=b.vtp_gaSettings;G(qs(d.vtp_fieldsToSet,"fieldName","value"),c);b.vtp_gaSettings=null;d.vtp_fieldsToSet=void 0;var e=G(d);b=G(b,e)||{}}G(qs(b.vtp_fieldsToSet,"fieldName","value"),c);var f=Tk(b.vtp_functionName);if(Ra(f)){f.r=!0;var g="",h="";b.vtp_setTrackerName&&
"string"===typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(h=b.vtp_trackerName,g=h+"."):(h="gtm"+Lh(),g=h+".");var l={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},m={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,
javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},p=function(x,y,w){var A=0,B;for(B in x)if(x.hasOwnProperty(B)&&(w&&l[B]||!w&&void 0===l[B])){var C=m[B]?gb(x[B]):x[B];"anonymizeIp"!==B||C||(C=void 0);y[B]=C;A++}return A},q={name:h};p(c,q,!0);var r={"&gtm":hm(!0)};p(c,r,!1);var u=encodeURI(Yj("https:","http:","//www.google-analytics.com/"+(b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!c.forceSSL));f("create",b.vtp_trackingId,q);f(g+
"set",r);f(g+"require",b.vtp_optimizeContainerId,{dataLayer:"dataLayer"});f(b.vtp_gtmOnSuccess);f(g+"require","render");a||(a=!0,O(u,function(){return Rk().loaded||b.vtp_gtmOnFailure()},b.vtp_gtmOnFailure));var t=R("dataLayer"),v=t&&t.hide;v&&(v.end||!0===v["GTM-NSGRLVC"])&&(v[b.vtp_optimizeContainerId]=!0)}else M(b.vtp_gtmOnFailure)})}();
Y.h.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.i="cid";Y.__cid.m=!0;Y.__cid.priorityOverride=0})(function(){return pe.F})}();

Y.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"],b=!1;(function(c){Y.__gclidw=c;Y.__gclidw.i="gclidw";Y.__gclidw.m=!0;Y.__gclidw.priorityOverride=100})(function(c){M(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||jj())&&Dj(a,l));Bj(l);Fj(["aw","dc"],l);b?Pj(h,l):Qj(h,l);var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var p=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Ej(a,p,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var q=Br(I.P);Qm({Fd:!1,na:void 0!=
q&&!1!==q,Fc:l,Mc:!0});c.vtp_enableUrlPassthroughFeature&&c.vtp_enableUrlPassthrough&&Hj()});}();


Y.h.aev=["google"],function(){function a(u,t){var v=Xh(u,"gtm");if(v)return v[t]}function b(u,t,v,x){x||(x="element");var y=u+"."+t,w;if(p.hasOwnProperty(y))w=p[y];else{var A=a(u,x);if(A&&(w=v(A),p[y]=w,q.push(y),35<q.length)){var B=q.shift();delete p[B]}}return w}function c(u,t,v){var x=a(u,r[t]);return void 0!==x?x:v}function d(u,t){if(!u)return!1;var v=e(yr());Ta(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var x=[v],y=0;y<t.length;y++){var w=t[y];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(B){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(u))return!1}else{var A=w;if(0!=A.length){if(0<=e(u).indexOf(A))return!1;x.push(e(A))}}}return!ps(u,x)}function e(u){m.test(u)||(u="http://"+u);return ah(ch(u),"HOST",!0)}function f(u,t,v){switch(u){case "SUBMIT_TEXT":return b(t,"FORM."+u,g,"formSubmitElement")||v;case "LENGTH":var x=b(t,"FORM."+u,h);return void 0===x?v:x;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",
v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var w=a(t,"interactSequenceNumber");return void 0===w?v:w;default:return v}}function g(u){switch(u.tagName.toLowerCase()){case "input":return bg(u,"value");case "button":return cg(u);default:return null}}function h(u){if("form"===u.tagName.toLowerCase()&&u.elements){for(var t=0,v=0;v<u.elements.length;v++)ir(u.elements[v])&&
t++;return t}}function l(u,t,v){var x=a(u,"interactedFormField");return x&&bg(x,t)||v}var m=/^https?:\/\//i,p={},q=[],r={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(u){Y.__aev=u;Y.__aev.i="aev";Y.__aev.m=!0;Y.__aev.priorityOverride=
0})(function(u){var t=u.vtp_gtmEventId,v=u.vtp_defaultValue,x=u.vtp_varType;switch(x){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||v;case "TEXT":return b(t,x,cg)||v;case "URL":var w;a:{var A=String(a(t,"elementUrl")||v||""),B=ch(A),C=String(u.vtp_component||"URL");switch(C){case "URL":w=A;break a;case "IS_OUTBOUND":w=d(A,u.vtp_affiliatedDomains);break a;default:w=ah(B,C,u.vtp_stripWww,u.vtp_defaultPages,u.vtp_queryKey)}}return w;case "ATTRIBUTE":var D;if(void 0===u.vtp_attribute)D=c(t,
x,v);else{var E=u.vtp_attribute,J=a(t,"element");D=J&&bg(J,E)||v||""}return D;case "MD":var P=u.vtp_mdValue,Q=b(t,"MD",rr);return P&&Q?ur(Q,P)||v:Q||v;case "FORM":return f(String(u.vtp_component||"SUBMIT_TEXT"),t,v);default:var V=c(t,x,v);Lr(V,"aev",u.vtp_gtmEventId);return V}})}();Y.h.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.i="gas";Y.__gas.m=!0;Y.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[sd.Ra]=null;c[sd.Kg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Y.h.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=R("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){Y.__awct=g;Y.__awct.i="awct";Y.__awct.m=!0;Y.__awct.priorityOverride=
0})(function(g){function h(C,D,E){return"DATA_LAYER"===C?Br(E):g[D]}function l(){v("gdpr_consent",Lm()),v("gdpr",Mm());}function m(){var C=[];return C}function p(C){var D=!0,E=[];if(C){E=m();}D&&b.push(r)}function q(){}Mk();var r={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,google_conversion_label:g.vtp_conversionLabel,google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:hm()};r.google_gtm_experiments={capi:!0};
g.vtp_rdp&&(r.google_restricted_data_processing=!0);void 0!=Br(I.P)&&!1!==Br(I.P)&&(r.google_gtm_url_processor=function(C){return C=mk(C)});var u=function(C){return function(D,E,J){var P=h(C,E,J);P&&(r[D]=P)}},t=u("JSON");t("google_conversion_currency","vtp_currencyCode");t("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(t=u(g.vtp_productReportingDataSource),t("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),t("google_basket_feed_country","vtp_awFeedCountry",
"aw_feed_country"),t("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),t("google_basket_discount","vtp_discount","discount"),t("google_conversion_items","vtp_items","items"),r.google_conversion_items&&r.google_conversion_items.map&&(r.google_conversion_items=r.google_conversion_items.map(function(C){return{value:C.price,quantity:C.quantity,item_id:C.id}})));var v=function(C,D){void 0!==D&&((r.google_additional_conversion_params=r.google_additional_conversion_params||{})[C]=D)},
x=function(C){return function(D,E,J,P){var Q=h(C,E,J);P(Q)&&v(D,Q)}};(function(){if(!g.vtp_enableShippingData)return;v("delopc",g.vtp_deliveryPostalCode);v("oedeld",g.vtp_estimatedDeliveryDate);v("delc",g.vtp_deliveryCountry);v("shf",g.vtp_shippingFee);if(g.vtp_enableProductReporting){var C=
h(g.vtp_productReportingDataSource,"vtp_items","items");v("iedeld",ok(C))}})();g.vtp_transportUrl&&(r.google_transport_url=g.vtp_transportUrl);var A=Sl(g.vtp_transportUrl,"/pagead/conversion_async.js");A||(A=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");g.vtp_enableNewCustomerReporting&&(t=x(g.vtp_newCustomerReportingDataSource),t("vdnc",
"vtp_awNewCustomer","new_customer",function(C){return void 0!=C&&""!==C}),t("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(C){return void 0!=C&&""!==C}));var B=!g.hasOwnProperty("vtp_enableConversionLinker")||g.vtp_enableConversionLinker;B?(g.vtp_conversionCookiePrefix&&(r.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),r.google_read_gcl_cookie_opt_out=!1):r.google_read_gcl_cookie_opt_out=!0;"1"===cj(!1)._up&&v("gtm_up","1");l();(function(){var C=!1;!wg()||C?p(!0):Ig(function(){l();var D=Fg(I.C),E=void 0!=Br(I.P)&&!1!==Br(I.P),J=!1;g.vtp_transportUrl||D||!E&&!J||(r.google_transport_url="https://pagead2.googlesyndication.com/");v("gcs",Gg());q();p(D);D||Ag(function(){l();r=G(r);!g.vtp_transportUrl&&r.google_transport_url&&delete r.google_transport_url;
v("gcs",Gg());q();v("gcu","1");p(!0)},I.C)},[I.C])})();a||(a=!0,O(A,f(),e(A)))})}();
Y.h.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.i="remm";Y.__remm.m=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}Lr(f,"remm",a.vtp_gtmEventId);return f})}();Y.h.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.i="smm";Y.__smm.m=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=qs(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;Lr(d,"smm",a.vtp_gtmEventId);return d})}();



Y.h.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.i="paused";Y.__paused.m=!0;Y.__paused.priorityOverride=0})(function(a){M(a.vtp_gtmOnFailure)})}();
Y.h.hid=["google"],function(){(function(a){Y.__hid=a;Y.__hid.i="hid";Y.__hid.m=!0;Y.__hid.priorityOverride=0})(function(){return dr.wc})}();
Y.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=K.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,Vf(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(r){M(g)}}}var c=function(d){if(K.body){var e=
d.vtp_gtmOnFailure,f=Mr(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.vh,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(K.body,dg(g),h,e)()}else wr(function(){c(d)},
200)};Y.__html=c;Y.__html.i="html";Y.__html.m=!0;Y.__html.priorityOverride=0}();

Y.h.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.i="dbg";Y.__dbg.m=!0;Y.__dbg.priorityOverride=0})(function(){return!1})}();




Y.h.evl=["google"],function(){function a(){var f=Number(Br("gtm.start"))||0;return xr().getTime()-f}function b(f,g,h,l){function m(){if(!Og(f.target)){g.has(d.zc)||g.set(d.zc,""+a());g.has(d.ud)||g.set(d.ud,""+a());var q=0;g.has(d.Bc)&&(q=Number(g.get(d.Bc)));q+=100;g.set(d.Bc,""+q);if(q>=h){var r=ro(f.target,"gtm.elementVisibility",[g.g]),u=Qg(f.target);r["gtm.visibleRatio"]=Math.round(1E3*u)/10;r["gtm.visibleTime"]=h;r["gtm.visibleFirstTime"]=Number(g.get(d.ud));r["gtm.visibleLastTime"]=Number(g.get(d.zc));
Cr(r);l()}}}if(!g.has(d.Hb)&&(0==h&&m(),!g.has(d.hb))){var p=R("self").setInterval(m,100);g.set(d.Hb,p)}}function c(f){f.has(d.Hb)&&(R("self").clearInterval(Number(f.get(d.Hb))),f.o(d.Hb))}var d={Hb:"polling-id-",ud:"first-on-screen-",zc:"recent-on-screen-",Bc:"total-visible-time-",hb:"has-fired-"},e=function(f,g){this.element=f;this.g=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.g)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.g)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.g,g)};e.prototype.o=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.g)};(function(f){Y.__evl=f;Y.__evl.i="evl";Y.__evl.m=!0;Y.__evl.priorityOverride=0})(function(f){function g(){var y=!1,w=null;if("CSS"===l){try{w=Kg(m)}catch(E){zf(46)}y=!!w&&v.length!=w.length}else if("ID"===l){var A=K.getElementById(m);A&&(w=[A],y=1!=v.length||v[0]!==A)}w||(w=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var C=
new e(v[B],u);c(C)}v=[];for(var D=0;D<w.length;D++)v.push(w[D]);0<=x&&Wg(x);0<v.length&&(x=Vg(h,v,[r]))}}function h(y){var w=new e(y.target,u);y.intersectionRatio>=r?w.has(d.hb)||b(y,w,q,"ONCE"===t?function(){for(var A=0;A<v.length;A++){var B=new e(v[A],u);B.set(d.hb,"1");c(B)}Wg(x);if(p&&Yo)for(var C=0;C<Yo.length;C++)Yo[C]===g&&Yo.splice(C,1)}:function(){w.set(d.hb,"1");c(w)}):(c(w),"MANY_PER_ELEMENT"===t&&w.has(d.hb)&&(w.o(d.hb),w.o(d.Bc)),w.o(d.zc))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var p=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,r=(Number(f.vtp_onScreenRatio)||50)/100,u=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,v=[],x=-1;g();p&&Zo(g);M(f.vtp_gtmOnSuccess)})}();


var $u={};$u.macro=function(a){if(dr.yd.hasOwnProperty(a))return dr.yd[a]},$u.onHtmlSuccess=dr.yf(!0),$u.onHtmlFailure=dr.yf(!1);$u.dataLayer=Sh;$u.callback=function(a){Jh.hasOwnProperty(a)&&Ra(Jh[a])&&Jh[a]();delete Jh[a]};$u.bootstrap=0;$u._spx=!1;function av(){N[pe.F]=$u;pb(Kh,Y.h);Wd=Wd||dr;Xd=le}
function bv(){hg.gtag_cs_api=!0;N=n.google_tag_manager=n.google_tag_manager||{};Jm();if(N[pe.F]){var a=N.zones;a&&a.unregisterChild(pe.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Sd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Rd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],q={},r=0;r<p.length;r++)q[p[r][0]]=Array.prototype.slice.call(p[r],1);Qd.push(q)}Ud=Y;Vd=ls;var u=data.permissions||{},t=data.sandboxed_scripts,v=data.security_groups;kq();te=new se(u);if(void 0!==
t)for(var x=["sandboxedScripts"],y=0;y<t.length;y++){var w=t[y].replace(/^_*/,"");Kh[w]=x}nq(v);av();cr();Ak=!1;Bk=0;if("interactive"==K.readyState&&!K.createEventObject||"complete"==K.readyState)Dk();else{$f(K,"DOMContentLoaded",Dk);$f(K,"readystatechange",Dk);if(K.createEventObject&&K.documentElement.doScroll){var A=!0;try{A=!n.frameElement}catch(E){}A&&Ek()}$f(n,"load",Dk)}tp=!1;"complete"===K.readyState?vp():$f(n,"load",vp);a:{if(!vl)break a;n.setInterval(wl,864E5);}
Hh=(new Date).getTime();}}
(function(a){if(!n["__TAGGY_INSTALLED"]){var b=!1;if(K.referrer){var c=ch(K.referrer);b="cct.google"===$g(c,"host")}if(!b){var d=fi("googTaggyReferrer");b=d.length&&d[0].length}b&&(n["__TAGGY_INSTALLED"]=!0,Wf("https://cct.google/taggy/agent.js"))}var f=function(){var m=n["google.tagmanager.debugui2.queue"];m||(m=[],n["google.tagmanager.debugui2.queue"]=m,Wf("https://www.googletagmanager.com/debug/bootstrap"));return m},g="x"===ah(n.location,"query",!1,void 0,"gtm_debug");if(!g&&K.referrer){var h=ch(K.referrer);g="tagassistant.google.com"===$g(h,"host")}if(!g){var l=fi("__TAG_ASSISTANT");g=l.length&&l[0].length}n.__TAG_ASSISTANT_API&&(g=!0);g&&Tf?f().push({messageType:"CONTAINER_STARTING",
data:{scriptSource:Tf,resume:function(){a()}}}):a()})(bv);

})()
