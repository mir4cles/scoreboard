import React, { useState } from "react"

export default function AddPlayerForm(props) {
  const [name, newPlayer] = useState("")

  // const onClickAddPlayer = () => {
  //   // call the callback prop passed down from the scoreboard
  //   console.log(props.name)
  //   props.addPlayer(props.name)
  // }

  function handleSubmit(event) {
    // do not refresh the page on submit
    event.preventDefault()
    props.addPlayer(name)

    // clear input field
    newPlayer("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        placeholder="Write name"
        value={name}
        onChange={event => newPlayer(event.target.value)}
      />
      <input type="submit" />
    </form>
  )
}
