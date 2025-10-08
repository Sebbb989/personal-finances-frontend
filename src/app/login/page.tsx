import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign in to Personal Finances</h1>
      <a href="/api/auth/signin" className="bg-primary text-white px-4 py-2 rounded">Sign in with Google</a>
    </div>
  );
}
