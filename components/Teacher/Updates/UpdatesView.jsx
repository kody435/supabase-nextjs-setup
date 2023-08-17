"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import UpdatesEdit from "./UpdatesEdit";

export default function UpdateView({ updates }) {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const channel = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "updates" },
        (payload) => {
          router.refresh();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  });

  return (
    <div className="border rounded-t-xl">
      {updates.map((update) => (
        <div
          key={update.update_id}
          className="border-b p-3 flex flex-row justify-between items-center"
        >
          <h3>{update.text}</h3>

          <div className="flex gap-5 flex-row">
            <UpdatesEdit updateText={update.text} updateId={update.update_id} />
            <button
              className="border-2 px-4 rounded-lg border-black"
              onClick={async () => {
                await supabase
                  .from("updates")
                  .delete()
                  .eq(`update_id`, update.update_id);
              }}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
