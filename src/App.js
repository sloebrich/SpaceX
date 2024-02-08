// jshint esversion:6
import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import Detail from "./containers/Detail";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Loading from "./components/Loading";

function App() {
	useEffect(() => {
		let path = localStorage.getItem("path");
		if (path) {
			localStorage.removeItem("path");
			this.router.navigate([path]);
		}
	}, []);

	const [latest, setLatest] = useState(109);
	const [data, setData] = useState([]);
	const [fetched, setFetched] = useState(false);

	useEffect(() => {
		fetch("https://api.spacexdata.com/v3/launches/past")
			.then((res) => {
				if (!res.ok) {
					throw new Error(`API did not respond: Code ${res.status}`);
				}
				return res;
			})
			.then((res) => res.json())
			.then((data) => {
				setData(data.reverse());
				setLatest(data[0].flight_number);
				setFetched(true);
			});
	}, [fetched]);

	if (!fetched) return <Loading />;

	return (
		<div className="App">
			<HashRouter basename="/spacex">
				<Header latest={latest} />
				<Switch>
					<Route path="/" exact>
						<Dashboard data={data} />
					</Route>
					<Route
						path="/:flightNumber"
						render={(props) => {
							const flightNumber = Number(
								props.match.params.flightNumber
							);
							const launch = data.find(
								(launch) =>
									launch.flight_number === flightNumber
							);
							return <Detail launch={launch} latest={latest} />;
						}}
					></Route>
					<Route component={NotFound} />
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;
