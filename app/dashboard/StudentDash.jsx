import UpdateComp from "../../components/Student/UpdateComp";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function StudentDash({ user }) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from("updates").select(`update_id, text`);
  const updates = data

  return (
    <div className="p-5">
      <div className="flex flex-row justify-between items-center pb-10">
        <h3 className="">Welcome {user.email}!</h3>
      </div>

      {/* Update */}
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-bold">Updates</h3>
        <UpdateComp updates={updates} />
      </div>
    </div>
  );
}
