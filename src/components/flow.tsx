"use client";
import { useState } from "react";
import { stepList } from "../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Flow = () => {
  const [stepIndex, setStepIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNextStep = (index: number) => {
    if (index === stepIndex) return; // Don't transition if same step

    setIsTransitioning(true);

    setTimeout(() => {
      setStepIndex(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50); // Small delay to ensure new content is rendered
    }, 150); // Half of transition duration
  };

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".flow-container",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          markers: true,
        },
      })
      .to(".flow-container", {
        rotateX: -25, // Negative value makes it look upwards
        scale: 0.85, // Makes it smaller
        duration: 1.5,
      });
  });

  return (
    <section className='flow-container'>
      <img
        src={stepList[stepIndex - 1].image}
        alt={stepList[stepIndex - 1].title}
        className={`flow-step-image ${
          isTransitioning ? "brightness-0" : "brightness-100"
        }`}
      />
      <h1 className='flow-step-text'>HOW IT WORKS</h1>
      <div className={`flow-step flow-step-${stepIndex}`}>
        <p
          className={`flow-step-description ${
            isTransitioning ? "brightness-0" : "brightness-100"
          }`}
        >
          {stepList[stepIndex - 1].description}
        </p>
        <div className='flow-step-buttons'>
          {stepList.map((step, index) => (
            <button
              key={step.id}
              className={`flow-step-button ${
                stepIndex === index + 1 ? "active" : ""
              }`}
              onClick={() => handleNextStep(index + 1)}
            >
              {step.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow;
