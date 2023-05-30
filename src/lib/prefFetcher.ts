import { FETCH_OPTIONS } from '@/constants/REASAS/constants'

export const prefFetcher = async (url: string) => {
  const res = await fetch(url, FETCH_OPTIONS)
  return res.json()
}
