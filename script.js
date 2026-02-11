@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&family=Dancing+Script:wght@700&display=swap");

body {
  background-color: #fff0f3;
  margin: 0;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

/* Existing Decorators */
.calendar-mini {
  position: absolute;
  top: 20px;
  right: 40px;
  width: 70px;
  height: 80px;
  background: white;
  border-radius: 8px;
  border: 3px solid #ff4d6d;
  transform: rotate(10deg);
  z-index: 100;
  box-shadow: 4px 4px 0px #ffccd5;
  text-align: center;
}
.cal-top {
  background: #ff4d6d;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px 4px 0 0;
}
.cal-body {
  font-size: 28px;
  font-weight: 800;
  color: #ff4d6d;
  line-height: 50px;
}
.xoxo-decor {
  position: absolute;
  font-family: "Dancing Script", cursive;
  font-size: 28px;
  color: #ff4d6d;
  font-weight: bold;
  opacity: 0.4;
  z-index: 100;
  pointer-events: none;
}
.x-home {
  bottom: 10%;
  right: 10%;
  transform: rotate(-15deg);
}
.x-story {
  top: 5%;
  right: 5%;
  transform: rotate(15deg);
}

/* Card Styling & Floating Animation */
.card {
  background: white;
  padding: 35px;
  border-radius: 30px;
  text-align: center;
  width: 90%;
  max-width: 450px;
  margin: 30px auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  animation: floating 4s ease-in-out infinite; /* This makes it feel 'alive' */
}
.wide-card {
  max-width: 550px !important;
}

@keyframes floating {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Staggered Reveal Animation */
.animate-reveal {
  opacity: 0;
  transform: translateY(30px);
  animation: revealIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: var(--delay);
}

@keyframes revealIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Rest of your premium styles */
.premium-border {
  position: relative;
  overflow: hidden;
  border: 2px solid #ffccd5;
}
.corner-ribbon {
  width: 130px;
  background: #ff4d6d;
  color: white;
  text-align: center;
  line-height: 35px;
  font-weight: bold;
  font-size: 12px;
  position: absolute;
  top: 20px;
  right: -30px;
  transform: rotate(45deg);
  z-index: 10;
}
.button-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
  align-items: center;
}
#yes-btn {
  background: #ff4d6d;
  color: white;
  border: none;
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}
#no-btn {
  position: relative;
  transition: all 0.3s;
  z-index: 1000;
  background: white;
  color: #ff4d6d;
  border: 2px solid #ff4d6d;
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
}

/* Envelope Logic */
.envelope-wrapper {
  position: relative;
  width: 280px;
  height: 180px;
  margin: 40px auto;
  perspective: 1000px;
  cursor: pointer;
}
.envelope {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ff4d6d;
  border-radius: 0 0 15px 15px;
  transform-style: preserve-3d;
}
.flap {
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
  border-left: 140px solid transparent;
  border-right: 140px solid transparent;
  border-top: 100px solid #ff758f;
  transform-origin: top;
  transition: transform 0.5s ease-in-out;
  z-index: 5;
}
.envelope.open .flap {
  transform: rotateX(180deg);
  z-index: 1;
}
.body {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ff4d6d;
  z-index: 4;
  border-radius: 0 0 15px 15px;
}
.letter {
  position: absolute;
  bottom: 5px;
  left: 15px;
  width: 250px;
  height: 140px;
  background: white;
  padding: 20px;
  box-sizing: border-box;
  transition: transform 0.7s ease-in-out;
  z-index: 2;
  border-radius: 5px;
}
.envelope.open .letter {
  transform: translateY(-130px);
  z-index: 10;
}
.letter-text {
  color: #ff4d6d;
  font-weight: 600;
  font-size: 14px;
}

/* List Styles */
.date-list {
  list-style: none;
  padding: 0;
}
.pill {
  background: #fff5f7;
  margin: 10px 0;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left;
  transition: 0.3s;
}
.pill:hover {
  transform: scale(1.05);
  background: #ffebee;
}
.gif-sm {
  width: 150px;
}
.footer-centered {
  text-align: center;
  color: #ff4d6d;
  font-weight: bold;
  margin: 40px 0;
}
