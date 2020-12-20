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
			<label style={{marginBottom: '6px'}}>Email</label>
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
	max-width: 100vw;
	margin: auto;
	padding: 2rem;

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
	margin: 10px;
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
const StyledDiv = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`


export default Contact
