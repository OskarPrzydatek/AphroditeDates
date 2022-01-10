import db from "db"

export default async function getUserAnnoucement(_ = null, { session }) {
  if (!session.userId) return null

  const announcement = await db.announcement.findFirst({
    where: { userId: session.userId },
  })

  return announcement
}
