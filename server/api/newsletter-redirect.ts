// Handles inbound links from old Mailchimp campaign archive URLs
// e.g. ?u=aad7e9257f329c1a46ebbd412&id=dc6de290b1 → /community/newsletter/2026-may
import { defineEventHandler, getQuery, sendRedirect } from 'h3'

const mailchimpIdMap: Record<string, string> = {
  'dc6de290b1': '2026-may',
  // Add entries as you migrate each issue
}

export default defineEventHandler((event) => {
  const { id } = getQuery(event)
  const slug = mailchimpIdMap[id as string]
  if (slug) return sendRedirect(event, `/community/newsletter/${slug}`, 301)
  return sendRedirect(event, '/community/newsletter', 301)
})
