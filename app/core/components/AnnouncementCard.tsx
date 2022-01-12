import React from "react"

export default function AnnouncementCard({ onClick, name, age, town }) {
  return (
    <li>
      <button onClick={onClick}>
        <div>
          <p>{name}</p>
          <p>{age}</p>
        </div>
        <p>{town}</p>
      </button>
    </li>
  )
}
