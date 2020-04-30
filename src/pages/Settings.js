import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import logo from '../logo.png'

export default class Settings extends Component {
	render() {
		return (
			<div>
				<Container fluid>
					<Row>
						<Col>
							<div class = "App-logo">
								<img src = {logo}/>
							</div>	
						</Col>
					</Row>

					<Row>
						<Col>
							<h1>Anima</h1>
						</Col>
					</Row>

					<Row>
						<Col>
							<Button>Toggle Sound On/Off (unfinished)</Button>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
