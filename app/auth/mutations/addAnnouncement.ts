import { resolver } from "blitz"
import db from "db"
import { Announcement } from "../validations"

export default resolver.pipe(
  resolver.zod(Announcement),
  async ({ name, age, phone, photo, description, town, gender, interestedIn, userId }) => {
    const announcement = await db.announcement.create({
      data: { name, age, phone, photo, description, town, gender, interestedIn, userId },
      select: { id: true },
    })

    return announcement
  }
)
