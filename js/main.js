//비디오
const videos = document.querySelectorAll(
  ".project-contents-item-mp4, .project-contents-item-mp4--mobile",
);

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
