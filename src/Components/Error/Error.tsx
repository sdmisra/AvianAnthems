import React from 'react'

type ErrorProps = {
  message: string
}

const Error = (props : ErrorProps) => {
  return (
    <div className="error-window">
      <h2>{props.message}</h2>
    </div>
  )
}

export default Error;