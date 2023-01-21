import React, { useEffect } from "react";
import Image from "next/image";
import { Inter, Junge } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { auth } from "../serve/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


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
        
      </main>
    </>
  );
}
