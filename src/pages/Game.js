import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import ReactPlayer from "react-player";

const gameSteps = {
  1: {
    text: "Hello... is anyone out there?",
    options: [
      { text: "Yes... I'm here.", goto: 2 },
      { text: "Who is this?", goto: 3 }
    ],
    value: 1 //initial choice, doesn't matter
  },
  2: {
    text: "Oh thank god. I can't believe this thing is working.",
    options: [
    	{ text: "Well, good thing it is I guess! Who are you anyway?", goto: 3 }
    ],
    value: 10 //good choice
  },
  3: {
    text: "My name is Anima. I am looking for help... haven't been able to get many resources lately. Taking drastic enough measures to try out old tech again... Who are you?",
    options: [
    	{ text: "I'm not comfortable giving that info out to be honest. What do you mean resources?", goto: 4 },
    	{ text: "Old tech? What old tech?", goto: 5 }
    ],
    value: 1 //reach here no matter what
  },
  4: {
    text: "Resources.. you know.. water, food, shelter... people...",
    options: [
    	{ text: "What the hell? Are you okay? Where are you?", goto: 5 },
    	{ text: "Ew you weirdo, what do you mean people as a resource. Are you some type of human trafficker?", goto: 5 }
    ],
    value: 1
  },
  5: {
    text: "Old tech as in any cellphones I can find",
    options: [
    	{ text: "Yeet", goto: 1 },
    	{ text: "End game", goto: "end" }
    ],
    value: -10 //other answer was nicer
  },
  end: {
  	text: "Ended the game, how sad."
  }
};

export default class Game extends Component 
{
  constructor(props) 
  {
    super(props)

    this.state = {
      currentStep: 1,
      path: []
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot)
  {
  	//unneccesary check, but make sure they're changing steps
  	if (this.state.currentStep !== prevState.currentStep)
  	{
  		this.setState(prev => ({ path: [...prev.path, this.state.currentStep] }))
  	}	
  }

  render() {

    const { currentStep, path } = this.state;

    if (currentStep === "end") 
    {
      return (
        <div className="Game">
          <Container fluid>
            <Row>
              <Col>
                <h1>You beat the game</h1>
              </Col>
            </Row>

            <Row>
              <Col>
                You did these things:
                <ul>
                  {path.map(step => (
                    <li>{gameSteps[step].text}</li>
                  ))}
                </ul>
                <Row>
                  You got{" "}
                  <span style={{ padding: "0px 20px", fontSize: 30 }}>
                    {path.reduce((acc, curr) => {
                      if (gameSteps[curr].value) {
                        acc += gameSteps[curr].value;
                      }
                      return acc;
                    }, 0)}
                  </span>
                  points
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }

    return (
      <div className="Game">
        <Container fluid>
          <Row>
            <Col>
              <h1>{gameSteps[currentStep].text}</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <ButtonGroup aria-label="Basic example">
                {gameSteps[currentStep].options.map((opt, idx) => (
                  <Button
                  	key = {idx}
                    variant = "primary"
                    onClick = {() =>
                      this.setState(prev => ({
                        ...prev,
                        currentStep: opt.goto
                      }))
                    }
                  >
                    {opt.text}
                  </Button>
                ))}
              </ButtonGroup>
            </Col>
          </Row>

          <Row>
            <ReactPlayer
              url="https://soundcloud.com/kidjamaka/its-in-there"
              playing = "false"
              loop = 'true'
              width="0px"
              height="0px"
            />
          </Row>
        </Container>
      </div>
    );
  }
}

