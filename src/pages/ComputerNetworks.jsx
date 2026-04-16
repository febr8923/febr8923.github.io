export default function ComputerNetworks() {
  return (
    <main>
      <div className="container">
        <div className="page-header">
          <h1>Computer Networks FS25</h1>
          <p>
            Resources for the Computer Networks course at ETH Zurich (Spring Semester 2025, 2026).
            I'm a teaching assistant for this course.
          </p>
        </div>

        <section>
          <h2>Resources</h2>
          <div className="resource-list">
            <a
              className="resource-item"
              href="/cn-fs24-script.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resource-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div className="resource-text">
                <strong>Study Notes</strong>
                <span>My notes from last year — may contain errors</span>
              </div>
            </a>

            <a
              className="resource-item"
              href="https://gitlab.inf.ethz.ch/PRV-PERRIG/networks-course/computer-networks-2025/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resource-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
                </svg>
              </div>
              <div className="resource-text">
                <strong>GitLab Repository</strong>
                <span>Course code and materials</span>
              </div>
            </a>

            <a
              className="resource-item"
              href="https://netsec.ethz.ch/courses/cn-2025/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resource-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="resource-text">
                <strong>Official Course Page</strong>
                <span>netsec.ethz.ch — syllabus, lectures, and announcements</span>
              </div>
            </a>
          </div>

          <p className="note">
            The study notes are from FS24 and may contain errors. Use them as a supplement,
            not a replacement for the official course materials.
          </p>
        </section>
      </div>
    </main>
  )
}
