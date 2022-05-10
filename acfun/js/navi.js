let navi = document.getElementById("id-navi");
let naviFirstDiv = navi.children;
let subNavi = document.getElementById("id-sub-nav");
let subNaviUl = subNavi.children;
const divs = [];
const uls = [];
for (const div of naviFirstDiv) {
  divs.push(div);
}
for (const ul of subNaviUl) {
  uls.push(ul);
}
let lastOver = 0;
let subNavShow = false;
let nowFocus = 0;
divs.forEach((el, indx) => {
  el.addEventListener("mouseenter", function (e) {
    if (nowFocus != indx) {
      divs[lastOver].className = "";
      el.className = "navi-focus";
      nowFocus = indx;
    }
    if (lastOver != indx) {
      uls[lastOver].style.display = "none";
      subNavi.style.display = "none";
      lastOver = indx;
    }
    subNavi.style.display = "inline";
    uls[indx].style.display = "flex";
    subNavShow = true;
  });
  navi.addEventListener("mouseleave", function () {
    if (!subNavShow) {
      uls[indx].style.display = "none";
      subNavi.style.display = "none";
    }
  });
  subNavi.addEventListener("mouseleave", function () {
    uls[indx].style.display = "none";
    subNavi.style.display = "none";
  });
});
