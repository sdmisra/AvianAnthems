import React from 'react'
import './Error.css'

type ErrorProps = {
  message: string
}

const Error = (props : ErrorProps) => {
  return (
    <div className="error-window">
      <h2 className="error-text">{props.message}</h2>
    </div>
  )
}

export default Error;