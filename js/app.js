// Language dictionary
const LANG = {
  "en": {
    "nav.home": "Home",
    "nav.l1": "L1",
    "nav.l2": "L2",
    "nav.l3": "L3",
    "nav.news": "News",

    "home.heroTitle": "University Resources Portal",
    "home.heroSubtitle": "Access all your academic materials: books, PDFs, courses, summaries, and exams in one place.",
    "home.searchPlaceholder": "Search for resources...",
    "home.stats.filesLabel": "Resources Available",
    "home.stats.usersLabel": "Active Students",
    "home.stats.downloadsLabel": "Downloads",
    "home.levelsTitle": "Academic Levels",
    "home.level1": "First Year (L1)",
    "home.level1Desc": "Semesters S1 & S2 resources",
    "home.level2": "Second Year (L2)",
    "home.level2Desc": "Semesters S3 & S4 resources",
    "home.level3": "Third Year (L3)",
    "home.level3Desc": "Specializations ISIL & SI",
    "home.latestTitle": "Latest Uploads",
    "home.viewAll": "View All",
    "home.explore": "Explore",

    "l1.title": "First Year (L1)",
    "l1.description": "Access all resources for the first year of study. Choose a semester to explore available modules and materials.",
    "l1.semester1": "Semester 1",
    "l1.semester1Desc": "Fundamental courses and introductory modules",
    "l1.semester2": "Semester 2",
    "l1.semester2Desc": "Advanced fundamental courses and specialization introduction",
    "l1.viewModules": "View Modules",
    "l1.resourcesOverview": "Resources Overview",
    "l1.totalFiles": "Total Files",
    "l1.modules": "Modules",
    "l1.books": "Books",
    "l1.exams": "Exams",

    "l2.title": "Second Year (L2)",
    "l2.description": "Access all resources for the second year of study. Choose a semester to explore available modules and materials.",
    "l2.semester3": "Semester 3",
    "l2.semester3Desc": "Intermediate courses and specialization foundations",
    "l2.semester4": "Semester 4",
    "l2.semester4Desc": "Advanced intermediate courses and project work",
    "l2.viewModules": "View Modules",
    "l2.resourcesOverview": "Resources Overview",
    "l2.totalFiles": "Total Files",
    "l2.modules": "Modules",
    "l2.books": "Books",
    "l2.exams": "Exams",

    "l3.title": "Third Year (L3)",
    "l3.description": "Access all resources for the third year of study. Choose a specialization to explore available modules and materials.",
    "l3.isil": "ISIL",
    "l3.isilFull": "Information Systems and Software Engineering",
    "l3.si": "SI",
    "l3.siFull": "Computer Systems",
    "l3.semester5": "Semester 5",
    "l3.semester6": "Semester 6",
    "l3.isilS5Desc": "Advanced software engineering and information systems",
    "l3.isilS6Desc": "Specialized courses and graduation project",
    "l3.siS5Desc": "Advanced computer systems and networks",
    "l3.siS6Desc": "Specialized courses and graduation project",
    "l3.resourcesOverview": "Resources Overview",
    "l3.totalFiles": "Total Files",
    "l3.modules": "Modules",
    "l3.books": "Books",
    "l3.exams": "Exams",

    "s.title": "Semester (S)",
    "s.description": "Modules and resources for this semester",
    "s.noModules": "No Modules Available",
    "s.noModulesDesc": "There are currently no modules available for this semester.",

    "module.files": "files",
    "module.view": "View Resources",
    "module.resources": "Resources",
    "module.filterAll": "All",
    "module.filterBooks": "Books",
    "module.filterCourse": "Course",
    "module.filterTD": "TD",
    "module.filterTP": "TP",
    "module.filterSummary": "Summary",
    "module.filterExam": "Exam",
    "module.download": "Download",
    "module.noFiles": "No files available",
    "module.noFilesDesc": "There are currently no resources available for this module.",

    "news.title": "University News & Announcements",
    "news.description": "Stay updated with the latest news, events, and announcements from the university.",
    "news.readMore": "Read More",

    "footer.aboutDesc": "A comprehensive academic platform created for students of Ibn Khaldoun University – Tiaret. Access all resources easily and efficiently.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Us",
    "footer.address": "Ibn Khaldoun University, Tiaret, Algeria",
    "footer.phone": "+213 555 000 000",
    "footer.email": "contact@example.com",
    "footer.copyright":
      "© 2026 — With a cup of coffee ☕, a cigarette 🚬"
  },

  "ar": {
    "nav.home": "الرئيسية",
    "nav.l1": "السنة الأولى",
    "nav.l2": "السنة الثانية",
    "nav.l3": "السنة الثالثة",
    "nav.news": "الأخبار",

    "home.heroTitle": "منصة الموارد الجامعية",
    "home.heroSubtitle": "احصل على جميع مواردك الأكاديمية: الكتب، ملفات PDF، الدروس، الملخصات، والامتحانات في مكان واحد.",
    "home.searchPlaceholder": "ابحث عن الموارد...",
    "home.stats.filesLabel": "عدد الموارد",
    "home.stats.usersLabel": "الطلاب النشطون",
    "home.stats.downloadsLabel": "عدد التحميلات",
    "home.levelsTitle": "المستويات الأكاديمية",
    "home.level1": "السنة الأولى (L1)",
    "home.level1Desc": "موارد السداسي S1 و S2",
    "home.level2": "السنة الثانية (L2)",
    "home.level2Desc": "موارد السداسي S3 و S4",
    "home.level3": "السنة الثالثة (L3)",
    "home.level3Desc": "تخصصا ISIL و SI",
    "home.latestTitle": "آخر التحميلات",
    "home.viewAll": "عرض الكل",
    "home.explore": "استكشاف",

    "l1.title": "السنة الأولى (L1)",
    "l1.description": "هنا تجد كل الموارد الخاصة بالسنة الأولى. اختر سداسيًا لاستعراض الوحدات المتاحة.",
    "l1.semester1": "السداسي الأول (S1)",
    "l1.semester1Desc": "مواد أساسية وتمهيدية",
    "l1.semester2": "السداسي الثاني (S2)",
    "l1.semester2Desc": "مواد أساسية متقدمة وتمهيد التخصص",
    "l1.viewModules": "عرض الوحدات",
    "l1.resourcesOverview": "نظرة عامة على الموارد",
    "l1.totalFiles": "إجمالي الملفات",
    "l1.modules": "الوحدات",
    "l1.books": "الكتب",
    "l1.exams": "الامتحانات",

    "l2.title": "السنة الثانية (L2)",
    "l2.description": "هنا تجد جميع موارد السنة الثانية. اختر السداسي لاستعراض الوحدات.",
    "l2.semester3": "السداسي الثالث (S3)",
    "l2.semester3Desc": "مواد متوسطة وأساسيات التخصص",
    "l2.semester4": "السداسي الرابع (S4)",
    "l2.semester4Desc": "مواد متقدمة ومشاريع تطبيقية",
    "l2.viewModules": "عرض الوحدات",
    "l2.resourcesOverview": "نظرة عامة على الموارد",
    "l2.totalFiles": "إجمالي الملفات",
    "l2.modules": "الوحدات",
    "l2.books": "الكتب",
    "l2.exams": "الامتحانات",

    "l3.title": "السنة الثالثة (L3)",
    "l3.description": "هنا تجد موارد السنة الثالثة. اختر التخصص لاستعراض الوحدات المتاحة.",
    "l3.isil": "ISIL",
    "l3.isilFull": "هندسة نظم المعلومات والبرمجيات",
    "l3.si": "SI",
    "l3.siFull": "الأنظمة المعلوماتية",
    "l3.semester5": "السداسي الخامس (S5)",
    "l3.semester6": "السداسي السادس (S6)",
    "l3.isilS5Desc": "هندسة برمجيات متقدمة",
    "l3.isilS6Desc": "مواد تخصصية ومشروع التخرج",
    "l3.siS5Desc": "أنظمة حاسوب وشبكات متقدمة",
    "l3.siS6Desc": "مواد تخصصية ومشروع التخرج",
    "l3.resourcesOverview": "نظرة عامة على الموارد",
    "l3.totalFiles": "إجمالي الملفات",
    "l3.modules": "الوحدات",
    "l3.books": "الكتب",
    "l3.exams": "الامتحانات",

    "s.title": "السداسي (S)",
    "s.description": "الوحدات والموارد الخاصة بهذا السداسي",
    "s.noModules": "لا توجد وحدات",
    "s.noModulesDesc": "لا توجد وحدات متاحة لهذا السداسي حاليًا.",

    "module.files": "الملفات",
    "module.view": "عرض الموارد",
    "module.resources": "الموارد",
    "module.filterAll": "الكل",
    "module.filterBooks": "كتب",
    "module.filterCourse": "درس",
    "module.filterTD": "أعمال موجهة",
    "module.filterTP": "أعمال تطبيقية",
    "module.filterSummary": "ملخص",
    "module.filterExam": "امتحان",
    "module.download": "تحميل",
    "module.noFiles": "لا توجد ملفات",
    "module.noFilesDesc": "لا توجد موارد متاحة لهذه الوحدة حاليًا.",

    "news.title": "أخبار وإعلانات الجامعة",
    "news.description": "ابقَ مطلعًا على آخر الأخبار والفعاليات والإعلانات من الجامعة.",
    "news.readMore": "اقرأ المزيد",

    "footer.aboutDesc": "منصة أكاديمية شاملة لطلبة جامعة ابن خلدون – تيارت، للوصول بسهولة إلى جميع الموارد التعليمية.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contact": "اتصل بنا",
    "footer.address": "جامعة ابن خلدون، تيارت، الجزائر",
    "footer.phone": "+213 555 000 000",
    "footer.email": "contact@example.com",
    "footer.copyright":
      "© 2026 — مع كوب قهوة ☕ وسيجارة 🚬"
  },

  "fr": {
    "nav.home": "Accueil",
    "nav.l1": "L1",
    "nav.l2": "L2",
    "nav.l3": "L3",
    "nav.news": "Actualités",

    "home.heroTitle": "Portail des Ressources Universitaires",
    "home.heroSubtitle": "Accédez à tous vos supports académiques : livres, PDF, cours, résumés et examens, au même endroit.",
    "home.searchPlaceholder": "Rechercher des ressources...",
    "home.stats.filesLabel": "Ressources Disponibles",
    "home.stats.usersLabel": "Étudiants Actifs",
    "home.stats.downloadsLabel": "Téléchargements",
    "home.levelsTitle": "Niveaux Académiques",
    "home.level1": "Première Année (L1)",
    "home.level1Desc": "Ressources des semestres S1 & S2",
    "home.level2": "Deuxième Année (L2)",
    "home.level2Desc": "Ressources des semestres S3 & S4",
    "home.level3": "Troisième Année (L3)",
    "home.level3Desc": "Spécialités ISIL & SI",
    "home.latestTitle": "Derniers Ajouts",
    "home.viewAll": "Voir Tout",
    "home.explore": "Explorer",

    "l1.title": "Première Année (L1)",
    "l1.description": "Accédez à toutes les ressources de la première année. Choisissez un semestre pour explorer les modules disponibles.",
    "l1.semester1": "Semestre 1",
    "l1.semester1Desc": "Cours fondamentaux et modules introductifs",
    "l1.semester2": "Semestre 2",
    "l1.semester2Desc": "Cours fondamentaux avancés et introduction aux spécialisations",
    "l1.viewModules": "Voir les Modules",
    "l1.resourcesOverview": "Aperçu des Ressources",
    "l1.totalFiles": "Total des Fichiers",
    "l1.modules": "Modules",
    "l1.books": "Livres",
    "l1.exams": "Examens",

    "l2.title": "Deuxième Année (L2)",
    "l2.description": "Accédez aux ressources de la deuxième année. Choisissez un semestre pour afficher les modules.",
    "l2.semester3": "Semestre 3",
    "l2.semester3Desc": "Cours intermédiaires et bases de spécialisation",
    "l2.semester4": "Semestre 4",
    "l2.semester4Desc": "Cours avancés et travaux de projet",
    "l2.viewModules": "Voir les Modules",
    "l2.resourcesOverview": "Aperçu des Ressources",
    "l2.totalFiles": "Total des Fichiers",
    "l2.modules": "Modules",
    "l2.books": "Livres",
    "l2.exams": "Examens",

    "l3.title": "Troisième Année (L3)",
    "l3.description": "Accédez aux ressources de la troisième année. Choisissez une spécialisation pour afficher les modules.",
    "l3.isil": "ISIL",
    "l3.isilFull": "Systèmes d’Information et Ingénierie Logicielle",
    "l3.si": "SI",
    "l3.siFull": "Systèmes Informatiques",
    "l3.semester5": "Semestre 5",
    "l3.semester6": "Semestre 6",
    "l3.isilS5Desc": "Ingénierie logicielle avancée",
    "l3.isilS6Desc": "Cours spécialisés et projet de fin d’études",
    "l3.siS5Desc": "Systèmes informatiques et réseaux avancés",
    "l3.siS6Desc": "Cours spécialisés et projet de fin d’études",
    "l3.resourcesOverview": "Aperçu des Ressources",
    "l3.totalFiles": "Total des Fichiers",
    "l3.modules": "Modules",
    "l3.books": "Livres",
    "l3.exams": "Examens",

    "s.title": "Semestre (S)",
    "s.description": "Modules et ressources pour ce semestre",
    "s.noModules": "Aucun Module Disponible",
    "s.noModulesDesc": "Aucun module n'est disponible pour ce semestre pour le moment.",

    "module.files": "fichiers",
    "module.view": "Voir les Ressources",
    "module.resources": "Ressources",
    "module.filterAll": "Tous",
    "module.filterBooks": "Livres",
    "module.filterCourse": "Cours",
    "module.filterTD": "TD",
    "module.filterTP": "TP",
    "module.filterSummary": "Résumé",
    "module.filterExam": "Examen",
    "module.download": "Télécharger",
    "module.noFiles": "Aucun fichier disponible",
    "module.noFilesDesc": "Aucune ressource n'est disponible pour ce module pour le moment.",

    "news.title": "Actualités et Annonces Universitaires",
    "news.description": "Restez informé des dernières nouvelles, événements et annonces de l'université.",
    "news.readMore": "Lire la suite",

    "footer.aboutDesc": "Une plateforme académique complète pour les étudiants de l’Université Ibn Khaldoun – Tiaret, permettant un accès facile et efficace aux ressources.",
    "footer.quickLinks": "Liens Rapides",
    "footer.contact": "Contact",
    "footer.address": "Université Ibn Khaldoun, Tiaret, Algérie",
    "footer.phone": "+213 555 000 000",
    "footer.email": "contact@example.com",
    "footer.copyright":
      "© 2026 — Avec une tasse de café ☕ et une cigarette 🚬"
  }
};

