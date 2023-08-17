"use client";

import { storage } from "../../firebase";
import { ref } from "firebase/storage";
import { Dialog } from "@headlessui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

export default function DocumentsAdd({ user }) {
  let [isOpen, setIsOpen] = useState(false);
  const [newDoc, setNewDoc] = useState("");
  const [fileName, setFileName] = useState("");
  const [prog, setProg] = useState(0);
  const supabase = createClientComponentClient();

  const uploadFiles = async (file) => {
    if (!file) return;

    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProg(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
        );
      },
      (error) => console.log(error),
      async () => {
        const fileURL = await getDownloadURL(uploadTask.snapshot.ref);
        const { data } = await supabase
          .from("docs")
          .insert([{ url: fileURL, teacher_id: user.id, name: fileName }])
          .select();
        console.log(data);
        setIsOpen(false);
        setNewDoc("");
      },
    );
      
  };

  return (
    <div>
      <button
        className="px-3 py-2 rounded-xl hover:bg-gray-300 font-bold"
        onClick={() => setIsOpen(true)}
      >
        add doc
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
              <input
                type="file"
                className="border-2 border-black w-full p-2 mb-3"
                onChange={(e) => {
                  setNewDoc(e.target.files[0]);
                  setFileName(e.target.files[0].name);
                }}
              />
              <button
                className="px-3 py-2 rounded-xl hover:bg-gray-300 font-bold"
                onClick={async () => {
                  uploadFiles(newDoc);
                }}
              >
                upload doc
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
