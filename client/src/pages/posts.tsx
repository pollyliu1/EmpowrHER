import React from "react";
import { auth } from "../serve/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Head from "next/head";

function Posts() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <Heading />
      <Navbar user={user} />
      <div>Posts</div>
    </>
  );
}

export default Posts;
