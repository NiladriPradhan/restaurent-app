import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Absolutely incredible! The pasta was perfectly al dente and the service was exceptional. Will definitely be back!",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment:
      "Best Italian restaurant in the city. The atmosphere is cozy and romantic, perfect for date nights.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emma Davis",
    rating: 5,
    comment:
      "The pizza here is authentic and delicious. You can taste the quality in every bite. Highly recommend!",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "David Mitchell",
    rating: 5,
    comment:
      "Exceptional experience every time! Friendly staff and fast service.",
    date: "2 weeks ago",
  },
  {
    id: 5,
    name: "Aleina Chen",
    rating: 5,
    comment:
      "Authentic flavors and cozy atmosphere. A must-visit for Italian food lovers.",
    date: "1 month ago",
  },
  {
    id: 6,
    name: "John Carter",
    rating: 5,
    comment:
      "Great value for money. The ingredients taste fresh and vibrant!",
    date: "3 weeks ago",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
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
            Don&apos;t just take our word for it
          </p>
        </motion.div>

        {/* Scrollable Cards */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 md:gap-8 px-1 md:px-4 snap-x snap-mandatory scroll-smooth">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[280px] md:min-w-[360px] snap-start"
              >
                <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow rounded-2xl bg-white h-full">
                  <CardContent className="p-0 h-full flex flex-col justify-between">
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
                    <div className="flex justify-between items-center mt-auto">
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
      </div>
    </section>
  );
};

export default Testimonials;
