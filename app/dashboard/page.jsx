import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import TeacherDash from "./TeacherDash";
import StudentDash from "./StudentDash";

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

  console.log("\n\n\nUser: " + user.id);
  console.log("Teacher: " + teacher.data.teacher + "\n");

  return (
    <div>
      {teacher.data.teacher === true ? (
        <TeacherDash user={user} />
      ) : (
        <StudentDash user={user} />
      )}
    </div>
  );
}
