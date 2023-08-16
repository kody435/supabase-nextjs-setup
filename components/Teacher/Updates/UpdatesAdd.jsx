"use client";

import { Dialog } from "@headlessui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function UpdatesAdd({ user }) {
  let [isOpen, setIsOpen] = useState(false);
  const [newUpdate, setNewUpdate] = useState("");
  const supabase = createClientComponentClient();

  return (
    <div>
      <button
        className="px-3 py-2 rounded-xl hover:bg-gray-300 font-bold"
        onClick={() => setIsOpen(true)}
      >
        add update
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-2">
          <Dialog.Panel className="lg:w-1/2 lg:h-1/2 w-screen h-2/6 md:w-5/6 md:h-3/6 rounded bg-white">
            <div className="flex flex-row justify-between p-5">
              <div></div>
              <button
                onClick={() => setIsOpen(false)}
                className="border-2 border-black px-2 rounded-full"
              >
                X
              </button>
            </div>

            <div className="m-5">
              <textarea
                className="border-2 border-black w-full p-2 h-20"
                placeholder="add update"
                value={newUpdate}
                onChange={(e) => setNewUpdate(e.target.value)}
              />
              <button
                className="px-3 py-2 rounded-xl hover:bg-gray-300 font-bold"
                onClick={async () => {
                  await supabase
                    .from("updates")
                    .insert([{ text: newUpdate, teacher_id: user.id }])
                    .select();

                  setIsOpen(false);
                  setNewUpdate("");
                }}
              >
                Add update
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
