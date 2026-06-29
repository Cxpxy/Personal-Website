<script setup>
import { RouterLink } from 'vue-router'
import letstalkImage from '../assets/images/letstalk-cutout.png'
</script>

<template>
  <div class="contact-page">
    <nav class="subtle-nav">
      <RouterLink to="/" class="back-link">← RETURN</RouterLink>
    </nav>

    <main class="split-layout">
      <!-- Left Side: Evidence Board -->
      <div class="left-board">
        <div class="board-bg"></div>
        <div class="evidence-collage">
          
          <!-- Red Strings -->
          <svg class="red-strings" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line x1="20" y1="20" x2="70" y2="50" stroke="#a40b0b" stroke-width="0.3" stroke-dasharray="1,0.5" />
            <line x1="70" y1="50" x2="30" y2="80" stroke="#a40b0b" stroke-width="0.2" />
            <line x1="30" y1="80" x2="80" y2="80" stroke="#a40b0b" stroke-width="0.2" />
          </svg>

          <!-- Stacked Papers -->
          <img src="../assets/images/element_newspaper_clipping.png" alt="" class="collage-item newspaper-clipping" aria-hidden="true" />
          <img src="../assets/images/element_key_person_note.png" alt="" class="collage-item key-person-note" aria-hidden="true" />

          <!-- Photo Area -->
          <div class="photo-scrap">
            <div class="tape tape-top-left"></div>
            <div class="tape tape-bottom-right"></div>
            <img src="../assets/images/home_background.jpg" alt="Crime scene" class="noir-photo" />
            <div class="pin red-pin pin-top-right"></div>
          </div>

          <!-- Taped Note -->
          <div class="note connect-note">
            <div class="tape tape-top-center"></div>
            <h2>LET'S CONNECT</h2>
            <div class="case-no">CASE NO. 0724-A</div>
          </div>

          <!-- Fingerprint Scrap -->
          <div class="scrap fingerprint-scrap">
            <img src="../assets/images/element_fingerprint.png" alt="Fingerprint" class="fingerprint-img" aria-hidden="true" />
            <div class="pin red-pin pin-top-left"></div>
          </div>

        </div>
      </div>

      <!-- Right Side: Manila Folder -->
      <div class="right-dossier">
        <div class="dossier-bg"></div>
        <div class="paper-texture"></div>
        
        <!-- Vertical Tab -->
        <div class="folder-tab">CONTACT</div>

        <div class="dossier-content">
          <div class="dossier-header">
            <div class="case-file-title">CASE FILE 0724-A</div>
            <h1 class="main-title">CONTACT</h1>
            <p class="subtitle">OPEN TO NEW LEADS AND OPPORTUNITIES.</p>
            <div class="circular-stamp" aria-hidden="true">
              <div class="stamp-inner">CONFIDENTIAL</div>
            </div>
          </div>

          <div class="dossier-body">
            <div class="contact-body-grid">
              <!-- Contact Details List -->
              <div class="contact-details">
                <ul class="contact-list">
                  <li>
                    <div class="icon-col" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div class="text-col">
                      <span class="label">EMAIL</span>
                      <span class="value">amber0520.chen@gmail.com</span>
                    </div>
                  </li>
                  <li>
                    <div class="icon-col" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div class="text-col">
                      <span class="label">LOCATION</span>
                      <span class="value">Taiwan</span>
                    </div>
                  </li>
                  <!-- <li>
                    <div class="icon-col" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div class="text-col">
                      <span class="label">PHONE</span>
                      <a class="value">0968-989-229</a>
                    </div>
                  </li> -->
                  <li>
                    <div class="icon-col" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </div>
                    <div class="text-col">
                      <span class="label">GITHUB</span>
                      <a href="https://github.com/Chenxpy/Construction-site-safety-image-recognition" class="value link">Chenxpy</a>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- Let's Talk Image Area -->
              <div class="letstalk-image-container">
                <div class="tape tape-top-left"></div>
                <div class="tape tape-bottom-right"></div>
                <img :src="letstalkImage" alt="Let's talk contact note" class="letstalk-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  background-color: #111;
  color: #333;
  font-family: "Courier New", Courier, monospace;
  overflow: hidden;
}

.subtle-nav {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
}

