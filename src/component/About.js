import React,{useState} from 'react'

export default function About(props) {

    const[mystyle,setMystyle]=useState({
        color:'black',
        backgroundColor:'white',
    })

    const[btntext,setbtntext]=useState("Enable dark mode")

    const handleclick=()=>{

        if(mystyle.color === 'black'){
            setMystyle({
                color:'white',
                backgroundColor:'black',
            })
            setbtntext("Enable light mode")
        }

        else{
            setMystyle({
                color:'black',
                backgroundColor:'white',
            })
            setbtntext("Enable dark mode")
        }
    }

  return (
    <>

    <div className='container' style={mystyle}>
         <h1>{props.about}</h1>

        <div className="accordion" id="accordionExample">

  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>

    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the first item’s accordion body.</strong>
      </div>
    </div>
  </div>

  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>

    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the second item’s accordion body.</strong>
      </div>
    </div>
  </div>

  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>

    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the third item’s accordion body.</strong>
      </div>
    </div>
  </div>

</div>

<div className='container my-3'>
    <button onClick={handleclick} type="button" className="btn btn-primary">
        {btntext}
    </button>
</div>

    </div>

    </>
  )
}