// Global functions for language and theme management
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    const savedLang = localStorage.getItem('lang') || 'en';
    changeLanguage(savedLang);
    
    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
    }
});

function changeLanguage(lang) {
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (LANG[lang] && LANG[lang][key]) {
            element.textContent = LANG[lang][key];
        }
    });
    
    // Update current language indicator
    const currentLangElement = document.getElementById('current-lang');
    if (currentLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
    }
    
    // Update HTML direction for RTL languages
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.classList.add('rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.classList.remove('rtl');
    }
    
    // Save language preference
    localStorage.setItem('lang', lang);
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // Update theme toggle icon
    const themeIcon = document.querySelector('#theme-toggle i');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
}

// Utility functions for file and module data
function getModuleById(moduleId) {
    // This would typically fetch from modules.json
    // For now, we'll use a placeholder
    const modules = {
        'm1': { name: 'Mathematics 1', semester: 'S1', level: 'L1' },
        'm2': { name: 'Programming Fundamentals', semester: 'S1', level: 'L1' },
        'm3': { name: 'Computer Architecture', semester: 'S1', level: 'L1' },
        'm4': { name: 'Algorithms and Data Structures', semester: 'S3', level: 'L2' },
        'm5': { name: 'Database Management Systems', semester: 'S4', level: 'L2' },
        'm6': { name: 'Software Engineering', semester: 'S5', level: 'L3', specialization: 'ISIL' },
        'm7': { name: 'Network Security', semester: 'S5', level: 'L3', specialization: 'SI' }
    };
    
    return modules[moduleId] || { name: 'Unknown Module', semester: 'Unknown', level: 'Unknown' };
}

