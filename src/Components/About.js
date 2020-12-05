import React from 'react'
import styled from 'styled-components'


const About = () => {
	return (
		<StyledDiv>
			<StyledH1>About me</StyledH1>
			<StyledP>I’m a creative, problem solving Software Engineer with a solid background in full stack web development. Training as a veterinarian technician, I learned how to prioritize completing tasks under pressure, meet deadlines and communicate with my team. I transitioned to coding so I can utilize my creative skills.</StyledP>
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: column;
	max-width: 100vw;
	margin: auto;
	padding: 2rem;
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
