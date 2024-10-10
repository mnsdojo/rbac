"use client";
function SignOutButton({ signOut }: { signOut: () => void }) {
  return (
    <button
      onClick={() => signOut()}
      className="text-neutral-500 hover:text-neutral-700"
    >
      Sign out
    </button>
  );
}

export default SignOutButton;
