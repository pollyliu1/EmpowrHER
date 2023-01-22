import React, { useEffect } from "react";
import Image from "next/image";
import { Inter, Junge } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { auth } from "../serve/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Heading from "@/components/Heading";
import Jumbotron from "@/components/Jumbotron";
import Theteam from "@/components/Theteam";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 120, // the delay on throttle used while scrolling the page (advanced)
      once: false,
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      // offset: 10, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    })
  }, []); 

  return (
    <>
      <Heading />
      <main>
        {user ? <Jumbotron user={user} /> : <Jumbotron user={false} />}
        <div className="">
        <Theteam />
        </div>
        
      </main>
    </>
  );
}
