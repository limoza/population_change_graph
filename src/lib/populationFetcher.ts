import { FETCH_OPTIONS } from '@/constants/REASAS/constants'

export const populationFetcher = async (
  url: string,
  { arg }: { arg: { prefID: number } }
) => {
  const res = await fetch(`${url}${arg.prefID}`, FETCH_OPTIONS)
  return res.json()
}
