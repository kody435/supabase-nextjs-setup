import LogoutButton from "@/components/LogoutButton";

export default function StudentDash({user}) {
  return (
    <div>
      <div className="flex flex-row justify-between p-10 items-center">
        <h3>Welcome {user.email}!</h3>
        <div className="bg-black text-white px-6 py-2.5 rounded-2xl">
          <LogoutButton />
        </div>
      </div>

      <div></div>
    </div>
  );
}
