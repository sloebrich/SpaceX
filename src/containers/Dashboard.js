// jshint esversion:6
import React from "react";
import LaunchCard from "../components/LaunchCard";
import { Row } from "react-bootstrap";

function Dashboard(props) {
	const { data } = props;

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
