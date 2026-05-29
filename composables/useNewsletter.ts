// Newsletter queries — drives homepage callout, archive page, and issue pages
export const useLatestNewsletter = () => {
  return queryContent('newsletter')
    .where({ published: true })
    .sort({ date: -1 })
    .limit(1)
    .findOne()
}

export const useNewsletterArchive = (limit = 30) => {
  return queryContent('newsletter')
    .where({ published: true })
    .sort({ date: -1 })
    .limit(limit)
    .find()
}

export const useNewsletterByTopic = (topic: string) => {
  return queryContent('newsletter')
    .where({ published: true, topics: { $contains: topic } })
    .sort({ date: -1 })
    .find()
}