.back-link {
  color: #e0dcd3;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 2px;
  transition: color 0.3s;
  text-shadow: 1px 1px 2px #000;
  background: rgba(0,0,0,0.5);
  padding: 5px 10px;
  border: none;
}

.back-link:hover {
  color: #fff;
  background: rgba(0,0,0,0.8);
}

.split-layout {
  display: flex;
  min-height: 100vh;
  width: 100vw;
}

/* Left Board */
.left-board {
  flex: 1;
  position: relative;
  overflow: hidden;
  background-color: #0a0a0a;
  border-right: 2px solid #000;
}

.board-bg {
  position: absolute;
  inset: 0;
  background-image: url("../assets/images/home_background.jpg");
  background-size: cover;
  background-position: center;
  filter: grayscale(60%) brightness(0.4) contrast(1.2);
  z-index: 0;
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

.collage-item {
  position: absolute;
  filter: drop-shadow(3px 6px 10px rgba(0,0,0,0.6));
}

.newspaper-clipping {
  top: 10%;
  left: 5%;
  width: 350px;
  transform: rotate(-5deg);
  z-index: 2;
}

.key-person-note {
  top: 30%;
  left: 25%;
  width: 300px;
  transform: rotate(4deg);
  z-index: 3;
}

.photo-scrap {
  position: absolute;
  top: 50%;
  left: 55%;
  width: 180px;
  height: 220px;
  background: #eee;
  padding: 10px 10px 30px 10px;
  transform: rotate(8deg);
  box-shadow: 3px 6px 15px rgba(0,0,0,0.8);
  z-index: 5;
}

.noir-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.2);
}

.connect-note {
  position: absolute;
  top: 15%;
  left: 50%;
  background-color: #e8e4d9;
  padding: 15px 20px;
  transform: rotate(-3deg);
  box-shadow: 2px 4px 10px rgba(0,0,0,0.5);
  z-index: 6;
  border: 1px solid #ccc;
}

.connect-note h2 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 900;
  color: #111;
  letter-spacing: 1px;
  font-family: "Impact", "Arial Black", sans-serif;
}

.case-no {
  margin-top: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #a40b0b;
  border-top: 2px solid #111;
  padding-top: 5px;
}

.fingerprint-scrap {
  position: absolute;
  bottom: 10%;
  left: 10%;
  width: 140px;
  transform: rotate(-12deg);
  z-index: 4;
  background: rgba(255,255,255,0.85);
  padding: 10px;
  box-shadow: 1px 2px 8px rgba(0,0,0,0.4);
}

.fingerprint-img {
  width: 100%;
  height: auto;
  opacity: 0.85;
  mix-blend-mode: multiply;
}

.pin {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: inset -2px -2px 4px rgba(0,0,0,0.5), 2px 3px 4px rgba(0,0,0,0.4);
  z-index: 10;
}

