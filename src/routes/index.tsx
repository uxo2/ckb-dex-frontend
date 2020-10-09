import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

const NotFound = lazy(() => import('../pages/404'))
const Home = lazy(() => import('../pages/Home'))
const Containers: CustomRouter.Route[] = [
	{
		name: 'Home',
		path: '',
		exact: true,
		component: Home
	},
	{
		name: '404',
		path: '/404',
		exact: true,
		component: NotFound
	}
]

export default () => {
	return (
		<Router>
			<Suspense fallback={<span />}>
				<Route
					render={(props: any) => (
						<Switch location={props.location}>
							{Containers.map(container => (
								<Route
									{...container}
									key={container.name}
								/>
							))}
							<Redirect from="*" to="/404" />
						</Switch>
					)}>
				</Route>
			</Suspense>
		</Router>
	)
}