function toggleEnvelope() {
  document.getElementById("envelope").classList.toggle("open");
}

const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const hero = document.getElementById("hero-section");
const story = document.getElementById("story-section");

yesBtn.onclick = () => {
  hero.style.display = "none";
  story.style.display = "block";
};

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
