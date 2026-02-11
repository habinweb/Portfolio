// index.html의 scroll탭 가로 스크롤
const boxes = document.querySelectorAll(".x-scroll");

boxes.forEach((box) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  box.addEventListener("mousedown", (e) => {
    isDown = true;
    box.classList.add("active");
    startX = e.pageX - box.offsetLeft;
    scrollLeft = box.scrollLeft;
  });

  box.addEventListener("mouseleave", () => {
    isDown = false;
    box.classList.remove("active");
  });

  box.addEventListener("mouseup", () => {
    isDown = false;
    box.classList.remove("active");
  });

  box.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX - box.offsetLeft;
    const walk = (x - startX) * 1.5;
    box.scrollLeft = scrollLeft - walk;
  });
});
// bulkmenu.html의 tab탭 가로 스크롤
