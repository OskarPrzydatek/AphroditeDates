export default function useCheckAnnouncementsRouterQuery(Obj: any) {
  if ("town" in Obj && "gender" in Obj && "interestedIn" in Obj && "age" in Obj) {
    return true
  } else return false
}
