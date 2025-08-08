// Link Management Utility
// This script automatically applies links from the configuration to HTML elements

// Global function to manually trigger link application (for translation system)
window.reapplyDataLinks = function() {
  if (typeof applyDataLinks === 'function') {
    applyDataLinks();
  }
};

// Function to apply links to data-link attributes
function applyDataLinks() {
  // Check if PORTFOLIO_LINKS is loaded
  if (typeof PORTFOLIO_LINKS === 'undefined') {
    console.error('PORTFOLIO_LINKS is not defined. Make sure links-config.js is loaded before link-manager.js');
    return;
  }
  
  // Apply links based on data-link attributes
  const linkElements = document.querySelectorAll('[data-link]');
  
  linkElements.forEach(element => {
    const linkKey = element.getAttribute('data-link');
    const url = getLinkByKey(linkKey);
    
    if (url) {
      element.href = url;
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Small delay to ensure all scripts are loaded
  setTimeout(() => {
    applyDataLinks();
    // Apply links to elements without data-link attributes (fallback for existing elements)
    applyFallbackLinks();
    
    // Force reapplication after translation system runs
    setTimeout(() => {
      applyDataLinks();
    }, 1000);
  }, 200);
});

// Also apply links when content is dynamically updated (for translation system)
// Set up a MutationObserver to watch for content changes
document.addEventListener('DOMContentLoaded', function() {
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(function(mutations) {
      let shouldReapplyLinks = false;
      
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          // Check if any new elements with data-link were added
          if (mutation.addedNodes) {
            mutation.addedNodes.forEach(function(node) {
              if (node.nodeType === 1) { // Element node
                if (node.hasAttribute && node.hasAttribute('data-link')) {
                  shouldReapplyLinks = true;
                }
                // Also check children
                const childrenWithDataLink = node.querySelectorAll && node.querySelectorAll('[data-link]');
                if (childrenWithDataLink && childrenWithDataLink.length > 0) {
                  shouldReapplyLinks = true;
                }
              }
            });
          }
          
          // Check if innerHTML was changed (translation updates)
          if (mutation.type === 'childList' && mutation.target.innerHTML && mutation.target.innerHTML.includes('data-link')) {
            shouldReapplyLinks = true;
          }
        }
      });
      
      if (shouldReapplyLinks) {
        setTimeout(applyDataLinks, 100); // Small delay to ensure DOM is updated
      }
    });
    
    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-link']
    });
  }
});

// Update the global function reference after applyDataLinks is defined
window.reapplyDataLinks = applyDataLinks;

