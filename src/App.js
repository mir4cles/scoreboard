import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import NavBar from "./components/NavBar"
// import ScoreboardPage from "./pages/ScoreboardPage"
// import Title from "./components/Title"

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/discover" component={DiscoverMoviesPage} />
        {/* <Route path="/scoreboard" component={ScoreboardPage} /> */}
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  )
}

export default App
