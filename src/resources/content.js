import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Paul",
  lastName: "Nepomuceno",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer | API Developer",
  avatar: "/images/avatar.jpg",
  email: "jpnepomuceno80s@gmail.com",
  location: "Asia/Philippines", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Filipino"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Nephylem",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/john-paul-nepomuceno-812434182/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Making ideas look good — and work great.</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Taisk.com</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m Paul — Web Scraping Engineer, Python&nbsp;Developer, and Cyber
      Security Enthusiast.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/nephy",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        tincidunt quis arcu vel laoreet. Etiam id justo ut lorem pretium mollis.
        Mauris tristique nec lacus et gravida. Integer imperdiet aliquam
        consectetur.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Artifact Uprising",
        timeframe: "Nov 2023 - Present",
        role: "Web Developer (Part Time)",
        achievements: [
          <>
            Convert Figma design prototypes into fully functional, pixel-perfect
            web pages using HTML, CSS, and JavaScript.
          </>,
          <>
            Implement clean, maintainable code to accurately reflect the
            intended UI/UX. Ensure web pages are fully responsive, optimized for
            performance, and compatible across various devices and browsers.
          </>,
          <>
            Write and implement A/B testing code using JavaScript and VWO to
            evaluate design variations and improve user engagement. Collaborate
            closely with designers to maintain design.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Taisk",
        timeframe: "Feb 2025 - Jun 2025",
        role: "Full Stack Developer",
        achievements: [
          <>
            Develop and maintain backend APIs using Flask to deliver reliable
            and efficient server-side functionality. Enhance and integrate
            user-facing features on the frontend using ReactJS and Tailwind CSS.
          </>,
          <>
            Build custom automation agents leveraging n8n, and develop web
            crawlers to collect and prepare high-quality training data for AI
            models. Apply prompt engineering techniques to optimize Large
            Language Model (LLM) outputs for various automation tasks.
          </>,
          <>
            Designed and implemented an Email Automation Agent, which utilizes
            an LLM to intelligently draft, write, and send emails, streamlining
            communication workflows and improving productivity.
          </>,
        ],
        images: [],
      },
      {
        company: "CountyStream",
        timeframe: "Apr 2024 - Jan 2025",
        role: "Web Scraping Engineer",
        achievements: [
          <>
            Write efficient web scraping scripts to gather data from foreclosure
            listing websites.
          </>,
          <>
            Collaborate on project planning, helping to shape direction and
            scope of new initiatives.
          </>,
          <>
            Mentor fresh team members, showing and helping them settle into the
            workflow.
          </>,
        ],
        images: [],
      },
      {
        company: "MSPbots.ai",
        timeframe: "Jul 2023 - Jan 2024",
        role: "Jr. Data Analyst",
        achievements: [
          <>
            Client data migration from legacy systems to the platform. Core
            responsibilities include extracting and preparing datasets, ensuring
            they are accurately cleaned, formatted, and aligned with our
            platform’s requirements.
          </>,
          <>
            Perform thorough validation checks to confirm completeness and
            accuracy. Following migration, I contribute to configuring
            dashboards and reports, enabling clients to effectively utilize
            their data. Throughout the process, clear documentation is
            established to support quality assurance and future reference.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        cert: "",
        name: "Philippine Women's College",
        description: (
          <>Studied Bachelor of Science in Information Technology.</>
        ),
      },
      {
        cert: "https://drive.google.com/file/d/1kNMgZEmn4bIl4mMze71SfyS8mrUoarVm/view",
        name: "Dynamic Pitch",
        description: (
          <>
            Studied Python and machine learning, focusing on programming, data
            processing, and predictive modeling techniques.
          </>
        ),
      },
      {
        cert: "https://aiplanet.com/bootcamp/certificate/verify/c9b0ba47-f484-4716-9af7-0f3866da202e",
        name: "AI Planet",
        description: (
          <>
            Completed a 5-week Data Science Bootcamp covering Python, data
            analysis, visualization, and machine learning fundamentals.
          </>
        ),
      },
      {
        cert: "",
        name: "Netacad.com",
        description: (
          <>
            Studied fundamental and advanced networking concepts through Cisco
            Networking Academy, including network architecture, protocols, and
            troubleshooting methods.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "N8n",
        description: (
          <>
            Developed an n8n workflow integrating LLMs with Outlook to fully
            automate email drafting, writing, and sending — reducing manual
            effort to zero.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/tech01.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/tech02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Flask",
        description: (
          <>
            Maintain and optimize a Flask-based backend application, ensuring
            stability, performance, and seamless feature updates.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/tech03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Selenium & Puppeteer",
        description: (
          <>
            Experienced in developing efficient web scraping scripts, capable of
            handling dynamic, JavaScript-heavy websites, automating browser
            interactions, and extracting structured data at scale.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/tech04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "LLMs",
        description: (
          <>
            Experienced in leveraging LLM models with RAG pipelines and advanced prompt engineering for optimized AI-driven solutions.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/tech05.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
