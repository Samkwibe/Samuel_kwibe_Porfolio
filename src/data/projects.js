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
    id: "legacylift",
    name: "LegacyLift",
    category: "Full-Stack Web Application",
    tech: ["Python", "Streamlit", "Gemini API", "Claude API", "OpenAI API", "NVIDIA NIM", "REST APIs", "GitHub Integration"],
    summary: "AI-powered code modernization and developer mentorship platform — Senior Capstone Project at SNHU. Analyzes, refactors, secures, documents, and modernizes legacy software using multi-LLM integration.",
    description: "Built LegacyLift as my Senior Capstone Project at Southern New Hampshire University. The platform helps developers analyze, understand, refactor, secure, document, and modernize legacy software using advanced AI technologies including Google Gemini, Anthropic Claude, OpenAI GPT-4o, and NVIDIA NIM. LegacyLift can process source files, ZIP archives, and GitHub repositories to identify code smells, security vulnerabilities, performance bottlenecks, and maintainability issues while generating cleaner, production-ready code with detailed explanations. Unlike traditional code review tools, LegacyLift acts as a virtual Senior Software Engineer by explaining code changes, highlighting best practices, identifying risks, and helping developers improve their coding skills. Through this project, I gained hands-on experience in Full-Stack Development, Generative AI Integration, API Development, Software Architecture, Cloud Technologies, Secure Coding Practices, and Modern Software Engineering Workflows.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/LegacyLift.png",
    featured: true,
    year: "May 2026 - Jun 2026",
    highlights: [
      "Senior Capstone Project — AI-powered code modernization platform",
      "Multi-LLM integration: Gemini, Claude, GPT-4o, and NVIDIA NIM",
      "AST-based static analysis, automated refactoring, and security vulnerability detection",
      "PDF report generation, architecture visualization, and interactive walkthroughs",
      "Processes source files, ZIP archives, and GitHub repositories"
    ]
  },
  {
    id: "ziganya",
    name: "Ziganya",
    category: "Full-Stack Web Application",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    summary: "Modern enterprise fintech platform providing secure digital banking, payments, lending, savings, investments, and business finance solutions with scalable cloud-native architecture.",
    description: "Ziganya is a modern enterprise fintech platform designed to provide secure digital banking, payments, lending, savings, investments, and business finance solutions. Built with scalable cloud-native architecture, Ziganya empowers individuals, businesses, and underserved communities through innovative financial technology. The platform focuses on security, accessibility, performance, and financial inclusion while leveraging modern technologies such as React, Next.js, Node.js, PostgreSQL, AWS, Docker, and Kubernetes.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Ziganya.png",
    featured: true,
    year: "Senior Year",
    highlights: [
      "Secure digital banking with payments, lending, savings, and investments",
      "Cloud-native architecture with AWS, Docker, and Kubernetes",
      "Full-stack React/Next.js frontend with Node.js and PostgreSQL backend",
      "Focus on financial inclusion for underserved communities",
      "Enterprise-grade security, accessibility, and performance"
    ]
  },
  {
    id: "skillrise",
    name: "SkillRise",
    category: "Full-Stack Web Application",
    tech: ["Next.js", "React", "TypeScript", "AI", "Live Cohorts", "Job Discovery"],
    summary: "Full-stack Next.js platform for personalized learning, job discovery, live cohorts, and community-driven skill building with AI-assisted features.",
    description: "Built SkillRise as a full-stack learning and career platform where users can learn practical skills, get personalized guidance, discover job opportunities, join live cohorts, and build community support. The experience is designed as an alternative to endless scrolling, with AI-assisted features that help learners find relevant paths and take action.",
    live: "https://www.skillrises.tech/",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/SkillRise.png",
    featured: true,
    year: "Junior Year",
    highlights: [
      "Personalized learning paths",
      "AI-assisted skill guidance",
      "Job discovery experience",
      "Live cohorts and community learning",
      "Modern full-stack Next.js interface"
    ]
  },
  {
    id: "beacon-nh",
    name: "Beacon-NH",
    category: "Full-Stack Web Application",
    tech: ["React", "TypeScript", "Vite", "Node.js", "MySQL", "Firebase", "i18n", "AI"],
    summary: "Full-stack React platform connecting refugees in New Hampshire with emergency housing, legal aid, community resources, live translation, and an administrative dashboard.",
    description: "Built Beacon-NH as a student-led React and TypeScript platform grounded in real New Hampshire refugee-admissions context. The app routes visitors to verifiable programs including 211 NH, 603 Legal Aid, NH Legal Assistance, NH DHHS, Ascentria, IINE, NH Food Bank, and other community partners. The stack pairs a Vite SPA with an optional Node and MySQL API plus Firebase for events, chat, authentication, and announcements when configured.",
    live: "https://beacon-nh.vercel.app/",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Beacon-NH.png",
    featured: true,
    year: "Junior Year",
    highlights: [
      "Routes refugees to verified New Hampshire support programs",
      "Multilingual i18n support for en, ar, fr, uk, sw, ne, and rw",
      "Events and RSVPs through MySQL, Firestore, or local demos",
      "Optional AI helper using Gemini or OpenAI through the API",
      "Gated admin dashboard with Firebase Authentication"
    ]
  },
  {
    id: "cs330-computational-graphics",
    name: "CS-330 Computational Graphics Portfolio",
    category: "Graphics & Visualization",
    tech: ["C++", "OpenGL", "GLSL", "Phong Shading", "Texture Mapping", "3D Camera Systems"],
    summary: "Semester-long computational graphics portfolio that grew from OpenGL setup into a fully navigable 3D modern office building and a physics-based 2D collision animation.",
    description: "Completed a full CS-330 graphics portfolio at Southern New Hampshire University, starting with OpenGL setup and progressing through transformations, texture mapping, lighting, camera controls, collision detection, and animation. The final 3D project is a modern office building built from primitive shapes with more than 100 objects, 10 textures, 8 materials, 11 light sources, full Phong shading, three camera modes, wall-sliding collision, teleport controls, spinning ceiling fans, and detailed interior rooms. The course also included a brick-breaker style 2D collision animation with physics-based bouncing, gravity toggle, power bricks, score tracking, and paddle controls.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/CS330-Computational-Graphics.png",
    featured: true,
    year: "Junior Year",
    highlights: [
      "Built a fully navigable 3D modern office building from scratch",
      "Created 100+ objects using primitive shapes and transformations",
      "Implemented texture mapping, tiled materials, and full Phong lighting",
      "Added orbit, free-roam, and classic camera modes with collision detection",
      "Built a 2D collision animation with physics, gravity, power-ups, and scoring"
    ]
  },
  {
    id: "food-waste-recipe-inventory",
    name: "Food Waste Recipe Inventory App",
    category: "Full-Stack Web Application",
    tech: ["React", "Node.js", "Express", "Barcode APIs", "TheMealDB", "Database", "REST APIs"],
    summary: "Food waste reduction dashboard that scans groceries, tracks ingredient history, monitors expiration timing, and suggests recipes from available food.",
    description: "Worked on a team project focused on reducing household food waste, where the average American throws away about $2,000 worth of edible food each year. The app helps users manage food inventory by scanning grocery barcodes, tracking items brought into the home, recording purchase time, storing scanned ingredients in a database, adding expiration timers, and suggesting recipes based on available ingredients, items nearing expiration, and user preferences. My role focused on backend work with Jon, fixing API behavior, keeping the project running smoothly, and supporting the scanned-item database flow.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Food-Waste-Recipe-Inventory.png",
    featured: true,
    year: "Junior Year",
    highlights: [
      "Connected barcode lookup so scanned UPCs resolve to product data",
      "Tracked scanned items, purchase time, and product history",
      "Integrated TheMealDB for ingredient-based recipe suggestions",
      "Planned expiration timers for ingredients nearing spoilage",
      "Collaborated across backend, frontend, testing, iOS/Android planning, and landing page design"
    ]
  },
  {
    id: "cs305-artemis-financial-security",
    name: "CS-305 Artemis Financial Security Assessment",
    category: "Software Security",
    tech: ["Java", "Spring Boot", "Spring Security", "Maven", "OWASP Dependency-Check", "SHA-256", "SSL/HTTPS"],
    summary: "Software security portfolio for Artemis Financial demonstrating vulnerability assessment, dependency analysis, HTTPS implementation, and SHA-256 hashing.",
    description: "Completed a software security assessment for Artemis Financial, a fictional financial services client that needed stronger protection for sensitive personal and financial data. The work included running OWASP Dependency-Check, researching CVEs, prioritizing vulnerabilities by real-world risk, configuring HTTPS with SSL in a Java Spring Boot application, adding SHA-256 checksum hashing for data integrity, and re-running scans after refactoring to verify no new vulnerabilities were introduced.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/CS305-Artemis-Financial-Security.png",
    featured: true,
    year: "Junior Year",
    highlights: [
      "Performed vulnerability assessment with OWASP Dependency-Check",
      "Researched CVEs and prioritized findings by real application risk",
      "Implemented HTTPS using SSL and Spring Security",
      "Added SHA-256 cryptographic hashing for integrity verification",
      "Produced professional security reports for stakeholder communication"
    ]
  },
  {
    id: "family-housing-hub",
    name: "Family Housing Hub",
    category: "Full-Stack Web Application",
    tech: ["React.js", "Firebase", "Firestore", "Firebase Auth", "WCAG 2.1", "HTML5", "CSS3"],
    summary: "Multilingual housing and family wellbeing platform with rent tracking, maintenance requests, document storage, health appointments, medication reminders, emergency alerts, and community resources.",
    description: "Built Family Housing Hub as a full-stack web application to help families manage housing and health in one place. The platform addresses a critical gap in housing assistance services where many tools are English-only, supporting English, Spanish, and Portuguese so language is never a barrier to safe housing. Built with React.js and Firebase Firestore/Auth, it supports 100+ concurrent users with real-time synchronization. I designed and implemented the UI/UX, secure authentication flow, real-time database architecture, accessibility-first interface, and features for rent tracking, maintenance requests, document storage, health appointments, medication reminders, emergency alerts, and community resources.",
    live: "https://family-housing-hub.vercel.app/",
    code: "https://github.com/Samkwibe/Family-Housing-Hub",
    image: "/repo_images_bundle/Family Housing Hub.png",
    featured: true,
    year: "Jan 2025 - Aug 2025",
    highlights: [
      "Multilingual support (English, Spanish, Portuguese)",
      "Rent tracking, maintenance requests, and document storage",
      "Health appointments, medication reminders, and emergency alerts",
      "Firebase Authentication and real-time Firestore architecture",
      "WCAG 2.1 compliant design supporting 100+ concurrent users"
    ]
  },
  {
    id: "employee-attrition-prediction",
    name: "Employee Attrition Prediction",
    category: "Machine Learning",
    tech: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib", "GridSearchCV", "Feature Engineering"],
    summary: "Machine learning classification model that predicts employees at high risk of attrition so HR teams can intervene before turnover happens.",
    description: "Built an employee attrition prediction model for an SNHU machine learning project focused on helping HR teams identify employees at high risk of leaving. Using a real-world HR dataset, I cleaned and explored employee data, engineered features such as tenure, satisfaction, department, salary band, and overtime patterns, trained multiple classification algorithms, tuned models with GridSearchCV, handled class imbalance, and evaluated results with precision, recall, F1-score, ROC-AUC, and cross-validation. The final model achieved 85% accuracy and included visualizations for feature importance and performance so non-technical stakeholders could understand the findings.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Employee-Attrition-Prediction.png",
    featured: true,
    year: "Jan 2025 - Apr 2025",
    highlights: [
      "Predicted employee attrition risk with supervised binary classification",
      "Engineered HR features from tenure, satisfaction, salary, department, and overtime data",
      "Used GridSearchCV, cross-validation, and class imbalance handling",
      "Evaluated performance with precision, recall, F1-score, ROC-AUC, and 85% accuracy",
      "Created visualizations for model performance and feature importance"
    ]
  },
  {
    id: "real-time-chatroom-svelte",
    name: "Real-Time Chatroom Application",
    category: "Full-Stack Web Application",
    tech: ["SvelteKit", "Svelte", "JavaScript", "Prisma", "PostgreSQL", "Docker", "CSS3", "Flexbox"],
    summary: "Collaborative real-time chatroom app with authentication, live message delivery, dark mode UI, Prisma database access, and Dockerized deployment.",
    description: "Built a real-time chatroom application as a collaborative 5-person SNHU team project with 69 commits across 11 branches. The application includes user authentication, live message delivery, responsive chatroom UI, dark mode, Prisma ORM for type-safe database access, PostgreSQL persistence, and Docker containerization for consistent deployment. I contributed to the frontend architecture, chatroom UI, flexbox-based layout system, and edit chatroom functionality while working through branch coordination, merge conflicts, deployment iterations, and team collaboration workflows.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Real-Time-Chatroom-Svelte.png",
    featured: true,
    year: "Jan 2023 - Apr 2023",
    highlights: [
      "Collaborative 5-person team project with 69 commits across 11 branches",
      "Built real-time chatroom UI with SvelteKit and responsive Flexbox layouts",
      "Implemented authentication, live message delivery, and dark mode experience",
      "Used Prisma and PostgreSQL for schema management and type-safe database queries",
      "Containerized the app with Docker for consistent development and deployment"
    ]
  },
  {
    id: "zombie-shooter-csharp",
    name: "Zombie Shooter Game",
    category: "Game Development",
    tech: ["C#", "Windows Forms", ".NET", "Object-Oriented Programming", "Game Loop", "Collision Detection"],
    summary: "2D zombie shooter game built from scratch in C# with Windows Forms, bullet physics, enemy movement, collision detection, and real-time game state updates.",
    description: "Built a 2D zombie shooter game entirely in C# using Windows Forms, where the player uses a gun to eliminate waves of incoming zombies. The project included a custom game loop, bullet trajectory logic, collision detection, enemy movement, player input handling, and shared game state updates across frames. It was my first real-time interactive C# application and taught core concepts that apply to game development and real-time systems, including pseudocode planning, object movement, collision events, and managing multiple active entities without state conflicts.",
    live: "#",
    code: "https://github.com/Samkwibe",
    image: "/repo_images_bundle/Zombie-Shooter-Game.png",
    featured: false,
    year: "Jan 2023 - Apr 2023",
    highlights: [
      "Built a real-time 2D shooter in C# and Windows Forms",
      "Implemented game loop, player input, bullet physics, and enemy movement",
      "Added collision detection between bullets, zombies, and game objects",
      "Managed multiple moving objects in shared game state",
      "Used pseudocode planning before implementation to reduce logic errors"
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
    name: "QZICL Lab 3 Interactive Quiz Application",
    category: "Course Lab",
    tech: ["React 18", "Vite", "JavaScript", "Accessibility", "Responsive Design", "CSS Variables", "MSW"],
    summary: "Modern accessible quiz platform where learners browse topics, choose quizzes, answer questions interactively, and review animated results.",
    description: "Built QZICL Lab 3 as a modern client-side quiz application focused on React architecture, accessibility, responsive design, and polished user experience. The app guides users through topics, quiz selection, a get-ready screen, interactive quiz running, results, and optional answer review. It uses reusable components, semantic structure, keyboard and screen-reader friendly controls, animated progress feedback, Vite performance, and built-in sanity checks for quiz integrity.",
    live: "https://cs465-lab3-samuelraymond.onrender.com/",
    code: "https://github.com/Samkwibe/cs465-lab3-samuelraymond",
    image: "/repo_images_bundle/cs465-lab0.png",
    featured: true,
    year: "Junior Year",
    highlights: [
      "Guided Home to Quiz to Results user flow",
      "Accessible keyboard and screen-reader friendly interface",
      "Reusable React components for topics, quizzes, questions, progress, and results",
      "Cosmic dark UI with gradients, glass effects, and responsive layouts",
      "Built-in sanity tests for option labels, progress calculations, and answer mapping"
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
    live: "https://samuel-kwibe-porfolio-sam-s-tech.vercel.app/",
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
  },
  {
    id: "mobile-portfolio-app",
    name: "Samuel Kwibe Mobile Portfolio",
    category: "Mobile Application",
    tech: ["Expo", "React Native", "JavaScript", "iOS", "Mobile UI"],
    summary: "iPhone-ready mobile version of the portfolio app with native screens for projects, skills, experience, education, and contact.",
    description: "Built an Expo React Native mobile portfolio that reuses the same profile and project data as the web app. Includes a native tab layout, searchable project browsing, project detail views, contact actions, and polished mobile cards designed for iPhone.",
    live: "#",
    code: "https://github.com/Samkwibe/Samuel_kwibe_Porfolio",
    image: "/repo_images_bundle/Mobile-Portfolio-App.png",
    featured: true,
    year: "Junior Year",
    highlights: [
      "Expo React Native iPhone app",
      "Shared data with the web portfolio",
      "Native project browsing experience",
      "Mobile-first UI and contact actions"
    ]
  }
]
