import { createRouteHandlerClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET() {
  const supabase = createRouteHandlerClient({cookies});

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const checkTeacher = await supabase
    .from("profiles")
    .select("teacher")
    .eq("id", user?.id)
    .single();
  console.log("Teacher: " + checkTeacher.data.teacher);

  if (checkTeacher.data.teacher === false) {
    redirect("/s/dashboard");
  }

  if (checkTeacher.data.teacher === true) {
    redirect("/t/dashboard");
  }

  return res;
}
