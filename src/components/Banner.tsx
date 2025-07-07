// import bannerVideo from "@/assets/banner/bannerVideo.mp4";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// const Banner = () => {
//   const navigate = useNavigate();

//   return (
//      <section className="relative h-[600px] overflow-hidden">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src={bannerVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <div className="absolute inset-0 bg-black/50 z-10" />

//         <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="max-w-2xl text-white"
//           >
//             <motion.h1
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="text-5xl md:text-6xl font-bold mb-6"
//             >
//               Authentic Italian Flavors in Every Bite
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="text-xl mb-8 text-gray-200"
//             >
//               Experience the taste of Italy with our traditional recipes, fresh
//               ingredients, and warm hospitality in the heart of the city.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9, duration: 0.8 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <Button
//                 size="lg"
//                 className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
//                 onClick={()=>navigate("/reservation")}
//               >
//                 Make Reservation
//               </Button>
//               <Button
//                 onClick={() => navigate("/menu")}
//                 size="lg"
//                 variant="outline"
//                 className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 bg-transparent"
//               >
//                 View Menu
//               </Button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//   )
// }

// export default Banner;

import bannerVideo from "@/assets/banner/bannerVideo.mp4";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Bottom Fade Effect to Merge with Next Section */}
      <div className="absolute bottom-0 left-0 w-full h-40 z-20 pointer-events-none bg-gradient-to-t from-gray-100 to-transparent" />

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Authentic Italian Flavors in Every Bite
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl mb-8 text-gray-200"
          >
            Experience the taste of Italy with our traditional recipes, fresh
            ingredients, and warm hospitality in the heart of the city.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
              onClick={() => navigate("/reservation")}
            >
              Make Reservation
            </Button>
            <Button
              onClick={() => navigate("/menu")}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 bg-transparent"
            >
              View Menu
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
