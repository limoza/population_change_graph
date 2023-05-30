import useSWR from 'swr'
import { prefFetcher } from '@/lib/prefFetcher'

export const useGetPrefsData = (url: string) => {
  prefFetcher(url)

  const { data, error, isLoading } = useSWR(url, prefFetcher)
  return { data, error, isLoading }
}