function getFileCountByModule(moduleId) {
    // This would typically count files in files.json
    // For now, we'll use placeholder counts
    const counts = {
        'm1': 8,
        'm2': 6,
        'm3': 5,
        'm4': 7,
        'm5': 9,
        'm6': 4,
        'm7': 5
    };
    
    return counts[moduleId] || 0;
}

function createFileCard(file, module) {
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow';
    
    const typeColors = {
        'Book': 'blue',
        'Course': 'green',
        'TD': 'purple',
        'TP': 'orange',
        'Summary': 'pink',
        'Exam': 'red'
    };
    
    const color = typeColors[file.type] || 'gray';
    
    card.innerHTML = `
        <div class="flex justify-between items-start mb-3">
            <span class="bg-${color}-100 dark:bg-${color}-900 text-${color}-800 dark:text-${color}-200 px-2 py-1 rounded text-sm">${file.type}</span>
            <span class="text-gray-500 text-sm">${formatDate(file.uploadDate)}</span>
        </div>
        <h3 class="font-bold mb-2">${file.title}</h3>
        <div class="flex justify-between items-center">
            <span class="text-gray-500 text-sm">${module.semester} - ${module.level}${module.specialization ? ' ' + module.specialization : ''}</span>
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm download-btn" data-file-id="${file.id}">
                <i class="fas fa-download mr-1"></i> <span data-key="module.download">Download</span>
            </button>
        </div>
    `;
    
    // Add download functionality
    const downloadBtn = card.querySelector('.download-btn');
    downloadBtn.addEventListener('click', function() {
        downloadFile(file.id, file.title);
    });
    
    return card;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function downloadFile(fileId, fileName) {
    // In a real implementation, this would trigger the actual file download
    // For now, we'll just show an alert
    alert(`Downloading: ${fileName}`);
    // You would typically use: window.location.href = `/assets/files/${fileId}.pdf`;
}