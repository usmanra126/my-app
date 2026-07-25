import React,{useState} from 'react'

function Alert(props) {
   
  return (
    props.alert &&<div className={`alert alert-{props.alert.types} alert-dismissible fade show`} role="alert" >
  <strong>{props.alert.types}</strong>{props.alert.meg}

</div>
  )
}

export default Alert