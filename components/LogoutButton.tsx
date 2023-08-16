export default function LogoutButton() {
  return (
    <div className="">
      <form action="/auth/sign-out" method="post" className="">
        <button className="rounded-xl cursor-pointer px-6 py-2 bg-white hover:bg-gray-300 font-bold ">
          Logout
        </button>
      </form>
    </div>
  );
}
