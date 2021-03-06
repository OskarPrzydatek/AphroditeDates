import getUserAnnoucement from "app/announcements/queries/getUserAnnoucement"
import { useQuery } from "blitz"

export default function useUsersAnnouncement() {
  const [announcement] = useQuery(getUserAnnoucement, null)
  return announcement
}
