import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Markdown negotiation for the home page: clients that ask for `text/markdown`
 * get the AI-optimized summary, everyone else gets the HTML page.
 *
 * Never switch on User-Agent here. Serving crawlers (Googlebot, Twitterbot...)
 * different content from browsers hides the title, meta tags and JSON-LD from
 * search and link previews, and Google treats it as cloaking.
 */
export function proxy(request: NextRequest) {
  if (request.headers.get('accept')?.includes('text/markdown')) {
    const url = request.nextUrl.clone()
    url.pathname = '/api/ai-markdown'
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
