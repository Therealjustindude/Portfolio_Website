import React from 'react'
import styled from 'styled-components'
import { hover , bright} from '../colors'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

const About = () => {
	return (
		<StyledDiv>
			<StyledH1>Software Engineer</StyledH1>
			<StyledP>I like to self-reflect, debug, and refactor often. I hit a flow state when I am coding, making music, and hanging out with my wife. Recently, I completed an online software engineering Bootcamp at FlatIron School. It was exciting to build an MVC structured application using Ruby on Rails, learning DOM manipulation while building an application using vanilla Javascript, and state management while creating a React application that uses Redux. My goal is to thrive in my career by continuing to develop my skills so I can overcome new challenges. If you’d like to work together, send me a message.</StyledP>
			<StyledAContainer>
				<StyledA target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/justin-j-davies"><LinkedInIcon/></StyledA>
				<StyledA target="_blank" rel="noreferrer" href="https://github.com/Therealjustindude"><GitHubIcon/></StyledA>
				<StyledA target="_blank"  rel="noreferrer" href="https://twitter.com/justindev_ies"><TwitterIcon/></StyledA>
				<StyledA target="_blank"  rel="noreferrer" href="https://www.youtube.com/channel/UCvobIaHO54NnF86iZCqOx7g?view_as=subscriber"><YouTubeIcon/></StyledA>
			</StyledAContainer>
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: column;
	width: 80%;
	height: 50%;
	margin: auto;
	padding: 2rem;
	background: white;
	border-radius: 10px 100px 10px 100px;
	border-style: solid;
	border-width: 1px;
	border-color: rgba(0,0,0,0.1);
	box-shadow: 0px 0px 50px 20px rgba(0,0,0,0.6);
`
const StyledA = styled.a`
	color: black;	
	margin: 5px;
	transition: all 0.1s ease-in;
	border-radius: 4px;

	&:hover {
		padding: 2px;
		color: #${hover};
		border: outset #${bright};
	}
`
const StyledAContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
`

const StyledH1 = styled.h1`
	margin: 5px;
`

const StyledP = styled.p`
	text-align: center;
	margin: 10px;
	padding: 5px;
`

export default About
