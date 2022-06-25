import React,{useState} from 'react'
import './Keypad.css';

function Keypad() {
    const limit = 4;
    const [x, setX] = useState('')
    const [y, setY] = useState('')
    const [buttonLabel, setButtonLabel] = useState([1,2,3,4,5,6,7,8,9,0])
    const text='<-'
    function inputHandler(e){
        if(x.length!==limit){
            setX(x + e.target.innerHTML);
        }  
    }
    
    const deleteOne=()=>{
        setX('')
    }

    const enterHandler=()=>{
        alert("Password Entered "+x)
    }
  return (
    <><div>
          <h1>{x}</h1>
          <div className='keypad-container1'>
              {buttonLabel.map((i) => {
                  return <button className='number-button' onClick={inputHandler}>{i}</button>;
              })}
              <button className='number-button' onClick={deleteOne}>{text}</button>
              <button onClick={enterHandler}>Enter</button>

          </div>
          </div>
      {/* </div><div class="btn-group-vertical ml-4 mt-4" role="group" aria-label="Basic example">
              <div class="btn-group">
                  <input class="text-center form-control-lg mb-2" id="code"/>
                  </div>
              <div class="btn-group">
                  <button type="button" class="btn btn-outline-secondary py-3" onclick="document.getElementById('code').value=document.getElementById('code').value + '1';">1</button>
                  <button type="button" class="btn btn-outline-secondary py-3" onclick="document.getElementById('code').value=document.getElementById('code').value + '2';">2</button>
                  <button type="button" class="btn btn-outline-secondary py-3" onclick="document.getElementById('code').value=document.getElementById('code').value + '3';">3</button>
              </div>
              <div class="btn-group">
                  <button type="button" class="btn btn-outline-secondary py-3" onclick="document.getElementById('code').value=document.getElementById('code').value + '4';">4</button>
                  <button type="button" class="btn btn-outline-secondary py-3" onclick="document.getElementById('code').value=document.getElementById('code').value + '5';">5</button>
                  <button type="button" class="btn btn-outline-secondary py-3" onclick="document.getElementById('code').value=document.getElementById('code').value + '6';">6</button>
              </div>
              <div class="btn-group">
                  <button type="button" class="btn btn-outline-secondary py-3" onclick="document.getElementById('code').value=document.getElementById('code').value + '7';">7</button>
                  <button type="button" class="btn btn-outline-secondary py-3" onclick="document.getElementById('code').value=document.getElementById('code').value + '8';">8</button>
                  <button type="button" class="btn btn-outline-secondary py-3" onclick="document.getElementById('code').value=document.getElementById('code').value + '9';">9</button>
              </div>
              <div class="btn-group">
                  <button type="button" class="btn btn-outline-secondary py-3" onclick="document.getElementById('code').value=document.getElementById('code').value.slice(0, -1);">&lt;</button>
                  <button type="button" class="btn btn-outline-secondary py-3" onclick="document.getElementById('code').value=document.getElementById('code').value + '0';">0</button>
                  <button type="button" class="btn btn-primary py-3" onclick="">Go</button>
              </div>
          </div> */}
          </>
  )
  

}

export default Keypad