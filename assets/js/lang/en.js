// English Language Data
const enData = {
  sidebar: {
    title: "Cloud-Native Architect",
    showContacts: "Show Contacts",
    contactLabels: {
      email: "Email",
      phone: "Phone", 
      birthday: "Birthday",
      location: "Location"
    }
  },
  navbar: {
    about: "About",
    resume: "Resume", 
    hobbies: "Blog",
    contact: "Contact"
  },
  about: {
    title: "About me",
    intro: "Hey, I'm Florian Jäger and I'm a Cloud-Native Architect from Berlin, Germany, working in scalable infrastructure solutions and bridging the gap from code to cloud. I'm passionate about transforming complex technical challenges into elegant, efficient systems.",
    description: "My expertise lies in designing and implementing cloud-native architectures that are robust, scalable, and maintainable. I have extensive experience in software engineering, having worked across various international environments from Singapore to multiple European countries. I bring a unique perspective combining technical excellence with international business acumen gained through my diverse professional journey.",
    whatImDoing: "What I'm doing",
    services: {
      cloudArchitecture: {
        title: "Cloud Architecture",
        description: "Designing scalable, resilient cloud-native solutions using modern architectural patterns and best practices."
      },
      softwareEngineering: {
        title: "Software Engineering", 
        description: "Full-stack development with expertise in modern frameworks, microservices, and DevOps practices."
      },
      businessDevelopment: {
        title: "Business Development",
        description: "Cross-cultural business development and international project management with experience across Asia and Europe."
      },
      technicalConsulting: {
        title: "Technical Consulting",
        description: "Strategic technology guidance and digital transformation consulting for businesses across various industries."
      },
      internationalBusiness: {
        title: "International Business",
        description: "Cross-cultural business development and international project management with experience across Asia and Europe."
      }
    },
    languages: "Languages",
    languageItems: {
      german: {
        title: "Deutsch",
        description: "Native - My mother tongue, allowing me to communicate fluently in all professional and personal contexts within German-speaking environments."
      },
      english: {
        title: "English", 
        description: "Professional Working Proficiency (UniCert C1 Certified) - Extensive experience working and studying in international environments, enabling communication in technical and business contexts. Certified C1 level proficiency demonstrating advanced language skills in professional settings."
      },
      chinese: {
        title: "中文 (Chinese)",
        description: "Elementary (UniCert and UIBE Certified) - Acquired during my studies in Potsdam, Beijing and work experience in Singapore, particularly during my time at University of International Business and Economics in Beijing. UniCert Basis certification enabling communication in business and academic contexts."
      },
      french: {
        title: "Français",
        description: "Elementary to Intermediate - Developed through academic exchanges, elementary and high school, and my participation in the European Digital UniverCity (EDUC) program at Université de Rennes."
      },
      spanish: {
        title: "Español",
        description: "Elementary (Certified) - Developed through language studies including A1 certification in Ibiza, and enhanced during my academic exchange to Cuba."
      },
      indonesian: {
        title: "Bahasa Indonesia",
        description: "Elementary (Certified) - Acquired during my intensive studies in Indonesia at Universitas Warmadewa, Bali. Academic certification enabling basic communication and cultural understanding in Indonesian contexts, developed through academic experience in Denpasar."
      }
    },
    organizationsTitle: "Organizations & Affiliations",
    certificationsTitle: "Certifications & Achievements",
    certificationItems: {
      sap: {
        title: "SAP Certifications",
        description: "Multiple SAP certifications including Enterprise Architecture, S/4HANA Cloud Implementation, Data Intelligence for Enterprise AI, and Business Process Automation with Intelligent RPA."
      },
      hpi: {
        title: "Hasso Plattner Institute",
        description: "Completed courses in Information Service Engineering and Blockchain Security, gaining expertise in modern software architectures and distributed systems security."
      },
      adb: {
        title: "Asian Development Bank Institute (ADBI)",
        description: "Completed 13 comprehensive courses covering Asian economic development, financial systems, and sustainable growth strategies. Topics include Financial Globalization & Capital Flows, Green Investments & Renewable Energy, Digital Economy for Sustainable Growth, Water & Sanitation SDGs, Urban Development in Asia, Financial Integration in Southeast Asia, Financial Inclusion & Literacy, Energy Economics & Environmental Policy, Demographic Transition Impacts, Private Infrastructure Financing, Services for Development, and Introduction to Sustainable Development in Asia-Pacific."
      },
      aim: {
        title: "Asian Institute of Management (AIM)",
        description: "Completed advanced management and leadership programs including Design Thinking methodologies, strategic business development, and innovation management. Gained expertise in Asian business practices, cross-cultural management, and entrepreneurial thinking applied to technology and business development contexts."
      },
      music: {
        title: "Music Producer",
        description: "Electronic music producer and brand owner of HUNT3R with notable achievements including reaching <strong>Top 10 Swiss Electronic Charts</strong> with original compositions. Active on major streaming platforms including Spotify, with growing international audience and recognition in the electronic music scene."
      }
    },
    volunteeringTitle: "Volunteering & Professional Activities",
    volunteeringItems: {
      daadAmbassador: {
        title: "DAAD Ambassador",
        description: "<strong>German Academic Exchange Service (2019 - Present)</strong><br>Representing German academic exchange opportunities internationally through presentations at universities and schools, providing educational consulting on study-related international stays, and participating in and moderating discussion panels. Maintaining active engagement in promoting German higher education globally."
      },
      professionalMemberships: {
        title: "Professional Memberships",
        description: "<strong>German Journalists Association - DJV (May 2020 - Present)</strong> - Professional journalism network<br><strong>International Federation of Journalists (Jun 2020 - Present)</strong> - Global journalism advocacy<br><strong>IHK Leipzig (2015 - Present)</strong> - Chamber of Commerce professional network"
      },
      academicMentoring: {
        title: "Academic Mentoring",
        description: "<strong>TU Berlin Mentor (Academic Year)</strong> - Technical University of Berlin mentoring program<br><strong>University of Potsdam Mentor (Apr 2018 - Jun 2019)</strong> - International student mentoring program<br><strong>UIBE Mentor (One Semester)</strong> - University of International Business and Economics, Beijing<br><br>Provided guidance and support to international students through multiple university mentoring programs, helping with academic integration, cultural adaptation, and navigating university life across different educational systems. Specialized in supporting students from diverse international backgrounds in German and Chinese academic environments."
      },
      educationalOrganizations: {
        title: "Educational Organizations", 
        description: "<strong>EIT Digital Alumni (Oct 2020 - Feb 2025)</strong> - European technology innovation network<br><strong>Alumniportal Deutschland (Jul 2022 - Present)</strong> - International alumni network<br><strong>Universitätsgesellschaft Potsdam (Jun 2021 - Present)</strong> - University support organization<br><strong>Stiftungsfamilie BSW & EWH (Oct 2015 - May 2021)</strong> - Educational foundation activities<br>Active participation in educational initiatives and international networking for academic development."
      }
    }
  },
  resume: {
    title: "Resume",
    education: "Education",
    experience: "Experience", 
    skillsTitle: "My skills",
    educationItems: {
      tuBerlin: {
        title: "Master of Science - Information Systems Management",
        period: "Oct 2020 — April 2025",
        description: "Advanced studies in information systems management, focusing on enterprise architecture and digital transformation strategies.<br><a href=\"#\" data-link=\"education-tuBerlin\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">tu-berlin.de</a>"
      },
      universityPotsdam: {
        title: "Bachelor of Science - Business Informatic Systems", 
        period: "Oct 2015 — Jul 2020",
        description: "Comprehensive education in business informatics, combining technical computer science skills with business administration knowledge.<br><a href=\"#\" data-link=\"education-universityPotsdam\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">uni-potsdam.de</a>"
      },
      universityTokyo: {
        title: "University of Tokyo - Research Exchange",
        period: "Jun 2023 — Aug 2023", 
        description: "Research Exchange Program - Advanced research methodologies and international collaboration<br><strong>Location:</strong> Tokyo, Japan<br><a href=\"#\" data-link=\"education-universityTokyo\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">u-tokyo.ac.jp</a>"
      },
      hokkaidoUniversity: {
        title: "Hokkaido University - International Summer Program",
        period: "Jul 2023 — Sep 2023",
        description: "International Summer Program - Cross-cultural research and academic exchange<br><strong>Location:</strong> Sapporo, Japan<br><a href=\"#\" data-link=\"education-hokkaidoUniversity\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">hokudai.ac.jp</a>"
      },
      ntnu: {
        title: "Norwegian University of Science and Technology (NTNU)",
        period: "Jan 2023 — May 2023",
        description: "Sustainable Cities and Hybrid Teams - Urban development and collaborative technologies<br><strong>Location:</strong> Trondheim, Norway<br><a href=\"#\" data-link=\"education-ntnu\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">ntnu.edu</a>"
      },
      universityHavana: {
        title: "University of Havana",
        period: "Aug 2022 — Oct 2022", 
        description: "Economics - Latin American economic systems and international trade<br><strong>Location:</strong> Havana, Cuba<br><a href=\"#\" data-link=\"education-universityHavana\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">uh.cu</a>"
      },
      universitasWarmadewa: {
        title: "Universitas Warmadewa",
        period: "Jul 2022 — Aug 2022",
        description: "International Economics - Southeast Asian economic development and cultural studies<br><strong>Location:</strong> Denpasar, Bali, Indonesia<br><a href=\"#\" data-link=\"education-universitasWarmadewa\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">warmadewa.ac.id</a>"
      },
      hankukUniversity: {
        title: "Hankuk University of Foreign Studies", 
        period: "Jan 2022 — Jul 2022",
        description: "Business Administration and Management - Korean business culture and international management<br><strong>Location:</strong> Seoul, South Korea<br><a href=\"#\" data-link=\"education-hankukUniversity\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">hufs.ac.kr</a>"
      },
      universiteRennes: {
        title: "Université de Rennes I",
        period: "Jul 2020 — Aug 2020",
        description: "Unleashing the Power of Circular City Data<br><em>European Digital UniverCity (EDUC) Summer School Scholarship Program 2020</em><br><strong>Location:</strong> Rennes, France<br><a href=\"#\" data-link=\"education-universiteRennes\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">univ-rennes.fr</a>"
      },
      uibe: {
        title: "University of International Business and Economics",
        period: "Jan 2018 — Jul 2018",
        description: "Chinese business practices and cultural integration<br><strong>Location:</strong> Beijing, China<br><a href=\"#\" data-link=\"education-uibe\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">uibe.edu.cn</a>"
      },
      abitur: {
        title: "Abitur - Computer Science & Mathematics",
        period: "Aug 2012 — Jun 2015", 
        description: "Completed with advanced courses in Computer Science and Mathematics, laying the foundation for technical expertise.<br><strong>Location:</strong> Leipzig, Germany<br><a href=\"#\" data-link=\"education-abitur\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">arwed-rossbach-schule.de</a>"
      }
    },
    experienceItems: {
      raven51: {
        title: "Software Engineer",
        period: "Mar 2023 — Present",
        description: "Developing and implementing scalable cloud-native solutions, working with modern technologies and architectural patterns to deliver enterprise-grade software systems.<br><a href=\"#\" data-link=\"companies-raven51\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">raven51.de</a>"
      },
      gecko: {
        title: "Software Engineer",
        period: "Apr 2021 — Feb 2023",
        description: "Full-stack development and software architecture, contributing to innovative software solutions and maintaining high-quality code standards.<br><a href=\"#\" data-link=\"companies-gecko\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">gecko.de</a>"
      },
      fzi: {
        title: "Graduate Research Assistant",
        period: "Oct 2020 — Dec 2020",
        description: "Research and development in information technology, contributing to innovative projects and advancing technical knowledge in cloud computing and enterprise systems.<br><a href=\"#\" data-link=\"companies-fzi\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">fzi.de</a>"
      },
      ahk: {
        title: "German Chambers of Commerce Abroad (AHK) - Multi-Regional Experience",
        description: "Progressive career across multiple AHK regional offices, specializing in international trade facilitation, market entry strategies, and business development between Germany and international markets.<br><br>"
      },
      ahkPhilippines: {
        title: "Philippines (AHK Philippinen)",
        period: "Sep 2020 — Nov 2020",
        description: "Energy & Trade Development, Business Development & Foreign Market Entry, Research & Sector Working Groups, Business Delegations (German Federal Ministry for Economic Affairs and Energy)<br><a href=\"#\" data-link=\"companies-ahkPhilippines\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">philippinen.ahk.de</a>"
      },
      ahkSingapore: {
        title: "Singapore (AHK Singapur)",
        period: "Mar 2019 — Dec 2019",
        description: "Delegation management from Germany, Regional delegation management, Cross-border business facilitation, Multi-country market coordination<br><a href=\"#\" data-link=\"companies-ahkSingapore\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">singapur.ahk.de</a>"
      },
      daad: {
        title: "DAAD Correspondent & Ambassador",
        period: "Jun 2019 — Present",
        description: "Content creation, educational consulting, and representing German educational opportunities internationally. Maintaining active blog and social media presence, including featured articles on studying abroad experiences.<br><a href=\"#\" data-link=\"companies-daad\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">daad.de</a><br><a href=\"#\" data-link=\"organizations-studierenWeltweit\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">Read Singapore Experience Blog</a>"
      },
      zessko: {
        title: "Technical Research Assistant",
        period: "Sep 2017 — May 2019",
        description: "Supporting IT infrastructure, database management, and technical research in the Center for Languages and Key Competencies.<br><a href=\"#\" data-link=\"organizations-zessko\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">uni-potsdam.de/de/zessko/</a>"
      }
    }
  },
  hobbies: {
    title: "Blog",
    technology: {
      category: "Technology",
      title: "Technology & Innovation Projects 💻",
      description: "Passionate about combining technology with real-world applications. Key projects include:<br><br><strong>🏆 TechTalents Program - Eintracht Frankfurt ⚽</strong><br>3-month hybrid program combining football passion with technological innovation.<br><br><strong>💻 Terminal Application</strong><br>Interactive web-based terminal showcasing modern technologies.<br>🔗 <a href=\"#\" data-link=\"projects-terminal\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">Visit Terminal Application</a><br><br><strong>⛏️ Browser Mining Platform</strong><br>Experimental cryptocurrency mining platform running directly in web browsers.<br>🔗 <a href=\"#\" data-link=\"projects-mining\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">Visit Mining Platform</a><br><br><strong>🚁 Drone Project</strong><br>Innovative drone logistics and automation project. Watch the demo video:<br><a href=\"#\" data-link=\"projects-droneProject\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">Watch Drone Project on YouTube</a><br><br><strong>🏭 Circular Economy Company Mapping</strong><br>Python-based pipeline for identifying and mapping German circular economy enterprises using Crunchbase API, keyword filtering, and LLM validation. Analyzed 500,000+ company profiles to identify 1,622 validated CE enterprises across Germany.<br>🔗 <a href=\"#\" data-link=\"projects-companyMapping\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">View GitHub Repository</a><br><br><strong>👁️ Bio-Inspired Computer Vision</strong><br>Advanced computer vision research implementing bio-inspired optical flow estimation using Bayesian inference. Addresses the aperture problem in motion detection through sophisticated mathematical modeling and neural network architectures inspired by biological vision systems.<br>🔗 <a href=\"#\" data-link=\"projects-opticalFlow\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">View GitHub Repository</a><br><br><strong>📊 Data Summaries & Quantile Computing</strong><br>Research project on efficient data summarization techniques using hashtree-based quantile computing. Explores advanced algorithms for processing large-scale datasets and extracting meaningful statistical summaries with optimized performance characteristics.<br>🔗 <a href=\"#\" data-link=\"projects-dataSummaries\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">View GitHub Repository</a><br><br><strong>🌍 Tangible Climate Futures Project</strong><br>Collaborative data fusion project between TU Berlin and UdK Berlin for climate research visualization.<br>🔗 <a href=\"#\" data-link=\"projects-tangibleClimateFutures\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">View GitHub Repository</a>"
    },
    football: {
      category: "Sports",
      title: "Football ⚽",
      description: "Passionate footballer since 2001 with an international career spanning multiple countries and teams, allowing me to connect with diverse cultures through the universal language of sport. Played across Europe and Asia, from youth teams in Germany to professional clubs in Singapore, Korea, China, and Vietnam.",
      careerTitle: "Football Career Highlights",
      teams: {
        sfcFriedrichshain: {
          title: "SFC Berlin Friedrichshain - 2nd Team",
          period: "Oct 2023 — Jul 2024",
          description: "Berlin, Germany - Left wing<br><strong>Location:</strong> Friedrichshain, Berlin<br><a href=\"#\" data-link=\"football-sfcFriedrichshain\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">sfcberlinfriedrichshain.com</a>"
        },
        pannHufs: {
          title: "PANN HUFS Seoul - 1st Team",
          period: "Mar 2022 — Jul 2022",
          description: "Seoul, Korea - Left wing<br><strong>Location:</strong> Seoul, South Korea<br><strong>University:</strong> <a href=\"#\" data-link=\"football-hufsSeoul\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">Hankuk University of Foreign Studies</a>"
        },
        fcForty2c: {
          title: "FC FORTY2C - 1st Team",
          period: "Jun 2019 — Jan 2020",
          description: "Singapore - Left midfield/Left defender<br><strong>Location:</strong> Singapore<br><a href=\"#\" data-link=\"football-fcForty2c\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">Facebook - FC FORTY2C</a>"
        },
        tsvLichtenberg: {
          title: "TSV Lichtenberg - 1st Team",
          period: "Jun 2019 — Feb 2022",
          description: "Berlin, Germany - Left defender/Left wing<br><strong>Location:</strong> Lichtenberg, Berlin<br><a href=\"#\" data-link=\"football-tsvLichtenberg\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">tsv-lichtenberg.de</a>"
        },
        fvWannsee: {
          title: "FV Wannsee - 1st Team",
          period: "Oct 2018 — Jun 2019",
          description: "Berlin, Germany - Left defender/Left wing<br><strong>Location:</strong> Wannsee, Berlin<br><a href=\"#\" data-link=\"football-fvWannsee\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">fv-wannsee.de</a>"
        },
        redStarFc: {
          title: "Red Star FC - 1st Team",
          period: "Jul 2018 — Oct 2018",
          description: "Hanoi, Vietnam - Left midfield/Left defender/Forward<br><strong>Location:</strong> Hanoi, Vietnam<br><a href=\"#\" data-link=\"football-redStarFC\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">Facebook - HanoiRedstar.vn</a>"
        },
        uibeTeam: {
          title: "UIBE International Students Football Team",
          period: "Feb 2018 — Jun 2018",
          description: "Beijing, China - Left midfield/Forward<br><strong>Location:</strong> Beijing, China<br><strong>University:</strong> <a href=\"#\" data-link=\"football-uibeFootball\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">University of International Business and Economics</a>"
        },
        fsvBabelsberg: {
          title: "FSV Babelsberg 74 - 2nd Team",
          period: "Feb 2016 — Present",
          description: "Potsdam, Germany - Left midfield/Forward<br><strong>Location:</strong> Babelsberg, Potsdam<br><a href=\"#\" data-link=\"football-fsvBabelsberg\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">fsv-babelsberg.de</a>"
        },
        svMoelkau: {
          title: "SV Mölkau 1922 - 1st Team",
          period: "Sep 2014 — Sep 2015",
          description: "Leipzig, Germany - Left defender/Left wing<br><strong>Location:</strong> Mölkau, Leipzig<br><a href=\"#\" data-link=\"football-svMoelkau\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">sv-moelkau.de</a>"
        },
        kickersMarkkleeberg: {
          title: "Kickers 94 Markkleeberg - Youth Development",
          period: "Jun 2001 — Aug 2014",
          description: "Leipzig, Germany - Various positions through youth development<br><strong>Location:</strong> Markkleeberg, Leipzig<br><a href=\"#\" data-link=\"football-kickersMarkkleeberg\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">kickers94-markkleeberg.de</a>"
        }
      }
    },
    music: {
      category: "Music",
      title: "Music Producer - HUNT3R 🎵",
      description: "Electronic music producer under the artist name HUNT3R, creating and releasing tracks on major streaming platforms including Spotify. Passionate about electronic music production, sound design, and exploring new musical territories. My music reflects a fusion of international influences gathered from my travels and multicultural experiences.<br><br><a href=\"#\" data-link=\"hobbies-spotify\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">🎧 Listen on Spotify</a>"
    },
    journalism: {
      category: "Media",
      title: "Journalism & Writing 📰",
      description: "Freelance journalist and writer covering international affairs, technology, and cultural topics. Published articles on various platforms focusing on cross-cultural experiences, technology trends, and international business insights. Member of the German Journalists Association (Deutscher Journalisten-Verband).<br><br><em>Article portfolio and published works available upon request.</em>"
    },
    video: {
      category: "Creative",
      title: "Video Production & YouTube 📹",
      description: "Creating and editing videos for YouTube and other platforms, documenting travel experiences, cultural exchanges, and daily life in different countries. Running a personal YouTube channel with content covering international experiences, technology insights, and lifestyle vlogs. Using professional editing software to produce high-quality content for international audiences.<br><br><a href=\"#\" data-link=\"hobbies-youtube\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">📺 Watch on YouTube</a>"
    },
    travel: {
      category: "Adventure", 
      title: "International Travel ✈️",
      description: "Passionate global explorer with extensive travel experience across <strong>Asia and Europe</strong>, embracing immersive cultural experiences that shape my international perspective. My journeys span from <strong>living and working in Singapore</strong> to academic exchanges in <strong>China, Korea, Japan, and Norway</strong>, with adventures through Southeast Asia including <strong>Thailand, Vietnam, Cambodia, and Laos</strong>, as well as unique experiences in <strong>Cuba and France</strong>.<br><br>Each destination has contributed to my understanding of diverse cultures, languages, and business practices, making me a truly global citizen who values authentic cultural immersion and meaningful international connections.<br><br><strong>Follow my travel journey:</strong><br>📸 <a href=\"#\" data-link=\"hobbies-instagram\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">Instagram @pflorii</a> - Travel photography and moments<br>📺 <a href=\"#\" data-link=\"hobbies-youtube\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">YouTube Channel</a> - Travel vlogs and experiences<br>📝 <a href=\"#\" data-link=\"hobbies-daadBlog\" target=\"_blank\" style=\"color: var(--orange-yellow-crayola);\">DAAD Travel Blog</a> - Detailed Singapore experience"
    }
  },
  portfolio: {
    title: "Portfolio",
    selectCategory: "Select category",
    all: "All",
    universityProjects: "University Projects", 
    workProjects: "Work Projects",
    privateProjects: "Private Projects"
  },
  blog: {
    title: "Blog"
  },
  contact: {
    title: "Contact",
    formTitle: "Contact Form",
    fullNamePlaceholder: "Full name",
    emailPlaceholder: "Email address",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Your Message",
    sendButton: "Send Message",
    captcha: "Please solve: ",
    messages: {
      rateLimitExceeded: "Too many submissions. Please wait before trying again.",
      botDetected: "Bot detected",
      nameRequired: "Name must be between 2 and 100 characters",
      nameInvalid: "Name contains invalid characters",
      emailRequired: "Valid email address required",
      subjectRequired: "Subject must be between 3 and 200 characters",
      messageRequired: "Message must be between 10 and 2000 characters",
      spamDetected: "Message contains prohibited content",
      captchaFailed: "CAPTCHA verification failed",
      formTooFast: "Please take more time to fill out the form.",
      sending: "Sending message...",
      success: "Message sent successfully! I'll get back to you soon.",
      failed: "Failed to send message. Please try again or contact me directly.",
      moveMouseVerification: "Please move your mouse and try again.",
      contactViaEmail: "Contact via Email",
      contactViaPhone: "Contact via Phone",
      emailDirectly: "Please email me directly at: "
    }
  }
};

// Export for use in i18n manager
if (typeof module !== 'undefined' && module.exports) {
  module.exports = enData;
}

// Make available globally for browser
if (typeof window !== 'undefined') {
  window.enData = enData;
}
