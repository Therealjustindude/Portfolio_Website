import React from 'react'
import styled from 'styled-components'
import {  bright, hover } from '../colors'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Contact = () => {
	return (
		<Container>
			<StyledH1>Contact</StyledH1>
			<label style={{marginBottom: '6px', 
	color: 'rgba(0,0,0,0.7)'}}>Email</label>
			<StyledP>TheRealJustinDude@gmail.com</StyledP>
			<StyledH1>Social</StyledH1>
			<StyledDiv>
				<StyledA target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/justin-j-davies"><LinkedInIcon/></StyledA>
				<StyledA target="_blank" rel="noreferrer" href="https://github.com/Therealjustindude"><GitHubIcon/></StyledA>
				<StyledA target="_blank"  rel="noreferrer" href="https://twitter.com/justindev_ies"><TwitterIcon/></StyledA>
				<StyledA target="_blank"  rel="noreferrer" href="https://www.youtube.com/channel/UCvobIaHO54NnF86iZCqOx7g?view_as=subscriber"><YouTubeIcon/></StyledA>
			</StyledDiv>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: column;
	width: 100%;
	height: 50%;
	margin: auto;
	padding: 2rem;
	background: white;
	border-radius: 0px 100px 100px 0px;
	border-style: solid;
	border-width: 1px;
	border-color: rgba(0,0,0,0.1);
	box-shadow: 0 6px rgba(0,0,0,0.5);

	label{
		margin: 5px;
	}
`

const StyledH1 = styled.h1`
	margin-bottom: 22px;
	margin-top: 15px;
`

const StyledP = styled.p`
	text-align: center;
	color: rgba(0,0,0,0.7);	
	margin: 10px;
`

const StyledA = styled.a`
	color: rgba(0,0,0,0.5);	
	margin: 5px;
	transition: all 0.1s ease-in;
	border-radius: 4px;

	&:hover {
		padding: 2px;
		color: #${hover};
		border: outset #${bright};
	}
`
const StyledDiv = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
`


export default Contact
