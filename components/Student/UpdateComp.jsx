"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UpdateComp({ updates }) {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const channel = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "updates" },
        (payload) => {
          console.log("Change received!", payload);
          router.refresh();
        },
      )
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
    }
  });

  return (
    <div className="border-x">
      {updates.map((update) => (
        <div key={update.update_id} className="border-y p-3">
          <h3>{update.text}</h3>
        </div>
      ))}
    </div>
  );
}
