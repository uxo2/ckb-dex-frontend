declare namespace CustomRouter {
	interface Route {
		name: string,
		path: string,
		exact?: boolean,
		params?: string
		showHeader: boolean,
		component: React.FunctionComponent<any>
	}
}

declare namespace State {
  export interface App {
    loading: boolean
    language: 'en' | 'zh',
    appWidth: number
    appHeight: number,
    hasConnectWallet: boolean,
    address: string
  }

  interface FetchStatusValue {
    OK: string
    Error: string
    InProgress: string
    None: string
  }

  export type FetchStatus = keyof FetchStatusValue

  export interface PageState {
    counterState: CounterState
  }
  
  interface CounterState {
    walletList: string[]
  }

  export interface AppState extends PageState {
    app: App
  }

  export interface AppPayload extends App {
    appError: AppError
  }

  export interface AppError {
    type: 'Network' | 'CodeLogic'
    message: string[]
  }

	interface NotFound404 {
		name: string
	}
	interface CoinExchange {
		buyDaiNum: number,
		shellDaiNum: number,
		spendNum: number,
		reciverNum: number,
		buyPrice: number
  }
}