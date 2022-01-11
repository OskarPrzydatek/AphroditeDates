import getPaginatedAnnouncements from "app/announcements/queries/getPaginatedAnnouncements"
import Filters from "app/core/components/Filters"
import Pagination from "app/core/components/Pagination"
import useCheckAnnouncementsRouterQuery from "app/core/hooks/useCheckAnnouncementsRouterQuery"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, usePaginatedQuery, useRouter } from "blitz"
import React from "react"

const ITEMS_PER_PAGE = 1

const AnnouncementsPage: BlitzPage = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0

  const [{ announcements, hasMore, count }] = usePaginatedQuery(getPaginatedAnnouncements, {
    town: router.query.town,
    gender: router.query.gender,
    interestedIn: router.query.interestedIn,
    age: router.query.age,
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const checkRouter = useCheckAnnouncementsRouterQuery(router.query)

  const goToPreviousPage = () =>
    router.push({
      query: {
        town: router.query.town,
        gender: router.query.gender,
        interestedIn: router.query.interestedIn,
        age: router.query.age,
        page: page - 1,
      },
    })
  const goToNextPage = () =>
    router.push({
      query: {
        town: router.query.town,
        gender: router.query.gender,
        interestedIn: router.query.interestedIn,
        age: router.query.age,
        page: page + 1,
      },
    })

  return (
    <article>
      {checkRouter ? (
        <>
          <h2>Ogłoszenia: {count}</h2>
          <ul>
            {announcements &&
              announcements.map(({ id, name, age, town }) => (
                <li key={id}>
                  <button onClick={async () => await router.push(`/announcement/${id}`)}>
                    <div>
                      <p>{name}</p>
                      <p>{age}</p>
                    </div>
                    <p>{town}</p>
                  </button>
                </li>
              ))}
          </ul>
          <Pagination
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
            page={page}
            hasMore={hasMore}
            count={count}
          />
        </>
      ) : (
        <Filters />
      )}
    </article>
  )
}

AnnouncementsPage.getLayout = (page) => <Layout>{page}</Layout>

export default AnnouncementsPage
