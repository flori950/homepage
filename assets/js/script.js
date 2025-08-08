'use strict';

// Translation function
function getTranslation(key) {
  const currentLang = localStorage.getItem('preferred-language') || 'en';
  const langData = currentLang === 'de' ? (window.deData || {}) : (window.enData || {});
  
  // Navigate through nested object using dot notation
  const keys = key.split('.');
  let result = langData;
  
  for (const k of keys) {
    result = result?.[k];
    if (result === undefined) break;
  }
  
  // Fallback to English if translation not found
  if (result === undefined && currentLang !== 'en') {
    const enData = window.enData || {};
    result = enData;
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) break;
    }
  }
  
  return result || key;
}

// Contact Protection Functions
const protectContacts = function() {
  // Check if this is a real user (simple bot detection)
  if (navigator.webdriver || window.phantom || window.__phantomas) {
    return; // Exit if bot detected
  }

  // Email protection with multiple encoding layers
  const emailElements = document.querySelectorAll('[data-email-protected]');
  emailElements.forEach(element => {
    const encodedEmail = element.getAttribute('data-email-protected');
    try {
      let decodedEmail = atob(encodedEmail); // Base64 decode
      
      // Additional obfuscation reversal
      decodedEmail = decodedEmail.split('').reverse().join(''); // Reverse
      decodedEmail = decodedEmail.replace(/DOT/g, '.'); // Replace DOT with .
      decodedEmail = decodedEmail.replace(/AT/g, '@'); // Replace AT with @
      decodedEmail = decodedEmail.split('').reverse().join(''); // Reverse back
      
      element.textContent = decodedEmail;
      element.href = 'mailto:' + decodedEmail;
      element.removeAttribute('data-email-protected');
      
      // Add click tracking for human verification
      element.addEventListener('click', function(e) {
        // Simple human verification - check for mouse movement
        if (!window.humanVerified) {
          e.preventDefault();
          alert(getTranslation('contact.messages.moveMouseVerification'));
          return false;
        }
      });
    } catch (e) {
      element.textContent = getTranslation('contact.messages.contactViaEmail');
    }
  });

  // Phone protection with similar approach
  const phoneElements = document.querySelectorAll('[data-phone-protected]');
  phoneElements.forEach(element => {
    const encodedPhone = element.getAttribute('data-phone-protected');
    try {
      const decodedPhone = atob(encodedPhone); // Base64 decode
      element.textContent = decodedPhone;
      element.href = 'tel:' + decodedPhone.replace(/\s/g, '');
      element.removeAttribute('data-phone-protected');
    } catch (e) {
      element.textContent = getTranslation('contact.messages.contactViaPhone');
    }
  });
};

// Human verification through mouse movement
let mouseMovements = 0;
document.addEventListener('mousemove', function() {
  mouseMovements++;
  if (mouseMovements > 5) {
    window.humanVerified = true;
  }
});

// Anti-bot protection with delay and verification
const initContactProtection = function() {
  // Multiple checks to ensure this is a real browser
  if (typeof window !== 'undefined' && 
      typeof document !== 'undefined' && 
      typeof navigator !== 'undefined') {
    
    // Random delay between 500-2000ms to avoid pattern detection
    const delay = Math.floor(Math.random() * 1500) + 500;
    
    setTimeout(() => {
      // Additional bot detection
      if (window.outerWidth > 0 && window.outerHeight > 0) {
        protectContacts();
      }
    }, delay);
  }
};

// Initialize contact protection and form when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    initContactProtection();
    initContactForm();
    initAvatarClick();
  });
} else {
  initContactProtection();
  initContactForm();
  initAvatarClick();
}

// Avatar click handler to navigate to About page
function initAvatarClick() {
  const avatarBox = document.querySelector('[data-avatar-click]');
  if (avatarBox) {
    avatarBox.addEventListener('click', function() {
      // Find the About navigation link and click it
      const aboutLink = document.querySelector('[data-nav-link][data-page-target="about"]') || 
                       document.querySelector('[data-nav-link]');
      
      if (aboutLink) {
        aboutLink.click();
      }
    });
  }
}



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// monials variables
const monialsItem = document.querySelectorAll("[data-monials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalVolunteerContainer = document.querySelector("[data-modal-volunteer-container]");
const modalCloseBtns = document.querySelectorAll("[data-modal-close-btn]");
const overlays = document.querySelectorAll("[data-overlay]");

// regular modal variables
const modalImg = document.querySelector("[data-modal-container] [data-modal-img]");
const modalTitle = document.querySelector("[data-modal-container] [data-modal-title]");
const modalText = document.querySelector("[data-modal-container] [data-modal-text]");

// volunteer modal variables
const modalVolImg = document.querySelector("[data-modal-volunteer-container] [data-modal-img]");
const modalVolTitle = document.querySelector("[data-modal-volunteer-container] [data-modal-title]");
const modalVolText = document.querySelector("[data-modal-volunteer-container] [data-modal-text]");

// modal toggle functions
const monialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlays[0].classList.toggle("active");
}

