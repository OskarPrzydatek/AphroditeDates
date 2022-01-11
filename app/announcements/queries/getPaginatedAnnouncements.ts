import { paginate, resolver } from "blitz"
import db from "db"

export default resolver.pipe(
  resolver.authorize(),
  async ({ town, gender, interestedIn, age, skip = 0, take = 100 }, { session }) => {
    const {
      items: announcements,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () =>
        db.announcement.count({
          where: {
            town: town,
            gender: interestedIn,
            interestedIn: gender,
            age: age,

            NOT: { userId: session.userId ? session.userId : 0 },
          },
        }),
      query: (paginateArgs) =>
        db.announcement.findMany({
          ...paginateArgs,
          where: {
            town: town,
            gender: interestedIn,
            interestedIn: gender,
            age: age,

            NOT: { userId: session.userId ? session.userId : 0 },
          },
        }),
    })

    return {
      announcements,
      nextPage,
      hasMore,
      count,
    }
  }
)
