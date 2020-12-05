import React from 'react'
import styled from 'styled-components'
import {  hover } from '../colors'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Contact = () => {
	return (
		<Container>
			<StyledH1>Contact</StyledH1>
			<label style={{marginBottom: '6px'}}>Email</label>
			<MailOutlineIcon />
			<StyledP>TheRealJustinDude@gmail.com</StyledP>
			<StyledH1>Social</StyledH1>
			<StyledDiv>
				<StyledA target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/justin-j-davies"><LinkedInIcon/></StyledA>
				<StyledA target="_blank" rel="noreferrer" href="https://github.com/Therealjustindude"><GitHubIcon/></StyledA>
				<StyledA target="_blank"  rel="noreferrer" href="https://twitter.com/JustinJamesDev"><TwitterIcon/></StyledA>
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
	max-width: 1000px;
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
	color: #${hover};	
	margin: 5px;
`
const StyledDiv = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`


export default Contact
