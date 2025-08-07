import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useIsMobile } from "../hooks/useIsMobile";
import SEO from "../components/SEO";

const ResumePage = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <SEO 
        title="Resume"
        description="View Topan Nurpana's professional resume including education at SMK Negeri 2 Subang and University of Subang, and work experience at PT. Gothru Media Indonesia and PT. Aghatis Karya Indonesia."
        keywords="resume, CV, Topan Nurpana, education, work experience, backend developer, full stack developer, PT. Gothru Media Indonesia, PT. Aghatis Karya Indonesia"
        url="https://your-domain.com/resume"
      />
      <div className="page-content resume-page">
      {isMobile ? (
        <Parallax y={[-15, 15]} className="parallax-title">
          <h2 className="page-title">Resume</h2>
        </Parallax>
      ) : (
        <h2 className="page-title">Resume</h2>
      )}
      
      {isMobile ? (
        <Parallax y={[-10, 10]} className="parallax-section">
          <div className="resume-section">
            <h3 className="section-title">Education</h3>
            
            <div className="timeline-item">
              <div className="timeline-date">2015-2018</div>
              <div className="timeline-content">
                <h4>SMK Negeri 2 Subang</h4>
                <p className="timeline-subtitle">Software Engineering</p>
                <p>SMKN 2 Subang is a vocational school known for offering a wide range of technical and vocational programs. One of its key departments is Software Engineering, which focuses on teaching students the skills needed to design, develop, and maintain software applications.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2018-2022</div>
              <div className="timeline-content">
                <h4>University of Subang</h4>
                <p className="timeline-subtitle">Information Systems</p>
                <p>University of Subang is a public university located in Subang, Jawa Barat, Indonesia. It was established in 1976. The university offers a wide range of programs, including undergraduate, graduate, and postgraduate.</p>
              </div>
            </div>
          </div>
        </Parallax>
      ) : (
        <div className="resume-section">
          <h3 className="section-title">Education</h3>
          
          <div className="timeline-item">
            <div className="timeline-date">2015-2018</div>
            <div className="timeline-content">
              <h4>SMK Negeri 2 Subang</h4>
              <p className="timeline-subtitle">Software Engineering</p>
              <p>SMKN 2 Subang is a vocational school known for offering a wide range of technical and vocational programs. One of its key departments is Software Engineering, which focuses on teaching students the skills needed to design, develop, and maintain software applications.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">2018-2022</div>
            <div className="timeline-content">
              <h4>University of Subang</h4>
              <p className="timeline-subtitle">Information Systems</p>
              <p>University of Subang is a public university located in Subang, Jawa Barat, Indonesia. It was established in 1976. The university offers a wide range of programs, including undergraduate, graduate, and postgraduate.</p>
            </div>
          </div>
        </div>
      )}

      {isMobile ? (
        <Parallax y={[-8, 8]} className="parallax-section">
          <div className="resume-section">
            <h3 className="section-title">Experience</h3>
            
            <div className="timeline-item">
              <div className="timeline-date">Sep 2022 - Current</div>
              <div className="timeline-content">
                <h4>PT. Gothru Media Indonesia</h4>
                <p className="timeline-subtitle">Fulltime Backend Developer</p>
                <p className="timeline-location">Subang, Indonesia</p>
                <ul className="timeline-achievements">
                  <li>Designed and optimized database schemas, improved query performance, and utilized Redis/Elasticsearch for data search and product performance.</li>
                  <li>Developed new features according to sprint plans, resolved bugs, and ensured applications were ready before end-of-sprint demos.</li>
                  <li>Wrote technical API documentation and procedures to facilitate integration with frontend teams.</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2025 - Current</div>
              <div className="timeline-content">
                <h4>PT. Aghatis Karya Indonesia</h4>
                <p className="timeline-subtitle">Freelance Fullstack Developer</p>
                <p className="timeline-location">Bandung (Remote)</p>
                <ul className="timeline-achievements">
                  <li>Developed a Used Car Sales Information System using Laravel for backend and React for frontend, including database design, API development, and user interface.</li>
                  <li>Optimized application performance on both server and client sides, including query management, caching, and UI rendering speed improvements.</li>
                  <li>Implemented new features according to sprint plans, fixed bugs, and ensured applications were ready before end-of-sprint demos.</li>
                  <li>Wrote technical API documentation and component usage guides to facilitate integration and continuous development.</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2022 - Current</div>
              <div className="timeline-content">
                <h4>Freelance Individual</h4>
                <p className="timeline-subtitle">Fullstack Web Developer</p>
                <p className="timeline-location">Remote</p>
                <ul className="timeline-achievements">
                  <li>Developed school management systems using Laravel and Livewire, including modules for student management, teachers, classes, lesson schedules, and academic administration.</li>
                  <li>Designed and optimized database schemas, built internal APIs, and managed data flow between backend and Livewire frontend.</li>
                  <li>Implemented features such as real-time data search, academic reports, and interactive dashboards to facilitate school management.</li>
                  <li>Ensured optimal application performance, fixed bugs, and wrote technical documentation to support continuous development.</li>
                </ul>
              </div>
            </div>
          </div>
        </Parallax>
      ) : (
        <div className="resume-section">
          <h3 className="section-title">Experience</h3>
          
          <div className="timeline-item">
            <div className="timeline-date">Sep 2022 - Current</div>
            <div className="timeline-content">
              <h4>PT. Gothru Media Indonesia</h4>
              <p className="timeline-subtitle">Fulltime Backend Developer</p>
              <p className="timeline-location">Subang, Indonesia</p>
              <ul className="timeline-achievements">
                <li>Designed and optimized database schemas, improved query performance, and utilized Redis/Elasticsearch for data search and product performance.</li>
                <li>Developed new features according to sprint plans, resolved bugs, and ensured applications were ready before end-of-sprint demos.</li>
                <li>Wrote technical API documentation and procedures to facilitate integration with frontend teams.</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">2025 - Current</div>
            <div className="timeline-content">
              <h4>PT. Aghatis Karya Indonesia</h4>
              <p className="timeline-subtitle">Freelance Fullstack Developer</p>
              <p className="timeline-location">Bandung (Remote)</p>
              <ul className="timeline-achievements">
                <li>Developed a Used Car Sales Information System using Laravel for backend and React for frontend, including database design, API development, and user interface.</li>
                <li>Optimized application performance on both server and client sides, including query management, caching, and UI rendering speed improvements.</li>
                <li>Implemented new features according to sprint plans, fixed bugs, and ensured applications were ready before end-of-sprint demos.</li>
                <li>Wrote technical API documentation and component usage guides to facilitate integration and continuous development.</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">2022 - Current</div>
            <div className="timeline-content">
              <h4>Freelance Individual</h4>
              <p className="timeline-subtitle">Fullstack Web Developer</p>
              <p className="timeline-location">Remote</p>
              <ul className="timeline-achievements">
                <li>Developed school management systems using Laravel and Livewire, including modules for student management, teachers, classes, lesson schedules, and academic administration.</li>
                <li>Designed and optimized database schemas, built internal APIs, and managed data flow between backend and Livewire frontend.</li>
                <li>Implemented features such as real-time data search, academic reports, and interactive dashboards to facilitate school management.</li>
                <li>Ensured optimal application performance, fixed bugs, and wrote technical documentation to support continuous development.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {isMobile ? (
        <Parallax y={[-6, 6]} className="parallax-section">
          <div className="resume-section">
            <h3 className="section-title">Coding Skills</h3>
            <div className="skills-list">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">PHP</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Laravel</span>
              <span className="skill-tag">CodeIgniter</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">Handlebars</span>
            </div>
          </div>
        </Parallax>
      ) : (
        <div className="resume-section">
          <h3 className="section-title">Coding Skills</h3>
          <div className="skills-list">
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">PHP</span>
            <span className="skill-tag">HTML/CSS</span>
            <span className="skill-tag">Laravel</span>
            <span className="skill-tag">CodeIgniter</span>
            <span className="skill-tag">Express.js</span>
            <span className="skill-tag">Handlebars</span>
          </div>
        </div>
      )}

      {isMobile ? (
        <Parallax y={[-4, 4]} className="parallax-section">
          <div className="resume-section">
            <h3 className="section-title">Knowledge</h3>
            <div className="skills-list">
              <span className="skill-tag">Social Media</span>
              <span className="skill-tag">Time Management</span>
              <span className="skill-tag">Communication</span>
              <span className="skill-tag">Problem-Solving</span>
              <span className="skill-tag">Social Networking</span>
              <span className="skill-tag">Flexibility</span>
            </div>
          </div>
        </Parallax>
      ) : (
        <div className="resume-section">
          <h3 className="section-title">Knowledge</h3>
          <div className="skills-list">
            <span className="skill-tag">Social Media</span>
            <span className="skill-tag">Time Management</span>
            <span className="skill-tag">Communication</span>
            <span className="skill-tag">Problem-Solving</span>
            <span className="skill-tag">Social Networking</span>
            <span className="skill-tag">Flexibility</span>
          </div>
        </div>
      )}

      {isMobile ? (
        <Parallax y={[-2, 2]} className="parallax-section">
          <div className="resume-section">
            <h3 className="section-title">Certificates</h3>
            <div className="certificate-item">
              <h4>Junior Web Developer</h4>
              <p>19 April 2018</p>
            </div>
            <div className="certificate-item">
              <h4>Junior Office Administrator</h4>
              <p>19 April 2018</p>
            </div>
          </div>
        </Parallax>
      ) : (
        <div className="resume-section">
          <h3 className="section-title">Certificates</h3>
          <div className="certificate-item">
            <h4>Junior Web Developer</h4>
            <p>19 April 2018</p>
          </div>
          <div className="certificate-item">
            <h4>Junior Office Administrator</h4>
            <p>19 April 2018</p>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ResumePage; 