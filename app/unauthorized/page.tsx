import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">401 - Unauthorized</h1>
        <p className="mb-4">You do not have permission to access this page.</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to homepage
        </Link>
      </div>
    </div>
  );
}
