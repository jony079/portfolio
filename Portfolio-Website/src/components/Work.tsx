import "./styles/Work.css";
import { useRef, useEffect, useState, useCallback } from "react";

const projects = [
  {
    title: "Next-Gen Na-Ion Anodes (IP-NPC)",
    category: "Energy Storage & Biomass Upcycling",
    description:
      "Nitrogen-doped porous carbon (NPC) anode upcycled from wheat flour, urea, and potassium oxalate (400 °C / 850 °C under N2) buffering expansion during cycling. Includes Streamlit & HTML5 Canvas simulations of Na+ insertion/extraction, SEI formation, and capacity retention.",
    tools: "Porous Carbon (NPC), Sodium-ion Batteries, Streamlit, HTML5 Canvas, Python",
    link: "https://github.com",
  },
  {
    title: "Cubic Crystal Visualizer & XRD",
    category: "Interactive 3D Web Application",
    description:
      "Educational 3D tool rendering SC, BCC, FCC, and HCP unit cells and arbitrary (hkl) Miller planes in real time with intersection analysis. Features an XRD simulator with adjustable wavelength/FWHM, automatic Bragg peak indexing, and structure factor derivations.",
    tools: "Python, Streamlit, Plotly, 3D Crystallography, XRD Simulator",
    link: "https://github.com",
  },
  {
    title: "Ti3C2Tx MXene Discovery & CI-NEB",
    category: "Computational Materials Science",
    description:
      "Closed-loop discovery pairing Quantum ESPRESSO 7.5 DFT with Graph Neural Networks and Bayesian optimization for flexible Na-ion battery anodes. Includes MAX phase SCF, slab relaxation (28 Å vacuum, 10×10×1 k-mesh), and CI-NEB Na⁺ migration barriers.",
    tools: "Quantum ESPRESSO 7.5, DFT, CI-NEB, GNN, Bayesian Optimization, pymatgen",
    link: "https://github.com",
  },
  {
    title: "Fe-C Phase Diagram Simulator",
    category: "Thermodynamics & Alloy Design",
    description:
      "Interactive metallurgical simulator calculating the lever rule, Andrews Ms martensite start temperatures, Continuous Cooling Transformation (CCT) curves, and hardness predictions across Fe-C, Cu-Ni, and Cu-Ag systems.",
    tools: "Python, Streamlit, Thermodynamic Modeling, Heat Treatment Kinetics",
    link: "https://github.com",
  },
  {
    title: "Water Discoloration Remediation",
    category: "Environmental Materials & Systems",
    description:
      "Designed a 5-phase research plan with 4 tested hypotheses investigating iron-induced discoloration in Rajshahi's municipal water infrastructure. Critically evaluated catalytic filtration and proposed novel polyfunctional filter media.",
    tools: "Water Treatment, Iron/Manganese Catalytic Filtration, Research Design",
    link: "https://github.com",
  },
];

const CARD_WIDTH = 480; // px — keep in sync with Work.css .work-box width
const CARD_GAP   = 32;  // px — gap between cards
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

const Work = () => {
  const trackRef  = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(true);

  // ── drag state ──────────────────────────────────────────────
  const dragRef   = useRef({ dragging: false, startX: 0, scrollStart: 0 });

  // ── sync arrow + dot state to scroll position ────────────────
  const syncState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    // nearest card index
    const idx = Math.round(el.scrollLeft / SCROLL_STEP);
    setActiveIndex(Math.min(idx, projects.length - 1));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", syncState, { passive: true });
    syncState();
    return () => el.removeEventListener("scroll", syncState);
  }, [syncState]);

  // ── arrow navigation ─────────────────────────────────────────
  const scrollTo = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const delta = dir === "right" ? SCROLL_STEP : -SCROLL_STEP;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  // ── mouse-wheel → horizontal scroll ─────────────────────────
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY * 1.5, behavior: "smooth" });
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // ── mouse drag ───────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    dragRef.current = { dragging: true, startX: e.clientX, scrollStart: el.scrollLeft };
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current.dragging) return;
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = dragRef.current.scrollStart - (e.clientX - dragRef.current.startX);
  };
  const onMouseUp = () => {
    dragRef.current.dragging = false;
    const el = trackRef.current;
    if (!el) return;
    el.style.cursor = "grab";
    el.style.userSelect = "";
    // snap to nearest card
    const nearest = Math.round(el.scrollLeft / SCROLL_STEP) * SCROLL_STEP;
    el.scrollTo({ left: nearest, behavior: "smooth" });
  };

  // ── dot click ────────────────────────────────────────────────
  const goToCard = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * SCROLL_STEP, behavior: "smooth" });
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        {/* ── Header row ───────────────────────────────────── */}
        <div className="work-header">
          <h2>
            Featured <span>Research &amp; Projects</span>
          </h2>
          <div className="work-nav">
            <button
              className="work-arrow"
              onClick={() => scrollTo("left")}
              disabled={!canLeft}
              aria-label="Previous project"
            >
              &#8592;
            </button>
            <span className="work-counter">
              {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <button
              className="work-arrow"
              onClick={() => scrollTo("right")}
              disabled={!canRight}
              aria-label="Next project"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* ── Scrollable track ─────────────────────────────── */}
        <div
          className="work-track"
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <div className="work-flex">
            {projects.map((project, index) => (
              <div className="work-box" key={index}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Overview</h4>
                  <p>{project.description}</p>
                  <h4 style={{ marginTop: "16px" }}>Tools &amp; Methods</h4>
                  <p>{project.tools}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Dot indicators ───────────────────────────────── */}
        <div className="work-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`work-dot${i === activeIndex ? " active" : ""}`}
              onClick={() => goToCard(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
