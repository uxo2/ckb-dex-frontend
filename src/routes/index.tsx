import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

const NotFound = lazy(() => import('../pages/404'))
const Home = lazy(() => import('../pages/Home'))
const ProvideLiquidity = lazy(() => import('../pages/ProvideLiquidity'))
const Header = lazy(() => import('../pages/Header'))

const Containers: CustomRouter.Route[] = [
	{
		name: 'Home',
		path: '/',
		exact: true,
		showHeader: true,
		component: Home
	},
	{
		name: 'flow',
		path: '/flow',
		exact: true,
		showHeader: true,
		component: ProvideLiquidity
	},
	{
		name: '404',
		path: '/404',
		showHeader: false,
		exact: true,
		component: NotFound
	}
]

export default () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Route
					render={(props: any) => (
						<>
							<Header />
							<Switch location={ props.location }>
								{Containers.map(container => (
									<React.Fragment key={ container.name }>
										<Route
											{...container}
										/>
									</React.Fragment>
								))}
								<Redirect from="*" to="/404" />
							</Switch>
						</>
					)}>
				</Route>
			</Suspense>
		</Router>
	)
}