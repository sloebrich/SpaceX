// jshint esversion:6
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import DetailFooter from "../components/DetailFooter";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";

function Detail(props) {
	const { flightNumber } = useParams();

	const [launch, setLaunch] = useState({});
	const [fetched, setFetched] = useState(false);

	useEffect(() => {
		fetch("https://api.spacexdata.com/v3/launches/" + flightNumber)
			.then((res) => {
				if (!res.ok) {
					throw new Error(`API did not respond: Code ${res.status}`);
				}
				return res;
			})
			.then((res) => res.json())
			.then((data) => {
				setLaunch(data);
				setFetched(true);
			});
	}, [flightNumber, fetched]);

	if (!fetched) return <Loading />;

	if (Number(flightNumber) < 1 || Number(flightNumber) > props.latest)
		return <NotFound />;

	return (
		<div className="detail-container">
			<DetailCard launch={launch} />
			<DetailFooter
				flightNumber={Number(flightNumber)}
				latest={props.latest}
			/>
		</div>
	);
}

export default Detail;
