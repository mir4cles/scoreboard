import React, { useState } from "react"
import Player from "./Player"
import AddPlayerForm from "./AddPlayerForm"

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ])

  // sorting players
  const [sort_by, set_sort_by] = useState("score") // either "score" or "name"

  function compare_score(player_a, player_b) {
    return player_b.score - player_a.score
  }

  function compare_name(player_a, player_b) {
    if (player_a.name < player_b.name) {
      return -1
    }
    if (player_a.name < player_b.name) {
      return 1
    }
    return 0
  }

  const change_sorting = event => {
    console.log("new sort order:", event.target.value)
    set_sort_by(event.target.value)
  }

  const players_sorted = [...players].sort((player_a, player_b) => {
    if (sort_by === "score") {
      console.log("sorted by score")
      return compare_score(player_a, player_b)
    }
    if (sort_by === "name") {
      console.log("sorted by name")
      return compare_name(player_a, player_b)
    }
  })

  // callback function to increment score
  const incrementScore = (id, incrementScore) => {
    const new_players_array = players.map(player => {
      // decide whether this player's score needs to be incremented
      if (player.id === id) {
        // and if so, create a new player object,
        return {
          // but first copying over the player object's data
          ...player,
          // and then overriding the score property to be incremented
          score: player.score + 1,
        }
      } else {
        // else, just keep them
        return player
      }
    })

    console.log(new_players_array)
    set_players(new_players_array)
  }

  const resetScore = () => {
    const new_players_array = players.map(player => {
      // decide whether this player's score needs to be incremented
      if (player.score !== isNaN) {
        // and if so, create a new player object,
        return {
          // but first copying over the player object's data
          ...player,
          // and then overriding the score property to be incremented
          score: (player.score = 0),
        }
      } else {
        // else, just keep them
        return player
      }
    })

    console.log(new_players_array)
    set_players(new_players_array)
  }

  const randomScore = () => {
    const new_players_array = players.map(player => {
      // decide whether this player's score needs to be incremented
      if (player.score !== isNaN) {
        // and if so, create a new player object,
        return {
          // but first copying over the player object's data
          ...player,
          // and then overriding the score property to be incremented
          score: (player.score = Math.floor(Math.random() * 100)),
        }
      } else {
        // else, just keep them
        return player
      }
    })

    console.log(new_players_array)
    set_players(new_players_array)
  }
  // callback to add player
  function addPlayer(name) {
    console.log("Let's add a new player with the name:", name)
    const newPlayer = {
      id: players.length + 1,
      name: name,
      score: 0,
    }

    const updatePLayers = [...players, newPlayer]

    set_players(updatePLayers)
  }

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <p>
        <button onClick={resetScore}>Reset</button>
      </p>
      <p>
        <button onClick={randomScore}>Randomize</button>
      </p>
      <p>Player's scores:</p>
      <ul>
        {players_sorted.map(player => {
          return (
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
              incrementScore={incrementScore}
            />
          )
        })}
      </ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  )
}
// export default function Scoreboard() {
//   return (
//     <div className="Scoreboard">
//       <p>Player's scores:</p>
//       <ul>
//         <Player name="Violeta" />
//         <Player name="Eszter" />
//         <Player name="Jeroen v2" />
//         <Player name="Lisa" />
//       </ul>
//       <p>
//         <AddPlayerForm />
//       </p>
//     </div>
//   )
// }
