
import { Award, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const featureVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      title: "Fresh Daily",
      desc: "All ingredients sourced fresh daily from local markets",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Family Recipes",
      desc: "Traditional recipes passed down through generations",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Award Winning",
      desc: "Recognized for excellence in Italian cuisine",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={featureVariants}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
