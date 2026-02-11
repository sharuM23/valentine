document.addEventListener("DOMContentLoaded", () => {

  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");
  const hero = document.getElementById("hero-section");
  const story = document.getElementById("story-section");
  const envelope = document.getElementById("envelope");
  const envWrap = document.getElementById("env-wrap");

  envWrap.addEventListener("click", () => {
    envelope.classList.toggle("open");
  });

  let initialMove = false;

  function moveNo(e) {
    if (!initialMove) {
      const rect = noBtn.getBoundingClientRect();
      noBtn.style.left = rect.left + "px";
      noBtn.style.top = rect.top + "px";
      noBtn.style.position = "fixed";
      initialMove = true;
    }

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
  }

  noBtn.addEventListener("mouseenter", moveNo);
  noBtn.addEventListener("touchstart", moveNo, { passive:false });

  yesBtn.addEventListener("click", () => {
    hero.style.display = "none";
    story.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});
