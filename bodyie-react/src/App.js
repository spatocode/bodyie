import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

function Measurement({ measurementData=[], setMeasurementData=f=>f }) {
  const handleSelect = (selected) => {
    const URL = "http://localhost:8000/core/measurement"
    fetch(URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selected)
    })
    .then(async res => {
      if (!res.ok) {
        // create error object and reject if not a 2xx response code
        let err = new Error("HTTP status code: " + res.status)
        err.status = res.status
        err.response = await res.json()
        throw err
      }
      return res.json()
    })
    .then(json => {
      toast.success("Recorded successfuly")
      // setMeasurementData([])
    })
    .catch(err => {
      console.error(err)
      toast.error("An error occurred")
    })
  }

  return (
    <div className='card'>
      <h1>SELECT YOUR WAIST SIZE</h1>
      {measurementData.map(data =>
        <button className='button-item' onClick={() => handleSelect(data)}>{data.waist}</button>
      )}
    </div>
  )
}

function Form({ setMeasurementData=f=>f }) {
  const [age, setAge] = useState('')
  const [waist, setWaist] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [isInputWaist, setIsInputWaist] = useState(false)

  const handleFetching = async (e) => {
    e.preventDefault()
    setIsFetching(true)

    const URL = "http://localhost:8000/core/measurement"
    let param = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    }
    const payload = {
      height: height,
      weight: weight,
      age: age,
      waist: waist
    }
    param = waist !== '' ? {...param, method: 'POST', body: JSON.stringify(payload)} : param
    fetch(`${URL}?height=${height}&weight=${weight}&age=${age}`, param)
    .then(async res => {
      if (!res.ok) {
        // create error object and reject if not a 2xx response code
        let err = new Error("HTTP status code: " + res.status)
        err.status = res.status
        err.response = await res.json()
        throw err
      }
      return res.json()
    })
    .then(json => {
      if(json.length > 0) {
        setMeasurementData(json)
      }
      else if (isInputWaist) {
        toast.success("Recorded successfuly")
        setAge('')
        setHeight('')
        setWeight('')
        setWaist('')
        setIsInputWaist(false)
      }
      else {
        setIsInputWaist(true)
      }
      setIsFetching(false)
    })
    .catch(err => {
      console.error(err)
      toast.error("An error occurred")
      setIsFetching(false)
    })
  }

  return (
    <div className='card'>
      <h1>ENTER YOUR BODY MEASUREMENT</h1>
      <div className='form'>
        <form onSubmit={handleFetching}
          method="GET" className="was-validation">
          <input type="text" id="height" value={height} required={true}
            className="form-input" placeholder="Height"
            onChange={e => setHeight(e.currentTarget.value)} />
          <input type="text" id="weight" value={weight} required={true}
            className="form-input" placeholder="Weight"
            onChange={e => setWeight(e.currentTarget.value)} />
          <input type="text" id="age" value={age} required={true}
            className="form-input" placeholder="Age"
            onChange={e => setAge(e.currentTarget.value)} />
          {isInputWaist ?
            <input type="text" id="waist" value={waist} required={true}
              className="form-input" placeholder="Waist"
              onChange={e => setWaist(e.currentTarget.value)} />
            : null
          }
          <button type="submit" disabled={isFetching}>
            {isFetching ? "Fetching..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  )
}

function App() {
  const [measurementData, setMeasurementData] = useState([])

  return (
    <div className="App">
      <ToastContainer />
      {measurementData.length > 0 ?
        <Measurement setMeasurementData={setMeasurementData}
          measurementData={measurementData} />
        : <Form setMeasurementData={setMeasurementData}/>
      }
    </div>
  );
}

export default App;
