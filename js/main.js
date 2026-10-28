(function () {
  var d = document.getElementById("ikigai-dialog");
  var openBtn = document.getElementById("ikigai-open");
  var closeBtn = document.getElementById("ikigai-close");
  if (!d || !openBtn || typeof d.showModal !== "function") { if (openBtn) openBtn.hidden = true; return; }
  openBtn.addEventListener("click", function () { d.showModal(); });
  closeBtn.addEventListener("click", function () { d.close(); });
  d.addEventListener("click", function (e) { var r = d.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) { d.close(); } });
})();
