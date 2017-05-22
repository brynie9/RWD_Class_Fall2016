
viewEl = document.getElementById('view-width');
deviceEl = document.getElementById('device-width');


window.onresize = function() {
  viewEl.textContent = window.innerWidth;
  deviceEl.textContent = screen.width;
};
