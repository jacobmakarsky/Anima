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
    value: 10 //good
  },
  3: {
    text: "My name is Anima. I am looking for help... haven't been able to get many resources lately. Taking drastic enough measures to try out old tech again... Who are you?",
    options: [
    	{ text: "I'm not comfortable giving that info out to be honest. What do you mean resources?", goto: 4 },
    	{ text: "Old tech? What old tech?", goto: 5 }
    ],
    value: 1 //dead end
  },
  4: {
    text: "Resources.. you know.. water, food, shelter... people...",
    options: [
    	{ text: "What the hell? Are you okay? Where are you?", goto: 6 },
    	{ text: "Ew you weirdo, what do you mean people as a resource. Are you some type of human trafficker?", goto: 7 }
    ],
    value: 1 //okay
  },
  5: {
    text: "Old tech as in any cellphones I can find.",
    options: [
    	{ text: "Uhh okay...", goto: 6 },
    ],
    value: -10 //bad
  },
  6: {
    text: "Why are you acting like you don't know what's going on?",
    options: [
    	{ text: "What do you mean... all I know is I went on this game and someone started messaging me off it.", goto: 8 },
    	{ text: "??? Explain your situation because you are not making sense.", goto: 8 },
    ],
    value: 10 //good
  },
  7: {
    text: "No, I am not a human trafficker. This is not a people against people war... I am so sick of telling people this...",
    options: [
    	{ text: "What war? Where are you???", goto: 8 },
    ],
    value: -10 //bad answer reaches here
  },
  8: {
    text: "I found this old phone in hopes of finding someone out there. I'm alone, need help and it is looking for me... I don't have much time.",
    options: [
    	{ text: "Okay, I'll stop asking so many questions. What do you need help with Anima?", goto: 9 },
    	{ text: "Why are you avoiding my question? WHERE ARE YOU?", goto: 10 },
    ],
    value: 1 //dead end
  },
  9: {
    text: "The flyers... I need to avoid them. They are new and I can't outrun them. Not sure if you have seen them but they scan anything below with heat sensors.",
    options: [
    	{ text: "Okay this is starting to sound scary. I guess if I were you I would hide underground or deep in a building if possible.", goto: 11 },
    	{ text: "Flyers? You mean like military stuff or something?", goto: 12 },
    ],
    value: 10 //other answer was nicer
  },
  10: {
    text: "I'm in the forest of old post-war Pennsylvania somewhere I believe. Nowhere near the city of course. I don't want to give you details incase you are the AI.",
    options: [
    	{ text: "The AI? Do you mean like some type of AI is hunting you down? Watching you?", goto: 13 },
    	{ text: "Hol up... post war PA? What war are you even talking about", goto: 14 },
    ],
    value: -10 //other answer was nicer
  },
  11: {
    text: "Why underground or deep in a building?",
    options: [
    	{ text: "You said they have heat sensors, so you should stay away from anywhere it could see your heat traces. Oh, and what war are you talking about?", goto: 1 },
    	{ text: "", goto: 1 },
    ],
    value: 10 //other answer was nicer
  },
  12: {
    text: "Well we... we started calling them flyers recently. They really are just drones... drones that can fly, so they don't buzz.",
    options: [
    	{ text: "That sounds... horrifying. Why are drones with wings chasing you?", goto: 14 },
    	{ text: "", goto: 1 },
    ],
    value: 10 //other answer was nicer
  },
  13: {
    text: "Where have you been this whole time? I'm really starting to think you are the AI. Unless... unless all the weird earthquakes and lights in the sky at night have something to do with this... those experiments it's running...",
    options: [
    	{ text: "", goto: 1 },
    	{ text: "", goto: 1 },
    ],
    value: 10 //other answer was nicer
  },
  14: {
    text: "Post war PA. As in, PA after the biowar in 2020. After everyone caught that virus and lost their mind, went primal and just started hunting anything like wild animals. ",
    options: [
    	{ text: "", goto: 1 },
    	{ text: "", goto: 1 },
    ],
    value: 10 //other answer was nicer
  },
  15: {
    text: "",
    options: [
    	{ text: "", goto: 1 },
    	{ text: "", goto: 1 },
    ],
    value: 10 //other answer was nicer
  },
  16: {
    text: "",
    options: [
    	{ text: "", goto: 1 },
    	{ text: "", goto: 1 },
    ],
    value: 10 //other answer was nicer
  },
  17: {
    text: "",
    options: [
    	{ text: "", goto: 1 },
    	{ text: "", goto: 1 },
    ],
    value: 10 //other answer was nicer
  },
  18: {
    text: "",
    options: [
    	{ text: "", goto: 1 },
    	{ text: "", goto: 1 },
    ],
    value: 10 //other answer was nicer
  },
  19: {
    text: "",
    options: [
    	{ text: "", goto: 1 },
    	{ text: "", goto: 1 },
    ],
    value: 10 //other answer was nicer
  },
  20: {
    text: "",
    options: [
    	{ text: "", goto: 1 },
    	{ text: "", goto: 1 },
    ],
    value: 10 //other answer was nicer
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
            
          </Row>
        </Container>
      </div>
    );
  }
}

