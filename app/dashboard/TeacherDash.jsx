import UpdatesComp from "@/components/Teacher/UpdatesComp";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import UpdatesAdd from "@/components/Teacher/UpdatesAdd";

export default async function TeacherDash({ user }) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from("updates").select(`update_id, text`);

  return (
    <div className="p-5">
      <div className="flex flex-row justify-between items-center pb-10">
        <h3 className="">Welcome {user.email}!</h3>
      </div>

      {/* Update */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-xl font-bold">Updates</h3>
          <UpdatesAdd user={user} />
        </div>
        <UpdatesComp updates={data} user={user} />
      </div>
    </div>
  );
}
