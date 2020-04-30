import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ReactPlayer from 'react-player'

const gameArray = [
	{
		route: 'q1',
		text: 'This is question 1',
		options: [{ text: 'Go to question 2', goto: 'q2'}]
	},
	{
		route: 'q2',
		text: 'This is question 2',
		options: [{ text: 'Go back to question 1', goto: 'q1'}]
	},
]

export default class Game extends Component 
{
	render() {
		return (
			<div>
				<Container fluid>
					<Row>
						<Col>
							<h1>Question 1 here</h1>
						</Col>
					</Row>

					<Row>
						<Col>
							<Button>Start Game</Button>
						</Col>
					</Row>

					<Row>
						<Col>
							<Button>Start Game</Button>
						</Col>
					</Row>

					<Row>
						<ReactPlayer 
								url = 'https://soundcloud.com/kidjamaka/its-in-there'
								playing = "true"
								loop = "true"
								width = '0px'
								height = '0px'
							/>
					</Row>
				</Container>
			</div>
		);
	}
}
