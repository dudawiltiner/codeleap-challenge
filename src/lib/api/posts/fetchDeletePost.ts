import { api } from "../axios-config"

export async function fetchDeletePost(id: number): Promise<void> {
  await api.delete(`${id}/`)
}
