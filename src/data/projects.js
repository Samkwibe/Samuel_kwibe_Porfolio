/**
 * PROJECTS DATA
 * 
 * Live Deployment URLs:
 * - Projects with "#" need to be updated with actual deployment URLs
 * - Projects with placeholder URLs (e.g., *.onrender.com) should be verified
 * - Android apps and desktop applications typically don't have web live links
 * 
 * Common deployment platforms:
 * - Render: *.onrender.com
 * - Vercel: *.vercel.app
 * - Netlify: *.netlify.app
 * - Firebase Hosting: *.web.app or *.firebaseapp.com
 * - GitHub Pages: *.github.io
 * 
 * To verify live URLs:
 * 1. Check your deployment platform dashboards
 * 2. Check repository README files for deployment links
 * 3. Update the "live" property with the correct URL
 */

export const projects = [
  // ========== FEATURED / MAJOR PROJECTS ==========
  {
    id: "family-housing-hub",
    name: "Family Housing Hub",
    category: "Full-Stack Web Application",
    tech: ["React.js", "Firebase", "Firestore", "Firebase Auth", "HTML5", "CSS3"],
    summary: "Comprehensive housing assistance platform with multilingual support (English, Spanish, Portuguese) for families seeking housing resources. Features secure authentication, real-time database synchronization, and WCAG 2.1 accessibility compliance.",
    description: "Developed a comprehensive housing assistance platform with React.js frontend and Firebase backend for multilingual families. Implemented secure authentication with Firebase Auth and real-time database synchronization using Firestore, supporting 100+ concurrent users. Designed responsive UI/UX with multilingual support and accessibility features.",
    live: "https://family-housing-hub.onrender.com/",
    code: "https://github.com/Samkwibe/Family-Housing-Hub",
    image: "/repo_images_bundle/Family Housing Hub.png",
    featured: true,
    year: "Junior Year",
    highlights: [
      "Multilingual support (English, Spanish, Portuguese)",
      "Firebase Auth for secure authentication",
      "Real-time Firestore database",
      "WCAG 2.1 accessibility features",
      "100+ concurrent users supported"
    ]
  },
  {
    id: "quick-food-finder-app",
    name: "Quick Food Finder",
    category: "Android Mobile Application",
    tech: ["Android Studio", "Kotlin", "Google Maps API", "MongoDB", "Firebase Auth", "REST APIs"],
    summary: "Location-based restaurant discovery app with GPS integration. Led a team of 3 students to create an Android app with real-time location services and personalized recommendations.",
    description: "Led a development team of 3 students to create a location-based restaurant discovery app using Android Studio, Kotlin, and Google Maps API. Integrated MongoDB for vendor data storage (500+ restaurant records) and Firebase Authentication for secure user session management. Implemented RESTful APIs with asynchronous programming for real-time GPS location services and personalized recommendations.",
    live: "#",
    code: "https://github.com/Samkwibe/Quick-Food-Finder-App",
    image: "/repo_images_bundle/quick food finder.jpg",
    featured: true,
    year: "Junior Year",
    highlights: [
      "Team leadership (3 students)",
      "GPS location services",
      "MongoDB database integration",
      "500+ restaurant records",
      "Real-time recommendations"
    ]
  },
  {
    id: "snhu-food-waste-tracking",
    name: "SNHU Food Waste Tracking System",
    category: "Full-Stack Web Application",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase Realtime Database", "Chart.js"],
    summary: "Sustainability platform with interactive dashboards and real-time tracking. Features data visualization, waste reduction analytics, and user engagement tools.",
    description: "Developed a full-stack web application for tracking and reducing food waste at SNHU. Implemented real-time data synchronization using Firebase Realtime Database and created interactive dashboards with Chart.js for data visualization. Features include waste tracking, reduction analytics, and user engagement tools.",
    live: "#",
    code: "https://github.com/Samkwibe/snhu-foodwaste-backend",
    image: "/repo_images_bundle/SNHU food waste.jpg",
    featured: true,
    year: "Sophomore Year",
    highlights: [
      "Real-time database synchronization",
      "Interactive data visualization",
      "Waste reduction analytics",
      "User engagement tools"
    ]
  },
  {
    id: "ai-roadmap-generator",
    name: "AI Roadmap Generator",
    category: "Machine Learning",
    tech: ["Python", "scikit-learn", "Machine Learning", "pandas", "NumPy"],
    summary: "Intelligent learning path generator with personalized recommendations. Uses machine learning algorithms to create customized educational roadmaps based on user goals and preferences.",
    description: "Developed an AI-powered learning path generator using Python and scikit-learn. The application analyzes user goals, current skills, and learning preferences to generate personalized educational roadmaps. Implemented machine learning algorithms for recommendation systems and data preprocessing with pandas and NumPy.",
    live: "#",
    code: "https://github.com/Samkwibe/AI-Roadmap-Generator",
    image: "/repo_images_bundle/AI Roadmap Generator.jpg",
    featured: true,
    year: "Sophomore Year",
    highlights: [
      "Machine learning algorithms",
      "Personalized recommendations",
      "Educational roadmap generation",
      "Data preprocessing and analysis"
    ]
  },
  {
    id: "pathfinder-ai",
    name: "Pathfinder AI",
    category: "Algorithm Optimization",
    tech: ["Python", "NumPy", "scikit-learn", "A*", "Dijkstra"],
    summary: "AI-powered pathfinding system with route optimization. Implements multiple pathfinding algorithms including A* and Dijkstra for efficient route planning.",
    description: "Developed an AI-powered pathfinding system using Python with multiple algorithm implementations including A* and Dijkstra. The system optimizes routes for various scenarios and provides visualizations of pathfinding processes. Used NumPy for efficient computations and scikit-learn for additional ML capabilities.",
    live: "#",
    code: "https://github.com/Samkwibe/Pathfinder-AI",
    image: "/repo_images_bundle/Pathfinder AI.jpg",
    featured: true,
    year: "Sophomore Year",
    highlights: [
      "A* pathfinding algorithm",
      "Dijkstra algorithm implementation",
      "Route optimization",
      "Visual pathfinding demonstrations"
    ]
  },
  {
    id: "dry-beans-classifier",
    name: "Dry Beans Classifier",
    category: "Machine Learning",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Data Analysis"],
    summary: "LDA vs GNB comparison on 16 features across 7 bean classes. Machine learning classification project comparing Linear Discriminant Analysis and Gaussian Naive Bayes algorithms.",
    description: "Developed a machine learning classification system to classify dry beans into 7 different classes using 16 features. Compared Linear Discriminant Analysis (LDA) and Gaussian Naive Bayes (GNB) algorithms, achieving high accuracy rates. Used pandas for data preprocessing and scikit-learn for model implementation.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Dry Beans Classifier.jpg",
    featured: true,
    year: "Sophomore Year",
    highlights: [
      "LDA vs GNB comparison",
      "7 bean classes classification",
      "16 feature analysis",
      "High accuracy rates"
    ]
  },
  {
    id: "cloud-cicd-pipeline",
    name: "Cloud CI/CD Pipeline",
    category: "Cloud & DevOps",
    tech: ["AWS", "Docker", "GitHub Actions", "CI/CD", "CloudFormation"],
    summary: "Containerized app with automated tests and deployment to AWS using modern DevOps practices.",
    description: "Containerized application with automated testing and deployment to AWS using Docker, GitHub Actions, and modern CI/CD practices for efficient development workflows.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Cloud CI:CD Pipeline.jpg",
    featured: true,
    year: "Junior Year",
    highlights: [
      "Docker containerization",
      "Automated CI/CD pipeline",
      "AWS deployment",
      "GitHub Actions integration"
    ]
  },
  {
    id: "oh-the-places-youve-been",
    name: "Oh the Places You've Been",
    category: "Web Development",
    tech: ["React", "Leaflet", "CSS", "JavaScript"],
    summary: "Interactive map app to drop pins, add notes, and save locations. Features interactive mapping with Leaflet.js integration.",
    description: "Developed an interactive map application using React and Leaflet.js that allows users to drop pins, add notes, and save favorite locations. Features include location marking, note-taking, and persistent storage of user data.",
    live: "https://lab-2-oh-the-places-you-ve-been.onrender.com/",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Oh the Places You've Been.jpg",
    featured: true,
    year: "Sophomore Year",
    highlights: [
      "Interactive mapping",
      "Location pinning",
      "Note-taking features",
      "Persistent data storage"
    ]
  },

  // ========== TEAM PROJECTS ==========
  {
    id: "quick-food-finder-ckm",
    name: "Quick Food Finder (CKM Team)",
    category: "Team Project",
    tech: ["Android Studio", "Kotlin", "Team Development"],
    summary: "Team collaboration version of Quick Food Finder app developed with CKM team members.",
    description: "Collaborative team project developing the Quick Food Finder application with CKM team members. Focused on team coordination, code reviews, and collaborative development practices.",
    live: "#",
    code: "https://github.com/Samkwibe/Quick-Food-Finder-CKM-Team-",
    image: "/repo_images_bundle/Quick-Food-Finder-CKM-Team-.png",
    featured: false,
    year: "Junior Year",
    highlights: [
      "Team collaboration",
      "Code reviews",
      "Multiple contributors",
      "CKM Team development"
    ]
  },
  {
    id: "munchies-snhu-trucker",
    name: "Munchies SNHU Food Waste Trucker",
    category: "Team Project",
    tech: ["Web Development", "Database Integration", "Food Waste Tracking"],
    summary: "Food waste tracking application variant developed as part of a team or class project at SNHU.",
    description: "Team/collaborative version of the food waste tracking system with specific focus on tracking and logistics. Developed as part of SNHU group project.",
    live: "#",
    code: "https://github.com/Samkwibe/MunchiesSNHU-Food_waste_Trucker",
    image: "/repo_images_bundle/MunchiesSNHU-Food_waste_Trucker.png",
    featured: false,
    year: "Junior Year",
    highlights: [
      "SNHU team project",
      "Food waste logistics",
      "Tracking system",
      "Team collaboration"
    ]
  },
  {
    id: "munchies-food-waste",
    name: "Munchies Food Waste",
    category: "Team Project",
    tech: ["Web Development", "Food Waste Management"],
    summary: "Alternative version of food waste tracking system with different features or implementation approach.",
    description: "Alternative implementation of food waste tracking system with different features or approach to waste management and tracking.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Munchies_Food_waste.png",
    featured: false,
    year: "Sophomore Year",
    highlights: [
      "Food waste management",
      "Alternative implementation",
      "Tracking features"
    ]
  },

  // ========== COURSE LABS & ASSIGNMENTS ==========
  {
    id: "cs465-lab3",
    name: "Qzicl Educational Quiz App (CS-465 Lab 3)",
    category: "Course Lab",
    tech: ["React.js", "Node.js", "Full-Stack Web Development"],
    summary: "CS-465 Full Stack Development lab assignment. Educational quiz application that allows users to select topics and test their knowledge.",
    description: "Full Stack Development lab assignment creating an educational quiz application (Qzicl) that allows users to select topics and test their knowledge. May have been completed individually or with a partner.",
    live: "https://cs465-lab3-samuelraymond.onrender.com/",
    code: "https://github.com/Samkwibe/cs465-lab3-samuelraymond",
    image: "/repo_images_bundle/cs465-lab0.png",
    featured: false,
    year: "Junior Year",
    highlights: [
      "CS-465 Lab 3",
      "Educational quiz application",
      "Topic selection",
      "Knowledge testing"
    ]
  },
  {
    id: "lab-1-html-css",
    name: "Lab 1 - HTML and CSS Landing Page",
    category: "Course Lab",
    tech: ["HTML5", "CSS3", "Web Development"],
    summary: "Introductory web development lab creating a landing page using HTML and CSS.",
    description: "First web development lab assignment focusing on creating a responsive landing page using HTML5 and CSS3. Demonstrated understanding of basic web development principles.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Lab-1-HTML-and-CSS-Landing-Page.png",
    featured: false,
    year: "Freshman Year",
    highlights: [
      "HTML5 fundamentals",
      "CSS3 styling",
      "Responsive design",
      "Landing page creation"
    ]
  },
  {
    id: "lab-2-places",
    name: "Lab 2 - Oh the Places You've Been",
    category: "Course Lab",
    tech: ["React", "Leaflet", "JavaScript"],
    summary: "Web development lab creating an interactive map application.",
    description: "Second web development lab assignment creating an interactive map application using React and Leaflet.js. Focused on integrating third-party libraries and creating interactive user experiences.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Lab-2-Oh-the-places-you-ve-been.png",
    featured: false,
    year: "Sophomore Year",
    highlights: [
      "React integration",
      "Leaflet.js mapping",
      "Interactive features",
      "Third-party libraries"
    ]
  },

  // ========== FRESHMAN YEAR PROJECTS ==========
  {
    id: "freshman-projects",
    name: "Freshman Year Projects",
    category: "Academic Projects",
    tech: ["Various", "Introduction to Programming"],
    summary: "Collection of projects from freshman year including introductory programming assignments and learning exercises.",
    description: "Collection of various projects and assignments completed during freshman year, demonstrating foundational programming skills and learning progression.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Freshman_Projects.png",
    featured: false,
    year: "Freshman Year",
    highlights: [
      "Foundational programming",
      "Learning exercises",
      "Introduction to CS",
      "Multiple assignments"
    ]
  },
  {
    id: "simple-mcdonald-menu",
    name: "Simple McDonald Menu",
    category: "Academic Project",
    tech: ["Programming Fundamentals", "Data Structures"],
    summary: "Simple menu application demonstrating basic programming concepts and data structure usage.",
    description: "Academic project creating a simple McDonald's menu application to demonstrate understanding of basic programming concepts, data structures, and user interface design.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Simple_mcDonald_Menu.png",
    featured: false,
    year: "Freshman Year",
    highlights: [
      "Basic programming",
      "Data structures",
      "Menu system",
      "User interface"
    ]
  },
  {
    id: "simple-mcdonal-menu-alt",
    name: "Simple McDonald Menu (Alternative)",
    category: "Academic Project",
    tech: ["Programming Fundamentals"],
    summary: "Alternative version or iteration of the simple McDonald menu application.",
    description: "Alternative version or improved iteration of the simple McDonald menu application with additional features or different implementation approach.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Simple_McDonal_Menu.png",
    featured: false,
    year: "Freshman Year",
    highlights: [
      "Alternative implementation",
      "Improved features",
      "Menu application"
    ]
  },
  {
    id: "shopping-cart",
    name: "Shopping Cart",
    category: "Academic Project",
    tech: ["Programming Fundamentals", "Data Structures"],
    summary: "Shopping cart application demonstrating e-commerce concepts and data management.",
    description: "Academic project creating a shopping cart application to demonstrate understanding of e-commerce concepts, data management, and user interaction patterns.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Shooping_Cart.png",
    featured: false,
    year: "Freshman Year",
    highlights: [
      "E-commerce concepts",
      "Data management",
      "Shopping cart logic",
      "User interactions"
    ]
  },

  // ========== GAME DEVELOPMENT ==========
  {
    id: "demo-disk-games",
    name: "Demo Disk Games",
    category: "Game Development",
    tech: ["Game Development", "Programming"],
    summary: "Collection of demo games or game prototypes developed as learning projects.",
    description: "Collection of demo games or game prototypes developed to learn game development concepts, programming patterns, and interactive application design.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/DemoDiskGames.png",
    featured: false,
    year: "Freshman Year",
    highlights: [
      "Game development",
      "Game prototypes",
      "Interactive applications",
      "Learning projects"
    ]
  },

  // ========== GRAPHICS & UI ==========
  {
    id: "mosaic",
    name: "Mosaic",
    category: "Graphics & UI",
    tech: ["Graphics Programming", "UI Design"],
    summary: "Graphics or UI project involving mosaic patterns or visual design.",
    description: "Graphics or UI project creating mosaic patterns or visual designs, demonstrating understanding of graphics programming and visual design principles.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Mosaic.png",
    featured: false,
    year: "Freshman Year",
    highlights: [
      "Graphics programming",
      "Visual design",
      "Mosaic patterns",
      "UI design"
    ]
  },
  {
    id: "paint-windows",
    name: "Paint Windows Application",
    category: "Desktop Application",
    tech: ["Windows Application", "Graphics Programming"],
    summary: "Paint application for Windows demonstrating desktop application development and graphics programming.",
    description: "Windows desktop application creating a paint/drawing program, demonstrating desktop application development, graphics programming, and user interface design for Windows platforms.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Paint-Windows-Application.png",
    featured: false,
    year: "Freshman Year",
    highlights: [
      "Windows application",
      "Graphics programming",
      "Drawing application",
      "Desktop development"
    ]
  },
  {
    id: "painting-application",
    name: "Painting Application",
    category: "Desktop Application",
    tech: ["Application Development", "Graphics"],
    summary: "Alternative or improved version of painting/drawing application.",
    description: "Alternative or improved version of painting/drawing application with enhanced features or different platform implementation.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Painting-Application.png",
    featured: false,
    year: "Freshman Year",
    highlights: [
      "Painting application",
      "Graphics features",
      "Application development"
    ]
  },

  // ========== ACADEMIC & THEORY ==========
  {
    id: "noisy-channel-communication",
    name: "Noisy Channel Communication",
    category: "Academic & Theory",
    tech: ["Communication Theory", "Algorithms"],
    summary: "Academic project exploring noisy channel communication theory and error correction algorithms.",
    description: "Academic project exploring noisy channel communication theory, error correction algorithms, and information theory concepts. Demonstrates understanding of communication systems and error handling.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Noisy-Chanel-Communication.png",
    featured: false,
    year: "Sophomore Year",
    highlights: [
      "Communication theory",
      "Error correction",
      "Information theory",
      "Algorithm implementation"
    ]
  },
  {
    id: "stack",
    name: "Stack",
    category: "Data Structures",
    tech: ["Data Structures", "Algorithms"],
    summary: "Stack data structure implementation demonstrating understanding of fundamental computer science concepts.",
    description: "Implementation of stack data structure with various operations (push, pop, peek, etc.), demonstrating understanding of fundamental computer science data structures and algorithms.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Stack.png",
    featured: false,
    year: "Freshman Year",
    highlights: [
      "Stack data structure",
      "Fundamental algorithms",
      "Data structure operations",
      "CS fundamentals"
    ]
  },
  {
    id: "student-array-engine",
    name: "Student Array Engine",
    category: "Data Structures",
    tech: ["Arrays", "Data Management"],
    summary: "Array-based data management system for student information.",
    description: "Array-based data management system for handling student information, demonstrating array operations, data manipulation, and information management concepts.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Student_Array_Engine.png",
    featured: false,
    year: "Freshman Year",
    highlights: [
      "Array operations",
      "Data management",
      "Student information system",
      "Data manipulation"
    ]
  },
  {
    id: "student-doubly-linked-list",
    name: "Student Doubly Linked List Program",
    category: "Data Structures",
    tech: ["Linked Lists", "Data Structures"],
    summary: "Doubly linked list implementation for managing student data.",
    description: "Implementation of doubly linked list data structure for managing student information, demonstrating understanding of linked list operations, traversal, and data structure design.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Student_DoublyLinkedList_Program.png",
    featured: false,
    year: "Freshman Year",
    highlights: [
      "Doubly linked list",
      "Data structure implementation",
      "Student data management",
      "Linked list operations"
    ]
  },
  {
    id: "template-array-max",
    name: "Template Array Max",
    category: "Data Structures",
    tech: ["Templates", "Arrays", "Algorithms"],
    summary: "Template-based array implementation with maximum value finding algorithm.",
    description: "Template-based array implementation demonstrating generic programming concepts and algorithms for finding maximum values, showcasing understanding of templates and algorithm design.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Template_Array_max.png",
    featured: false,
    year: "Freshman Year",
    highlights: [
      "Template programming",
      "Generic algorithms",
      "Array operations",
      "Maximum value finding"
    ]
  },

  // ========== PORTFOLIO & MISC ==========
  {
    id: "portfolio",
    name: "Portfolio Website",
    category: "Portfolio & Misc",
    tech: ["React", "Web Development", "Portfolio"],
    summary: "Personal portfolio website showcasing projects, skills, and experience.",
    description: "Personal portfolio website built with React to showcase projects, skills, and professional experience. Features responsive design, modern UI/UX, and interactive elements.",
    live: "#",
    code: "https://github.com/Samkwibe/Samuel_kwibe_Porfolio",
    image: "/repo_images_bundle/Family Housing Hub.png",
    featured: false,
    year: "Junior Year",
    highlights: [
      "Portfolio website",
      "React development",
      "Responsive design",
      "Professional showcase"
    ]
  }
]
