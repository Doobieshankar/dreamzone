/* import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const courses = [
  {
    title: "Fashion Design",
    image: "/img/fashion-design.jpg",
    description:
      "Learn the art of fashion, from sketching to runway-ready pieces.",
  },
  {
    title: "Graphic Design",
    image: "/img/graphic-design.jpg",
    description:
      "Master visual storytelling with cutting-edge digital design tools.",
  },
  {
    title: "UI/UX Design",
    image: "/img/UI-UX.jpg",
    description: "Create simple, beautiful, and user-friendly designs.",
  },
  {
    title: "Interior Design",
    image: "/img/interior-design.jpg",
    description:
      "Transform spaces with creativity and functional design principles.",
  },
];

export default function CourseCards() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 p-6 items-center justify-center flex-wrap mt-12">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

function CourseCard({
  course,
}: {
  course: { title: string; image: string; description: string };
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    if (card && image && text) {
      gsap.set(text, { opacity: 0, y: 20 });

      card.addEventListener("mouseenter", () => {
        gsap.to(image, { opacity: 0.2, duration: 0.5 });
        gsap.to(text, { opacity: 1, y: 0, duration: 0.5 });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(image, { opacity: 1, duration: 0.5 });
        gsap.to(text, { opacity: 0, y: 20, duration: 0.5 });
      });
    }
  }, []);

  return (
    <Card
      ref={cardRef}
      className="overflow-hidden relative group cursor-pointer w-[300px] h-[400px] p-2"
    >
      <CardContent className="p-0 relative">
        <div
          ref={imageRef}
          className="w-full h-60 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${course.image})` }}
        />
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center p-4 text-center bg-black bg-opacity-40 text-white transition-opacity duration-500"
        >
          <p className="text-lg font-semibold">{course.description}</p>
        </div>
      </CardContent>
      <div className="p-4 text-center bg-white">
        <h3 className="text-xl font-bold">{course.title}</h3>
      </div>
    </Card>
  );
}
 */
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Fashion Design",
    image: "/dreamzone/img/fashion-design.jpg",
    description:
      "Learn the art of fashion, from sketching to runway-ready pieces.",
  },
  {
    title: "Graphic Design",
    image: "/dreamzone/img/graphic-design.jpg",
    description:
      "Master visual storytelling with cutting-edge digital design tools.",
  },
  {
    title: "UI/UX Design",
    image: "/dreamzone/img/UI-UX.jpg",
    description: "Create simple, beautiful, and user-friendly designs.",
  },
  {
    title: "Interior Design",
    image: "/dreamzone/img/interior-design.jpg",
    description:
      "Transform spaces with creativity and functional design principles.",
  },
];

export default function CourseCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {courses.map((course, index) => (
        <Card key={index} className="overflow-hidden relative group ">
          <CardContent className="p-0">
            <motion.div
              className="w-full h-60 bg-cover bg-center transition-all duration-500 group-hover:opacity-20"
              style={{ backgroundImage: `url(${course.image})` }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <h3 className="text-xl font-bold text-white">{course.title}</h3>
              <p className="text-lg font-semibold">{course.description}</p>
            </motion.div>
          </CardContent>
          <div className="p-4 text-center bg-white">
            <h3 className="text-xl font-bold">{course.title}</h3>
          </div>
        </Card>
      ))}
    </div>
  );
}
