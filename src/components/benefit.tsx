import { Canvas } from "@react-three/fiber";
import Shampoo from "../assets/3d/Shampoo";
import CanvasLoader from "./canvas-loader";
import { Suspense } from "react";
import { Bounds, OrbitControls, Plane } from "@react-three/drei";
import { benefitList } from "../constant";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Benefit = () => {
  useGSAP(() => {
    benefitList.forEach((_benefit, index) => {
      const element = `.product-benefit:nth-child(${index + 1})`;

      // Set initial opacity to 0
      gsap.set(element, { opacity: 0 });

      // Create timeline for each benefit
      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Start fading in when 80% down viewport
          end: "top 20%", // Finish fading in when 20% down viewport
          scrub: 1,
          onUpdate: (self) => {
            // Calculate opacity based on scroll progress
            const progress = self.progress;
            let opacity;

            if (progress < 0.2) {
              // First half: fade in (0 to 1)
              opacity = progress * 5;
            } else {
              // Second half: fade out (1 to 0)
              opacity = (1 - progress) * 4;
            }

            gsap.set(element, { opacity: opacity });
          },
        },
      });
    });
  }, []);

  return (
    <section className='product-container'>
      <Canvas
        shadows
        camera={{ fov: 100 }}
        style={{
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0,
        }}
      >
        <OrbitControls autoRotate enableZoom={false} enabled={false} />
        <directionalLight position={[-5, 20, 0]} intensity={3} castShadow />
        <ambientLight intensity={1.5} />
        <Plane
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -2.6, 0]}
          args={[20, 20]}
          receiveShadow
        >
          <shadowMaterial transparent opacity={0.3} />
        </Plane>

        <Bounds fit observe>
          <Suspense fallback={<CanvasLoader />}>
            <Shampoo castShadow receiveShadow />
          </Suspense>
        </Bounds>
      </Canvas>
      <div className='product-info'>
        {benefitList.map((benefit) => (
          <div key={benefit.id} className='product-benefit'>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefit;
