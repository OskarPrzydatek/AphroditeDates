import getPaginatedAnnouncements from "app/announcements/queries/getPaginatedAnnouncements"
import logout from "app/auth/mutations/logout"
import AnnouncementCard from "app/core/components/AnnouncementCard"
import Filters from "app/core/components/Filters"
import Pagination from "app/core/components/Pagination"
import RegLogNav from "app/core/components/RegLogNav"
import useCheckAnnouncementsRouterQuery from "app/core/hooks/useCheckAnnouncementsRouterQuery"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, useMutation, usePaginatedQuery, useRouter } from "blitz"
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

  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

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
          {announcements && announcements.length > 0 ? (
            <>
              <header>
                <h2>Ogłoszenia: {count}</h2>
                <RegLogNav
                  currentUser={currentUser}
                  logoutMutation={logoutMutation}
                  isAnnouncementsPage={true}
                />
              </header>
              <ul>
                {announcements.map(({ id, name, age, town }) => (
                  <AnnouncementCard
                    key={id}
                    onClick={async () =>
                      await router.push({
                        pathname: `/announcement/${id}`,
                        query: {
                          town: router.query.town,
                          gender: router.query.gender,
                          interestedIn: router.query.interestedIn,
                          age: router.query.age,
                          page: page,
                        },
                      })
                    }
                    name={name}
                    age={age}
                    town={town}
                  />
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
            <article>
              <h2>Brak Wyników</h2>
            </article>
          )}
        </>
      ) : (
        <Filters />
      )}
    </article>
  )
}

AnnouncementsPage.getLayout = (page) => <Layout>{page}</Layout>

export default AnnouncementsPage
