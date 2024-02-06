// jshint esversion:6
import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function DetailFooter(props) {
	const { flightNumber, latest } = props;

	return (
		<Nav className="justify-content-center">
			{flightNumber < latest && (
				<Nav.Item>
					<LinkContainer to={`/${flightNumber + 1}`}>
						<Nav.Link className="detail-footer-link">
							<span
								aria-hidden="true"
								className="carousel-control-prev-icon"
							></span>
						</Nav.Link>
					</LinkContainer>
				</Nav.Item>
			)}
			{flightNumber > 1 && (
				<Nav.Item>
					<LinkContainer to={`/${flightNumber - 1}`}>
						<Nav.Link className="detail-footer-link">
							<span
								aria-hidden="true"
								className="carousel-control-next-icon"
							></span>
						</Nav.Link>
					</LinkContainer>
				</Nav.Item>
			)}
		</Nav>
	);
}

export default DetailFooter;
