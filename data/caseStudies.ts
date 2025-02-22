export interface CaseStudy {
  id: string;
  title: string;
  headerImage: string;
  projectOverview?: {
    missionStatement: string;
    targetAudience: string;
  };
  myContributions?: {
    title: string;
    details: string[];
  }[];
  contributions?: {
    title: string;
    details: string[];
  }[];
  techStack: string[];
  challenges?: {
    title: string;
    problem: string;
    solution: string[];
  }[];
  results?: string[];
  keyTakeaways?: string[];
  finalThoughts?: string;
  missionStatement?: string;
  targetAudience?: string;
  backgroundColor?: string;
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "premierleaf",
    title: "PremierLeaf E-Commerce Shop",
    headerImage: "/plsite.png",
    projectOverview: {
      missionStatement:
        "Burnout is optional. At PremierLeaf, we go beyond quick fixes. Our expertly crafted CBD products and personalized self-care plans fit effortlessly into daily life—helping users stress less, focus more, and recharge guilt-free. Because when you feel your best, you perform your best.",
      targetAudience:
        "High-achieving and driven professionals looking for effective self-care solutions.",
    },
    myContributions: [
      {
        title: "UI/UX Development",
        details: [
          "Designed and implemented multiple UI components for both desktop and mobile views.",
          "Developed essential landing page components, including the navbar, footer, and blog section.",
          "Focused on user experience (UX) best practices.",
          "Applied Material UI components to ensure design consistency and accessibility.",
          "Developed and optimized the blog functionality.",
          "Integrated animations and interactive elements using CSS transitions and React animations.",
        ],
      },
      {
        title: "Email Subscription Service",
        details: [
          "Built and integrated an email subscription system.",
          "Integrated the Mailchimp API.",
          "Implemented form validation and error handling.",
          "Created a subscription confirmation workflow.",
        ],
      },
      {
        title: "Collaborative Agile Development",
        details: [
          "Worked closely with a Project Manager in a two-person team.",
          "Engaged in full code reviews and unit testing.",
          "Participated in development planning sessions using Notion.",
          "Conducted peer-to-peer coding sessions.",
          "Ensured version control best practices by maintaining structured Git commits and pull requests.",
        ],
      },
    ],
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Material UI",
      "CSS",
      "Mailchimp API",
      "Node.js",
      "HTML",
      "Markdown",
      "Google Cloud Buckets",
      "Notion",
      "GitHub",
      "Jest",
    ],
    challenges: [
      {
        title: "Implementing My First Email Service",
        problem:
          "This was my first time implementing an external service for email automation, which required understanding API documentation, handling authentication, and structuring email workflows.",
        solution: [
          "Studied Mailchimp API documentation.",
          "Used Postman to test API calls.",
          "Designed a modular email subscription handler.",
          "Debugged integration issues using developer logs and real-time testing.",
        ],
      },
      {
        title: "Developing a Full Web App with a Small Team",
        problem:
          "Balancing frontend UI development with backend service integration while ensuring effective collaboration.",
        solution: [
          "Applied an incremental development approach.",
          "Maintained clear documentation.",
          "Engaged in continuous code reviews and unit testing.",
          "Used Notion boards and daily stand-ups to track progress.",
        ],
      },
      {
        title: "Ensuring Cross-Device Compatibility",
        problem:
          "Designing a web application that works seamlessly on both mobile and desktop devices.",
        solution: [
          "Used CSS media queries for a responsive UI.",
          "Implemented React’s Flexbox and Grid system.",
          "Conducted extensive testing using Google Chrome DevTools and real mobile devices.",
        ],
      },
    ],
    results: [
      "Successfully delivered a fully functional and scalable web app with a modern, smooth, and responsive UI.",
      "The email subscription system significantly streamlined user engagement and helped expand PremierLeaf's audience reach.",
      "Received positive feedback from stakeholders for the user-friendly interface and well-structured development approach.",
      "Maintained high code quality and performance through structured testing and best development practices.",
      "Completed the project within the designated timeline, demonstrating strong project management and technical problem-solving skills.",
    ],
    keyTakeaways: [
      "Gained valuable experience working with external API services (Mailchimp), cloud-based storage (Google Cloud Buckets), and scalable React component-based architecture.",
      "Improved ability to work in small, agile teams.",
      "Future enhancements include real-time blog content management, enhanced email analytics tracking, and dark mode UI support.",
    ],
    finalThoughts:
      "The PremierLeaf web app project was a pivotal experience in my software engineering journey. It reinforced my ability to develop scalable frontends, integrate backend services, and collaborate effectively in a team environment. By overcoming challenges through technical research, structured planning, and agile development practices, I successfully contributed to a professional-grade web application that delivered real value to the client.",
  },
  {
    id: "youngstarworld",
    title: "YoungStarWorld Web App",
    headerImage: "/youngstarworld.png",
    projectOverview: {
      missionStatement:
        "With a mindset that says, 'I’m a star, how could I not shine?' YoungStarWorld channels energy and creativity into every piece of clothing created, treating fabric as a canvas to capture the vibrant energy and spirit of today’s youth.",
      targetAudience:
        "Teens to young adults passionate about fashion and self-expression.",
    },
    myContributions: [
      {
        title: "Leadership & Project Management",
        details: [
          "Led a team of two and maintained direct communication with the business owner.",
          "Managed development using a Jira Kanban board and held regular meetings with a junior developer.",
        ],
      },
      {
        title: "UI/UX Design & Development",
        details: [
          "Designed all UI components using Uizard.",
          "Developed multiple UI components to create a smooth and responsive user experience.",
          "Applied Material UI to maintain a consistent and modern design system.",
        ],
      },
      {
        title: "E-Commerce Integration",
        details: [
          "Integrated Square Checkout and Shop System for seamless transactions.",
          "Architected for future scalability with plans to implement a cart feature.",
        ],
      },
    ],
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Jira",
      "GitHub",
      "Square API",
    ],
    challenges: [
      {
        title: "Managing a Team While Developing",
        problem:
          "Balancing leadership responsibilities with hands-on coding was a challenge.",
        solution: [
          "Adopted a structured development approach using Jira.",
          "Conducted weekly check-ins and daily stand-ups to maintain alignment.",
          "Mentored a junior developer to ensure steady progress.",
        ],
      },
      {
        title: "Implementing Square Checkout System",
        problem:
          "Square’s API had specific requirements that needed to align with the app’s design and business needs.",
        solution: [
          "Studied Square’s API documentation thoroughly.",
          "Developed a modular payment system to allow for future enhancements.",
          "Tested extensively to ensure a smooth user experience.",
        ],
      },
      {
        title: "Designing a Scalable UI for Future Growth",
        problem:
          "The UI needed to adapt to future features like a cart system.",
        solution: [
          "Designed the UI with scalability in mind.",
          "Utilized a component-based architecture in React for easier future updates.",
        ],
      },
    ],
    results: [
      "Successfully delivered a fully functional e-commerce web app tailored for fashion-conscious young adults.",
      "Seamless payment integration via Square improved the shopping experience.",
      "Structured project management ensured smooth execution and collaboration.",
      "The business owner was highly satisfied with the outcome.",
    ],
    keyTakeaways: [
      "Gained valuable experience in leadership, project management, and technical development.",
      "Enhanced skills in e-commerce integrations, UI design, and scalable frontend architecture.",
      "Future enhancements include adding a cart feature and implementing user accounts.",
    ],
    finalThoughts:
      "The YoungStarWorld web app project was an exciting and impactful experience, blending technical development, UI design, e-commerce integration, and project leadership. It showcased strong problem-solving skills, leadership, and technical expertise, making it a standout addition to my portfolio.",
    backgroundColor: "#00796b",
    link: "https://youngstarworld.vercel.app",
  },
  {
    id: "premierleaf-wellness",
    title: "PremierLeaf Wellness Mobile App",
    headerImage: "/plphone.png",
    projectOverview: {
      missionStatement:
        "Helping busy professionals beat burnout, prioritize self-care, and reclaim their energy—all in less than 15 minutes a day.",
      targetAudience:
        "High-achieving and driven professionals looking for effective self-care solutions.",
    },
    myContributions: [
      {
        title: "Feature Development & Full-Stack Implementation",
        details: [
          "Developed and designed multiple fully functional app features such as Project Tracking, Milestone Achievements, Self-Care Sprints, and a User Progression System.",
          "Ensured smooth UI/UX integration using React Native, creating a responsive and engaging user experience.",
        ],
      },
      {
        title: "Strategic Feature Planning & Team Collaboration",
        details: [
          "Collaborated with a team of three to plan all features, ensuring alignment with user needs and business goals.",
          "Engaged in thorough discussions about technical implementation, addressing potential bottlenecks and ensuring scalability.",
          "Met project deadlines through efficient task prioritization and team coordination.",
        ],
      },
      {
        title: "Backend & Data Management",
        details: [
          "Implemented GraphQL Apollo Server for efficient querying and mutations.",
          "Integrated Google Firebase for account authentication and secure data storage, ensuring seamless user onboarding and data protection.",
          "Conducted unit testing with Jest to ensure feature reliability and stability before deployment.",
        ],
      },
    ],
    techStack: [
      "React Native",
      "GraphQL Apollo Server",
      "Google Firebase",
      "Jest",
      "GitHub",
    ],
    challenges: [
      {
        title: "Implementing a Seamless Self-Care Sprint Experience",
        problem:
          "Developing a structured system where users could complete self-care tasks in a guided yet flexible manner was complex.",
        solution: [
          "Designed a task flow system allowing users to track progress dynamically.",
          "Integrated real-time data updates using GraphQL to ensure a smooth experience without unnecessary refreshes.",
          "Tested and refined the task completion logic to ensure intuitive progress tracking and clear milestone achievements.",
        ],
      },
      {
        title: "Integrating Firebase Authentication & Data Storage",
        problem:
          "Ensuring secure account authentication while maintaining fast access to user data across different devices.",
        solution: [
          "Utilized Google Firebase Authentication for seamless and secure sign-up/login processes.",
          "Implemented real-time data syncing to enable users to track progress across multiple devices.",
          "Applied data encryption and access rules to safeguard user information.",
        ],
      },
      {
        title: "Query Optimization with GraphQL",
        problem:
          "Handling large-scale user data efficiently while maintaining app performance.",
        solution: [
          "Utilized GraphQL Apollo Server to fetch only necessary data, reducing payload size and improving performance.",
          "Employed query batching and caching strategies to minimize redundant requests.",
          "Monitored and optimized API calls to ensure smooth performance across various network conditions.",
        ],
      },
    ],
    results: [
      "Successfully built a fully functional mobile app enabling users to manage self-care, track milestones, and complete guided sprints.",
      "Seamless Firebase integration provided secure account management and increased user engagement.",
      "The app's architecture allowed for future scalability and easy addition of new features.",
      "Delivered the project on time, meeting business requirements and providing a high-quality, user-friendly experience.",
    ],
    keyTakeaways: [
      "Strengthened expertise in GraphQL Apollo Server, React Native development, and Firebase authentication.",
      "Enhanced skills in team-based feature planning and breaking down complex tasks into manageable milestones.",
      "Future enhancements include AI-driven self-care recommendations, improved push notification support, and expanded health metrics tracking.",
    ],
    finalThoughts:
      "The PremierLeaf Wellness Mobile App project was a valuable experience in full-stack mobile development, team collaboration, and feature-driven implementation. By integrating GraphQL, Firebase, and React Native, I contributed to a high-impact wellness app that prioritizes user engagement and long-term scalability. This project showcases my technical expertise, problem-solving approach, and ability to deliver results in a fast-paced development environment.",
  },
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export const caseStudiesById: { [key: string]: CaseStudy } = caseStudies.reduce((acc, cs) => {
  acc[cs.id] = cs;
  return acc;
}, {} as { [key: string]: CaseStudy });
