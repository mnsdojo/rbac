import Nav from "@/components/Nav";

function Page() {
  return (
    <div className="min-h-dvh ">
      <Nav />
      <div className="container mx-auto px-8 py-24">
        <h1 className="text-3xl font-semibold">RBAC</h1>
        <p className="text-lg">
          Simple App to demonstrate RBAC with NextAuth.js and Drizzle ORM
        </p>
      </div>
    </div>
  );
}

export default Page;
