//메뉴 토글, 호버
function subMenuShow() {
  const menus = document.querySelectorAll(".menu-title");

  menus.forEach((menu) => {
    const subMenu = menu.querySelector(".sub-box");
    if (!subMenu) return;

    menu.addEventListener("mouseenter", () => {
      subMenu.classList.add("show");
    });

    menu.addEventListener("mouseleave", () => {
      subMenu.classList.remove("show");
    });

    menu.addEventListener("click", () => {
      subMenu.classList.toggle("show");
    });
  });
}

subMenuShow();

// top 버튼
const toTopBtn = document.getElementById("btnTop");

// 스크롤 위치를 감지해서 버튼 표시/숨김
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
});

// 버튼 클릭 시 부드럽게 위로 이동
toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