const volunteerModalFunc = function () {
  modalVolunteerContainer.classList.toggle("active");
  overlays[1].classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < monialsItem.length; i++) {

  monialsItem[i].addEventListener("click", function () {

    // Check if this item has a volunteer avatar (for volunteering section)
    const volunteerAvatar = this.querySelector("[data-monials-volunteer-avatar]");
    const regularAvatar = this.querySelector("[data-monials-avatar]");
    
    if (volunteerAvatar) {
      // This is a volunteering item - use volunteer modal
      modalVolImg.src = volunteerAvatar.src;
      modalVolImg.alt = volunteerAvatar.alt;
      modalVolTitle.innerHTML = this.querySelector("[data-monials-title]").innerHTML;
      modalVolText.innerHTML = this.querySelector("[data-monials-text]").innerHTML;
      
      volunteerModalFunc();
    } else if (regularAvatar) {
      // This is a regular item (languages/certifications) - use regular modal
      modalImg.src = regularAvatar.src;
      modalImg.alt = regularAvatar.alt;
      modalTitle.innerHTML = this.querySelector("[data-monials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-monials-text]").innerHTML;
      
      monialsModalFunc();
    }

  });

}

// add click event to modal close buttons
modalCloseBtns.forEach((btn, index) => {
  btn.addEventListener("click", function() {
    if (index === 0) {
      monialsModalFunc();
    } else {
      volunteerModalFunc();
    }
  });
});

// add click event to overlays
overlays.forEach((overlay, index) => {
  overlay.addEventListener("click", function() {
    if (index === 0) {
      monialsModalFunc();
    } else {
      volunteerModalFunc();
    }
  });
});



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {
      // Use data-page-target attribute instead of innerHTML to support multiple languages
      const targetPage = this.getAttribute('data-page-target') || this.innerHTML.toLowerCase();
      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        // Only try to access navigationLinks if the index is valid
        for (let k = 0; k < navigationLinks.length; k++) {
          if (k === i) {
            navigationLinks[k].classList.add("active");
          } else {
            navigationLinks[k].classList.remove("active");
          }
        }
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
      }
    }

  });
}

/**
 * Contact Form Security & Functionality
 */

// Rate limiting and security
const formSecurity = {
  lastSubmission: 0,
  submissionCount: 0,
  maxSubmissions: 3,
  timeWindow: 300000, // 5 minutes
  minTimeBetweenSubmissions: 5000, // 5 seconds
  
  isBlocked() {
    const now = Date.now();
    if (now - this.lastSubmission < this.minTimeBetweenSubmissions) {
      return true;
    }
    
    // Reset counter if time window passed
    if (now - this.lastSubmission > this.timeWindow) {
      this.submissionCount = 0;
    }
    
    return this.submissionCount >= this.maxSubmissions;
  },
  
  recordSubmission() {
    this.lastSubmission = Date.now();
    this.submissionCount++;
  }
};

// Generate simple CAPTCHA
function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const answer = num1 + num2;
  
  document.getElementById('captcha-question').textContent = `${num1} + ${num2} = ?`;
  document.getElementById('captcha-answer').value = answer;
}

// Generate CSRF token
function generateCSRFToken() {
  const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
  document.getElementById('csrf_token').value = token;
  return token;
}

