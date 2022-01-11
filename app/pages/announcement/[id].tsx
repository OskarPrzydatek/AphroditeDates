import useAnnouncement from "app/core/hooks/useAnnouncement"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, useParams, Image } from "blitz"
import React from "react"
import ProfilePicture from "../../../public/profile_img.webp"

const AnnouncementPage: BlitzPage = () => {
  const { id } = useParams()

  const numericId = React.useCallback((): number => {
    return id !== undefined && typeof id === "string" ? parseInt(id) : 0
  }, [id])

  const announcement = useAnnouncement({ id: numericId() })

  return (
    <>
      {announcement ? (
        <article>
          <header>
            <h2>{announcement.name}</h2>
            <p>{announcement.age}</p>
          </header>
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
