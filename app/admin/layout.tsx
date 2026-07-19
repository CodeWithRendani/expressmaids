import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  const loggedIn = cookieStore.get("admin_logged_in");

  console.log("========== ADMIN LAYOUT ==========");
  console.log("Cookie:", loggedIn);
  console.log("==================================");

  if (!loggedIn || loggedIn.value !== "true") {
    console.log("Redirecting to /login");
    redirect("/login");
  }

  console.log("Rendering Dashboard Layout");

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}