import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ingredientList } from "../constant";
import { Check } from "lucide-react";

const Ingredient = () => {
  useGSAP(() => {
    const textSplit = new SplitText(".ingredient-title", {
      type: "lines",
      mask: "lines",
    });

    const listSplit = new SplitText(".ingredient-list", {
      type: "lines",
      mask: "lines",
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".ingredient-container",
          start: "top top",
          end: "bottom center",
          scrub: 1.5,
          pin: true,
        },
      })
      .to(".masked-img", {
        rotate: 0,
        maskPosition: "center",
        maskSize: "600%",
        duration: 1.5,
        ease: "power2.inOut",
      })
      .from(
        listSplit.lines,
        {
          yPercent: 100,
          stagger: {
            amount: 0.1,
            from: "start",
          },
          duration: 0.1,
        },
        "-=0.5"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".ingredient-container",
          start: "top 20%",
          end: "+=1",
          scrub: 1.5,
        },
      })
      .from(textSplit.lines, {
        yPercent: -100,
        stagger: {
          amount: 0.05,
          from: "start",
        },
        duration: 1.5,
      });
  }, []);

  return (
    <section className='ingredient-container'>
      <div className='ingredient-left'>
        <ul className='ingredient-list'>
          {ingredientList.slice(0, 4).map((ingredient) => (
            <li key={ingredient.id} className='ingredient-item'>
              <div className='w-4 h-4 shrink-0 bg-white rounded-full flex items-center justify-center'>
                <Check className='w-3 h-3 shrink-0' />
              </div>
              {ingredient.title}
            </li>
          ))}
        </ul>
      </div>

      <img
        src='/images/model.jpg'
        alt='model'
        className='masked-img model-img'
      />
      <h1 className='ingredient-title'>THE ART</h1>
      <div className='ingredient-right'>
        <ul className='ingredient-list'>
          {ingredientList.slice(4).map((ingredient) => (
            <li key={ingredient.id} className='ingredient-item'>
              <div className='w-4 h-4 shrink-0 bg-white rounded-full flex items-center justify-center'>
                <Check className='w-3 h-3 shrink-0' />
              </div>{" "}
              {ingredient.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Ingredient;
