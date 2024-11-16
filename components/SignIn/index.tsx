"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const SignIn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.name?.slice(0, 10)} <br />
        <button
          onClick={() => signOut()}
          className="text-white py-5 px-10 bg-black" // White text, padding of 20px (py-5 for vertical, px-10 for horizontal)
        >
          Sign out
        </button>
      </>
    );
  } else {
    return (
      <>
        Not signed in <br />
        <button
          onClick={() => signIn()}
          className="text-white py-5 px-10 bg-black" // White text, padding of 20px
        >
          Sign in with World ID
        </button>
      </>
    );
  }
};
