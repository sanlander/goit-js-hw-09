!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire7bc7=n);var i=n("h6c0i");function r(e,t){return new Promise((function(o,n){var i=Math.random()>.3;setTimeout((function(){i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}var u={firstDelay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),form:document.querySelector('button[type="submit"]')};u.form.addEventListener("click",(function(e){e.preventDefault();for(var t=Number(u.amount.value),o=Number(u.step.value),n=Number(u.firstDelay.value),a=0;a<t;a+=1)r(a+1,n).then((function(e){var t=e.position,o=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"),{position:"right-top",fontSize:"14px",timeout:2e3})})).catch((function(e){var t=e.position,o=e.delay;i.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"),{position:"right-top",fontSize:"14px",timeout:2e3})})),n+=o}))}();
//# sourceMappingURL=03-promises.9e32ead8.js.map
