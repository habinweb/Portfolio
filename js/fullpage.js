document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const box = document.querySelector(".profile-txt-box");
  const resume = document.querySelector("#resume");
  if (!hero || !box || !resume) return;

  const isAtTop = () => window.scrollY <= 2;

  let busy = false;
  let step = 0;

  const run = () => {
    if (busy) return;

    if (step === 0) {
      busy = true;
      hero.classList.add("active");
      setTimeout(() => {
        busy = false;
        step = 1;
      }, 900);
      return;
    }

    if (step === 1) {
      busy = true;
      box.classList.add("top");
      setTimeout(() => {
        resume.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          step = 2;
          busy = false;
          window.removeEventListener("wheel", onWheel, { passive: false });
        }, 3000);
      }, 1500);
    }
  };

  const onWheel = (e) => {
    if (!isAtTop()) return;
    if (step >= 2) return;

    if (e.cancelable) e.preventDefault();
    if ((e.deltaY || 0) > 0) run();
  };

  window.addEventListener("wheel", onWheel, { passive: false });
});
