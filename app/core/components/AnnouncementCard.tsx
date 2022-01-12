import React from "react"
import { Image } from "blitz"
import ProfilePicture from "../../../public/profile_img.webp"
import { theme } from "app/style/theme"

export default function AnnouncementCard({ onClick, name, age }) {
  return (
    <li>
      <button onClick={onClick}>
        <Image src={ProfilePicture} alt="profile picture" width="300" height="300" />
        <div className="name-age-wrapper">
          <p>{name}</p>
          <p>{age}</p>
        </div>
      </button>

      <style jsx>{`
        li {
          margin-bottom: 7%;
        }

        button {
          background: inherit;
          border: none;
          padding: 0;
          font-family: ${theme.fontFamily};
          font-size: ${theme.fontSize.l};
          cursor: pointer;
        }

        .name-age-wrapper {
          display: flex;
          justify-content: space-between;
        }

        @media screen and (min-width: ${theme.breakpoints.xxl}) {
          li {
            margin-bottom: 0;
          }
        }
      `}</style>
    </li>
  )
}
