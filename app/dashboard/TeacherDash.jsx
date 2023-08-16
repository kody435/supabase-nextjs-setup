import LogoutButton from "@/components/LogoutButton";

export default function TeacherDash({ user }) {
  return (
    <div>
      <div className="flex flex-row justify-between p-5 items-center">
        <h3>Welcome {user.email}!</h3>
      </div>

      <div></div>
    </div>
  );
}
