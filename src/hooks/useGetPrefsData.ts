import useSWR from 'swr'
import { FETCH_OPTIONS } from '@/constants/REASAS/constants'

export const useGetPrefsData = (url: string) => {
  const prefFetcher = async (url: string) => {
    const res = await fetch(url, FETCH_OPTIONS)
    return res.json()
  }

  const { data, error, isLoading } = useSWR(url, prefFetcher)
  return { data, error, isLoading }
}
