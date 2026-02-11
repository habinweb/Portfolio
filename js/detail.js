//토글 누르면 나옴
const btn = document.querySelector(".toggle");
const panel = document.querySelector("#mobile-preview");

if (btn && panel) {
  const icon = btn.querySelector(".toggle-icon");
  const text = btn.querySelector(".toggle-text");

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;

    if (icon) icon.textContent = isOpen ? "▲" : "▼";
    if (text)
      text.textContent = isOpen ? "View Mobile Screen" : "Close Mobile Preview";
  });
}

//링크
document.querySelectorAll(".project-link").forEach((item) => {
  item.addEventListener("mouseenter", () => item.classList.add("is-hover"));
  item.addEventListener("mouseleave", () => item.classList.remove("is-hover"));
});

const video = document.querySelector(".results-img-video.speed");
video.playbackRate = 0.6; // 기본 1.0

//btn 박스 인덱스 계산
const indexImgs = document.querySelectorAll(".main-top-img");
const indexBtns = document.querySelectorAll(".indexBtn");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let currentIndex = 0;
const total = indexImgs.length;

function render(index) {
  // 이미지 on
  indexImgs.forEach((img) => img.classList.remove("on"));
  indexImgs[index].classList.add("on");

  // 버튼 active
  indexBtns.forEach((b) => b.classList.remove("active"));
  if (indexBtns[index]) indexBtns[index].classList.add("active");
}

// 버튼 클릭 → 그 인덱스로 이동
indexBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    currentIndex = idx;
    render(currentIndex);
  });
});

// prev
prevBtn?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + total) % total;
  render(currentIndex);
});

// next
nextBtn?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % total;
  render(currentIndex);
});

// 초기 표시
render(currentIndex);
