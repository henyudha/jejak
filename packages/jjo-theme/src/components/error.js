import React from "react"
import { connect } from "frontity"

const Error = ({ state }) => {
  return (
    <>
      <h2>404 Error</h2>
      <p>
        Link ini <em>{state.router.link}</em> tidak ada.
      </p>
    </>
  )
}

export default connect(Error)