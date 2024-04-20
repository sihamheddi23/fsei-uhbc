import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const token = cookies().get("token")?.value;  
  const role = cookies().get("role")?.value;
  
  if (!token && req.nextUrl.pathname.includes("/panel")) {
    const absoluteURL = new URL("/login", req.nextUrl.origin);
     return NextResponse.redirect(absoluteURL.toString());
  }

  if (token && req.nextUrl.pathname.includes("/login")) {
    const absoluteURL = new URL(`/panel/${role}`, req.nextUrl.origin);
     return NextResponse.redirect(absoluteURL.toString());
  }

  return NextResponse.next();
}
