"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DocumentsView({ docs }) {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const channel = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "docs" },
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
      {docs.map((doc) => (
        <div
          key={doc.id}
          className="border-b p-3 flex flex-row justify-between items-center"
        >
          <h3>{doc.name}</h3>

          <div className="flex gap-5 flex-row">
            <Link href={doc.url} target="_blank" rel="noopener noreferrer">
              🔗
            </Link>
            <button
              className="border-2 px-4 rounded-lg border-black"
              onClick={async () => {
                console.log("doc.id: " + doc.id);
                await supabase.from("docs").delete().eq(`id`, doc.id);
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
