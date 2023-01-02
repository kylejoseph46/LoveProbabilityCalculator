import axios from 'axios'
import { useState, useRef } from 'react'
import LovePhoto from './../photos/LovePhoto.jpeg'

function Body() {

  const [probability, setProbability] = useState('')
  const [suggestion, setSuggestion] = useState('')
  let name1Ref = useRef()
  let name2Ref = useRef()

  function onSubmit(e) {
    e.preventDefault()
    let name1Value = name1Ref.current.value
    let name2Value = name2Ref.current.value

    const options = {
      method: 'GET',
      url: 'http://localhost:8000/results',
      params: { sname: name1Value, fname: name2Value },
    };

    axios.request(options).then(function (response) {
      console.log(response.data)
      setProbability(response.data.percentage)
      setSuggestion(response.data.result)
    }).catch(function (error) {
      console.error(error);
    });

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
      <div className="results">
        <h2>Compatibility: {probability}%</h2>
      </div>
      <div className="results">
        <h2 className="sugg">Suggestion: {suggestion}</h2>
      </div>
      <div className="photo-collection">
        <img src={LovePhoto} alt="Love Photo" />
      </div>
    </div>
  )
}

export default Body