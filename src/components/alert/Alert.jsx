import Alert from 'react-bootstrap/Alert';
import React from 'react'

function AlertComponent(props) {
  return (
    <Alert key={props.key} variant={props.variant}>
    </Alert>
  )
}

export default AlertComponent
