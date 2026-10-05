(function () {
  var el = document.getElementById("typed-text");
  if (!el || typeof Typed === "undefined") return;

  new Typed(el, {
    strings: ["با عضویت در سایت", "فقط در فصل تابستان", "به مدت محدود"],
    typeSpeed: 70,
    backSpeed: 35,
    backDelay: 1500,
    startDelay: 300,
    loop: true,
    showCursor: true,
    cursorChar: "|"
  });
})();
