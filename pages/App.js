import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import { MoviesList } from "../Movies/MoviesList";
import MovieDetails from '../Movies/MovieDetail';
import "./App.css"

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/movie/:id">
						<MovieDetails />
					</Route>
					<Route path='/'>
						<MoviesList />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