function getLinkByKey(key) {
  const linkMap = {
    // Education links - covering both naming patterns
    'education-tuBerlin': PORTFOLIO_LINKS.education.tuBerlin,
    'education-tu-berlin': PORTFOLIO_LINKS.education.tuBerlin,
    'education-universityPotsdam': PORTFOLIO_LINKS.education.universityPotsdam,
    'education-university-potsdam': PORTFOLIO_LINKS.education.universityPotsdam,
    'education-universityTokyo': PORTFOLIO_LINKS.education.universityTokyo,
    'education-university-tokyo': PORTFOLIO_LINKS.education.universityTokyo,
    'education-hokkaidoUniversity': PORTFOLIO_LINKS.education.hokkaidoUniversity,
    'education-hokkaido-university': PORTFOLIO_LINKS.education.hokkaidoUniversity,
    'education-ntnu': PORTFOLIO_LINKS.education.ntnu,
    'education-universityHavana': PORTFOLIO_LINKS.education.universityHavana,
    'education-university-havana': PORTFOLIO_LINKS.education.universityHavana,
    'education-universitasWarmadewa': PORTFOLIO_LINKS.education.universitasWarmadewa,
    'education-universitas-warmadewa': PORTFOLIO_LINKS.education.universitasWarmadewa,
    'education-hankukUniversity': PORTFOLIO_LINKS.education.hankukUniversity,
    'education-hankuk-university': PORTFOLIO_LINKS.education.hankukUniversity,
    'education-universiteRennes': PORTFOLIO_LINKS.education.universiteRennes,
    'education-universite-rennes': PORTFOLIO_LINKS.education.universiteRennes,
    'education-uibe': PORTFOLIO_LINKS.education.uibe,
    'education-arwed-rossbach-schule': PORTFOLIO_LINKS.education.abitur,
    'education-abitur': PORTFOLIO_LINKS.education.abitur,

    // Personal social media links
    'personal-linkedin': PORTFOLIO_LINKS.personal.linkedin,
    'personal-xing': PORTFOLIO_LINKS.personal.xing,
    'personal-youtube': PORTFOLIO_LINKS.personal.youtube,
    'personal-github': PORTFOLIO_LINKS.personal.github,
    'personal-spotify': PORTFOLIO_LINKS.personal.spotify,
    'personal-instagram': PORTFOLIO_LINKS.personal.instagram,
    'personal-daadBlog': PORTFOLIO_LINKS.personal.daadBlog,

    // Company links - covering both naming patterns
    'company-raven51': PORTFOLIO_LINKS.companies.raven51,
    'companies-raven51': PORTFOLIO_LINKS.companies.raven51,
    'company-gecko': PORTFOLIO_LINKS.companies.gecko,
    'companies-gecko': PORTFOLIO_LINKS.companies.gecko,
    'company-fzi': PORTFOLIO_LINKS.companies.fzi,
    'companies-fzi': PORTFOLIO_LINKS.companies.fzi,
    'company-ahkMain': PORTFOLIO_LINKS.companies.ahkMain,
    'company-ahk-main': PORTFOLIO_LINKS.companies.ahkMain,
    'company-ahkPhilippines': PORTFOLIO_LINKS.companies.ahkPhilippines,
    'company-ahk-philippines': PORTFOLIO_LINKS.companies.ahkPhilippines,
    'companies-ahkPhilippines': PORTFOLIO_LINKS.companies.ahkPhilippines,
    'company-ahkSingapore': PORTFOLIO_LINKS.companies.ahkSingapore,
    'company-ahk-singapore': PORTFOLIO_LINKS.companies.ahkSingapore,
    'companies-ahkSingapore': PORTFOLIO_LINKS.companies.ahkSingapore,
    'company-daad': PORTFOLIO_LINKS.companies.daad,
    'companies-daad': PORTFOLIO_LINKS.companies.daad,
    'company-zessko': PORTFOLIO_LINKS.companies.zessko,
    'companies-zessko': PORTFOLIO_LINKS.companies.zessko,

    // Organization links
    'organizations-daad': PORTFOLIO_LINKS.organizations.daad,
    'organizations-alumniportalDeutschland': PORTFOLIO_LINKS.organizations.alumniportalDeutschland,
    'organizations-gema': PORTFOLIO_LINKS.organizations.gema,
    'organizations-djv': PORTFOLIO_LINKS.organizations.djv,
    'organizations-ifj': PORTFOLIO_LINKS.organizations.ifj,
    'organizations-universitaetsgesellschaftPotsdam': PORTFOLIO_LINKS.organizations.universitaetsgesellschaftPotsdam,
    'organizations-eitDigital': PORTFOLIO_LINKS.organizations.eitDigital,
    'organizations-ihkLeipzig': PORTFOLIO_LINKS.organizations.ihkLeipzig,
    'organizations-studierenWeltweit': PORTFOLIO_LINKS.organizations.studierenWeltweit,
    'organizations-zessko': PORTFOLIO_LINKS.companies.zessko,

    // Football links
    'football-sfcFriedrichshain': PORTFOLIO_LINKS.football.sfcFriedrichshain,
    'football-hufsSeoul': PORTFOLIO_LINKS.football.hufsSeoul,
    'football-fcForty2c': PORTFOLIO_LINKS.football.fcForty2c,
    'football-tsv-lichtenberg': PORTFOLIO_LINKS.football.tsvLichtenberg,
    'football-tsvLichtenberg': PORTFOLIO_LINKS.football.tsvLichtenberg,
    'football-fv-wannsee': PORTFOLIO_LINKS.football.fvWannsee,
    'football-fvWannsee': PORTFOLIO_LINKS.football.fvWannsee,
    'football-red-star-fc': PORTFOLIO_LINKS.football.redStarFC,
    'football-redStarFC': PORTFOLIO_LINKS.football.redStarFC,
    'football-uibe': PORTFOLIO_LINKS.football.uibeFootball,
    'football-uibeFootball': PORTFOLIO_LINKS.football.uibeFootball,
    'football-fsv-babelsberg': PORTFOLIO_LINKS.football.fsvBabelsberg,
    'football-fsvBabelsberg': PORTFOLIO_LINKS.football.fsvBabelsberg,
    'football-sv-moelkau': PORTFOLIO_LINKS.football.svMoelkau,
    'football-svMoelkau': PORTFOLIO_LINKS.football.svMoelkau,
    'football-kickers-markkleeberg': PORTFOLIO_LINKS.football.kickersMarkkleeberg,
    'football-kickersMarkkleeberg': PORTFOLIO_LINKS.football.kickersMarkkleeberg,

    // Project links
    'project-daad-singapore-blog': PORTFOLIO_LINKS.projects.daadSingaporeBlog,
    'project-youtube-channel': PORTFOLIO_LINKS.projects.youtubeChannel,
    'projects-daadSingaporeBlog': PORTFOLIO_LINKS.projects.daadSingaporeBlog,
    'projects-youtubeChannel': PORTFOLIO_LINKS.projects.youtubeChannel,
    'projects-terminal': PORTFOLIO_LINKS.projects.terminal,
    'projects-mining': PORTFOLIO_LINKS.projects.mining,
    'projects-droneProject': PORTFOLIO_LINKS.projects.droneProject,
    'projects-companyMapping': PORTFOLIO_LINKS.projects.companyMapping,
    'projects-opticalFlow': PORTFOLIO_LINKS.projects.opticalFlow,
    'projects-dataSummaries': PORTFOLIO_LINKS.projects.dataSummaries,
    'projects-tangibleClimateFutures': PORTFOLIO_LINKS.projects.tangibleClimateFutures,
    'projects-climateProject': PORTFOLIO_LINKS.projects.tangibleClimateFutures,

    // Hobby links
    'hobby-youtube': PORTFOLIO_LINKS.hobbies.youtube,
    'hobby-spotify': PORTFOLIO_LINKS.hobbies.spotify,
    'hobby-instagram': PORTFOLIO_LINKS.hobbies.instagram,
    'hobby-daadBlog': PORTFOLIO_LINKS.hobbies.daadBlog,
    'hobbies-youtube': PORTFOLIO_LINKS.hobbies.youtube,
    'hobbies-spotify': PORTFOLIO_LINKS.hobbies.spotify,
    'hobbies-instagram': PORTFOLIO_LINKS.hobbies.instagram,
    'hobbies-daadBlog': PORTFOLIO_LINKS.hobbies.daadBlog
  };

  return linkMap[key] || null;
}

