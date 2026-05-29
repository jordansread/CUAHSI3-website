// Reusable event queries used across pages and components
export const useUpcomingEvents = (limit = 5) => {
  return queryContent('events')
    .where({ published: true, start: { $gte: new Date().toISOString() } })
    .sort({ start: 1 })
    .limit(limit)
    .find()
}

export const useEventsByAudience = (audience: string) => {
  return queryContent('events')
    .where({ published: true, audience: { $contains: audience } })
    .sort({ start: 1 })
    .find()
}

export const usePastEvents = (limit = 20) => {
  return queryContent('events')
    .where({ published: true, start: { $lt: new Date().toISOString() } })
    .sort({ start: -1 })
    .limit(limit)
    .find()
}
