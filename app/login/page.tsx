import Link from "next/link";
import Messages from "./messages";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md gap-2">
        <form
          className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          action="/auth/sign-in"
          method="post"
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
            Login
          </button>
          <h3>
            Don't have an account?{" "}
            <Link href={"/signup"} className="text-orange-400 font-bold">
              Signup ↗
            </Link>
          </h3>
          <Messages />
        </form>
      </div>
    </div>
  );
}
