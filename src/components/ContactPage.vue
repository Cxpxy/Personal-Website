<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import emailjs from '@emailjs/browser'

const isSending = ref(false)
const statusMessage = ref('')
const statusType = ref('')

const handleSubmit = async (event) => {
  const form = event.currentTarget
  const formData = new FormData(form)
  const trap = String(formData.get('website') || '')
  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const subject = String(formData.get('subject') || '').trim()
  const message = String(formData.get('message') || '').trim()

  if (trap) {
    statusType.value = 'success'
    statusMessage.value = 'TRANSMISSION SUCCESSFUL. MESSAGE LOGGED.'
    form.reset()
    return
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    statusType.value = 'error'
    statusMessage.value = 'Email service is not configured yet.'
    return
  }

  isSending.value = true
  statusMessage.value = ''
  statusType.value = ''

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        reply_to: email
      },
      { publicKey }
    )
    
    statusType.value = 'success'
    statusMessage.value = 'TRANSMISSION SUCCESSFUL. MESSAGE LOGGED.'
    form.reset()
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('EmailJS send failed:', error)
    }

    statusType.value = 'error'
    statusMessage.value = 'TRANSMISSION FAILED. PLEASE TRY AGAIN.'
  } finally {
    isSending.value = false
  }
}
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
          <svg class="red-strings" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="30" y1="30" x2="70" y2="70" stroke="#a40b0b" stroke-width="0.3" stroke-dasharray="1,0.5" />
            <line x1="70" y1="30" x2="30" y2="70" stroke="#a40b0b" stroke-width="0.2" />
          </svg>

          <!-- Pinned Notes -->
          <div class="note yellow-note">
            <div class="pin red-pin"></div>
            <h3>COMMUNICATION CHANNELS</h3>
            <ul class="contact-list">
              <li>
                <span class="label">EMAIL:</span>
                <span class="value">amber0520.chen@gmail.com</span>
              </li>
              <li>
                <span class="label">LOCATION:</span>
                <span class="value">Taiwan</span>
              </li>
              <li>
                <span class="label">LINKEDIN:</span>
                <a href="#" class="value link">Profile</a>
              </li>
              <li>
                <span class="label">GITHUB:</span>
                <a href="#" class="value link">Repository</a>
              </li>
              <li>
                <span class="label">INSTAGRAM:</span>
                <a href="#" class="value link">@amber0520</a>
              </li>
            </ul>
          </div>

          <div class="scrap newspaper-scrap">
            <div class="tape tape-top"></div>
            <h4>DIRECTIVE</h4>
            <p>Leave a trace. All messages are logged and analyzed.</p>
          </div>
        </div>
      </div>

      <!-- Right Side: Dark Dossier -->
      <div class="right-dossier">
        <div class="dossier-bg"></div>
        <div class="paper-texture"></div>
        <div class="caution-ribbon"></div>
        
        <div class="dossier-content">
          <div class="confidential-stamp">TRANSMISSION</div>
          
          <div class="identity-section">
            <div class="label">SECURE CHANNEL</div>
            <h1 class="chinese-name">CONTACT</h1>
          </div>

          <div class="info-block form-block">
            <div class="tape tape-top"></div>
            <h3>NEW MESSAGE.</h3>
            
            <form @submit.prevent="handleSubmit" class="message-form">
              <div class="form-group honeypot" aria-hidden="true">
                <label for="website">WEBSITE</label>
                <input type="text" id="website" name="website" tabindex="-1" autocomplete="off" />
              </div>

              <div class="form-group">
                <label for="name">SENDER ALIAS (NAME)</label>
                <input type="text" id="name" name="name" required placeholder="Enter your name..." />
              </div>
              
              <div class="form-group">
                <label for="email">RETURN ADDRESS (EMAIL)</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email..." />
              </div>
              
              <div class="form-group">
                <label for="subject">SUBJECT</label>
                <input type="text" id="subject" name="subject" required placeholder="Enter subject..." />
              </div>
              
              <div class="form-group">
                <label for="message">MESSAGE CONTENT</label>
                <textarea id="message" name="message" rows="6" required placeholder="Type your message here..."></textarea>
              </div>
              
              <div v-if="statusMessage" :class="['status-message', statusType]">
                {{ statusMessage }}
              </div>
              
              <button type="submit" class="submit-btn" :disabled="isSending">
                {{ isSending ? 'TRANSMITTING...' : 'SEND MESSAGE' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.contact-page {
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

.newspaper-scrap {
  position: absolute;
  top: 15%;
  right: 10%;
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
  padding: 20px 25px;
  box-shadow: 3px 6px 12px rgba(0,0,0,0.4);
  z-index: 10;
  font-family: "Courier New", Courier, monospace;
  color: #1a1a1a;
}

.yellow-note {
  background-color: #d4cbb3;
  top: 40%;
  left: 15%;
  transform: rotate(-2deg);
  width: 320px;
}

.yellow-note h3 {
  margin: 0 0 15px 0;
  font-size: 1.2rem;
  border-bottom: 2px solid #1a1a1a;
  padding-bottom: 5px;
  font-weight: bold;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-list li {
  margin-bottom: 12px;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
}

.contact-list .label {
  font-weight: bold;
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 2px;
}

.contact-list .value {
  font-weight: bold;
  color: #1a1a1a;
  word-break: break-all;
}

.contact-list .link {
  color: #a40b0b;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
  display: inline-block;
  width: fit-content;
}

.contact-list .link:hover {
  border-color: #a40b0b;
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

.tape {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.5);
  backdrop-filter: blur(2px);
  z-index: 6;
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
  padding: 1.5rem 4rem;
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

.identity-section {
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
}

.identity-section .label {
  font-size: 0.9rem;
  color: #888;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 2px;
}

.chinese-name {
  font-family: "Courier New", Courier, monospace;
  font-size: 2.8rem;
  margin: 0 0 5px 0;
  line-height: 1;
  color: #e0dcd3;
  letter-spacing: 5px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
}

.info-block {
  margin-bottom: 15px;
  background: rgba(20, 18, 16, 0.8);
  padding: 15px 25px;
  border: 1px solid rgba(255,255,255,0.05);
  box-shadow: 2px 4px 12px rgba(0,0,0,0.5);
  position: relative;
  z-index: 2;
  border-radius: 2px;
}

.info-block h3 {
  font-size: 1.1rem;
  border-bottom: 2px solid #333;
  padding-bottom: 4px;
  margin-bottom: 12px;
  color: #e0dcd3;
  letter-spacing: 1px;
}

.message-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.form-group label {
  font-size: 0.8rem;
  color: #a09d96;
  font-weight: bold;
  letter-spacing: 1px;
}

.form-group input,
.form-group textarea {
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
  color: #e0dcd3;
  padding: 8px 10px;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.95rem;
  transition: border-color 0.3s, background-color 0.3s;
}

.form-group textarea {
  height: 80px;
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #a40b0b;
  background-color: rgba(0, 0, 0, 0.8);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #555;
}

.honeypot {
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
}

.submit-btn {
  margin-top: 5px;
  background-color: transparent;
  color: #e0dcd3;
  border: 1px solid #a40b0b;
  padding: 10px 20px;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.95rem;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background-color: rgba(164, 11, 11, 0.2);
  box-shadow: 0 0 10px rgba(164, 11, 11, 0.3);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  border-color: #555;
  color: #888;
}

.status-message {
  padding: 10px 15px;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 1px;
  border-left: 3px solid transparent;
  margin-top: 5px;
}

.status-message.success {
  color: #d4cbb3;
  background-color: rgba(212, 203, 179, 0.1);
  border-left-color: #d4cbb3;
}

.status-message.error {
  color: #a40b0b;
  background-color: rgba(164, 11, 11, 0.1);
  border-left-color: #a40b0b;
}

/* Responsive */
@media (max-width: 1024px) {
  .split-layout {
    flex-direction: column;
    overflow-y: auto;
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
    font-size: 2.5rem;
  }
}
</style>
