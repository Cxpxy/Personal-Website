<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import identificationOneImage from '../../Identification1.png'
import identificationTwoImage from '../../Identification2.png'
import labelImage from '../../labelIamge.png'
import prefectImage from '../../perfect.png'
import receiptopsImage from '../../receiptops.png'
import registerImage from '../../register.png'
import sftpgoImage from '../../sftpgo.png'

const projects = [
  {
    id: '01',
    title: '服務地端遷移至雲端 GCP',
    status: 'DELIVERED',
    statusClass: 'delivered-stamp',
    description: [
      '主機管理、日常維運、監控告警',
      '串接三方工具利用 UI 畫面，降低日常維運難度',
      '撰寫網頁維運工具，提供給非技術同仁使用，提升團隊效率'
    ],
    screenshots: [
      { src: sftpgoImage, label: 'SFTPGo' },
      { src: prefectImage, label: 'Prefect' },
      { src: receiptopsImage, label: 'ReceiptOps' }
    ],
    tech: ['GCP', 'Cloud Migration', 'Monitoring', 'Operations'],
    previewType: 'dashboard'
  },
  {
    id: '02',
    title: 'GKE 管理',
    status: 'ANALYZED',
    statusClass: 'analyzed-stamp',
    description: [
      'Helm 部屬模板化 + 版控',
      '撰寫腳本搭配 Helm，節省 60% 部屬時間',
      '優化架構降低 40% 營運成本'
    ],
    tech: ['GKE', 'Helm', 'Kubernetes', 'Automation'],
    previewType: 'pipeline'
  },
  {
    id: '03',
    title: '工地安全影像辨識',
    status: 'TESTED',
    statusClass: 'tested-stamp',
    description: [
      '影像辨識 OpenCV、影像標註 LabelImg 和物件偵測 YOLOv8 訓練辨識模型',
      'Python Flask + MySQL',
      '樹莓派 Project'
    ],
    screenshots: [
      { src: registerImage, label: 'Register' },
      { src: identificationOneImage, label: 'Identification 1' },
      { src: identificationTwoImage, label: 'Identification 2' },
      { src: labelImage, label: 'Label Image' }
    ],
    tech: ['OpenCV', 'YOLOv8', 'Flask', 'MySQL', 'Raspberry Pi'],
    previewType: 'website'
  }
]

const activeProjectId = ref(projects[0].id)
const activeScreenshotIndex = ref(0)
const activeProject = computed(() => projects.find(p => p.id === activeProjectId.value) || projects[0])
const activeScreenshots = computed(() => activeProject.value.screenshots || [])
const currentScreenshot = computed(() => activeScreenshots.value[activeScreenshotIndex.value])

function selectProject(projectId) {
  activeProjectId.value = projectId
  activeScreenshotIndex.value = 0
}

function showPreviousScreenshot() {
  const total = activeScreenshots.value.length
  if (!total) return

  activeScreenshotIndex.value = (activeScreenshotIndex.value - 1 + total) % total
}

function showNextScreenshot() {
  const total = activeScreenshots.value.length
  if (!total) return

  activeScreenshotIndex.value = (activeScreenshotIndex.value + 1) % total
}

const isModalOpen = ref(false)

function openModal() {
  isModalOpen.value = true
  document.addEventListener('keydown', handleEscape)
}

function closeModal() {
  isModalOpen.value = false
  document.removeEventListener('keydown', handleEscape)
}

