// Enhanced Security & Performance Monitor
// =====================================

class SecurityMonitor {
  constructor() {
    this.requestCount = 0;
    this.requestTimes = [];
    this.maxRequestsPerMinute = 60;
    this.maxRequestsPerSecond = 5;
    this.blockedIPs = new Set();
    this.suspiciousPatterns = [
      /script/i,
      /javascript/i,
      /vbscript/i,
      /onload/i,
      /onerror/i,
      /<iframe/i,
      /<object/i,
      /<embed/i,
      /eval\(/i,
      /document\.cookie/i,
      /document\.write/i,
      /window\.location/i
    ];
    
    this.init();
  }

  init() {
    this.setupRateLimiting();
    this.setupInputSanitization();
    this.setupCSRFProtection();
    this.setupFormValidation();
    this.monitorPerformance();
  }

  // Rate limiting
  setupRateLimiting() {
    const startTime = Date.now();
    let requestCounter = 0;

    setInterval(() => {
      const now = Date.now();
      this.requestTimes = this.requestTimes.filter(time => now - time < 60000);
      
      if (this.requestTimes.length > this.maxRequestsPerMinute) {
        this.blockCurrentSession();
      }
    }, 1000);
  }

  checkRateLimit() {
    const now = Date.now();
    this.requestTimes.push(now);
    
    // Check requests per second
    const recentRequests = this.requestTimes.filter(time => now - time < 1000);
    if (recentRequests.length > this.maxRequestsPerSecond) {
      this.blockCurrentSession();
      return false;
    }
    
    return true;
  }

  blockCurrentSession() {
    console.warn('Rate limit exceeded - blocking session');
    document.body.innerHTML = '<div style="text-align:center;margin-top:50vh;transform:translateY(-50%);"><h2>Too Many Requests</h2><p>Please wait a moment before trying again.</p></div>';
    
    // Redirect after 5 seconds
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }

  // Input sanitization
  setupInputSanitization() {
    document.addEventListener('input', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        this.sanitizeInput(e.target);
      }
    });
  }

  sanitizeInput(element) {
    const value = element.value;
    
    // Check for suspicious patterns
    for (const pattern of this.suspiciousPatterns) {
      if (pattern.test(value)) {
        element.value = value.replace(pattern, '');
        this.logSuspiciousActivity('Suspicious input pattern detected', { 
          element: element.name || element.id,
          pattern: pattern.toString(),
          value: value.substring(0, 50)
        });
      }
    }
    
    // Basic XSS prevention
    element.value = this.escapeHtml(element.value);
  }

  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // CSRF Protection
  setupCSRFProtection() {
    this.csrfToken = this.generateCSRFToken();
    
    // Add CSRF token to all forms
    document.querySelectorAll('form').forEach(form => {
      const csrfInput = document.createElement('input');
      csrfInput.type = 'hidden';
      csrfInput.name = 'csrf_token';
      csrfInput.value = this.csrfToken;
      form.appendChild(csrfInput);
    });
  }

  generateCSRFToken() {
    return Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  // Enhanced form validation
  setupFormValidation() {
    document.addEventListener('submit', (e) => {
      if (e.target.tagName === 'FORM') {
        if (!this.validateForm(e.target)) {
          e.preventDefault();
          return false;
        }
        
        if (!this.checkRateLimit()) {
          e.preventDefault();
          return false;
        }
      }
    });
  }

  validateForm(form) {
    const formData = new FormData(form);
    let isValid = true;
    
    // Validate required fields
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        this.showFieldError(field, 'This field is required');
        isValid = false;
      }
    });
    
    // Validate email fields
    form.querySelectorAll('[type="email"]').forEach(field => {
      if (field.value && !this.isValidEmail(field.value)) {
        this.showFieldError(field, 'Please enter a valid email address');
        isValid = false;
      }
    });
    
    // Check for bot behavior
    if (this.detectBotBehavior(form)) {
      isValid = false;
    }
    
    return isValid;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  showFieldError(field, message) {
    // Remove existing error
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    
    // Add new error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '0.8em';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
  }

  // Bot detection
  detectBotBehavior(form) {
    const formData = new FormData(form);
    
    // Check for honeypot field
    const honeypot = form.querySelector('[name="website"]');
    if (honeypot && honeypot.value) {
      this.logSuspiciousActivity('Honeypot triggered', { value: honeypot.value });
      return true;
    }
    
    // Check form fill time (too fast = bot)
    const formStartTime = form.dataset.startTime;
    if (formStartTime) {
      const fillTime = Date.now() - parseInt(formStartTime);
      if (fillTime < 2000) { // Less than 2 seconds
        this.logSuspiciousActivity('Form filled too quickly', { fillTime });
        return true;
      }
    }
    
    // Check for duplicate submissions
    const formHash = this.hashFormData(formData);
    if (this.recentSubmissions.has(formHash)) {
      this.logSuspiciousActivity('Duplicate form submission', { hash: formHash });
      return true;
    }
    
    this.recentSubmissions.add(formHash);
    setTimeout(() => this.recentSubmissions.delete(formHash), 300000); // 5 minutes
    
    return false;
  }

  hashFormData(formData) {
    const values = Array.from(formData.values()).join('|');
    return btoa(values).substring(0, 20);
  }

  // Performance monitoring
  monitorPerformance() {
    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      if (loadTime > 5000) {
        console.warn('Page load time exceeded 5 seconds:', loadTime);
      }
    });
    
    // Monitor memory usage
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB
          console.warn('High memory usage detected:', memory.usedJSHeapSize);
        }
      }, 30000);
    }
    
    // Monitor for long tasks
    if ('PerformanceObserver' in window) {
      try {
        // Check if longtask entry type is supported
        const supportedEntryTypes = PerformanceObserver.supportedEntryTypes;
        if (supportedEntryTypes && supportedEntryTypes.includes('longtask')) {
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.duration > 50) {
                console.warn('Long task detected:', entry.duration);
              }
            });
          });
          observer.observe({ entryTypes: ['longtask'] });
        }
      } catch (error) {
        // Silently fail if longtask monitoring is not supported
        console.debug('Long task monitoring not supported:', error.message);
      }
    }
  }

  // Logging
  logSuspiciousActivity(event, details = {}) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      event,
      details,
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer
    };
    
    console.warn('Suspicious activity:', logEntry);
    
    // In production, send to server
    // fetch('/api/security-log', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(logEntry)
    // });
  }
}

// Initialize security monitor
if (typeof window !== 'undefined') {
  window.securityMonitor = new SecurityMonitor();
  window.securityMonitor.recentSubmissions = new Set();
  
  // Add honeypot to forms
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach(form => {
      // Add honeypot field
      const honeypot = document.createElement('input');
      honeypot.type = 'text';
      honeypot.name = 'website';
      honeypot.style.position = 'absolute';
      honeypot.style.left = '-9999px';
      honeypot.style.opacity = '0';
      honeypot.setAttribute('tabindex', '-1');
      honeypot.setAttribute('autocomplete', 'off');
      form.appendChild(honeypot);
      
      // Track form start time
      form.dataset.startTime = Date.now().toString();
    });
  });
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SecurityMonitor;
}
