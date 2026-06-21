<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about-page">
    <nav class="subtle-nav">
      <RouterLink to="/" class="back-link">← RETURN</RouterLink>
    </nav>

    <main class="split-layout">
      <!-- Left Side: Evidence Board -->
      <div class="left-board">
        <div class="board-bg"></div>
        <div class="evidence-collage">
          <!-- Red Strings -->
          <svg class="red-strings" viewBox="0 0 100 100" preserveAspectRatio="none">
            <!-- Portrait to Warning Note -->
            <line x1="50" y1="50" x2="20" y2="20" stroke="#a40b0b" stroke-width="0.3" stroke-dasharray="1,0.5" />
            <!-- Portrait to Newspaper -->
            <line x1="50" y1="50" x2="80" y2="15" stroke="#a40b0b" stroke-width="0.2" />
            <!-- Portrait to Yellow Note -->
            <line x1="50" y1="50" x2="25" y2="80" stroke="#a40b0b" stroke-width="0.4" />
            <!-- Portrait to Green Note -->
            <line x1="50" y1="50" x2="80" y2="85" stroke="#a40b0b" stroke-width="0.25" />
          </svg>

          <!-- Pinned Notes -->
          <div class="warning-note">
            <div class="tape tape-small"></div>
            機密檔案 嚴禁外流
          </div>

          <div class="scrap newspaper-scrap">
            <div class="tape tape-top"></div>
            <h4>Life motto</h4>
            能講究就別將就</br> <br>能自動就別手動</br>
          </div>

          <div class="note yellow-note">
            <div class="pin red-pin"></div>
            <p>關鍵人物</p>
          </div>
          
          <div class="note green-note">
            <div class="pin silver-pin"></div>
            <p>資料待查</p>
          </div>

          <!-- Portrait Card -->
          <div class="portrait-card">
            <div class="tape tape-corner-tl"></div>
            <div class="tape tape-corner-br"></div>
            <div class="photo-wrapper">
              <img src="../assets/images/photo.jpg" alt="Suspect Photo" class="suspect-photo" />
              <div class="photo-filter"></div>
            </div>
            <div class="photo-label">CASE NO. 0724</div>
          </div>
        </div>
      </div>

      <!-- Right Side: Dark Dossier -->
      <div class="right-dossier">
        <div class="dossier-bg"></div>
        <div class="paper-texture"></div>
        <div class="caution-ribbon"></div>
        
        <div class="dossier-content">
          <div class="confidential-stamp">TOP SECRET</div>
          
          <!-- <div class="dossier-header">
            <div class="case-number">CASE FILE 0724-A</div>
            <div class="barcode">||| ||||| || |||| |||</div>
          </div> -->

          <div class="identity-section">
            <div class="label">NAME</div>
            <h1 class="chinese-name">陳品吟</h1>
            <div class="alias-box">
              <span class="label">Age.</span>
              <span class="alias-name">24</span>
            </div>
          </div>

          <div class="info-block">
            <div class="tape tape-top"></div>
            <h3>BIOGRAPHY.</h3>
            <div class="typewriter-text biography-copy">
              <p>目前具有兩年 DevOps 相關經驗，專注於提升維運效率與系統穩定性。</p>
              <ol class="biography-list">
                <li>自動化腳本解決日常維運項目</li>
                <li>自動化部屬</li>
                <li>服務監控</li>
                <li>後端開發</li>
                <li>串接三方開源工具</li>
              </ol>
            </div>
          </div>

          <div class="info-block">
            <div class="tape tape-top"></div>
            <h3>SKILLS.</h3>
            <div class="skill-list">
              <div class="skill-item">
                <span>Python</span>
              </div>
              <div class="skill-item">
                <span>GKE</span>
              </div>
              <div class="skill-item">
                <span>Kubernetes</span>
              </div>
              <div class="skill-item">
                <span>GCP</span>
              </div>
              <div class="skill-item">
                <span>Docker</span>
              </div>
              <div class="skill-item">
                <span>Helm</span>
              </div>
              <div class="skill-item">
                <span>prometheus</span>
              </div>
              <div class="skill-item">
                <span>GitHub Action</span>
              </div>
              <div class="skill-item">
                <span>bash</span>
              </div>
            </div>
          </div>

          <!-- <div class="info-block contact-section">
            <div class="tape tape-top"></div>
            <h3>CONTACT.</h3>
            <ul class="trace-list">
              <li><span class="trace-label">PHONE:</span> <span class="trace-value redacted">0968-989-229</span></li>
              <li><span class="trace-label">EMAIL:</span> <span class="trace-value">amber0520.chen@gmail.com</span></li>
            </ul>
          </div> -->
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #e0dcd3;
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
  color: #888;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 2px;
  transition: color 0.3s;
  text-shadow: 1px 1px 2px #000;
}

