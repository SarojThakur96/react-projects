import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index,hexValue}) => {

   const [alert, setAlert] = useState(false);

   const bcg = rgb.join(',');
   console.log(bcg);

   const hexColor = `#${hexValue}`

   useEffect(() => {
     const timeout = setTimeout(() =>setAlert(false),2000)
     return () => {
       clearTimeout(timeout)
     }
   }, [alert])

  return (
      <article className ={`color ${index>10 && 'color-light'} `} style = {{ backgroundColor: `rgb(${bcg})`}}
      onClick={() =>{
        setAlert(true);
        navigator.clipboard.writeText(hexColor);
      }}
      >
          <p className = 'percent-value'>{weight}%</p>
          <p className = 'color-value'>{hexColor}</p>
          { alert && <p className = 'alert'> copy to clipboard</p>}
      </article>
  )
}


export default SingleColor
