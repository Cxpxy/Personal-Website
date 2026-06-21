<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="experience-page">
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
            <line x1="30" y1="30" x2="70" y2="20" stroke="#a40b0b" stroke-width="0.3" stroke-dasharray="1,0.5" />
            <line x1="70" y1="20" x2="50" y2="70" stroke="#a40b0b" stroke-width="0.2" />
            <line x1="50" y1="70" x2="20" y2="60" stroke="#a40b0b" stroke-width="0.4" />
            <line x1="20" y1="60" x2="30" y2="30" stroke="#a40b0b" stroke-width="0.25" />
          </svg>

          <!-- Pinned Notes -->
          <div class="warning-note">
            <div class="tape tape-small"></div>
            系統架構機密
          </div>

          <div class="scrap newspaper-scrap">
            <div class="tape tape-top"></div>
            <h4>INCIDENT REPORT</h4>
            <p>Zero Downtime Deployment Achieved.<br><br>System stability increased by 99.9%.</p>
          </div>

          <div class="note yellow-note">
            <div class="pin red-pin"></div>
            <p>Automation</p>
          </div>
          
          <div class="note green-note">
            <div class="pin silver-pin"></div>
            <p>Kubernetes</p>
          </div>

          <div class="polaroid-card">
            <div class="tape tape-corner-tl"></div>
            <div class="tape tape-corner-br"></div>
            <div class="photo-placeholder">
              <div class="server-icon">SERVER<br/>RACK<br/>01</div>
            </div>
            <div class="photo-label">EVIDENCE: GKE</div>
          </div>
        </div>
      </div>

      <!-- Right Side: Dark Dossier -->
      <div class="right-dossier">
        <div class="dossier-bg"></div>
        <div class="paper-texture"></div>
        <div class="caution-ribbon"></div>
        
        <div class="dossier-content">
          <div class="confidential-stamp">CONFIDENTIAL</div>
          
          <div class="header-section">
            <div class="label">RECORD</div>
            <h1 class="section-title">EXPERIENCE</h1>
          </div>

          <div class="timeline">
            <!-- Experience 1 -->
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content info-block">
                <div class="tape tape-top"></div>
                <div class="stamp ongoing-stamp">ONGOING</div>
                <div class="timeline-header">
                  <span class="timeline-date">2024 - PRESENT</span>
                  <h3 class="role-title">DevOps Engineer</h3>
                  <h4 class="company-name">阜爾運通 PSS</h4>
                </div>
                <div class="typewriter-text experience-desc">
                  <ul class="task-list">
                    <li>建置GitHub Actions，實現自動化部屬</li>
                    <li>Kubernetes (GKE) 叢集管理與維護，優化架構降低營運成本</li>
                    <!-- <li>使用 Prometheus 與 Grafana 進行服務監控與告警</li> -->
                    <li>撰寫自動化腳本 (Python, Bash) 解決日常維運項目</li>
                    <li>串接三方開源工具，提升系統穩定性與降低維運難度</li>
                    <li>參與部分專案後端開發(Python)</li>
                  </ul>
                </div>
                <div class="skill-strip">
                  <span>GKE</span> • <span>Docker</span> • <span>GitHub Actions</span> • <span>Helm</span>• <span>Python</span>
                </div>
              </div>
            </div>

            <!-- Experience 2 -->
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content info-block">
                <div class="tape tape-top"></div>
                <div class="stamp solved-stamp">SOLVED</div>
                <div class="timeline-header">
                  <span class="timeline-date">2022 - 2023</span>
                  <h3 class="role-title">Intern</h3>
                  <h4 class="company-name">聯寶電腦 Lenovo</h4>
                </div>
                <div class="typewriter-text experience-desc">
                  <ul class="task-list">
                    <li>測試筆電BIOS，撰寫測試案例與報告</li>
                    <li>開發自動化測試腳本</li>
                    <li>協助開發公司內部工具</li>
                  </ul>
                </div>
                <div class="skill-strip">
                  <span>Python</span>  • <span>Database</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.experience-page {
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
  top: 20%;
  left: 15%;
  background-color: #a40b0b;
  color: #e0dcd3;
  padding: 10px 20px;
  font-weight: bold;
  transform: rotate(-8deg);
  box-shadow: 3px 6px 15px rgba(0,0,0,0.6);
  z-index: 10;
  font-size: 1.1rem;
  letter-spacing: 3px;
  font-family: "Microsoft JhengHei", sans-serif;
}

.newspaper-scrap {
  position: absolute;
  top: 15%;
  right: 10%;
  width: 240px;
  transform: rotate(4deg);
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
  bottom: 25%;
  left: 10%;
  transform: rotate(-5deg);
}

.green-note {
  background-color: #b8b09b;
  bottom: 20%;
  right: 15%;
  transform: rotate(6deg);
}

