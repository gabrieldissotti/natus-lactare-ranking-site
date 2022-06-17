import { listGroupUserIds } from '../../modules/steam'

export default async function csgo(req, res) {
  const ids = await listGroupUserIds('NatusLactare')

  const idDoGabes = ids[1]

  res.send(idDoGabes)
}