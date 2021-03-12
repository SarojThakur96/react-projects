import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let counter = count;
    if(counter <= 0){
         counter = 0;
    }
    if(counter > 8){
      counter = 8;
    }
    setText(data.slice(0,counter));
  }
  
  return (
     <section className="section-center">

       <h3>tired of boring loreum ipsum?</h3>

       <form onSubmit={handleSubmit}>

         <label htmlFor="amount">Paragraph:</label>

          <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value) }/>  
          <button type="submit" className="btn"> generate </button>

       </form>
       <article className="lorem-text">
        {
          text.map((item,index) =>{
           return <p key={index}>{item}</p>
          })
        }
       </article>
      
     </section>
    )
}

export default App;
