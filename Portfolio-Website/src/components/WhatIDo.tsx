import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO" id="what-i-do">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>COMPUTATIONAL</h3>
              <h4>DFT & Machine Learning</h4>
              <p>
                First-principles Density Functional Theory (DFT) in Quantum ESPRESSO, structure relaxation, band structures, CI-NEB Na+ migration barriers, and closed-loop ML optimization with GNNs and Bayesian methods.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Quantum ESPRESSO</div>
                <div className="what-tags">DFT Calculations</div>
                <div className="what-tags">CI-NEB</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">pymatgen</div>
                <div className="what-tags">Materials Project</div>
                <div className="what-tags">VESTA</div>
                <div className="what-tags">OVITO</div>
                <div className="what-tags">GNN</div>
                <div className="what-tags">Bayesian Opt</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>ENERGY STORAGE</h3>
              <h4>Anodes & Materials Characterization</h4>
              <p>
                Synthesis & electrochemical design of biomass-derived nitrogen-doped porous carbon (NPC) and 2D Ti3C2Tx MXenes for flexible sodium-ion batteries, supported by metallography and mechanical testing.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Sodium-Ion Batteries</div>
                <div className="what-tags">Porous Carbon (NPC)</div>
                <div className="what-tags">Ti3C2Tx MXene</div>
                <div className="what-tags">Biomass Upcycling</div>
                <div className="what-tags">Optical Microscopy</div>
                <div className="what-tags">ImageJ Analysis</div>
                <div className="what-tags">UTM Tensile</div>
                <div className="what-tags">Streamlit</div>
                <div className="what-tags">Plotly</div>
                <div className="what-tags">HTML5 Canvas</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
