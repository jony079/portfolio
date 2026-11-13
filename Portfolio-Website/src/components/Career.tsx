import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Undergraduate Researcher</h4>
                <h5>Battery Research Group, MSE, RUET</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading computational DFT investigations (Quantum ESPRESSO 7.5)
              on defect-engineered Ti3C2Tx MXene for flexible sodium-ion battery
              anodes, pairing CI-NEB Na+ migration barriers with GNN and Bayesian
              optimization. Formulated 5-phase research plan on iron-induced
              water supply discoloration in Rajshahi.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Top 15 National Finalist</h4>
                <h5>Energy Innovation Challenge 2026</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Awarded Top 15 National Finalist (ActionAid Bangladesh & Praan) for
              the biomass-derived nitrogen-doped porous carbon (NPC) anode
              concept for sodium-ion batteries. Built interactive Streamlit &
              animated HTML5 models and pitched solo at the Grand Finale in
              Dhaka.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. in Materials Science & Engineering</h4>
                <h5>Rajshahi University of Engineering & Technology</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Undergraduate program specializing in computational materials
              modeling, electrochemistry, and metallurgy. Core coursework:
              Crystallography, Thermodynamics of Materials, Phase Diagrams,
              Mechanics of Solids, Fluid Mechanics, and Statistics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Presentations & Publications</h4>
                <h5>EIC Grand Finale, Dhaka</h5>
              </div>
              <h3>AUG 2026</h3>
            </div>
            <p>
              Poster and National Pitch presentation: "Next-Gen Sodium-Ion
              Battery Anodes: Upcycling Biomass for Stable Energy Storage
              (IP-NPC)" presented before academic and industry panels at the
              Grand Finale in Dhaka.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Leadership & STEM Mentorship</h4>
                <h5>Dept. of MSE, RUET & Private Tutoring</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Elected Class Representative (CR) facilitating academic and
              departmental coordination. Private tutor delivering conceptual,
              first-principles instruction in Physics, Chemistry, and Higher
              Mathematics for secondary and higher secondary students in
              Rajshahi.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Certifications</h4>
                <h5>Anthropic & Elsevier Researcher Academy</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Certified in Claude Code in Action (Jul 2026), Claude Code 101, and
              AI Fluency Framework & Foundations (Anthropic, Jun 2026); and Gen
              AI Use in the Research Workflow & Identifying Research Gaps
              (Elsevier Researcher Academy, Jun 2026).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
