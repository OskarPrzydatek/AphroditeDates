import { resolver } from "blitz"
import db from "db"
import { Announcement } from "../../auth/validations"

export default resolver.pipe(
  resolver.zod(Announcement),
  async ({ name, age, phone, /* photo, */ description, town, gender, interestedIn, userId }) => {
    const announcement = await db.announcement.update({
      where: { userId },
      data: { name, age, phone, /* photo, */ description, town, gender, interestedIn },
    })

    return announcement
  }
)
