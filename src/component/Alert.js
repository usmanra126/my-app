import React,{useState} from 'react'

function Alert(props) {
   
  return (
    <div style={{height:'50px'}}>
    {props.alert &&<div className={`alert alert-{props.alert.types} alert-dismissible fade show`} role="alert" >
  <strong>{props.alert.types}</strong>{props.alert.meg}
</div>}
</div>
  )
}

export default Alert