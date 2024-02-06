// jshint esversion:6
import React, { useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import Detail from "./containers/Detail";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

function App() {
	const latest = 109;

	useEffect(() => {
		let path = localStorage.getItem("path");
		if (path) {
			localStorage.removeItem("path");
			this.router.navigate([path]);
		}
	}, []);

	return (
		<div className="App">
			<HashRouter basename="/spacex">
				<Header latest={latest} />
				<Switch>
					<Route path="/" exact component={Dashboard} />
					<Route path="/:flightNumber">
						<Detail latest={latest} />
					</Route>
					<Route component={NotFound} />
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;
