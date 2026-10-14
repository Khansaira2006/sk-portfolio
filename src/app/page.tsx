export default function Home() {
  return (
    <main>
      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <nav>
        <div>
          <strong>Saira Khan</strong>
        </div>

        <div>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education & Credentials</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section>
        <h1>Saira Khan</h1>

        <h2>
          Digital Health Student | IT System Analyst | Cloud & AI Enthusiast
        </h2>

        <p>
          I am a Digital Health student with experience in IT systems, cloud
          technologies, enterprise applications, AI, and healthcare technology.
          I enjoy working on projects that connect technology with real-world
          business and healthcare needs.
        </p>

        <div>
          <a href="#projects">View Projects</a>

          <a
            href="/resume/Sk_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </section>

      {/* =====================================================
          ABOUT SECTION
      ====================================================== */}

      <section id="about">
        <h2>About Me</h2>

        <p>
          I am a fourth-year Bachelor of Digital Health student at Mohawk
          College with experience in IT systems, cloud technologies, enterprise
          applications, and healthcare technology.
        </p>

        <p>
          My interests include digital health, cloud computing, artificial
          intelligence, systems analysis, and using technology to improve
          business and healthcare processes.
        </p>

        <p>
          Through academic, internship, and technical projects, I have worked
          with technologies such as Microsoft Azure, Next.js, system modelling,
          enterprise applications, and AI-powered tools.
        </p>
      </section>

      {/* =====================================================
          PROFESSIONAL EXPERIENCE
      ====================================================== */}

      <section id="experience">
        <h2>Professional Experience</h2>

        <div>
          <h3>System Analyst</h3>

          <p>
            Contributed to enterprise technology and digital transformation
            initiatives involving AI, cloud technologies, software development,
            testing, systems documentation, and business requirements. Worked
            within Agile teams and collaborated with technical and business
            stakeholders to support the design and delivery of practical
            technology solutions.
          </p>
        </div>

        <div>
          <h3>Banking & Financial Services</h3>

          <p>
            More than eight years of experience with major Canadian financial
            institutions, including RBC, Scotiabank, and CIBC, in client
            advisory, financial analysis, relationship management, digital
            platform training, reporting, and collaboration with specialist
            teams. This experience strengthened my skills in stakeholder
            communication, problem solving, regulated environments, and
            technology adoption.
          </p>
        </div>

        <div>
          <h3>Digital Health & Technology Projects</h3>

          <p>
            Designed and developed academic and technical solutions involving
            digital health workflows, systems analysis, requirements gathering,
            system modelling, mobile and web development, UI/UX design,
            healthcare interoperability, privacy, patient safety, and
            user-centred solution design.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section id="projects">
        <h2>Projects</h2>

        {/* FEATURED PROJECT */}
        <div className="project-card featured-project">
          <div className="featured-badge">Featured Project</div>

          <h3>Emergency OR Surgical Booking & Prioritization System</h3>

          <p>
            Led a student team in redesigning a paper-based emergency surgical
            booking workflow for a Brant hospital project, where physicians and
            residents used pink surgical slips to request emergency operating
            room procedures. Our team developed a digital booking and
            prioritization system that allows surgical requests to be entered
            electronically, prioritized according to clinical urgency, and
            monitored through a centralized dashboard visible to relevant
            departments, including nursing and diagnostic imaging teams such as
            X-ray, improving shared visibility of case status, urgency, and
            surgical priorities.
          </p>

          <span>
            Digital Health • Healthcare Workflow Automation • Systems Analysis •
            Clinical Prioritization • Dashboard Design • Team Leadership
          </span>

          <a
            href="/videos/brant-hospital-project.mp4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Project Presentation →
          </a>
        </div>

        {/* CLOUD PROJECT */}
        <div className="project-card">
          <h3>Cloud and Enterprise Technology Projects</h3>

          <p>
            Worked on cloud and enterprise technology projects involving
            Microsoft Azure, application services, infrastructure, and modern
            IT environments.
          </p>

          <span>Azure • Cloud • Enterprise IT</span>
        </div>

        {/* AI PROJECT */}
        <div className="project-card">
          <h3>AI and Copilot Projects</h3>

          <p>
            Explored AI-powered workflows, Microsoft Copilot, enterprise AI use
            cases, automation, and responsible AI practices for business
            environments.
          </p>

          <span>AI • Microsoft Copilot • Automation</span>
        </div>

        {/* NEXT.JS PROJECT */}
        <div className="project-card">
          <h3>Next.js Web Application</h3>

          <p>
            Built a responsive web application using Next.js with dynamic
            routing, API data, reusable components, and modern web development
            practices.
          </p>

          <span>Next.js • React • TypeScript</span>
        </div>

        {/* VITA MIND APP */}
        <div className="project-card">
          <h3>Vita Mind App</h3>

          <p>
            Designed an interactive digital health app prototype in Figma with
            a focus on usability, user experience, and healthcare-related
            workflows.
          </p>

          <span>Figma • UI/UX Design • Digital Health</span>

          <a
            href="https://www.figma.com/proto/9su1IsTSgLZRnGrrF8MuiX/Vita-Mind-App?page-id=0%3A1&node-id=425-55&p=f&viewport=115%2C192%2C0.1&t=cJbGwwnMaJYNQ9ln-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=425%3A55"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Figma Prototype →
          </a>
        </div>

        {/* MENTAL HEALTH APP */}
        <div className="project-card">
          <h3>Mental Health Support App</h3>

          <p>
            A mobile application prototype that provides mental health
            information and resources through a simple, interactive, and
            user-friendly interface.
          </p>

          <span>Mobile Development • Digital Health • UI Design</span>

          <a
            href="/videos/demo.mp4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Demo →
          </a>
        </div>

        {/* EMS APP */}
        <div className="project-card">
          <h3>EMS Location Finder App</h3>

          <p>
            A React Native mobile app that uses maps, geolocation, and incident
            coordinates to display EMS locations and emergency information
            around Hamilton.
          </p>

          <span>React Native • Expo • Maps • Geolocation</span>

          <a
            href="/videos/ems-location.mp4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Demo →
          </a>
        </div>

        {/* MEDICATION ADHERENCE */}
        <div className="project-card">
          <h3>Medication Adherence System</h3>

          <p>
            Designed a digital health solution focused on helping patients
            manage medication schedules and improve adherence through system
            analysis, requirements gathering, planning, and system modelling.
          </p>

          <span>Digital Health • Systems Analysis</span>

          <a href="/projects/medication-adherence">
            View Project →
          </a>
        </div>
      </section>

      {/* =====================================================
          EDUCATION & CREDENTIALS
      ====================================================== */}

      <section id="education">
        <h2>Education & Credentials</h2>

        <div className="education-card">
          <h3>Honours Bachelor of Digital Health</h3>

          <p>
            <strong>Mohawk College, Ontario</strong>
          </p>

          <span>Expected Graduation: 2027</span>

          <p>
            Relevant areas of study include health architectures and
            interoperability, health enterprise applications, telehealth and
            remote patient monitoring, health privacy, patient safety, software
            development and testing, systems analysis, project management, and
            change management.
          </p>
        </div>

        <div className="certification-card">
          <h3>TCPS 2: CORE 2022 – Course on Research Ethics</h3>

          <p>
            Completed training in ethical conduct for research involving humans
            based on the Tri-Council Policy Statement.
          </p>

          <span>Panel on Research Ethics • February 2026</span>
        </div>

        <div className="certification-card">
          <h3>UI/UX Design Certificate</h3>

          <p>
            Training in user interface and user experience design, prototyping,
            and designing intuitive digital experiences.
          </p>

          <span>IBM</span>
        </div>

        <div className="certification-card">
          <h3>Enterprise Design Thinking Practitioner</h3>

          <p>
            Training in human-centred problem solving, understanding user needs,
            and designing solutions through collaborative design practices.
          </p>

          <span>IBM</span>
        </div>

        <div className="certification-card">
          <h3>Enterprise Design Thinking Co-Creator</h3>

          <p>
            Training in collaborative design thinking, stakeholder
            participation, and co-creating user-centred solutions.
          </p>

          <span>IBM</span>
        </div>

        <div className="certification-card">
          <h3>Financial Planning II</h3>

          <p>
            Advanced training in financial planning concepts and client-focused
            financial analysis.
          </p>

          <span>2023</span>
        </div>

        <div className="certification-card">
          <h3>Professional Financial Services Advisor (PFSA)</h3>

          <p>
            Professional financial services credential focused on client
            advisory services and financial solutions.
          </p>

          <span>2019</span>
        </div>

        <div className="certification-card">
          <h3>Canadian Securities Course (CSC)</h3>

          <p>
            Canadian financial services credential covering investment
            products, financial markets, and securities fundamentals.
          </p>

          <span>2015</span>
        </div>
      </section>

      {/* =====================================================
          RESUME SECTION
      ====================================================== */}

      <section id="resume">
        <h2>Resume</h2>

        <p>
          View my resume for more information about my experience in digital
          health, systems analysis, AI, cloud technologies, software
          development, and financial services.
        </p>

        <a
          className="resume-button"
          href="/resume/Sk_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume →
        </a>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}

      <section id="contact">
        <h2>Contact</h2>

        <p>
          Interested in connecting or discussing an opportunity? Feel free to
          reach out through LinkedIn, GitHub, or email.
        </p>
      </section>
    </main>
  );
}