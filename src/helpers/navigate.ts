import { navigate } from 'wouter-preact/use-browser-location'
import { useLocation } from 'wouter-preact'

const basePath = '/mom-helper'

export default function (path: string) {
  return navigate(`${basePath}${path}`)
}

export function useGoBack() {
  if (history.state) history.back()
  else goMain()
}

export function goMain() {
  return navigate(basePath)
}
