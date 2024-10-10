
import LoginButton from "./LoginButton";
export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-center mb-4">Sign In</h1>
        <LoginButton />
      </div>
    </div>
  );
}
