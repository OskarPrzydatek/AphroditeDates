import getAnnoucement from "app/announcements/queries/getAnnouncement"
import { useQuery } from "blitz"

export default function useAnnouncement(id) {
  const [announcement] = useQuery(getAnnoucement, id)
  return announcement
}
