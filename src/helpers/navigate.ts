import { useLocation } from 'wouter-preact'
import { navigate } from 'wouter-preact/use-browser-location'

const basePath = '/mom-helper'

export default function (path: string) {
  return navigate(`${basePath}${path}`)
}

export function useGoBack() {
  if (history.length > 0) history.back()
  else goMain()
}

export function goMain() {
  return navigate(basePath)
}
