import React, { useState } from 'react'
import styled from 'styled-components'
import { hover , bright} from '../colors'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Nav>
			<Container>
				<MenuLink href="/"><StyledH1 className="name-logo">Justin_j_Davies</StyledH1></MenuLink>
				<Hamburger onClick={()=>setIsOpen(!isOpen)}>
					<span></span>
					<span></span>
					<span></span>
				</Hamburger>
				<Menu isOpen={isOpen}>
					<LinkWrapper>
						<MenuLink href="/projects">Projects</MenuLink>
						<MenuLink href="/contact">Contact</MenuLink>
					</LinkWrapper>
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
`
const StyledH1 = styled.h1`
	padding: 5px;
	text-align: center;
	&:hover {
		color: #${bright};
	}
`
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	margin: auto;
	padding: 2rem;

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
		border-radius: 1rem;
		margin-top: 1rem;
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
		color: #${bright};
		text-shadow: 1px 3px #${hover};
	}
`
const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;

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


