import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req : NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const { data: { user } } = await supabase.auth.getUser();
  console.log(user)

  if (!user) {
    console.log("No user found, redirecting to login");
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  else if (user) {
    console.log("User found, redirecting to role");
    const { data } = await supabase.from("profiles").select("teacher").eq("id", user.id).single();

    if (data?.teacher === true) {
      console.log(data);
      console.log("\n\n\nTeacher found, redirecting to teacher\n\n\n");
      return NextResponse.redirect(new URL("/t/dashboard", req.nextUrl));
    } else if (data?.teacher === false) {
      console.log(data);
      console.log("\n\n\nStudent found, redirecting to student\n\n\n");
      return NextResponse.redirect(new URL("/s/dashboard", req.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/t"]
}