
import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Absolutely incredible! The pasta was perfectly al dente and the service was exceptional. Will definitely be back!",
    date: "2 weeks ago",
  },
  {
    name: "Michael Chen",
    rating: 5,
    comment:
      "Best Italian restaurant in the city. The atmosphere is cozy and romantic, perfect for date nights.",
    date: "1 month ago",
  },
  {
    name: "Emma Davis",
    rating: 5,
    comment:
      "The pizza here is authentic and delicious. You can taste the quality in every bite. Highly recommend!",
    date: "3 weeks ago",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
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

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              // variants={cardVariants}
            >
              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow rounded-2xl bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {testimonial.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
