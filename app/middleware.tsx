import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/catchallsegments/:path*',
}

//middleware is used if we want that the user need to login first then they can access the other route otherwise they can cannot access teh route
// so for this purpose we create the midleware file 