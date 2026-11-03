(function () {
  var d = document.getElementById("ikigai-dialog");
  var openBtn = document.getElementById("ikigai-open");
  var closeBtn = document.getElementById("ikigai-close");
  var frame = document.getElementById("ikigai-frame");
  if (!d || !openBtn || typeof d.showModal !== "function") { if (openBtn) openBtn.hidden = true; return; }
  openBtn.addEventListener("click", function () {
    // Load the Ikigai page only when someone opens it
    if (frame && !frame.getAttribute("src")) { frame.setAttribute("src", frame.getAttribute("data-src")); }
    d.showModal();
  });
  closeBtn.addEventListener("click", function () { d.close(); });
  d.addEventListener("click", function (e) { var r = d.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) { d.close(); } });
})();
