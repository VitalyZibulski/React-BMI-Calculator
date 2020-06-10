import React, {useState} from 'react';
import Slider from "./Slider";

export default function App() {
  let [height, setHeight] = useState(194)
  let [weight, setWeight] = useState(100)

  let bmi = calculateBMI(height, weight);
  let bmiText = tellBMICategory(bmi)
  let bmiColor = tellBMIColor(bmi)

  return <div className="p-4">
    <h1 className="h3">BMI Calculator</h1>
      <Slider min={140} max={200} value={height} title="Height, cm" onChange={setHeight} />
      <Slider min={30} max={180} value={weight} title="Weight, kg" onChange={setWeight} />
      <hr/>
      <div>
        BMI: <strong>{bmi.toFixed(1)}</strong>
        {" "}
        <span className={`badge badge-${bmiColor}`}>
          {bmiText}
        </span>
      </div>
    </div>
}

function calculateBMI(height, weight) {
  return weight / ((height / 100) ** 2)
}

function tellBMICategory(bmi){
  return bmi <= 18.5 ? "Underweight" :
         bmi <= 24.9 ? "Normal weight" :
         bmi <= 29.9 ? "Overweight" :
                       "Obese"
}

function tellBMIColor(bmi){
  return bmi <= 18.5 ? "warning" :
         bmi <= 24.9 ? "success" :
         bmi <= 29.9 ? "warning" :
                       "danger"
}