.red-pin { background-color: #cc0000; }
.pin-top-right { top: 10px; right: 10px; }
.pin-top-left { top: 10px; left: 10px; }

.tape {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  backdrop-filter: blur(2px);
  z-index: 6;
}

.tape-top-center {
  top: -10px;
  left: 50%;
  transform: translateX(-50%) rotate(-2deg);
  width: 80px;
  height: 25px;
}

.tape-top-left {
  top: -10px;
  left: -10px;
  transform: rotate(-45deg);
  width: 60px;
  height: 20px;
}

.tape-bottom-right {
  bottom: -10px;
  right: -10px;
  transform: rotate(-45deg);
  width: 60px;
  height: 20px;
}

/* Right Dossier */
.right-dossier {
  flex: 1;
  position: relative;
  background-color: #151311;
  padding: 2.5rem 4rem;
  box-shadow: inset 30px 0 50px rgba(0,0,0,0.9);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.dossier-bg {
  position: absolute;
  inset: 0;
  background-image: url("../assets/images/detective_folder_background.png");
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  filter: grayscale(100%) invert(1);
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 0;
}

.paper-texture {
  position: absolute;
  inset: 0;
  background-image: url("../assets/images/paper.jpg");
  background-size: cover;
  opacity: 0.08;
  mix-blend-mode: screen;
  pointer-events: none;
  z-index: 0;
}

.folder-tab {
  position: absolute;
  right: 0;
  top: 20%;
  background-color: #1a1a1a;
  padding: 15px 5px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 4px;
  color: #e0dcd3;
  border: 1px solid #333;
  border-right: none;
  border-radius: 5px 0 0 5px;
  box-shadow: -2px 2px 5px rgba(0,0,0,0.5);
  z-index: 1;
}

.dossier-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.dossier-header {
  position: relative;
  border-bottom: 2px solid #333;
  padding-bottom: 1rem;
}

.case-file-title {
  font-size: 1rem;
  font-weight: bold;
  color: #888;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.main-title {
  font-size: 4rem;
  font-weight: 900;
  margin: 0;
  line-height: 1;
  color: #e0dcd3;
  letter-spacing: 4px;
  font-family: "Impact", "Arial Black", sans-serif;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
}

.subtitle {
  font-size: 1.1rem;
  font-weight: bold;
  color: #a09d96;
  margin: 0.5rem 0 0 0;
  letter-spacing: 1px;
}

.circular-stamp {
  position: absolute;
  top: -10px;
  right: 0;
  width: 120px;
  height: 120px;
  border: 4px solid #a40b0b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(15deg);
  opacity: 0.7;
  pointer-events: none;
  box-shadow: inset 0 0 10px rgba(164, 11, 11, 0.3), 0 0 10px rgba(164, 11, 11, 0.3);
}

.stamp-inner {
  color: #a40b0b;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 2px;
  text-align: center;
  border-top: 2px solid #a40b0b;
  border-bottom: 2px solid #a40b0b;
  padding: 5px 0;
  width: 90%;
  text-shadow: 0 0 5px rgba(164, 11, 11, 0.5);
}

.dossier-body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-body-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: start;
}

.contact-details {
  background: #111;
  padding: 2rem;
  border: 1px solid #333;
  box-shadow: 4px 8px 15px rgba(0,0,0,0.3);
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  font-size: 1.1rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 1.2rem;
}

.contact-list li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.icon-col {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #888;
  margin-top: 4px;
}

.icon-col svg {
  width: 100%;
  height: 100%;
}

.text-col {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.contact-list .label {
  font-weight: bold;
  color: #888;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.contact-list .value {
  font-weight: bold;
  color: #e0dcd3;
  word-break: break-all;
  font-size: 1.15rem;
}

.contact-list .link {
  color: #a40b0b;
  text-decoration: none;
  transition: color 0.3s;
}

.contact-list .link:hover {
  color: #cc0000;
  text-decoration: underline;
}

.letstalk-image-container {
  position: relative;
  background-color: transparent;
  padding: 0;
  box-shadow: none;
  transform: translate(15px, 25px) rotate(3deg) scale(1.05);
  display: flex;
  justify-content: center;
  align-items: center;
}

.letstalk-image-container .tape {
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.5);
  backdrop-filter: blur(2px);
  z-index: 6;
}

.letstalk-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(2px 4px 8px rgba(0,0,0,0.8));
}

/* Responsive */
@media (max-width: 1024px) {
  .split-layout {
    flex-direction: column;
  }
  
  .contact-page {
    overflow-y: auto;
  }
  
  .left-board {
    min-height: 60vh;
    border-right: none;
    border-bottom: 2px solid #000;
  }
  
  .right-dossier {
    min-height: auto;
    padding: 3rem 2rem;
    box-shadow: inset 0 30px 50px rgba(0,0,0,0.9);
  }
  
  .circular-stamp {
    width: 90px;
    height: 90px;
    top: 0;
  }
  
  .stamp-inner {
    font-size: 0.8rem;
  }
  
  .main-title {
    font-size: 3rem;
  }
}

@media (max-width: 600px) {
  .left-board {
    min-height: 50vh;
  }
  
  .evidence-collage {
    transform: translate(-50%, -50%) scale(0.7);
  }
  
  .right-dossier {
    padding: 1.5rem 1rem;
  }
  
  .main-title {
    font-size: 2.5rem;
  }
  
  .contact-body-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-list li {
    flex-direction: row;
    gap: 1rem;
  }
  
  .letstalk-image-container {
    transform: translate(0, 10px) rotate(2deg) scale(1);
  }
}
</style>
