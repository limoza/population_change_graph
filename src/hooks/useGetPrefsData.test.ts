import { renderHook } from '@testing-library/react'
import useSWR from 'swr'
import { useGetPrefsData } from './useGetPrefsData'
import { REASAS_PREFS_URL } from '@/constants/REASAS/constants'
import { prefecturesTestData } from '@/test/fixture'

jest.mock('swr')

describe('Main components Test', () => {
  it('should return data, error, and isLoading', () => {
    const mockData = { result: prefecturesTestData }
    const mockUrl = REASAS_PREFS_URL
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useSWR.mockReturnValueOnce({
      data: mockData,
      error: null,
      isLoading: false,
    })

    const { result } = renderHook(() => useGetPrefsData(mockUrl))
    const { data, error, isLoading } = result.current

    expect(useSWR).toHaveBeenCalledWith(mockUrl, expect.any(Function))
    expect(data).toEqual(mockData)
    expect(error).toBeNull()
    expect(isLoading).toBe(false)
  })
})
