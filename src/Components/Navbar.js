import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import {bright} from '../colors'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

	const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 100, 1]
	const trans = (x, y, s) => `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
	return (
		<Nav>
			<Container>
				<MenuLink href="/">
					<animated.div
					class="card"
					onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
					onMouseLeave={() => set({ xys: [0, 0, 1] })}
					style={{ transform: props.xys.interpolate(trans) }}
					>
						<StyledH1 className="name-logo">Justin_j_Davies</StyledH1>
					</animated.div>
				</MenuLink>
				<Hamburger onClick={()=>setIsOpen(!isOpen)}>
					<span></span>
					<span></span>
					<span></span>
				</Hamburger>
				<Menu isOpen={isOpen}>
				<animated.div
						class="card"
						onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
						onMouseLeave={() => set({ xys: [0, 0, 1] })}
						style={{ transform: props.xys.interpolate(trans) }}
				>
					<LinkWrapper>
							<MenuLink href="/projects">Projects</MenuLink>	
							<MenuLink href="/contact">Contact</MenuLink>
					</LinkWrapper>
				</animated.div>
				</Menu>
			</Container>
		</Nav>
	)
}

const Nav = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 3;
	margin: auto;
`
const StyledH1 = styled.h1`
	padding: 5px;
	text-align: center;
	
`
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	margin: auto;
	background: white;
	border-style: solid;
	border-width: 1px;
	border-radius: 5px;
	box-shadow: 0 0px 20px 10px rgba(0,0,0,0.6);
	border-color: rgba(0,0,0,0.3);

	h1 {
		cursor: pointer;
	}
`
const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	@media (max-width: 768px) {
		flex-direction: column;
		overflow: hidden;
		box-shadow: -4px 8px 15px 1 rgba(0,0,0,0.07);
		max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
		width: 100%;
		transition: max-height 0.3s ease-in-out;
		align-items: flex-end;
	}
`
const LinkWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	
	@media (max-width: 768px){
		flex-direction: row;
	}
`
const MenuLink = styled.a`
	text-decoration: none;
	color: black;
	font-size: 15px;
	padding: 0.5rem 1.0rem;
	transition: all 0.3s ease-in;
	border-radius: 0.4rem;
	margin: 2px;
	
	&:hover {
		text-shadow: 0px 2px #${bright};
	}
`
const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;
	position: absolute;
	right: 20px;

	span {
		height: 2px;
		width: 25px;
		background: black;
		margin-bottom: 4px;
		border-radius: 5px;
	}
	@media (max-width: 768px){
		display: flex;
	}
`

export default Navbar


