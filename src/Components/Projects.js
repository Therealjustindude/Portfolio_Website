import React from 'react'
// import devProjects from '../devProjects'
import styled from 'styled-components'

// // import Card from '@material-ui/core/Card';
// import { Paper } from '@material-ui/core';
// // import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// // import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

import { MediaCard } from '../Components/MediaCard'




const Projects = () => {
	return (
		<Container>
			<StyledH1>Projects</StyledH1>
			<MediaContainer>
				<MediaCard/>
			</MediaContainer>
		</Container>
	)
}
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: white;
	width: 80%;
	height: 50%;
	margin: auto;
	overflow:hidden;
	padding: 2rem;
	border-radius: 100px 10px 100px 10px;
	border-style: solid;
	border-width: 1px;
	border-color: rgba(0,0,0,0.1);
	box-shadow: 0px 0px 50px 20px rgba(0,0,0,0.6);
`
const MediaContainer = styled.div`
	display: flex;
	overflow: scroll;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	max-width: 100vw;

`

const StyledH1 = styled.h1`
	padding: 5px;
	text-align: center;
	margin: 2px;
	border-bottom: 1px dotted rgba(0,0,0,0.1);

	@media(max-width: 810px){
		font-size: medium;
	}
`
export default Projects
