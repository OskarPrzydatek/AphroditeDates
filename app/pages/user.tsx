import addAnnouncement from "app/core/mutations/addAnnouncement"
import logout from "app/auth/mutations/logout"
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
import updateAnnouncement from "app/core/mutations/updateAnnouncement"
import { theme } from "app/style/theme"

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
            <span>Witaj {currentUser.email}</span>
            <RegLogNav
              currentUser={currentUser}
              logoutMutation={logoutMutation}
              isUserPage={true}
              toLeft={true}
            />
          </div>

          <div className="announcement-area-wrapper">
            <div className="announcement-form">
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
                <LabeledSelect
                  name="age"
                  label="Wiek"
                  placeholder="Podaj Swój Przedział Wiekowy"
                  options={Age}
                />
                <LabeledTextField
                  name="phone"
                  label="Nr. Telefonu"
                  placeholder="Podaj Nr. Telefonu"
                />

                {/* <LabeledFile label="Zdjęcie Profilowe" setPhoto={setPhoto} /> */}

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
                <LabeledTextArea
                  name="description"
                  label="Opis"
                  placeholder="Podaj Opis Ogłoszenia"
                />
              </Form>
            </div>

            <div className="announcement-profile-picture">
              <Image src={ProfilePicture} alt="profile picture" width="300" height="300" />
            </div>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>Coś poszło nie tak</p>
      )}

      <style global jsx>{`
        .user-page-bar {
          display: flex;
        }

        .user-page-bar span {
          display: none;
        }

        .announcement-area-wrapper {
          padding: 1%;
          display: flex;
          flex-direction: column-reverse;
        }

        .announcement-form {
          width: 100%;
        }

        .announcement-profile-picture {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10%;
        }

        @media screen and (min-width: ${theme.breakpoints.l}) {
          .user-page-bar span {
            display: inline-block;
            width: 40%;
          }

          .announcement-area-wrapper {
            flex-direction: row;
          }

          .announcement-form {
            width: 50%;
          }

          .announcement-profile-picture {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 0;
          }
        }
      `}</style>
    </>
  )
}

UserPage.getLayout = (page) => <Layout>{page}</Layout>

export default UserPage
