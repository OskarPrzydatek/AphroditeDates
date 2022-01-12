import useAnnouncement from "app/core/hooks/useAnnouncement"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, useParams, Image, useRouter } from "blitz"
import React from "react"
import ProfilePicture from "../../../public/profile_img.webp"

const AnnouncementPage: BlitzPage = () => {
  const { id } = useParams()
  const router = useRouter()

  const [backToAnnouncements, setBackToAnnouncements] = React.useState<any>()

  const numericId = React.useCallback((): number => {
    return id !== undefined && typeof id === "string" ? parseInt(id) : 0
  }, [id])

  const announcement = useAnnouncement({ id: numericId() })

  React.useEffect(() => {
    setBackToAnnouncements({
      town: router.query.town,
      gender: router.query.gender,
      interestedIn: router.query.interestedIn,
      age: router.query.age,
      page: router.query.page,
    })
  }, [router.query])

  return (
    <>
      {announcement ? (
        <article>
          <div>
            <header>
              <h2>{announcement.name}</h2>
              <p>{announcement.age}</p>
            </header>
            <button
              onClick={async () =>
                await router.push({ pathname: "/announcements", query: backToAnnouncements })
              }
            >
              Powrót
            </button>
          </div>
          <Image src={ProfilePicture} alt={announcement.name} width="300" height="300" />
          <p>{announcement.phone}</p>
          <p>{announcement.description}</p>
        </article>
      ) : (
        <p>Taki użykownik nie istnieje</p>
      )}
    </>
  )
}

AnnouncementPage.getLayout = (page) => <Layout>{page}</Layout>

export default AnnouncementPage
