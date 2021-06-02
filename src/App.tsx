import { Route, Switch } from 'wouter'
import { Launch } from './components/launch'
import { LaunchDetails } from './components/launch-details'

function App() {
	return (
		<Switch>
			<Route path='/launch' component={Launch} />
			<Route path='/launch-details/:id'>
				{params => <LaunchDetails id={params.id} />}
			</Route>
		</Switch>
	)
}

export default App
