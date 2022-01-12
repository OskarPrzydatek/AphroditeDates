import Button from "app/core/components/Button"
import useAnnouncement from "app/core/hooks/useAnnouncement"
import Layout from "app/core/layouts/Layout"
import { theme } from "app/style/theme"
import { BlitzPage, useParams, Image, useRouter } from "blitz"
import React from "react"
import ProfilePicture from "../../../public/profile_img.jpg"

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
        <article className="announcement-wrapper">
          <div className="announcement-layout">
            <picture className="announcement-profile-picture">
              <h2>{announcement.name}</h2>
              <Image src={ProfilePicture} alt={announcement.name} width="300" height="300" />
            </picture>
            <div className="announcement-profile-content-wrapper">
              <h2>{announcement.name}</h2>
              <p>Wiek: {announcement.age}</p>
              <p>Kontakt: {announcement.phone}</p>
              <p>Opis:</p>
              <p>{announcement.description}</p>
            </div>
          </div>
          <Button
            label="Powrót"
            removeMargin={true}
            onClick={async () =>
              await router.push({ pathname: "/announcements", query: backToAnnouncements })
            }
          />
        </article>
      ) : (
        <div className="user-doesnt-exist">
          <p>Taki użykownik nie istnieje</p>
          <Button
            label="Powrót"
            removeMargin={true}
            onClick={async () =>
              await router.push({ pathname: "/announcements", query: backToAnnouncements })
            }
          />
        </div>
      )}
      <style jsx>{`
        .announcement-wrapper {
          display: flex;
          flex-direction: column;
        }

        .announcement-wrapper h2,
        p {
          text-align: center;
        }

        .announcement-wrapper p {
          font-size: ${theme.fontSize.l};
        }

        .announcement-profile-picture {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .user-doesnt-exist {
          text-align: center;
        }

        .announcement-layout {
          padding: 2%;
          display: flex;
          flex-direction: column;
        }

        .announcement-profile-content-wrapper {
          width: 100%;
        }

        .announcement-profile-content-wrapper h2 {
          display: none;
        }

        @media screen and (min-width: ${theme.breakpoints.xl}) {
          .announcement-layout {
            flex-direction: row;
          }

          .announcement-profile-picture {
            width: 50%;
          }

          .announcement-profile-picture h2 {
            display: none;
          }

          .announcement-profile-content-wrapper {
            width: 50%;
          }

          .announcement-profile-content-wrapper h2 {
            display: block;
          }
        }
      `}</style>
    </>
  )
}

AnnouncementPage.getLayout = (page) => <Layout>{page}</Layout>

export default AnnouncementPage
