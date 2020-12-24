import React from 'react'
import devProjects from '../devProjects'
import styled from 'styled-components'
import { bright, hover } from '../colors'
// import Card from '@material-ui/core/Card';
import { Paper } from '@material-ui/core';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';


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
	width: 100%;
	height: 50%;
	margin: auto;
	overflow:hidden;
	padding: 2rem;
	border-radius: 100px 10px 100px 10px;
	border-style: solid;
	border-width: 1px;
	border-color: rgba(0,0,0,0.1);
	box-shadow: 0px 6px rgba(0,0,0,0.5);
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
`

//create syle for cards 
const cardStyle = {
	flex: '0 0 auto',
	margin: '10px',
	padding: '8px',
	textAlign: 'center',
	background: 'white',
	borderStyle: 'outset',
	borderWidth: '1px',
	borderColor: 'rgba(0,0,0,0.1)',
	boxShadow: '2px 6px rgba(0,0,0,0.5)'
}
const MediaCard = () => {
	return (
		<>
			{devProjects.map(proj => {
				return <Paper elevation={ 0} style={cardStyle}>
					{/* <CardActionArea>
					<CardMedia
						image={proj.img}
						title={proj.title}
					/> */}
					<CardContent >
						<Typography gutterBottom variant="h5" component="h2">
							{proj.title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{proj.description}
						</Typography>
					</CardContent>
					{/* </CardActionArea> */}
					<CardActions style={{justifyContent: 'space-around', padding: '0'}}>
						<StyledA target="_blank" rel="noreferrer" href={proj.link}>
								<YouTubeIcon />
							</StyledA>
							<StyledA target="_blank" rel="noreferrer" href="https://github.com/Therealjustindude">
								<GitHubIcon />
							</StyledA>
					</CardActions>
				</Paper>
			})}
		</>
	);

  }


  
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
export default Projects
