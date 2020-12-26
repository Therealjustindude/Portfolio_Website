import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import devProjects from '../devProjects'
import styled from 'styled-components'
// import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import { bright, hover } from '../colors'


export const MediaCard = () => {
	const [array] = useState(devProjects);
	const [index, setIndex] = useState(0)

	const next = () => {
		if (index < 4) {
			setIndex(index + 1)
		}
	}
	const prev = () => {
		if (index !== 0) {
			setIndex(index - 1)
		}
	}
	return (
		<>
			<Container>
				<ReactPlayer
						url={array[index].link}
						width="80%"
						height="80%"
				/>

				<BtnDiv>
					<Button onClick={()=> prev()}>Prev</Button>
					{/* <StyledA target="_blank" rel="noreferrer" href={array[index].link}>
						<YouTubeIcon />
					</StyledA> */}
					<StyledA target="_blank" rel="noreferrer" href={array[index].github}>
						<GitHubIcon />
					</StyledA>
					<Button onClick={()=> next()}>Next</Button>
				</BtnDiv>
			</Container>
		</>
	);
}

const Container = styled.div`
	height: 700px;
	width: 800px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	padding: 2px;
	flex-direction: column;
`

const BtnDiv = styled.div`
	background-color: white;
	border: none;
	display: flex;
	flex-direction: row;
	margin: 10px;
`
const Button = styled.button`
	background-color: white;
	border: none;
	color: black;
	padding: 10px;
	text-align: center;
	
	&:hover {
        padding: 2px;
        color: #${hover};
        border: outset #${bright};
	}
	
	@media(max-width: 810px){
		font-size: small;
	}
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