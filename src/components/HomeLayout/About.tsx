import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to DreamZone
        </p>

        <AnimatedTitle
          title="VIBES 360° – Official Guinness Record Holder"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p className="">The Most Designers in a Fashion Show</p>
          <p className="text-gray-500">
            VIBES 360° has made history by uniting <b>357 designers</b> in a
            single continuous fashion show, officially earning the title for{" "}
            <b>"The Most Designers in a Fashion Show"</b> in the Guinness World
            Records. This groundbreaking event showcased an unprecedented fusion
            of creativity, innovation, and style, redefining the boundaries of
            the fashion industry.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            /* src="img/about.webp" */
            src="/dreamzone/img/vibe360.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
