import { element } from 'prop-types';
import React,{useState} from 'react'

export default function Textform(props) {
  const handleupclick=()=>{
    console.log("when button on click work perform"+text)
    let newtext=text.toLocaleUpperCase();
    settext(newtext)
  props.showalert("converted into uppercase")

  }
  const lowercase=()=>{
   let newtext=text.toLocaleLowerCase();
   settext(newtext)
     props.showalert("converted into lowercase")
  }
  const handleonchange=(event)=>{
    console.log("handle is change")
    settext(event.target.value)
  }

  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    //alert("Text copied successfully!");
    props.showalert("copy text")
}

const[text,settext]=useState("enter the vlaue")

  return (
    <>
   <h1>{props.headings}</h1>
  <div className="mb-3">
  {/*<label for="my box" class="form-label">Example textarea</label>*/}
  <textarea className="form-control"  id="my box" rows="7" value={text} onChange={handleonchange}  ></textarea>

</div>
  <button className="btn btn-primary my-1 mx-1" onClick={handleupclick}>convert to uppercase</button>

  <button className="btn btn-primary my-1 mx-1" onClick={lowercase}>convert lower case</button>
  <button className="btn btn-primary my-1 mx-1" onClick={handlecopy}>copy text</button>

  <div className="contaier">
    <p>summary text</p>
    <h1>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}character</h1>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}read time</p>
  </div>

    </>
  )
}