function handleEscape(e) {
  if (e.key === 'Escape') {
    closeModal()
  }
}

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div class="projects-page">
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
            <line x1="20" y1="20" x2="80" y2="40" stroke="#a40b0b" stroke-width="0.3" stroke-dasharray="1,0.5" />
            <line x1="80" y1="40" x2="30" y2="80" stroke="#a40b0b" stroke-width="0.2" />
            <line x1="30" y1="80" x2="60" y2="90" stroke="#a40b0b" stroke-width="0.4" />
          </svg>

          <!-- Pinned Notes -->
          <div class="scrap title-scrap">
            <div class="tape tape-top"></div>
            <h2>PROJECTS</h2>
            <p>CASE FILES</p>
          </div>

          <div class="note yellow-note">
            <div class="pin red-pin"></div>
            <p>調查進度：持續更新中</p>
          </div>
          
          <div class="note green-note">
            <div class="pin silver-pin"></div>
            <p>目標：系統優化</p>
          </div>

          <div class="polaroid-card">
            <div class="tape tape-corner-tl"></div>
            <div class="tape tape-corner-br"></div>
            <div class="photo-placeholder">
              <div v-if="currentScreenshot" class="tool-carousel board-carousel">
                <button class="carousel-btn carousel-btn-prev" type="button" aria-label="Previous screenshot" @click="showPreviousScreenshot">
                  ‹
                </button>

                <figure class="tool-preview-card">
                  <button 
                    class="image-preview-btn" 
                    type="button" 
                    :aria-label="`View enlarged ${currentScreenshot.label} preview`"
                    @click="openModal"
                  >
                    <img :src="currentScreenshot.src" :alt="`${currentScreenshot.label} UI preview`">
                  </button>
                  <figcaption>{{ currentScreenshot.label }}</figcaption>
                </figure>

                <button class="carousel-btn carousel-btn-next" type="button" aria-label="Next screenshot" @click="showNextScreenshot">
                  ›
                </button>

                <div class="carousel-counter">
                  {{ activeScreenshotIndex + 1 }} / {{ activeScreenshots.length }}
                </div>
              </div>
              <div v-else class="code-icon">&lt;/&gt;</div>
            </div>
            <div class="photo-label">{{ currentScreenshot ? currentScreenshot.label : 'EVIDENCE: CODE' }}</div>
          </div>
        </div>
      </div>

      <!-- Right Side: Dark Dossier -->
      <div class="right-dossier">
        <div class="dossier-bg"></div>
        <div class="paper-texture"></div>
        <div class="caution-ribbon"></div>
        
        <div class="dossier-content">
          <div class="confidential-stamp">CLASSIFIED</div>
          
          <h1 class="section-title">PROJECT</h1>
          <div class="header-section">
            <div class="project-tabs" role="tablist">
              <button 
                v-for="project in projects" 
                :key="project.id"
                @click="selectProject(project.id)"
                :class="['tab-btn', { active: activeProjectId === project.id }]"
                :aria-selected="activeProjectId === project.id"
                role="tab"
              >
                FILE {{ project.id }}
              </button>
            </div>
          </div>

          <div class="projects-list">
            <div class="project-item" :key="activeProject.id">
              <div class="project-number">{{ activeProject.id }}</div>
              <div class="info-block project-card">
                <div class="tape tape-top"></div>
                <div :class="['stamp', activeProject.statusClass]">{{ activeProject.status }}</div>
                
                <div class="project-content-wrapper">
                  <!-- Text Details -->
                  <div class="project-details">
                    <div class="project-header">
                      <h3 class="project-title">{{ activeProject.title }}</h3>
                    </div>
                    
                    <div class="project-body">
                      <div class="typewriter-text project-desc">
                        <ul class="desc-list">
                          <li v-for="(item, index) in activeProject.description" :key="index">{{ item }}</li>
                        </ul>
                      </div>
                      
                      <div class="skill-strip">
                        <span v-for="(t, index) in activeProject.tech" :key="index">
                          {{ t }}<template v-if="index < activeProject.tech.length - 1"> • </template>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>

    <!-- Enlarged Image Modal -->
    <div 
      v-if="isModalOpen" 
      class="image-modal-backdrop" 
      @click="closeModal"
      role="dialog" 
      aria-modal="true" 
      :aria-label="`Enlarged view of ${currentScreenshot.label}`"
    >
      <div class="image-modal-content" @click.stop>
        <button 
          class="modal-close-btn" 
          type="button" 
          aria-label="Close enlarged view" 
          @click="closeModal"
        >
          ×
        </button>
        <img :src="currentScreenshot.src" :alt="`${currentScreenshot.label} UI preview`" class="enlarged-image">
        <div class="modal-label">{{ currentScreenshot.label }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-page {
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

.title-scrap {
  position: absolute;
  top: 15%;
  left: 15%;
  width: 260px;
  transform: rotate(-4deg);
  background-color: #1a1a1a;
  border: 1px solid #333;
  font-family: "Courier New", Courier, monospace;
  padding: 20px;
  box-shadow: 3px 6px 15px rgba(0,0,0,0.8);
  z-index: 10;
  text-align: center;
}

.title-scrap h2 {
  margin: 0 0 5px 0;
  font-size: 2.5rem;
  color: #a40b0b;
  letter-spacing: 4px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.title-scrap p {
  font-size: 1rem;
  color: #a09d96;
  margin: 0;
  letter-spacing: 2px;
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
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(3deg);
  background-color: #e0dcd3;
  padding: 15px 15px 40px 15px;
  box-shadow: 5px 10px 20px rgba(0,0,0,0.8);
  z-index: 5;
  width: 380px;
  transition: transform 0.3s ease;
}

.polaroid-card:hover {
  transform: translate(-50%, -50%) rotate(0deg) scale(1.02);
}

.photo-placeholder {
  width: 100%;
  height: 280px;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #333;
  overflow: hidden;
}

.code-icon {
  color: #a40b0b;
  font-weight: bold;
  font-size: 3rem;
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

.project-tabs {
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
}

.tab-btn {
  background: rgba(20, 18, 16, 0.6);
  border: 1px solid #333;
  color: #888;
  padding: 8px 16px;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.tab-btn:hover {
  background: rgba(40, 36, 32, 0.8);
  color: #c4c0b5;
}

.tab-btn.active {
  background: rgba(20, 18, 16, 0.9);
  border-color: #a40b0b;
  color: #e0dcd3;
  box-shadow: inset 0 0 10px rgba(164, 11, 11, 0.2);
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

/* Projects List */
.projects-list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.project-item {
  position: relative;
  display: flex;
  gap: 20px;
}

.project-number {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  font-family: "Courier New", Courier, monospace;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  letter-spacing: 5px;
  padding-top: 10px;
}

.info-block {
  flex: 1;
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

.delivered-stamp {
  color: #4a8a4a;
  border-color: #4a8a4a;
  text-shadow: 0 0 3px rgba(74, 138, 74, 0.5);
  box-shadow: inset 0 0 5px rgba(74, 138, 74, 0.3), 0 0 5px rgba(74, 138, 74, 0.3);
  transform: rotate(3deg);
}

.analyzed-stamp {
  color: #d4b022;
  border-color: #d4b022;
  text-shadow: 0 0 3px rgba(212, 176, 34, 0.5);
  box-shadow: inset 0 0 5px rgba(212, 176, 34, 0.3), 0 0 5px rgba(212, 176, 34, 0.3);
}

.tested-stamp {
  color: #4a8a4a;
  border-color: #4a8a4a;
  text-shadow: 0 0 3px rgba(74, 138, 74, 0.5);
  box-shadow: inset 0 0 5px rgba(74, 138, 74, 0.3), 0 0 5px rgba(74, 138, 74, 0.3);
  transform: rotate(-2deg);
}

.project-header {
  margin-bottom: 15px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
}

.project-title {
  font-size: 1.4rem;
  margin: 0 0 5px 0;
  color: #e0dcd3;
  letter-spacing: 1px;
}

.project-content-wrapper {
  display: flex;
  gap: 20px;
  margin-top: 10px;
  align-items: stretch;
}

.project-preview {
  flex: 1;
  min-width: 0;
}

.project-details {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.preview-window {
  background-color: #111;
  border: 1px solid #333;
  border-radius: 4px;
  overflow: hidden;
  height: 320px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0,0,0,0.5);
}

.window-header {
  background-color: #222;
  height: 16px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 4px;
  border-bottom: 1px solid #333;
}

.window-header .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #555;
}

.window-header .dot:nth-child(1) { background-color: #ff5f56; }
.window-header .dot:nth-child(2) { background-color: #ffbd2e; }
.window-header .dot:nth-child(3) { background-color: #27c93f; }

.window-body {
  flex: 1;
  position: relative;
  background-color: #0a0a0a;
  padding: 10px;
  overflow: hidden;
}

.tool-carousel {
  position: relative;
  height: 100%;
}

.tool-preview-card {
  position: relative;
  margin: 0;
  height: 100%;
  overflow: hidden;
  border: 1px solid #2f2a25;
  border-radius: 3px;
  background-color: #050505;
  box-shadow: inset 0 0 12px rgba(0,0,0,0.7);
}

.tool-preview-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 12px;
  opacity: 0.9;
  filter: sepia(12%) contrast(1.06) brightness(0.88);
}

.tool-preview-card figcaption {
  position: absolute;
  left: 6px;
  bottom: 5px;
  padding: 2px 6px;
  background: rgba(5, 5, 5, 0.78);
  border: 1px solid rgba(212, 203, 179, 0.18);
  color: #d4cbb3;
  font-size: 0.6rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  pointer-events: none;
}

.image-preview-btn {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background: transparent;
  cursor: zoom-in;
}

.image-preview-btn img {
  transition: transform 0.3s ease;
}

.image-preview-btn:hover img {
  transform: scale(1.02);
}

/* Image Modal */
.image-modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.image-modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #050505;
  border: 1px solid #2f2a25;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9);
}

.enlarged-image {
  max-width: 100%;
  max-height: calc(90vh - 4rem);
  object-fit: contain;
  filter: sepia(12%) contrast(1.06) brightness(0.88);
}

.modal-label {
  margin-top: 1rem;
  color: #d4cbb3;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.modal-close-btn {
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #a40b0b;
  color: #fff;
  border: 2px solid #d4cbb3;
  font-size: 2rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  z-index: 1001;
}

.modal-close-btn:hover {
  transform: scale(1.1);
  background-color: #cc0000;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  z-index: 3;
  width: 34px;
  height: 44px;
  border: 1px solid rgba(212, 203, 179, 0.25);
  background: rgba(5, 5, 5, 0.72);
  color: #d4cbb3;
  font-size: 2rem;
  line-height: 1;
  transform: translateY(-50%);
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}

.carousel-btn:hover {
  background: rgba(164, 11, 11, 0.78);
  border-color: rgba(212, 203, 179, 0.55);
  color: #fff4d8;
}

.carousel-btn-prev {
  left: 10px;
}

.carousel-btn-next {
  right: 10px;
}

.carousel-counter {
  position: absolute;
  right: 10px;
  bottom: 8px;
  z-index: 3;
  padding: 2px 7px;
  background: rgba(5, 5, 5, 0.78);
  border: 1px solid rgba(212, 203, 179, 0.18);
  color: #a09d96;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 1px;
}

/* Abstract UI: Website */
.website-ui {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
}
.website-ui .ui-nav {
  height: 8px;
  background-color: #222;
  border-radius: 2px;
  width: 100%;
}
.website-ui .ui-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin: 8px 0;
}
.website-ui .ui-title {
  height: 12px;
  width: 60%;
  background-color: #a40b0b;
  border-radius: 2px;
}
.website-ui .ui-subtitle {
  height: 6px;
  width: 40%;
  background-color: #444;
  border-radius: 2px;
}
.website-ui .ui-grid {
  display: flex;
  gap: 6px;
  flex: 1;
}
.website-ui .ui-box {
  flex: 1;
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 2px;
}

/* Abstract UI: Dashboard */
.dashboard-ui {
  display: flex;
  gap: 8px;
  height: 100%;
}
.dashboard-ui .ui-sidebar {
  width: 20px;
  background-color: #1a1a1a;
  border-radius: 2px;
  height: 100%;
}
.dashboard-ui .ui-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.dashboard-ui .ui-chart-bar {
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid #333;
}
.dashboard-ui .bar {
  flex: 1;
  background-color: #a40b0b;
  border-radius: 1px 1px 0 0;
  opacity: 0.8;
}
.dashboard-ui .ui-stats {
  height: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.dashboard-ui .stat-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #d4b022;
  border-top-color: transparent;
  transform: rotate(45deg);
}
.dashboard-ui .stat-line {
  flex: 1;
  height: 4px;
  background-color: #222;
  border-radius: 2px;
  position: relative;
}
.dashboard-ui .stat-line::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 60%;
  background-color: #4a8a4a;
  border-radius: 2px;
}

/* Abstract UI: Pipeline */
.pipeline-ui {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  height: 100%;
}
.pipeline-ui .node-group {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pipeline-ui .node {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #222;
  border: 2px solid #555;
  z-index: 2;
}
.pipeline-ui .commit-node { border-color: #d4b022; }
.pipeline-ui .build-node { border-color: #4a8a4a; }
.pipeline-ui .deploy-node { border-color: #a40b0b; }
.pipeline-ui .line {
  flex: 1;
  height: 2px;
  background-color: #444;
  margin: 0 -2px;
  z-index: 1;
}
.pipeline-ui .terminal-lines {
  background-color: #050505;
  border: 1px solid #222;
  padding: 6px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.pipeline-ui .t-line {
  height: 4px;
  background-color: #444;
  width: 80%;
  border-radius: 2px;
}
.pipeline-ui .t-line.short { width: 40%; }
.pipeline-ui .t-line.success { background-color: #4a8a4a; width: 60%; }

.typewriter-text {
  font-family: "Microsoft JhengHei", "PingFang TC", sans-serif;
  line-height: 1.6;
  font-size: 1.05rem;
  color: #c4c0b5;
  text-align: justify;
  margin: 0;
}

.desc-list {
  margin: 0;
  padding-left: 20px;
  list-style-type: disc;
}

.desc-list li {
  margin-bottom: 8px;
}

.desc-list li:last-child {
  margin-bottom: 0;
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
  
  .projects-page {
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
  
  .project-item {
    flex-direction: column;
    gap: 10px;
  }
  
  .project-number {
    writing-mode: horizontal-tb;
    transform: none;
    padding-top: 0;
    font-size: 1.5rem;
  }
  
  .stamp {
    position: relative;
    top: 0;
    right: 0;
    display: inline-block;
    margin-bottom: 10px;
    transform: none;
  }

  .project-content-wrapper {
    flex-direction: column;
  }
  
  .project-preview {
    flex: none;
    width: 100%;
  }
}
</style>
