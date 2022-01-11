import db from "db"

export default async function getFiltredtredAnnouncements(
  { town, gender, interestedIn, age },
  { session }
) {
  const filtredAnnouncements = await db.announcement.findMany({
    where: {
      town: town,
      gender: interestedIn,
      interestedIn: gender,
      age: age,

      NOT: { userId: session.userId },
    },
  })

  return filtredAnnouncements
}
