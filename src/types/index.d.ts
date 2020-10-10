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