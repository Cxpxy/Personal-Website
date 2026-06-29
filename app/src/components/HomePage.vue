<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="landing-page">
    <header class="header">
      <div class="brand">CHEN PIN-YIN</div>
      <nav class="nav">
        <a href="#" class="active">HOME</a>
      </nav>
    </header>

    <main class="main-content">
      <div class="left-board">
        <div class="board-bg"></div>
        <div class="evidence-collage">
          <!-- Red strings -->
          <svg class="red-strings" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="15" y1="25" x2="75" y2="65" stroke="#a40b0b" stroke-width="0.8" stroke-dasharray="2,1" />
            <line x1="75" y1="65" x2="35" y2="85" stroke="#a40b0b" stroke-width="0.6" />
            <line x1="15" y1="25" x2="35" y2="85" stroke="#a40b0b" stroke-width="0.5" />
            <line x1="85" y1="20" x2="75" y2="65" stroke="#a40b0b" stroke-width="0.7" />
          </svg>
          
          <!-- Pinned notes -->
          <div class="note note-1">
            <div class="pin"></div>
            <p>LOG #404</p>
          </div>
          <div class="note note-2">
            <div class="pin"></div>
            <p>Trace found...</p>
          </div>
          <div class="note note-3">
            <div class="pin"></div>
            <img src="../assets/images/paper.png" alt="paper scrap" class="paper-scrap" />
          </div>

          <!-- Main portrait -->
          <div class="portrait-card">
            <div class="tape tape-top-left"></div>
            <div class="tape tape-top-right"></div>
            <div class="img-wrapper">
              <img src="../assets/images/photo2.jpg" alt="Chen Pin-Yin" class="portrait-img" />
              <div class="grain-overlay"></div>
            </div>
            <div class="card-text">SUBJECT: C.P.Y.</div>
          </div>

          <!-- Navigation Links as Sticky Notes -->
          <RouterLink to="/about" class="sticky-link link-1">
            <div class="pin"></div>
            <span>ABOUT</span>
          </RouterLink>
          <RouterLink to="/experience" class="sticky-link link-2">
            <div class="pin"></div>
            <span>EXPERIENCE</span>
          </RouterLink>
          <RouterLink to="/projects" class="sticky-link link-3">
            <div class="pin"></div>
            <span>PROJECTS</span>
          </RouterLink>
          <RouterLink to="/contact" class="sticky-link link-4">
            <div class="pin"></div>
            <span>CONTACT</span>
          </RouterLink>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #0a0a0a;
  color: #e0dcd3;
  font-family: "Courier New", Courier, monospace, system-ui, sans-serif;
  overflow: hidden;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  mix-blend-mode: difference;
}

.brand {
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 4px;
}

.nav a {
  font-size: 1rem;
  letter-spacing: 2px;
  text-decoration: none;
  color: #e0dcd3;
  position: relative;
}

.nav a.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #a40b0b;
}

.main-content {
  display: flex;
  flex: 1;
  min-height: 100vh;
}

/* Left Board (Now Full Screen) */
.left-board {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.board-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/home_background.jpg");
  background-size: cover;
  background-position: center;
  filter: grayscale(80%) brightness(0.3) contrast(1.2);
  z-index: 0;
}

.board-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 0%, #0a0a0a 100%);
}

.evidence-collage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 800px;
  z-index: 1;
}

.red-strings {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  filter: drop-shadow(2px 4px 4px rgba(0,0,0,0.5));
}

.note {
  position: absolute;
  background-color: #d4cbb3;
  color: #1a1a1a;
  padding: 1rem;
  box-shadow: 2px 4px 10px rgba(0,0,0,0.5);
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 2;
}

.pin {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background-color: #a40b0b;
  border-radius: 50%;
  box-shadow: inset -1px -1px 2px rgba(0,0,0,0.5), 1px 2px 3px rgba(0,0,0,0.4);
}

.note-1 {
  top: 20%;
  left: 10%;
  transform: rotate(-5deg);
  width: 120px;
  height: 100px;
}

.note-2 {
  bottom: 10%;
  left: 30%;
  transform: rotate(8deg);
  width: 140px;
  height: 80px;
  background-color: #b8b09b;
}

.note-3 {
  top: 15%;
  right: 10%;
  background: transparent;
  box-shadow: none;
  padding: 0;
  width: 150px;
  transform: rotate(3deg);
}

.paper-scrap {
  width: 100%;
  height: auto;
  filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.6)) brightness(0.8) sepia(0.3);
}

.portrait-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-2deg);
  background-color: #e8e4d9;
  padding: 15px 15px 40px 15px;
  box-shadow: 5px 10px 20px rgba(0,0,0,0.8);
  z-index: 3;
  width: 280px;
  transition: transform 0.3s ease;
}

.portrait-card:hover {
  transform: translate(-50%, -50%) rotate(0deg) scale(1.02);
}

.img-wrapper {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
}

.portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grain-overlay {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.08;
  pointer-events: none;
  mix-blend-mode: overlay;
}

.card-text {
  position: absolute;
  bottom: 12px;
  left: 15px;
  color: #1a1a1a;
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.tape {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  backdrop-filter: blur(2px);
  z-index: 4;
}

.tape-top-left {
  top: -10px;
  left: -10px;
  width: 80px;
  height: 25px;
  transform: rotate(-45deg);
}

.tape-top-right {
  top: -10px;
  right: -10px;
  width: 80px;
  height: 25px;
  transform: rotate(45deg);
}

/* Sticky Note Links */
.sticky-link {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d4cbb3;
  color: #1a1a1a;
  padding: 1.5rem 2rem;
  box-shadow: 2px 4px 10px rgba(0,0,0,0.5);
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 2px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  --rotation: 0deg;
  transform: rotate(var(--rotation));
  z-index: 5;
}

.sticky-link:hover, .sticky-link:focus-visible {
  transform: scale(1.1) rotate(var(--rotation));
  box-shadow: 4px 8px 15px rgba(0,0,0,0.6);
  background-color: #e8e4d9;
  outline: 2px solid #a40b0b;
  outline-offset: 4px;
  z-index: 10;
}

.link-1 {
  --rotation: -5deg;
  top: 12%;
  left: 30%;
}

.link-2 {
  --rotation: 4deg;
  background-color: #b8b09b;
  top: 45%;
  right: 8%;
}

.link-3 {
  --rotation: -3deg;
  background-color: #c5bfae;
  bottom: 18%;
  left: 12%;
}

.link-4 {
  --rotation: 6deg;
  bottom: 12%;
  right: 25%;
}

/* Responsive */
@media (max-width: 1024px) {
  .header {
    padding: 1.5rem 2rem;
  }
}

@media (max-width: 768px) {
  .evidence-collage {
    transform: translate(-50%, -50%) scale(0.8);
  }
}

@media (max-width: 600px) {
  .evidence-collage {
    transform: translate(-50%, -50%) scale(0.65);
  }
  
  .portrait-card {
    width: 220px;
  }
  
  .img-wrapper {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .evidence-collage {
    transform: translate(-50%, -50%) scale(0.55);
  }
}
</style>
