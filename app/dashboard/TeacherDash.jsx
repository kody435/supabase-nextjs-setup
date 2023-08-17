import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import UpdatesView from "@/components/Teacher/Updates/UpdatesView";
import UpdatesAdd from "@/components/Teacher/Updates/UpdatesAdd";
import DocumentsAdd from "@/components/Teacher/Documents/DocumentsAdd";

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
        <div>
          <UpdatesView updates={data} user={user} />
        </div>
      </div>

      <div className="my-10 border-t border-gray-400 border-2"></div>
      {/* Documents */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-xl font-bold">Documents</h3>
          <DocumentsAdd user={user} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
