// Clean Internationalization Manager
class I18nManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('preferred-language') || 'en';
    this.languages = {};
    this.init();
  }

  // Initialize the i18n system
  async init() {
    try {
      await this.loadLanguageFiles();
      this.updateLanguage(this.currentLanguage);
      this.setupLanguageSwitcher();
    } catch (error) {
      console.error('Failed to initialize i18n system:', error);
    }
  }

  // Load language files
  async loadLanguageFiles() {
    try {
      // Language files are already loaded via HTML script tags
      // Just assign the global variables
      this.languages.en = window.enData || {};
      this.languages.de = window.deData || {};
      
    } catch (error) {
      console.error('Error loading language files:', error);
    }
  }

  // Update language
  updateLanguage(langCode) {
    if (!this.languages[langCode]) {
      console.warn(`Language ${langCode} not found, falling back to English`);
      langCode = 'en';
    }

    this.currentLanguage = langCode;
    localStorage.setItem('preferred-language', langCode);
    
    this.translatePage();
    this.updateLanguageSwitcher();
  }

  // Translate all elements on the page
  translatePage() {
    const data = this.languages[this.currentLanguage];
    if (!data) return;

    // Translate all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getNestedValue(data, key);
      
      if (translation) {
        element.innerHTML = translation;
      }
    });

    // Translate placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = this.getNestedValue(data, key);
      
      if (translation) {
        element.placeholder = translation;
      }
    });

    // Update page title and navbar
    this.updateNavbar();
    this.updateSectionTitles();
    
    // Reapply data-link attributes after translation (links may be in translated content)
    if (typeof window.reapplyDataLinks === 'function') {
      setTimeout(window.reapplyDataLinks, 100);
    }
  }

  // Get nested object value from dot notation key
  getNestedValue(obj, key) {
    return key.split('.').reduce((current, prop) => current && current[prop], obj);
  }

  // Update navbar
  updateNavbar() {
    const data = this.languages[this.currentLanguage];
    if (!data?.navbar) return;

    const navLinks = document.querySelectorAll('[data-nav-link]');
    navLinks.forEach(link => {
      const text = link.textContent.toLowerCase();
      const key = Object.keys(data.navbar).find(k => 
        data.navbar[k].toLowerCase() === text || 
        (this.currentLanguage === 'en' ? k : data.navbar[k].toLowerCase()) === text
      );
      
      if (key && data.navbar[key]) {
        link.textContent = data.navbar[key];
      }
    });
  }

  // Update section titles
  updateSectionTitles() {
    const data = this.languages[this.currentLanguage];
    if (!data) return;

    // Update main section titles
    const aboutTitle = document.querySelector('.about .article-title');
    if (aboutTitle && data.about?.title) {
      aboutTitle.textContent = data.about.title;
    }

    const resumeTitle = document.querySelector('.resume .article-title');
    if (resumeTitle && data.resume?.title) {
      resumeTitle.textContent = data.resume.title;
    }

    const hobbiesTitle = document.querySelector('.hobbies .article-title');
    if (hobbiesTitle && data.hobbies?.title) {
      hobbiesTitle.textContent = data.hobbies.title;
    }

    const contactTitle = document.querySelector('.contact .article-title');
    if (contactTitle && data.contact?.title) {
      contactTitle.textContent = data.contact.title;
    }

    // Update subsection titles
    this.updateSubsectionTitles(data);
  }

  // Update subsection titles
  updateSubsectionTitles(data) {
    // Service section title
    const serviceTitle = document.querySelector('.service-title');
    if (serviceTitle && data.about?.whatImDoing) {
      serviceTitle.textContent = data.about.whatImDoing;
    }

    // Languages section title
    const languagesTitle = document.querySelector('.monials-title');
    if (languagesTitle && languagesTitle.textContent === 'Languages' && data.about?.languages) {
      languagesTitle.textContent = data.about.languages;
    }

    // Certifications section title
    const certificationsTitles = document.querySelectorAll('.monials-title');
    certificationsTitles.forEach(title => {
      if (title.textContent.includes('Certifications') && data.about?.certificationsTitle) {
        title.textContent = data.about.certificationsTitle;
      }
      if (title.textContent.includes('Volunteering') && data.about?.volunteeringTitle) {
        title.textContent = data.about.volunteeringTitle;
      }
    });

    // Resume subsection titles
    const educationTitle = document.querySelector('.timeline .title-wrapper h3');
    if (educationTitle && educationTitle.textContent === 'Education' && data.resume?.education) {
      educationTitle.textContent = data.resume.education;
    }

    const experienceTitles = document.querySelectorAll('.timeline .title-wrapper h3');
    experienceTitles.forEach(title => {
      if (title.textContent === 'Experience' && data.resume?.experience) {
        title.textContent = data.resume.experience;
      }
    });

    const skillsTitle = document.querySelector('.skills-title');
    if (skillsTitle && data.resume?.skillsTitle) {
      skillsTitle.textContent = data.resume.skillsTitle;
    }
  }

  // Setup language switcher
  setupLanguageSwitcher() {
    const languageSwitcher = document.getElementById('language-switcher');
    if (!languageSwitcher) return;

    const dropdownBtn = languageSwitcher.querySelector('.language-dropdown-btn');
    const dropdownMenu = languageSwitcher.querySelector('.language-dropdown-menu');
    const languageOptions = languageSwitcher.querySelectorAll('.language-option');

    // Toggle dropdown
    dropdownBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Check if dropdown should open upward
      if (dropdownMenu) {
        const rect = dropdownBtn.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const dropdownHeight = 100; // Approximate dropdown height
        const spaceBelow = viewportHeight - rect.bottom;
        const spaceAbove = rect.top;
        
        // If not enough space below and more space above, open upward
        if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
          dropdownMenu.classList.add('dropup');
        } else {
          dropdownMenu.classList.remove('dropup');
        }
        
        dropdownMenu.classList.toggle('active');
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      dropdownMenu?.classList.remove('active');
    });

    // Handle language selection
    languageOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const langCode = option.getAttribute('data-lang');
        this.updateLanguage(langCode);
        dropdownMenu?.classList.remove('active');
      });
    });

    this.updateLanguageSwitcher();
  }

  // Update language switcher display
  updateLanguageSwitcher() {
    const currentLangSpan = document.querySelector('.current-language');
    const languageOptions = document.querySelectorAll('.language-option');

    if (currentLangSpan) {
      currentLangSpan.textContent = this.currentLanguage.toUpperCase();
    }

    // Update active state
    languageOptions.forEach(option => {
      const langCode = option.getAttribute('data-lang');
      option.classList.toggle('active', langCode === this.currentLanguage);
    });
  }
}

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.i18nManager = new I18nManager();
});