.back-link:hover {
  color: #d4cbb3;
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
  transform: translate(-50%, -50%) scale(0.9);
  width: 100%;
  height: 100%;
  max-width: 700px;
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

.warning-note {
  position: absolute;
  top: 15%;
  left: 10%;
  background-color: #a40b0b;
  color: #e0dcd3;
  padding: 10px 20px;
  font-weight: bold;
  transform: rotate(-5deg);
  box-shadow: 3px 6px 15px rgba(0,0,0,0.6);
  z-index: 10;
  font-size: 1.1rem;
  letter-spacing: 3px;
  font-family: "Microsoft JhengHei", sans-serif;
}

.newspaper-scrap {
  position: absolute;
  top: 10%;
  right: 5%;
  width: 240px;
  transform: rotate(3deg);
  background-color: #1a1a1a;
  border: 1px solid #333;
  font-family: "Microsoft JhengHei", "PingFang TC", sans-serif;
  padding: 20px;
  box-shadow: 3px 6px 15px rgba(0,0,0,0.8);
  z-index: 10;
}

.newspaper-scrap h4 {
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
  color: #e0dcd3;
}

.newspaper-scrap p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #a09d96;
  margin: 0;
}

.note {
  position: absolute;
  padding: 15px 20px;
  box-shadow: 3px 6px 12px rgba(0,0,0,0.4);
  z-index: 10;
  font-weight: bold;
  font-family: "Microsoft JhengHei", "PingFang TC", sans-serif;
  font-size: 1.1rem;
  color: #1a1a1a;
}

.yellow-note {
  background-color: #d4cbb3;
  bottom: 20%;
  left: 15%;
  transform: rotate(-4deg);
}

.green-note {
  background-color: #b8b09b;
  bottom: 15%;
  right: 20%;
  transform: rotate(3deg);
}

.note p {
  margin: 0;
}

.biography-copy p {
  margin: 0 0 0.5rem;
}

.biography-list {
  margin: 0;
  padding-left: 1.2rem;
  line-height: 1.45;
}

.biography-list li + li {
  margin-top: 0.15rem;
}

.pin {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: inset -2px -2px 4px rgba(0,0,0,0.5), 2px 3px 4px rgba(0,0,0,0.4);
}

.red-pin { background-color: #cc0000; }
.silver-pin { background-color: #c0c0c0; }

.portrait-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-2deg);
  background-color: #1a1a1a;
  padding: 15px 15px 50px 15px;
  box-shadow: 5px 10px 20px rgba(0,0,0,0.8);
  z-index: 5;
  width: 280px;
  transition: transform 0.3s ease;
}

.portrait-card:hover {
  transform: translate(-50%, -50%) rotate(0deg) scale(1.02);
}

.photo-wrapper {
  width: 100%;
  height: 320px;
  overflow: hidden;
  position: relative;
  filter: grayscale(40%) contrast(1.1);
}

.suspect-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-filter {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(0,0,0,0.5), transparent);
  mix-blend-mode: overlay;
}

.photo-label {
  position: absolute;
  bottom: 15px;
  left: 20px;
  color: #e0dcd3;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.1rem;
  letter-spacing: 1px;
}

.tape {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.5);
  backdrop-filter: blur(2px);
  z-index: 6;
}

.tape-corner-tl {
  top: -15px;
  left: -20px;
  width: 100px;
  height: 30px;
  transform: rotate(-40deg);
}

.tape-corner-br {
  bottom: -15px;
  right: -20px;
  width: 90px;
  height: 30px;
  transform: rotate(-45deg);
}

.tape-top {
  top: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(2deg);
  width: 80px;
  height: 25px;
}

.tape-small {
  top: -10px;
  left: 50%;
  transform: translateX(-50%) rotate(-2deg);
  width: 50px;
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

.caution-ribbon {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  overflow: hidden;
  z-index: 10;
  pointer-events: none;
}

.caution-ribbon::before {
  content: 'CAUTION // RESTRICTED';
  position: absolute;
  top: 40px;
  right: -50px;
  width: 250px;
  background-color: #d4b022;
  color: #000;
  text-align: center;
  padding: 6px 0;
  font-weight: bold;
  font-size: 0.85rem;
  transform: rotate(45deg);
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
  letter-spacing: 2px;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(0,0,0,0.1) 10px,
    rgba(0,0,0,0.1) 20px
  );
}

