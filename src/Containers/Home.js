import React from 'react'
import { Switch, Route } from 'react-router-dom';
import About from '../Components/About'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import styled from 'styled-components'

const Home = () => {
	return (
		<HomeContainer>
			<h1> {'<'} </h1>
			<Switch>
          		<Route exact path="/about" component={About} />
          		<Route exact path="/contact" component={Contact} />
          		<Route exact path="/" component={Projects} />
			</Switch>
			<h1> {'/>'} </h1>
		</HomeContainer>
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

export default Home
