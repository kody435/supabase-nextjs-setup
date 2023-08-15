import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function page() {
  const supabase = createServerComponentClient({ cookies });

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
    redirect("/student");
  }

  if (checkTeacher.data.teacher === true) {
    redirect("/t/dashboard");
  }

  return res;
}
