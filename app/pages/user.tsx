import addAnnouncement from "app/auth/mutations/addAnnouncement"
import logout from "app/auth/mutations/logout"
import updateAnnouncement from "app/auth/mutations/updateAnnouncement"
import { Announcement } from "app/auth/validations"
import Form from "app/core/components/Form"
// import LabeledFile from "app/core/components/LabeledFile"
import LabeledSelect from "app/core/components/LabeledSelect"
import LabeledTextArea from "app/core/components/LabeledTextArea"
import LabeledTextField from "app/core/components/LabeledTextField"
import RegLogNav from "app/core/components/RegLogNav"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import useUsersAnnouncement from "app/core/hooks/useUsersAnnouncement"
import Layout from "app/core/layouts/Layout"
import { Age } from "app/static/Age"
import { Gender } from "app/static/Gender"
import { InterestedIn } from "app/static/InterestedIn"
import { Towns } from "app/static/Towns"
import { BlitzPage, useMutation, Image } from "blitz"
import React from "react"
import ProfilePicture from "../../public/profile_img.webp"

const UserPage: BlitzPage = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  const [addAnnouncementMutation] = useMutation(addAnnouncement)
  const [updateAnnouncementMutation] = useMutation(updateAnnouncement)

  const userAnnouncement = useUsersAnnouncement()

  // const [photo, setPhoto] = React.useState<string>("")

  return (
    <>
      {currentUser ? (
        <div>
          <div className="user-page-bar">
            {currentUser && <span>{currentUser.email}</span>}
            <RegLogNav
              currentUser={currentUser}
              logoutMutation={logoutMutation}
              isUserPage={true}
            />
          </div>

          <Form
            submitText={userAnnouncement ? "Aktualizuj Ogłoszenie" : "Dodaj Ogłoszenie"}
            schema={Announcement}
            initialValues={{
              name: userAnnouncement ? userAnnouncement.name : "",
              age: userAnnouncement ? userAnnouncement.age : "",
              phone: userAnnouncement ? userAnnouncement.phone : "",
              // photo: userAnnouncement ? userAnnouncement.photo : photo,
              description: userAnnouncement ? userAnnouncement.description : "",
              town: userAnnouncement ? userAnnouncement.town : "",
              gender: userAnnouncement ? userAnnouncement.gender : "",
              interestedIn: userAnnouncement ? userAnnouncement.interestedIn : "",
              userId: currentUser.id,
            }}
            onSubmit={async (values) => {
              if (userAnnouncement !== null) {
                console.log(values)
                await updateAnnouncementMutation(values)
              } else {
                console.log(values)
                await addAnnouncementMutation(values)
              }
            }}
          >
            <LabeledTextField name="name" label="Imię" placeholder="Podaj Imię" />
            {/* <LabeledTextField name="age" label="Wiek" placeholder="Podaj Wiek" type="number" /> */}
            <LabeledSelect
              name="age"
              label="Wiek"
              placeholder="Podaj Swój Przedział Wiekowy"
              options={Age}
            />
            <LabeledTextField name="phone" label="Nr. Telefonu" placeholder="Podaj Nr. Telefonu" />

            {/* <LabeledTextField name="photo" label="Zdjęcie" placeholder="Podaj Zdjęcie" /> */}
            {/* <LabeledFile label="Zdjęcie Profilowe" setPhoto={setPhoto} /> */}

            {/* <LabeledTextField name="town" label="Miasto" placeholder="Podaj Miasto" /> */}
            <LabeledSelect
              name="town"
              label="Miasto"
              placeholder="Wybierz Miasto"
              options={Towns}
            />
            <LabeledSelect
              name="gender"
              label="Płeć"
              placeholder="Podaj Swoją Płeć"
              options={Gender}
            />
            <LabeledSelect
              name="interestedIn"
              label="Interesują Mnie"
              placeholder="Podaj Płeć Przeciwną"
              options={InterestedIn}
            />
            <LabeledTextArea name="description" label="Opis" placeholder="Podaj Opis Ogłoszenia" />
          </Form>
          <Image src={ProfilePicture} alt="profile picture" width="300" height="300" />
        </div>
      ) : (
        <div>Coś poszło nie tak</div>
      )}
    </>
  )
}

UserPage.getLayout = (page) => <Layout>{page}</Layout>

export default UserPage