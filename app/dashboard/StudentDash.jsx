import LogoutButton from "@/components/LogoutButton";

export default function StudentDash({user}) {
  return (
    <div>
      <div className="flex flex-row justify-between p-10">
        <h3>Welcome {user.email}!</h3>
        <LogoutButton />
      </div>

      <div></div>
    </div>
  );
}
