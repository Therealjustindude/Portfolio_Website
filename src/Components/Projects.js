import React from 'react'
import devProjects from '../devProjects'
import styled from 'styled-components'
import { hover } from '../colors'
import Card from '@material-ui/core/Card';
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
			<h1 style={{ marginBottom: '15px' }}>Projects</h1>
			<MediaContainer>
				<MediaCard/>
			</MediaContainer>
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
`
const MediaContainer = styled.div`
	display: flex;
	overflow: scroll;
	padding: 2rem;
	align-items: center;
	justify-content: space-between;
`

//create syle for cards 
const cardStyle = {
	flex: '0 0 auto',
	margin: '10px',
	background: '#f4f1de',
	borderRadius: '50px',
	padding: '8px',
	textAlign: 'center'
}
const MediaCard = () => {
	return (
		<>
			{devProjects.map(proj => {
				return <Card style={cardStyle}>
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
				</Card>
			})}
		</>
	);

  }

const StyledA = styled.a`
	color: #${hover};	
	margin: 5px;
`
export default Projects
