// jshint esversion:6
import React from "react";
import { Card, ListGroup, ListGroupItem, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function LaunchCard(props) {
	const { launch } = props;
	const thumbnail = launch.links.flickr_images[0];
	const date = new Date(launch.launch_date_utc);

	return (
		<LinkContainer
			to={`/${launch.flight_number}`}
			className="launch-card-container"
		>
			<Col xl={3} lg={4} md={6} sm={6} xs={12}>
				<Card bg="dark" text="white" className="dashboard-card">
					<Card.Img
						variant="top"
						src={thumbnail}
						className="card-image"
					/>
					<Card.Body className="card-title-body">
						<Card.Title>
							{launch.flight_number}. {launch.mission_name}
						</Card.Title>
					</Card.Body>
					<ListGroup className="list-group-flush card-list">
						<ListGroupItem>
							Launch date: {date.getDate()}/{date.getMonth() + 1}/
							{date.getFullYear()}
						</ListGroupItem>
						<ListGroupItem>
							Launch site: {launch.launch_site.site_name_long}
						</ListGroupItem>
						<ListGroupItem>
							Rocket: {launch.rocket.rocket_name}, type{" "}
							{launch.rocket.rocket_type}
						</ListGroupItem>
					</ListGroup>
				</Card>
			</Col>
		</LinkContainer>
	);
}

export default LaunchCard;
