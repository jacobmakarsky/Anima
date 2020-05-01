import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'react-router-dom/Link'
import ReactPlayer from 'react-player'

import logo from '../logo.png'

export default class Menu extends Component 
{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	speed: 20
	  };
	}

	render() {
		return (
			<div className = "Menu">
				<Container fluid>
					<Row>
						<Col>
							<div class = "App-logo">
								<img 
									src = {logo}
									style = {{animation: `spin ${this.state.speed}s linear infinite`}}
								/>
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
							<Link to = '/Game'>
								<Button>Start Game</Button>
							</Link>
						</Col>
					</Row>

					<Row>
						<Col>
							<Link to = '/Settings'>
								<Button>Settings</Button>
							</Link>
						</Col>
					</Row>

					<Row>
						<Col>
							<ReactPlayer 
								url = 'https://soundcloud.com/kidjamaka/above'
								playing = "false"
								loop = "true"
								width = '0px'
								height = '0px'
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
