import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import ReactPlayer from 'react-player'

const gameArray = [
	{
		route: '1',
		text: 'This is question 1',
		options: [
			{ text: 'Go to question 2', goto: '2'}, 
			{ text: 'Go to question 3', goto: '3'}]
	},
	{
		route: '2',
		text: 'This is question 2',
		options: [{ text: 'Go to question 3', goto: '3'}]
	},
	{
		route: '3',
		text: 'This is question 3',
		options: [{ text: 'Go back to question 1', goto: '1'}]
	},
]

export default class Game extends Component 
{
	constructor(props) 
	{
	  super(props);
	
	  this.state = {
	  	currentRoute: '1'
	  };
	}

	render() {
		return (
			<div className = "Game">
				<Container fluid>
					<Row>
						<Col>
							<h1>{gameArray.find(o => o.route === this.state.currentRoute).text}</h1>
						</Col>
					</Row>

					<Row>
						<Col>
							<ButtonGroup aria-label="Basic example">
							  <Button variant="primary" onClick = {this.state.currentRoute += 1}>{gameArray.find(o => o.route === this.state.currentRoute).options[this.state.currentRoute - 1].text}</Button>
							  <Button variant="primary" onClick = {this.state.currentRoute += 1}>{gameArray.find(o => o.route === this.state.currentRoute).options[this.state.currentRoute].text}</Button>
							</ButtonGroup>
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
