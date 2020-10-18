import initApp from './app'
import page from './page'

export type FetchStatus = keyof State.FetchStatus

const initState: State.AppState = {
  app: initApp,
  ...page
}

export default initState