function applyFallbackLinks() {
  // Apply links to social media icons in sidebar
  const socialLinks = {
    'logo-linkedin': PORTFOLIO_LINKS.personal.linkedin,
    'logo-xing': PORTFOLIO_LINKS.personal.xing,
    'logo-youtube': PORTFOLIO_LINKS.personal.youtube,
    'logo-github': PORTFOLIO_LINKS.personal.github
  };

  Object.entries(socialLinks).forEach(([iconName, url]) => {
    const link = document.querySelector(`ion-icon[name="${iconName}"]`)?.closest('a');
    if (link && !link.hasAttribute('data-link')) link.href = url;
  });

  // Apply links to custom social images in sidebar
  const customSocialImages = document.querySelectorAll('.social-list img');
  customSocialImages.forEach(img => {
    const link = img.closest('a');
    if (link && !link.hasAttribute('data-link')) {
      if (img.alt === 'Spotify Page') {
        link.href = PORTFOLIO_LINKS.personal.spotify;
      } else if (img.alt === 'DAAD Blog') {
        link.href = PORTFOLIO_LINKS.personal.daadBlog;
      }
    }
  });

  // Apply remaining links by image src matching (for elements without data-link)
  const imageLinkMap = {
    'daad-logo-small.png': PORTFOLIO_LINKS.organizations.daad,
    'alumni-portal-deutschland-logo-full.jpg': PORTFOLIO_LINKS.organizations.alumniportalDeutschland,
    'Gema_logo-small.png': PORTFOLIO_LINKS.organizations.gema,
    'Deutscher-Journalisten-Verband-logo-full.png': PORTFOLIO_LINKS.organizations.djv,
    'ifj-logo-full.png': PORTFOLIO_LINKS.organizations.ifj,
    'universitaetsgesellschaft-Potsdam-logo-full.png': PORTFOLIO_LINKS.organizations.universitaetsgesellschaftPotsdam,
    'eit-logo-full.png': PORTFOLIO_LINKS.organizations.eitDigital,
    'ihk-leipzig-full.png': PORTFOLIO_LINKS.organizations.ihkLeipzig
  };

  Object.entries(imageLinkMap).forEach(([imageName, url]) => {
    const img = document.querySelector(`img[src*="${imageName}"]`);
    if (img) {
      const link = img.closest('a');
      if (link && !link.hasAttribute('data-link')) {
        link.href = url;
      }
    }
  });

  // Update text links in timeline descriptions
  updateTextLinks();
}

