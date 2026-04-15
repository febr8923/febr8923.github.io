export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="hero">
          <h1>Ferdinand Brunne</h1>
          <p className="subtitle">MSc Student · ETH Zurich</p>
          <p>
            I'm a Master's student at ETH Zurich specializing in Machine Learning
            and Computer Vision, with a Bachelor's degree in Computer Science from ETH.
            Currently a teaching assistant for Computer Networks.
          </p>
        </div>

        <section>
          <h2>Experience</h2>
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-meta">
                <strong>Teaching Assistant — Computer Networks</strong>
                <span>ETH Zurich · FS25</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Interests</h2>
          <div className="interests">
            <span className="interest-item">AI &amp; Vision</span>
            <span className="interest-item">AI &amp; Systems</span>
          </div>
        </section>

        <section>
          <h2>Links</h2>
          <div className="links">
            <a
              className="link-item"
              href="https://www.linkedin.com/in/ferdinand-brunne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a
              className="link-item"
              href="https://github.com/febr8923"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
