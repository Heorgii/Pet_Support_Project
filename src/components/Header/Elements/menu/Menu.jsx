import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Burger, Span } from './menu.styled';//Container,

const Navigation = styled.header`
  .btn {
    display: none;
    color: #222;
    font-size: 2rem;
  } 
 
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;

    .btn {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    ul.collapsed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    padding: 40px;
    transform: translateX(100%);
    transition: transform 250ms ease-in-out;
    display: flex;
    flex-direction: column;
    background-color: yellow;

      &.is-expanded {
        max-height: 500px; 
        transform: translateX(0);
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 20px;
      }
    } 
   }  
`;

export const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  }

  {/*  <Container>
   <Burger aria-hidden="true"
        onClick={e => handleToggle(e)}>
        <Span />
      </Burger> 
</Container> */}
  return (

    <div>
      <Navigation>
        {/* <button className="btn"
          // aria-hidden="true"
          onClick={e => handleToggle(e)}>open</button> */}

        <Burger
          onClick={e => handleToggle(e)}>
          <Span />
        </Burger>

        {/* <nav className="nav"> */}

        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>

          <Burger
            onClick={e => handleToggle(e)}>
            <Span />
          </Burger>

          {/* 
            <NavLink activeClassName="active" to="/">
              <li>home</li>
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              <li>about</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li>contact</li>
            </NavLink> */}

        </ul>
        {/* </nav> */}
      </Navigation>
    </div>

  );
};
