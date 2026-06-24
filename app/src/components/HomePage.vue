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
        </div>
      </div>

      <div class="right-content">
        <div class="intro">
          <h1 class="headline">陳品吟</h1>
          <div class="subtitle">
            <h2>DevOps Engineer</h2>
            <!-- <p>每條Message都是線索，每段LOG都能還原現場。</p>
            <p>解開真相，只需要一點耐心與一支鍵盤。</p>
            <p class="highlight">「我不抓兇手，我抓錯誤。」</p> -->
          </div>
          
          <div class="action-buttons">
            <RouterLink to="/about" class="btn">ABOUT</RouterLink>
            <RouterLink to="/experience" class="btn">EXPERIENCE</RouterLink>
            <RouterLink to="/projects" class="btn">PROJECTS</RouterLink>
            <RouterLink to="/contact" class="btn">CONTACT</RouterLink>
          </div>

          <div class="social-links">
            <!-- <a href="#" class="social-icon" title="LinkedIn">IN</a> -->
            <!-- <a href="https://github.com/Chenxpy/Construction-site-safety-image-recognition" class="social-icon" title="GitHub">GH</a> -->
            <!-- <a href="#" class="social-icon" title="Twitter">TW</a> -->
            <!-- <a href="#" class="social-icon" title="Instagram">IG</a> -->
          </div>
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

/* Left Board */
.left-board {
  flex: 1;
  position: relative;
  overflow: hidden;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
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
  max-width: 600px;
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
  left: 60%;
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

/* Right Content */
.right-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 6rem;
  background: linear-gradient(to right, #0a0a0a, #111);
  position: relative;
}

.intro {
  max-width: 500px;
  animation: fadeIn 1.5s ease-out forwards;
}

.headline {
  font-family: "Times New Roman", Times, serif;
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 2rem;
  font-weight: normal;
  color: #f5f5f5;
}

.subtitle {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  color: #a09d96;
}

.subtitle p {
  margin: 0 0 0.5rem 0;
}

.highlight {
  color: #a40b0b;
  font-style: italic;
  display: inline-block;
  margin-top: 1rem;
}

.action-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 4rem;
}

.btn {
  display: inline-block;
  padding: 1rem;
  border: 1px solid rgba(224, 220, 211, 0.3);
  color: #e0dcd3;
  text-align: center;
  font-size: 0.9rem;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  background: transparent;
}

.btn:hover {
  border-color: #a40b0b;
  background-color: rgba(164, 11, 11, 0.1);
  color: #fff;
}

.social-links {
  display: flex;
  gap: 2rem;
}

.social-icon {
  font-size: 0.9rem;
  letter-spacing: 1px;
  color: #666;
  transition: color 0.3s ease;
  position: relative;
}

.social-icon:hover {
  color: #e0dcd3;
}

.social-icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -15px;
  width: 10px;
  height: 1px;
  background-color: #a40b0b;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-icon:hover::before {
  opacity: 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .main-content {
    flex-direction: column;
  }
  
  .left-board {
    min-height: 50vh;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .right-content {
    padding: 4rem 2rem;
  }
  
  .header {
    padding: 1.5rem 2rem;
  }
  
  .headline {
    font-size: 2.5rem;
  }
}

@media (max-width: 600px) {
  .action-buttons {
    grid-template-columns: 1fr;
  }
  
  .portrait-card {
    width: 220px;
  }
  
  .img-wrapper {
    height: 250px;
  }
}
</style>
