// jshint esversion:6
import React, { useState, useEffect } from "react";
import LaunchCard from "../components/LaunchCard";
import Loading from "../components/Loading";
import { Row } from "react-bootstrap";

function Dashboard() {
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
				setFetched(true);
			});
	}, [fetched]);

	if (!fetched) return <Loading />;

	return (
		<div>
			<h1>SpaceX Launches</h1>
			<Row>
				{data.map((launch, index) => (
					<LaunchCard key={index} launch={launch} />
				))}
			</Row>
		</div>
	);
}

export default Dashboard;
