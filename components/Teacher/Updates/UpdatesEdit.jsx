"use client";

import { Dialog } from "@headlessui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

function UpdatesEdit({ updateText, updateId }) {
  let [isOpen, setIsOpen] = useState(false);
  const [newUpdate, setNewUpdate] = useState(updateText);
  const supabase = createClientComponentClient();

  return (
    <div>
      <button
        className="px-3 py-2 rounded-xl hover:bg-gray-300 font-bold"
        onClick={() => setIsOpen(true)}
      >
        ✎
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
              <div className="text-xl font-bold pb-3">Edit</div>
              <textarea
                className="border-2 border-black w-full p-2 h-20"
                value={newUpdate}
                onChange={(e) => {
                  setNewUpdate(e.target.value);
                  console.log(newUpdate);
                }}
              />
              <button
                className="px-3 py-2 rounded-xl hover:bg-gray-300 font-bold"
                onClick={async () => {
                  console.log(newUpdate);
                  //   await supabase
                  //     .from("updates")
                  //     .update({ text: newUpdate })
                  //     .eq(`update_id`, updateId)
                  //     .select();

                  await supabase
                    .from("updates")
                    .update({ text: newUpdate })
                    .eq(`update_id`, updateId);

                  setIsOpen(false);
                }}
              >
                Submit
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

export default UpdatesEdit;
