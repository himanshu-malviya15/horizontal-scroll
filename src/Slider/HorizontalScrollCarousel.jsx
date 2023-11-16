import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { carditems } from "../Helper/carditems";
import Cards from "../Cards/Cards";

const HorizontalScrollCarousel = () => {
  // Create a reference to target the scroll container
  const targetRef = useRef(null);

  // Get the scroll Y progress using useScroll hook from framer-motion
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Apply horizontal movement transformation based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    // Scroll container with reference and styling
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      {/* Fixed position container for horizontal scrolling */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Applying horizontal movement to the cards */}
        <motion.div style={{ x }} className="flex gap-6">
          {/* Rendering Cards component for each item in carditems */}
          {carditems.map((card) => (
            <Cards card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
