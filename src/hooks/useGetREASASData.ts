import useSWR from 'swr'

export const useGetREASASData = (url: string) => {
  const fetcher = async (url: string) => {
    const res = await fetch(url, {
      headers: { 'X-API-KEY': `${process.env.NEXT_PUBLIC_REASAS_API_KEY}` },
    })
    return res.json()
  }

  const { data, error, isLoading } = useSWR(url, fetcher)

  return { data, error, isLoading }
}