.dossier-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: auto;
  width: 100%;
}

.confidential-stamp {
  position: absolute;
  top: 10px;
  right: -10px;
  transform: rotate(15deg);
  color: #a40b0b;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  border: 4px solid #a40b0b;
  padding: 5px 15px;
  opacity: 0.6;
  letter-spacing: 6px;
  z-index: 1;
  pointer-events: none;
  text-shadow: 0 0 5px rgba(164, 11, 11, 0.5);
  box-shadow: inset 0 0 10px rgba(164, 11, 11, 0.3), 0 0 10px rgba(164, 11, 11, 0.3);
}

.dossier-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #333;
  padding-bottom: 8px;
  margin-bottom: 25px;
  position: relative;
  z-index: 2;
}

.case-number {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #e0dcd3;
}

.barcode {
  font-family: monospace;
  font-size: 1.5rem;
  letter-spacing: 2px;
  transform: scaleY(1.5);
  color: #e0dcd3;
}

.identity-section {
  margin-bottom: 25px;
  position: relative;
  z-index: 2;
}

.identity-section .label {
  font-size: 1rem;
  color: #888;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.chinese-name {
  font-family: "Microsoft JhengHei", "PingFang TC", sans-serif;
  font-size: 3.5rem;
  margin: 0 0 10px 0;
  line-height: 1;
  color: #e0dcd3;
  letter-spacing: 5px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
}

.alias-box {
  display: inline-flex;
  align-items: center;
  background-color: rgba(0,0,0,0.3);
  border: 1px solid #333;
  padding: 6px 15px;
}

.alias-box .label {
  color: #888;
  margin-right: 10px;
  margin-bottom: 0;
}

.alias-name {
  font-weight: bold;
  font-size: 1.2rem;
  color: #a40b0b;
}

.info-block {
  margin-bottom: 20px;
  background: rgba(20, 18, 16, 0.8);
  padding: 20px;
  border: 1px solid rgba(255,255,255,0.05);
  box-shadow: 2px 4px 12px rgba(0,0,0,0.5);
  position: relative;
  z-index: 2;
  border-radius: 2px;
}

.info-block h3 {
  font-size: 1.2rem;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
  margin-bottom: 12px;
  color: #e0dcd3;
  letter-spacing: 1px;
}

.typewriter-text {
  font-family: "Microsoft JhengHei", "PingFang TC", sans-serif;
  line-height: 1.6;
  font-size: 1.05rem;
  color: #c4c0b5;
  text-align: justify;
  margin: 0;
}

.skill-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

.skill-item {
  display: flex;
  align-items: center;
  font-family: "Microsoft JhengHei", "PingFang TC", sans-serif;
  font-weight: bold;
  font-size: 1.05rem;
  color: #c4c0b5;
}

.trace-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.trace-list li {
  margin-bottom: 12px;
  font-size: 1.1rem;
  display: flex;
  color: #c4c0b5;
}

.trace-label {
  width: 120px;
  font-weight: bold;
  color: #a09d96;
}

.trace-value {
  font-weight: bold;
}

.redacted {
  background-color: #333;
  color: #333;
  padding: 0 5px;
}

/* Responsive */
@media (max-width: 1024px) {
  .split-layout {
    flex-direction: column;
    overflow-y: auto;
  }
  
  .about-page {
    overflow-y: auto;
  }
  
  .left-board {
    min-height: 60vh;
    border-right: none;
    border-bottom: 2px solid #000;
  }
  
  .right-dossier {
    min-height: 100vh;
    padding: 3rem 2rem;
    box-shadow: inset 0 30px 50px rgba(0,0,0,0.9);
    overflow-y: auto;
  }
  
  .confidential-stamp {
    font-size: 2.5rem;
    right: 0;
    top: 0;
  }
}

@media (max-width: 600px) {
  .left-board {
    min-height: 50vh;
  }
  
  .evidence-collage {
    transform: translate(-50%, -50%) scale(0.8);
  }
  
  .right-dossier {
    padding: 2rem 1.5rem;
  }
  
  .chinese-name {
    font-size: 3.5rem;
  }
  
  .skill-list {
    grid-template-columns: 1fr;
  }
  
  .trace-list li {
    flex-direction: column;
    gap: 5px;
  }
  
  .trace-label {
    width: auto;
  }
}
</style>
