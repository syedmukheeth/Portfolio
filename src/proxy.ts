import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * AI-OPTIMIZATION MIDDLEWARE
 * Implements "Markdown Negotiation" for AI Agents and Bots.
 * Based on the "AI-Ready Content" strategy.
 */
export function proxy(request: NextRequest) {
  // 1. Check for Content Negotiation via Accept Header
  const acceptHeader = request.headers.get('accept')
  
  // 2. Identify AI Agents via User-Agent
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''
  const aiBots = [
    'gptbot',
    'chatgpt-user',
    'claude-web',
    'perplexitybot',
    'twitterbot',
    'slackbot',
    'googlebot' // Optional: Allow Googlebot to see MD if requested
  ]
  
  const isAIBot = aiBots.some(bot => userAgent.includes(bot))
  const isMarkdownRequested = acceptHeader?.includes('text/markdown')

  // 3. Serve Minimalist Markdown to AI Agents
  if (isMarkdownRequested || (isAIBot && request.nextUrl.pathname === '/')) {
    console.log(`[AI_MIDDLEWARE] Serving Markdown to: ${userAgent}`)
    
    // Rewrite to our dedicated AI-optimized Markdown route
    const url = request.nextUrl.clone()
    url.pathname = '/api/ai-markdown'
    return NextResponse.rewrite(url)
  }

  // 4. Serve Standard HTML to Browsers
  return NextResponse.next()
}

// Only match the home page for now as it contains the primary content
export const config = {
  matcher: '/',
}
