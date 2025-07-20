import { ChevronRight, MoveRight } from "lucide-react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".hero-title", {
      type: "chars, words",
    });

    const subtitleSplit = new SplitText(".hero-subtitle", {
      type: "chars, words",
    });

    const textSplit = new SplitText(".hero-text-left, .hero-text-right", {
      type: "lines",
      mask: "lines",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      stagger: {
        amount: 0.5,
        from: "random",
      },
      duration: 0.5,
    });

    gsap.from(subtitleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      stagger: {
        amount: 0.1,
        from: "random",
      },
      duration: 0.5,
    });

    gsap.from(textSplit.lines, {
      yPercent: -100,
      opacity: 0,
      stagger: {
        amount: 0.05,
        from: "start",
      },
      duration: 0.5,
      delay: 0.7,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero-container",
          start: "top top",
          end: "+=1",
          scrub: 1,
        },
      })
      .to(
        ".hero-title, .hero-subtitle, .hero-text-left, .hero-text-right, .hero-logo",
        {
          y: -50,
          opacity: 0,
          stagger: {
            amount: 0.5,
            from: "end",
          },
          duration: 0.5,
        }
      );
  }, []);

  return (
    <section className='hero-container'>
      <video
        className='hero-video'
        controls={false}
        preload='metadata'
        muted
        loop
        autoPlay
      >
        <source src='/videos/hero-section.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='hero-content'>
        <img src='/images/pantene-logo.png' alt='logo' className='hero-logo' />
        <h1 className='font-strayhorn hero-title'>PANTENE</h1>
        <p className='self-end text-2xl hero-subtitle'>PRO-V</p>
      </div>
      <div className='hero-text'>
        <div className='hero-text-left'>
          <h2 className='font-light'>
            “Unbreakable Strength. Unstoppable Shine.”
          </h2>
          <p>Powered by science. Loved by millions.</p>
          <button className='hero-button'>
            Discover Our Product
            <MoveRight className='arrow-icon' />
          </button>
        </div>
        <div className='hero-text-right'>
          <h2 className='font-light'>
            With Pro-V Nutrient Blends, Pantene transforms your hair from root
            to tip — stronger, shinier, and smoother every day.
          </h2>
        </div>
      </div>
      <div className='hero-arrow-down'>
        <div className='hero-vertical-line'></div>
        <ChevronRight className='rotate-90 -mt-5 size-8' />
      </div>
    </section>
  );
};

export default Hero;
