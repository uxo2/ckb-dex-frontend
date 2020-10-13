import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

const NotFound = lazy(() => import('../pages/404'))
const Home = lazy(() => import('../pages/Home'))
const Trade = lazy(() => import('../pages/Trade'))
const Header = lazy(() => import('../components/Header'))

const Containers: CustomRouter.Route[] = [
	{
		name: 'Home',
		path: '/',
		exact: true,
		showHeader: true,
		component: Home
	},
	{
		name: 'Trade',
		path: '/trade',
		exact: true,
		showHeader: true,
		component: Trade
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
              {Containers.map(container => {
                  console.log(container)
                  return (
                    <React.Fragment key={ container.name }>
                      <Route
                        {...container}
                        key={ container.name }
                      />
                    </React.Fragment>
                  )
                })}
						</>
					)}>
				</Route>
			</Suspense>
		</Router>
	)
}