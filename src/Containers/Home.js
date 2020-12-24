import React from 'react'
import { Switch, Route } from 'react-router-dom';
import About from '../Components/About'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import styled from 'styled-components'
import codeSymbols from '../images/codeSymbols.svg'

const Home = () => {
	return (
		<BackGround>
		<HomeContainer>
			<Switch>
          		<Route exact path="/" component={About} />
          		<Route exact path="/contact" component={Contact} />
          		<Route exact path="/projects" component={Projects} />
			</Switch>
			</HomeContainer>
		</BackGround>
	)
}
//I think i need an @media adjustment here
const HomeContainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`
const BackGround = styled.div`
	background: url(${codeSymbols});
	height: 100vh;
	display: relative;
	overflow: hidden;
`

export default Home
