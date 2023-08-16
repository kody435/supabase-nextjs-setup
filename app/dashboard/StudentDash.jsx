import UpdateComp from "../../components/Student/UpdateComp";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function StudentDash({ user }) {
  const supabase = createServerComponentClient({cookies})
    
  const { data } = await supabase.from('updates').select('text')
  const updates = data.map((update) => update.text)
  
  return (
    <div className="p-5">
      <div className="flex flex-row justify-between items-center pb-10">
        <h3 className="">Welcome {user.email}!</h3>
      </div>

      {/* Update */}
      <div>
        <h3 className="text-xl font-bold">Update</h3>
        <UpdateComp updates={updates}  />
      </div>
    </div>
  );
}
