import img from "../../public/images/hero.jpg"
import { useInView, animated } from "@react-spring/web";
import { buildInteractionObserverThreshold } from "../Helpers/Thareshold";
export const HeroSection = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 80,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-45% 0px -45% 0px",
      amount: buildInteractionObserverThreshold(),
    }
  );
  return (
    <animated.div ref={ref} style={springs} id="home">
      <section
        id="hero"
        className={`bg-cover bg-center h-[600px] text-[#541212] flex justify-center  bg-[url('/images/hero.jpg')]`}
      >
        <div className="max-w-[800px] text-center p-5 ">
          <h1 className="text-6xl font-bold mb-5">Welcome to E-Mart</h1>
          <p className="text-xl mb-7">
            New Arrivals Are Here! Discover the Latest Trends
          </p>
          <a
            href="#products"
            className="btn bg-[#e3a244] text-white px-4 py-2 rounded hover:bg-[#fff] hover:text-[#f09]"
          >
            
            Explore Products
          </a>
        </div>
      </section>
    </animated.div>
  );
};
