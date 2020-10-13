export const setStoreCacheData = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getStoreCacheData = (key: string) => {
  return localStorage.getItem(key)
}

export const removeCachedData = (key: string) => {
  localStorage.removeItem(key)
}