import React from 'react'
import { Switch, Route } from 'react-router-dom';
import About from '../Components/About'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import styled from 'styled-components'
import codeSymbols from '../images/codeSymbols.svg'
import { useSpring, animated } from 'react-spring'


const Home = () => {
	const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

	const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 100, 1]
	const trans = (x, y, s) => `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

	return (
		<BackGround>
			<animated.div
			class="card"
			onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
			onMouseLeave={() => set({ xys: [0, 0, 1] })}
			style={{ transform: props.xys.interpolate(trans) }}
			>
				<HomeContainer>
					<Switch>
						<Route exact path="/" component={About} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/projects" component={Projects} />
					</Switch>
				</HomeContainer>
		</animated.div>
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