.note p {
  margin: 0;
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

.polaroid-card {
  position: absolute;
  top: 55%;
  left: 45%;
  transform: translate(-50%, -50%) rotate(-3deg);
  background-color: #e0dcd3;
  padding: 15px 15px 40px 15px;
  box-shadow: 5px 10px 20px rgba(0,0,0,0.8);
  z-index: 5;
  width: 220px;
  transition: transform 0.3s ease;
}

.polaroid-card:hover {
  transform: translate(-50%, -50%) rotate(0deg) scale(1.02);
}

.photo-placeholder {
  width: 100%;
  height: 200px;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #333;
}

.server-icon {
  color: #a40b0b;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 2px;
  opacity: 0.7;
}

.photo-label {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  color: #1a1a1a;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  letter-spacing: 1px;
  white-space: nowrap;
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
  background-color: rgba(255, 255, 255, 0.2);
}

.tape-corner-br {
  bottom: -15px;
  right: -20px;
  width: 90px;
  height: 30px;
  transform: rotate(-45deg);
  background-color: rgba(255, 255, 255, 0.2);
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
  padding-top: 20px;
  padding-bottom: 40px;
}

.confidential-stamp {
  position: absolute;
  top: -10px;
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

.header-section {
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
}

.header-section .label {
  font-size: 1rem;
  color: #888;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.section-title {
  font-family: "Courier New", Courier, monospace;
  font-size: 3rem;
  margin: 0;
  line-height: 1.1;
  color: #e0dcd3;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 7px;
  width: 2px;
  background-color: #333;
  z-index: 1;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-marker {
  position: absolute;
  top: 20px;
  left: -30px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #a40b0b;
  border: 3px solid #151311;
  z-index: 2;
  box-shadow: 0 0 8px rgba(164, 11, 11, 0.8);
}

.info-block {
  background: rgba(20, 18, 16, 0.8);
  padding: 25px;
  border: 1px solid rgba(255,255,255,0.05);
  box-shadow: 2px 4px 12px rgba(0,0,0,0.5);
  position: relative;
  z-index: 2;
  border-radius: 2px;
}

.stamp {
  position: absolute;
  top: 15px;
  right: 15px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  border: 2px solid;
  padding: 3px 8px;
  font-size: 1rem;
  letter-spacing: 2px;
  opacity: 0.7;
  transform: rotate(-5deg);
  pointer-events: none;
}

.ongoing-stamp {
  color: #d4b022;
  border-color: #d4b022;
  text-shadow: 0 0 3px rgba(212, 176, 34, 0.5);
  box-shadow: inset 0 0 5px rgba(212, 176, 34, 0.3), 0 0 5px rgba(212, 176, 34, 0.3);
}

.solved-stamp {
  color: #4a8a4a;
  border-color: #4a8a4a;
  text-shadow: 0 0 3px rgba(74, 138, 74, 0.5);
  box-shadow: inset 0 0 5px rgba(74, 138, 74, 0.3), 0 0 5px rgba(74, 138, 74, 0.3);
  transform: rotate(3deg);
}

.timeline-header {
  margin-bottom: 15px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
}

.timeline-date {
  display: inline-block;
  background-color: #a40b0b;
  color: #e0dcd3;
  padding: 2px 8px;
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.role-title {
  font-size: 1.4rem;
  margin: 0 0 5px 0;
  color: #e0dcd3;
  letter-spacing: 1px;
}

.company-name {
  font-size: 1rem;
  color: #888;
  margin: 0;
  font-family: "Microsoft JhengHei", "PingFang TC", sans-serif;
}

.redacted {
  background-color: #333;
  color: #333;
  padding: 0 5px;
  display: inline-block;
}

.typewriter-text {
  font-family: "Microsoft JhengHei", "PingFang TC", sans-serif;
  line-height: 1.6;
  font-size: 1.05rem;
  color: #c4c0b5;
  text-align: justify;
  margin: 0;
}

.task-list {
  margin: 0;
  padding-left: 1.2rem;
}

.task-list li {
  margin-bottom: 0.4rem;
}

.skill-strip {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dashed #333;
  font-size: 0.9rem;
  color: #a09d96;
  font-weight: bold;
  letter-spacing: 1px;
}

.skill-strip span {
  color: #d4cbb3;
}

/* Responsive */
@media (max-width: 1024px) {
  .split-layout {
    flex-direction: column;
    overflow-y: auto;
  }
  
  .experience-page {
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
    overflow-y: visible;
  }
  
  .confidential-stamp {
    font-size: 2rem;
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
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .timeline {
    padding-left: 20px;
  }
  
  .timeline-marker {
    left: -28px;
  }
  
  .stamp {
    position: relative;
    top: 0;
    right: 0;
    display: inline-block;
    margin-bottom: 10px;
    transform: none;
  }
}
</style>
