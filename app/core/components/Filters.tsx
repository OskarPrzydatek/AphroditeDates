import { SearchFilters } from "app/auth/validations"
import { Age } from "app/static/Age"
import { Gender } from "app/static/Gender"
import { InterestedIn } from "app/static/InterestedIn"
import { Towns } from "app/static/Towns"
import { useRouter } from "blitz"
import React from "react"
import useUsersAnnouncement from "../hooks/useUsersAnnouncement"
import Form from "./Form"
import LabeledSelect from "./LabeledSelect"

export default function Filters() {
  const userAnnouncement = useUsersAnnouncement()
  const router = useRouter()

  return (
    <div>
      <h1>Filtry</h1>
      <Form
        submitText="Szukaj"
        formPadding={true}
        initialValues={{
          town: userAnnouncement ? userAnnouncement.town : "",
          gender: userAnnouncement ? userAnnouncement.gender : "",
          interestedIn: userAnnouncement ? userAnnouncement.interestedIn : "",
          age: userAnnouncement ? userAnnouncement.age : "",
        }}
        schema={SearchFilters}
        onSubmit={async (values) => {
          await router.push({ pathname: "/announcements", query: values })
        }}
      >
        <LabeledSelect name="town" label="Miasto" placeholder="Wybierz Miasto" options={Towns} />
        <LabeledSelect name="gender" label="Płeć" placeholder="Podaj Swoją Płeć" options={Gender} />
        <LabeledSelect
          name="interestedIn"
          label="Interesują Mnie"
          placeholder="Podaj Płeć Przeciwną"
          options={InterestedIn}
        />
        <LabeledSelect
          name="age"
          label="Wiek"
          placeholder="Podaj Swój Przedział Wiekowy"
          options={Age}
        />
      </Form>

      <style jsx>{`
        h1 {
          text-align: center;
        }
      `}</style>
    </div>
  )
}
