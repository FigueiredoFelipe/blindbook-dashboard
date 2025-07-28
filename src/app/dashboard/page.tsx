"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase"; // certifique-se de ter esse client

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.push("/auth/login");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p className="text-muted-foreground">
        You're logged in and ready to explore.
      </p>
    </div>
  );
}
