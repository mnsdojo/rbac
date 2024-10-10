"use client";
import React from "react";

function SignInButton({ signIn }: { signIn: () => void }) {
  return (
    <button
      onClick={() => signIn()}
      className="text-neutral-500 hover:text-neutral-700"
    >
      Sign in
    </button>
  );
}

export default SignInButton;
