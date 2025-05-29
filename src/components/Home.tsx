import About from "./HomeLayout/About";
import Courses from "./HomeLayout/Courses";
import Hero from "./HomeLayout/Hero";

import Navbar from "./HomeLayout/Navbar";
import Testimonials from "./HomeLayout/Testimonials";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Testimonials />
    </>
  );
};
export default Home;
