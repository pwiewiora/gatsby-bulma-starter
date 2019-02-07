import React, { Children } from 'react'
import { Link } from 'gatsby'
import logo from '../images/gatsby-icon.png'

const NavbarItem = props => (
  <Link className="navbar-item is-capitalized" to={props.page}>
    {props.pagename}
  </Link>
)
const NavbarBurger = props => (
  <div
    onClick={props.toggleMenu}
    className={`navbar-burger burger ${props.active ? 'is-active' : ''}`}
  >
    <span />
    <span />
    <span />
  </div>
)

export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
  }
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    })
  }
  render() {
    return (
      <nav className="navbar is-fixed-top has-shadow is-primary">
        <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <div
          className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}
        >
          <div className="navbar-end">
            <NavbarItem page="/" pagename="Home" />
            <NavbarItem page="/page-2/" pagename="Page 2" />
          </div>
        </div>
        </div>
      </nav>
    )
  }
}
