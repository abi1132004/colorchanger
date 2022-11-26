import React,{useState} from 'react'
import './color.css'
import Select from 'react-select'
function Color() {
  var labels=[
    {
       value:1,
       label:"blue"
    },
    {
       value:2,
       label:"red"
    },
    {
      value:3,
      label:"lime"
    },
    {
       value:4,
       label:"orange"
    },
    {
       value:5,
       label:"pink"
    },
    {
      value:6,
      label:"green"
   },
   {
      value:7,
      label:"aqua"
 },
 {
      value:8,
      label:"black"
},
  ];
  var [setbgcolor,ddlvalue]=useState(labels.label);
  var ddlhandle = (e) => {
    ddlvalue(e.label);
  }
  return ( 
    <><h1 className="head">COLOR CHANGER</h1>
      <div className='sel'>
        <style>{'.{background-color:'+setbgcolor+';}'}</style>
        <Select options={labels} onChange={ddlhandle} className="sel"></Select>
        </div>
        <div className='clr1'>
        <style>{'.clr1 {background-color:'+setbgcolor+';}'}</style>
        </div></>
  )
}
export default Color;