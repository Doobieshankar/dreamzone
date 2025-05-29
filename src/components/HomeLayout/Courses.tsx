import AnimatedTitle from "./AnimatedTitle";
import CourseCards from "./CourseCards";

const Courses = () => {
  return (
    <div id="about" className="min-h-screen w-screen mt-5">
      <AnimatedTitle
        title="Infusing creativity with technology"
        containerClass="mt-10 mb-10 !text-black text-center"
      />
      <p className="text-center">Discover Our Courses. Get Inspired.</p>
      <CourseCards />
    </div>
  );
};
export default Courses;
