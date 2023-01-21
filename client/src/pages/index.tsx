import React, { useEffect } from "react";
import Image from "next/image";
import { Inter, Junge } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { auth } from "../serve/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import separator from "../resources/separator.png";
import light_gradient from "../resources/light_gradient.png";
import light_gradient_upsidedown from "../resources/ligth_gradient_upsidedown.png";

import Heading from "@/components/Heading";
import Jumbotron from "@/components/Jumbotron";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <Heading />
      <main>
        {user ? <Jumbotron user={user} /> : <Jumbotron user={false} />}
        <Image
          src={separator}
          alt="separator bar"
          style={{
            position: "absolute",
            top: 300,
            left: 0,
            right: 0,
            bottom: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </main>
    </>
  );
}
