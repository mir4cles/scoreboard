import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom"

export default function NavBar() {
  return (
    <ul>
      <li>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          exact
          to="/"
        >
          Home Page
        </NavLink>
      </li>
      <li>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          exact
          to="/discover"
        >
          Discover Movies
        </NavLink>
      </li>
      {/* <li class="nav-item">
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          exact
          to="/scoreboard"
        >
          Scoreboard
        </NavLink>
      </li> */}
      <li class="nav-item">
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          exact
          to="/about"
        >
          About this website
        </NavLink>
      </li>
    </ul>
  )
}