// Validate form inputs
function validateForm(formData) {
  const errors = [];
  
  // Check honeypot fields
  if (formData.get('bot_field') || formData.get('spam_email') || formData.get('website')) {
    return [getTranslation('contact.messages.botDetected')];
  }
  
  // Validate name
  const name = formData.get('fullname');
  if (!name || name.length < 2 || name.length > 100) {
    errors.push(getTranslation('contact.messages.nameRequired'));
  }
  if (!/^[A-Za-zÀ-ÿ\s\-\.]+$/.test(name)) {
    errors.push(getTranslation('contact.messages.nameInvalid'));
  }
  
  // Validate email
  const email = formData.get('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push(getTranslation('contact.messages.emailRequired'));
  }
  
  // Validate subject
  const subject = formData.get('subject');
  if (!subject || subject.length < 3 || subject.length > 200) {
    errors.push(getTranslation('contact.messages.subjectRequired'));
  }
  
  // Validate message
  const message = formData.get('message');
  if (!message || message.length < 10 || message.length > 2000) {
    errors.push(getTranslation('contact.messages.messageRequired'));
  }
  
  // Check for spam patterns
  const spamPatterns = [
    /\b(viagra|casino|lottery|winner|million|dollars|prize|click here|free money)\b/i,
    /(http|https):\/\/[^\s]+/g, // URLs
    /\b\d{4,}\b/g // Long numbers
  ];
  
  const fullText = `${name} ${email} ${subject} ${message}`.toLowerCase();
  for (let pattern of spamPatterns) {
    if (pattern.test(fullText)) {
      errors.push(getTranslation('contact.messages.spamDetected'));
      break;
    }
  }
  
  // Validate CAPTCHA
  const captchaInput = parseInt(formData.get('captcha'));
  const captchaAnswer = parseInt(formData.get('captcha_answer'));
  if (captchaInput !== captchaAnswer) {
    errors.push(getTranslation('contact.messages.captchaFailed'));
  }
  
  return errors;
}

// Show form status message
function showFormStatus(message, type = 'info') {
  const statusDiv = document.getElementById('form-status');
  statusDiv.className = `form-status ${type}`;
  statusDiv.textContent = message;
  statusDiv.style.display = 'block';
  
  // Auto-hide after 5 seconds for success messages
  if (type === 'success') {
    setTimeout(() => {
      statusDiv.style.display = 'none';
    }, 5000);
  }
}

// Send email using mailto (opens user's email client)
async function sendEmail(formData) {
  try {
    // Get the protected email address
    const toEmail = atob('Zmxvcmlhbi5qYWVnZXIxQGZyZWVuZXQuZGU='); // florian.jaeger1@freenet.de
    
    // Prepare email data
    const name = formData.get('fullname');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto URL
    const emailSubject = encodeURIComponent(`Portfolio Contact: ${subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Subject: ${subject}\n\n` +
      `Message:\n${message}\n\n` +
      `---\n` +
      `Sent via florian-hunter.de contact form`
    );
    
    const mailtoUrl = `mailto:${toEmail}?subject=${emailSubject}&body=${emailBody}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    // Simulate delay for UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return { success: true };
    
  } catch (error) {
    console.error('Email opening error:', error);
    
    // Fallback: Show user the email address
    const fallbackMessage = getTranslation('contact.messages.emailDirectly') + atob('Zmxvcmlhbi5qYWVnZXIxQGZyZWVuZXQuZGU=');
    return { success: false, error: fallbackMessage };
  }
}

// Initialize contact form
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = form.querySelector('[data-form-btn]');
  
  if (!form) return;
  
  // Generate initial CAPTCHA and CSRF token
  generateCaptcha();
  generateCSRFToken();
  
  // Set form timestamp
  document.getElementById('form_timestamp').value = Date.now();
  
  // Form submission handler
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Check rate limiting
    if (formSecurity.isBlocked()) {
      showFormStatus(getTranslation('contact.messages.rateLimitExceeded'), 'error');
      return;
    }
    
    const formData = new FormData(form);
    
    // Validate form
    const errors = validateForm(formData);
    if (errors.length > 0) {
      showFormStatus(errors.join('. '), 'error');
      generateCaptcha(); // Regenerate CAPTCHA on error
      return;
    }
    
    // Check minimum time spent on form (anti-bot)
    const formTime = Date.now() - parseInt(formData.get('form_timestamp'));
    if (formTime < 5000) { // Less than 5 seconds
      showFormStatus(getTranslation('contact.messages.formTooFast'), 'error');
      return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    showFormStatus(getTranslation('contact.messages.sending'), 'warning');
    
    try {
      // Send email
      const result = await sendEmail(formData);
      
      if (result.success) {
        showFormStatus(getTranslation('contact.messages.success'), 'success');
        form.reset();
        generateCaptcha();
        generateCSRFToken();
        document.getElementById('form_timestamp').value = Date.now();
        formSecurity.recordSubmission();
      } else {
        throw new Error(result.error || getTranslation('contact.messages.failed'));
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showFormStatus(getTranslation('contact.messages.failed'), 'error');
    } finally {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });
  
  // Regenerate CAPTCHA when clicked
  document.getElementById('captcha-question').addEventListener('click', generateCaptcha);
}