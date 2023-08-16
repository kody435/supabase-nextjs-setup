import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function page() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const teacher = await supabase
    .from("profiles")
    .select("teacher")
    .eq("id", user?.id)
    .single();

  console.log(teacher.data.teacher);

  return (
    <div>
      {teacher.data.teacher === true ? <h1>Teacher</h1> : <h1>Student</h1>}
    </div>
  );
}
