import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import { FaHome, FaTools, FaUserGraduate, FaPhoneAlt } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { LampDemo } from "@/components/ui/LampEffect";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: 'Home', link: '#Home', icon: <FaHome />,  },
            { name: 'About Me', link: '#Grid', icon: <IoPersonCircleOutline /> },
            { name: 'Projects', link: '#Projects', icon: <GrProjects /> },
            { name: 'Skills', link: '#Skills', icon: <FaTools /> },
            { name: 'Education', link: '#Education', icon: <FaUserGraduate /> },
            { name: 'Contact', link: '#Contact', icon: <FaPhoneAlt /> },
          ]}
        />
        <section id="Home">
          <Hero />
           <Grid />
          <LampDemo text="Projects" />
        </section>
        
        <section id="Projects" className="mt-[190px] mb-[0px]">
         
          <RecentProjects />
        </section>
        <section id="Skills">
          <Skills/>
        </section>
        <section id="Education">
          <Education />
        </section>
        <section id="Contact">
          <Contact/>
        </section>
      </div>
    </main>
  );
}
