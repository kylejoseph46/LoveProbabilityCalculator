import { useState, useRef } from 'react'
import LovePhoto from './../photos/LovePhoto.jpeg'

/*
3) Pass those variables as params to the backend.
4) Use express to catch the params and, put it in the axios URL, make this request to a URL with JSON data.
5) Fetch the data from the url the backend is storing the API JSON data at. 
6) Grab the probability recieved from the API and store it in my probability state and display it above the image.
7) Place API key in .env, and place that .env in my .gitignore file.
*/

function Body() {

  //This probability gets set to whatever the probability returned by the API says.
  const [probability, setProbability] = useState('')
  let name1Ref = useRef()
  let name2Ref = useRef()

  function onSubmit(e) {
    e.preventDefault()
    let name1Value = name1Ref.current.value
    let name2Value = name2Ref.current.value
    
  }

  return (
    <div className="body">
      <div className="description">
        <h2>Love Probability Calculator</h2>
      </div>

      <div className="form-info">
        <form onSubmit={onSubmit}>
          <input type="text" ref={name1Ref} placeholder="Enter name 1"></input>
          <input type="text" ref={name2Ref} placeholder="Enter name 2"></input>
          <button type="Submit">Generate Probability</button>
        </form>
      </div>
      <div className="description">
        <h2>Probability: 79%</h2>
      </div>
      <div className="photo-collection">
        <img src={LovePhoto} alt="Love Photo" />
      </div>
    </div>
  )
}

export default Body