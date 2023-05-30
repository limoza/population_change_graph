export const REASAS_PREFS_URL =
  'https://opendata.resas-portal.go.jp/api/v1/prefectures'

export const REASAS_POPULATION_URL =
  'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode='

export const FETCH_OPTIONS = {
  headers: { 'X-API-KEY': `${process.env.NEXT_PUBLIC_REASAS_API_KEY}` },
}
