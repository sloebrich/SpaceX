// jshint esversion:6
import React from "react";
import DetailCard from "../components/DetailCard";
import DetailFooter from "../components/DetailFooter";
import NotFound from "../components/NotFound";

function Detail(props) {
	const { launch } = props;
	if (!launch) return <NotFound />;

	return (
		<div className="detail-container">
			<DetailCard launch={launch} />
			<DetailFooter
				flightNumber={launch.flight_number}
				latest={props.latest}
			/>
		</div>
	);
}

export default Detail;
