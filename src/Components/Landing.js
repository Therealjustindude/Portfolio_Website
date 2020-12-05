import React from 'react'
import styled from 'styled-components'

const Landing = () => {
	return (
		<StyledDiv>
			<StyledH1>software engineer</StyledH1>
			<StyledH1>Austin tX</StyledH1>
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 100vw;
	margin: auto;
	padding: 2rem;
`

const StyledH1 = styled.h1`
	margin: 5px;
	text-align: center;
`

export default Landing
