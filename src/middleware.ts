import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const token = cookies().get("token");  
  if (!token) {
    const absoluteURL = new URL("/login", req.nextUrl.origin);
     return NextResponse.redirect(absoluteURL.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/panel/:role*"],
};
