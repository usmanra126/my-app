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
}

const[text,settext]=useState("enter the vlaue")

  return (
    <>
   <h1>{props.headings}</h1>
  <div className="mb-3">
  {/*<label for="my box" class="form-label">Example textarea</label>*/}
  <textarea className="form-control"  id="my box" rows="7" value={text} onChange={handleonchange}  ></textarea>

</div>
  <button className="btn btn-primary" onClick={handleupclick}>convert to uppercase</button>

  <button className="btn btn-primary" onClick={lowercase}>convert lower case</button>
  <button className="btn btn-primary" onClick={handlecopy}>copy text</button>

  <div className="contaier">
    <p>summary text</p>
    <h1>{text.split(" ").length}words and {text.length}character</h1>
    <p>{0.008*text.split(" ").length}read time</p>
  </div>

    </>
  )
}