function updateTextLinks() {
  // Update text links in timeline descriptions
  const timelineTexts = document.querySelectorAll('.timeline-text a, .hobby-text a');
  
  timelineTexts.forEach(link => {
    if (link.hasAttribute('data-link')) return; // Skip if already has data-link
    
    const href = link.getAttribute('href');
    const text = link.textContent.toLowerCase();
    
    // Education links
    if (href?.includes('tu-berlin.de') || text.includes('tu-berlin.de')) {
      link.href = PORTFOLIO_LINKS.education.tuBerlin;
    } else if (href?.includes('uni-potsdam.de') || text.includes('uni-potsdam.de')) {
      link.href = PORTFOLIO_LINKS.education.universityPotsdam;
    } else if (href?.includes('u-tokyo.ac.jp') || text.includes('u-tokyo.ac.jp')) {
      link.href = PORTFOLIO_LINKS.education.universityTokyo;
    } else if (href?.includes('hokudai.ac.jp') || text.includes('hokudai.ac.jp')) {
      link.href = PORTFOLIO_LINKS.education.hokkaidoUniversity;
    } else if (href?.includes('ntnu.edu') || text.includes('ntnu.edu')) {
      link.href = PORTFOLIO_LINKS.education.ntnu;
    } else if (href?.includes('uh.cu') || text.includes('uh.cu')) {
      link.href = PORTFOLIO_LINKS.education.universityHavana;
    } else if (href?.includes('warmadewa.ac.id') || text.includes('warmadewa.ac.id')) {
      link.href = PORTFOLIO_LINKS.education.universitasWarmadewa;
    } else if (href?.includes('hufs.ac.kr') || text.includes('hufs.ac.kr')) {
      link.href = PORTFOLIO_LINKS.education.hankukUniversity;
    } else if (href?.includes('univ-rennes.fr') || text.includes('univ-rennes.fr')) {
      link.href = PORTFOLIO_LINKS.education.universiteRennes;
    } else if (href?.includes('uibe.edu.cn') || text.includes('uibe.edu.cn')) {
      link.href = PORTFOLIO_LINKS.education.uibe;
    } else if (href?.includes('arwed-rossbach-schule.de') || text.includes('arwed-rossbach-schule.de')) {
      link.href = PORTFOLIO_LINKS.education.abitur;
    }
    
    // Company links
    else if (href?.includes('raven51.de') || text.includes('raven51.de')) {
      link.href = PORTFOLIO_LINKS.companies.raven51;
    } else if (href?.includes('gecko.de') || text.includes('gecko.de')) {
      link.href = PORTFOLIO_LINKS.companies.gecko;
    } else if (href?.includes('fzi.de') || text.includes('fzi.de')) {
      link.href = PORTFOLIO_LINKS.companies.fzi;
    } else if (href?.includes('philippinen.ahk.de') || text.includes('philippinen.ahk.de')) {
      link.href = PORTFOLIO_LINKS.companies.ahkPhilippines;
    } else if (href?.includes('singapur.ahk.de') || text.includes('singapur.ahk.de')) {
      link.href = PORTFOLIO_LINKS.companies.ahkSingapore;
    } else if (href?.includes('daad.de') || text.includes('daad.de')) {
      link.href = PORTFOLIO_LINKS.companies.daad;
    } else if (href?.includes('zessko') || text.includes('zessko')) {
      link.href = PORTFOLIO_LINKS.companies.zessko;
    }
    
    // Football links
    else if (href?.includes('sfcberlinfriedrichshain.com') || text.includes('sfcberlinfriedrichshain.com') || text.includes('sfc-friedrichshain')) {
      link.href = PORTFOLIO_LINKS.football.sfcFriedrichshain;
    } else if (href?.includes('tsvlichtenbergfussball.de') || text.includes('tsvlichtenbergfussball.de') || text.includes('tsv-lichtenberg')) {
      link.href = PORTFOLIO_LINKS.football.tsvLichtenberg;
    } else if (href?.includes('fvwannsee.de') || text.includes('fvwannsee.de') || text.includes('fv-wannsee')) {
      link.href = PORTFOLIO_LINKS.football.fvWannsee;
    } else if (href?.includes('HanoiRedstar.vn') || text.includes('HanoiRedstar.vn') || href?.includes('facebook.com/HanoiRedstar') || text.includes('red star')) {
      link.href = PORTFOLIO_LINKS.football.redStarFC;
    } else if (href?.includes('fsv-babelsberg74.de') || text.includes('fsv-babelsberg74.de') || text.includes('fsv-babelsberg')) {
      link.href = PORTFOLIO_LINKS.football.fsvBabelsberg;
    } else if (href?.includes('svmoelkau04.de') || text.includes('svmoelkau04.de') || text.includes('sv-moelkau')) {
      link.href = PORTFOLIO_LINKS.football.svMoelkau;
    } else if (href?.includes('kickers94.de') || text.includes('kickers94.de') || text.includes('kickers-markkleeberg')) {
      link.href = PORTFOLIO_LINKS.football.kickersMarkkleeberg;
    } else if (href?.includes('FC-FORTY2C') || text.includes('FC FORTY2C') || href?.includes('facebook.com/FC-FORTY2C')) {
      link.href = PORTFOLIO_LINKS.football.fcForty2c;
    } else if (href?.includes('hufs.ac.kr') || text.includes('hufs.ac.kr') || text.includes('hankuk university')) {
      link.href = PORTFOLIO_LINKS.football.hufsSeoul;
    } else if (href?.includes('uibe.edu.cn') || text.includes('uibe.edu.cn') || text.includes('uibe football')) {
      link.href = PORTFOLIO_LINKS.football.uibeFootball;
    }
    
    // Hobby links
    else if (href?.includes('spotify.com') || text.includes('spotify')) {
      link.href = PORTFOLIO_LINKS.hobbies.spotify;
    } else if (href?.includes('youtube.com') || text.includes('youtube')) {
      link.href = PORTFOLIO_LINKS.hobbies.youtube;
    } else if (href?.includes('studieren-weltweit.de') || text.includes('studieren-weltweit')) {
      link.href = PORTFOLIO_LINKS.hobbies.daadBlog;
    } else if (href?.includes('instagram.com') || text.includes('instagram')) {
      link.href = PORTFOLIO_LINKS.hobbies.instagram;
    }
  });
}
