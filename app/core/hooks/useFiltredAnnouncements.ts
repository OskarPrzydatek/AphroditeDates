import getFiltredtredAnnouncements from "app/announcements/queries/getFiltredtredAnnouncements"
import { useQuery } from "blitz"

export default function useFiltredAnnouncements(values) {
  const [filtredAnnouncements] = useQuery(getFiltredtredAnnouncements, values)
  return filtredAnnouncements
}
