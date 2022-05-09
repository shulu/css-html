window.onload = function (e) {
    document.onmousemove = function (event) {
      var windowX = window.innerWidth;
      var x = event.clientX;
      var y = event.clientY;
      console.log(x);
      var banner = document.getElementById("id-banner-float");
      if (y > 70 && y < 250) {
        banner.style.display = "flex";

        bannerTop = y - 104;
        if (bannerTop <= 0) {
          bannerTop = 0;
        } else if (bannerTop >= 140) {
          bannerTop = 140;
        }
        bannerLeft = x + 10;
        if (bannerLeft + 270 >= windowX) {
          bannerLeft = bannerLeft - 320;
        }
        banner.style.top = bannerTop + "px";
        banner.style.left = bannerLeft + "px";
      } else {
        banner.style.display = "none";
      }
    };
}