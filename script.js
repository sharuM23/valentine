document.addEventListener("DOMContentLoaded", () => {

  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");
  const hero = document.getElementById("hero-section");
  const story = document.getElementById("story-section");
  const envelope = document.getElementById("envelope");
  const envWrap = document.getElementById("env-wrap");

  // envelope
  envWrap.onclick = () => envelope.classList.toggle("open");

  // smooth fluid no button
  let initialMove = false;

  function moveNo() {

    const pad = 30;
    const maxX = window.innerWidth - noBtn.offsetWidth - pad;
    const maxY = window.innerHeight - noBtn.offsetHeight - pad;

    if (!initialMove) {
      const r = noBtn.getBoundingClientRect();
      noBtn.style.position = "fixed";
      noBtn.style.left = r.left + "px";
      noBtn.style.top = r.top + "px";
      initialMove = true;
    }

    noBtn.style.transition =
      "left .45s cubic-bezier(.22,.8,.25,1), top .45s cubic-bezier(.22,.8,.25,1)";

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
  }

  noBtn.addEventListener("mouseenter", moveNo);
  noBtn.addEventListener("pointerdown", moveNo);
  noBtn.addEventListener("touchstart", moveNo, { passive:false });

  // yes click
  yesBtn.onclick = () => {
    hero.style.display = "none";
    story.style.display = "block";
    window.scrollTo({ top:0, behavior:"smooth" });
  };

});
