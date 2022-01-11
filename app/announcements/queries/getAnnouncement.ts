import db from "db"

export default async function getAnnoucement({ id }) {
  const announcement = await db.announcement.findFirst({
    where: { id: id },
  })

  return announcement
}
