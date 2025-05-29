import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiPhone } from "react-icons/ti";

import Button from "./Button";
import { Button as UiButton } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

import { PiDress, PiHouseLight, PiPaintBrush } from "react-icons/pi";
import { MenuIcon } from "lucide-react";

const navItems = [
  {
    title: "Fashion Design",
    href: "#",
    courses: [
      {
        title: "Master Diploma in Fashion Design",
        href: "#",
      },
      {
        title: "Professional in Fashion design",
        href: "#",
      },
      {
        title: "Certificate Course on Dress Making",
        href: "#",
      },
      {
        title: "Certificate Course in Image Editing",
        href: "#",
      },
      {
        title: "Certificate Course in Digital Illustration",
        href: "#",
      },
    ],
  },
  {
    title: "Graphic Design",
    href: "#",
    courses: [
      {
        title: "Master Diploma in 2D Graphics & Web Design",
        href: "#",
      },
      {
        title: "PG Diploma in Graphics & Animation",
        href: "#",
      },
      {
        title: "Professional in 3D Animation",
        href: "#",
      },
      {
        title: "Diploma Graphic Design",
        href: "#",
      },
      {
        title: "Diploma in UI/UX Design",
        href: "#",
      },
    ],
  },
  {
    title: "Interior Design",
    href: "#",
    courses: [
      {
        title: "Master Diploma in Interior Architecture & Design",
        href: "#",
      },
      {
        title: "Executive Diploma In Interior Architecture & Design",
        href: "#",
      },
      {
        title: "PG Diploma in Interior Architecture and Design",
        href: "#",
      },
      {
        title: "Professional in IAD Grafx",
        href: "#",
      },
      {
        title: "Diploma in Interior Architecture & Design",
        href: "#",
      },
      {
        title: "Diploma in IAD Grafx",
        href: "#",
      },
      {
        title: "CAD for Creative Design",
        href: "#",
      },
      {
        title: "Certificate course on Kitchen Design",
        href: "#",
      },
      {
        title: "Certificate course on Design Visualization",
        href: "#",
      },
    ],
  },
];

const NavBar: React.FC = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState<boolean>(false);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (audioElementRef.current) {
      if (isAudioPlaying) {
        audioElementRef.current.play();
      } else {
        audioElementRef.current.pause();
      }
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (navContainerRef.current) {
      if (currentScrollY === 0) {
        setIsNavVisible(true);
        navContainerRef.current.classList.remove("floating-nav");
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
        navContainerRef.current.classList.add("floating-nav");
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
        navContainerRef.current.classList.add("floating-nav");
      }
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
      });
    }
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img
              src="/dreamzone/img/Dreamzone.png"
              alt="logo"
              className="w-24"
            />
            <div className="lg:block hidden">
              <Button
                id="product-button"
                title="94435 50155"
                rightIcon={<TiPhone />}
                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              />
            </div>
          </div>

          <div className="flex h-full items-center">
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="nav-hover-btn bg-transparent ">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-row md:w-[600px] lg:w-[650px]">
                      <div className="flex-1/2 flex items-center justify-center font-robert-medium font-bold text-4xl text-black">
                        {item.title}
                        <br />
                        Courses
                      </div>
                      <div className="flex-1/2">
                        {item.courses.map((course, index) => (
                          <div className="flex items-center gap-2" key={index}>
                            <div>
                              {item.title === "Fashion Design" && (
                                <PiDress size={20} className="text-pink-500" />
                              )}
                              {item.title === "Graphic Design" && (
                                <PiPaintBrush
                                  size={20}
                                  className="text-blue-500"
                                />
                              )}
                              {item.title === "Interior Design" && (
                                <PiHouseLight
                                  size={20}
                                  className="text-green-500"
                                />
                              )}
                            </div>
                            <NavigationMenuLink asChild>
                              <a href={course.href}>{course.title}</a>
                            </NavigationMenuLink>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <UiButton variant={"ghost"} className="md:hidden">
              <MenuIcon className="h-8 w-8 text-white " />
            </UiButton>
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/dreamzone/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
