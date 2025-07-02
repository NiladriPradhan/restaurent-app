import { Button } from "./ui/button";
import banner from "@/assets/coffee.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden font-sans">
      <motion.img
        src={banner}
        alt="Restaurant interior"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-1/2 h-full bg-white/70 backdrop-blur-md" />
      </motion.div>

      <div className="relative z-20 h-full flex items-center px-6 md:px-16">
        <motion.div
          className="max-w-2xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight drop-shadow-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
              Our Story
            </span>
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed font-medium">
            Founded in{" "}
            <span className="text-amber-700 font-semibold">1985</span> by the
            Rossi family,{" "}
            <span className="text-amber-800 font-bold italic underline underline-offset-4 decoration-amber-500">
              Bella Vista
            </span>{" "}
            has served authentic Italian cuisine for over three decades. From
            wood-fired pizzas to handmade pasta, every dish tells a story of{" "}
            <span className="text-amber-700 font-semibold">passion</span> and{" "}
            <span className="text-amber-700 font-semibold">heritage</span>.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
            Join our family table and experience the{" "}
            <span className="italic text-amber-600 font-semibold">warmth</span>{" "}
            of true Italian hospitality.
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300 text-base font-semibold tracking-wide">
              Learn More About Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
