import React, { useState } from 'react'
import CountUp from 'react-countup'

import './Lottery.css'

function randomNumber() {
  return Math.ceil(Math.random() * 9)
}

function LotteryRandomMachine({ title, size }) {
  const initialCounter = Array(size).fill(0)
  const [counter, setConter] = useState(initialCounter)

  const random = () => {
    const result = counter.map((_) => randomNumber())

    setConter(result)
  }

  return (
    <>
      <h1 className="lottery-title">{title}</h1>
      <div className="lottery-container">
        {counter.map((item, index) => (
          <CountUp key={index} className="lottery-number" end={item}></CountUp>
        ))}
      </div>
      <button className="lottery-random-button" onClick={random}>
        Random
      </button>
    </>
  )
}

function Lottery() {
  return (
    <>
      <LotteryRandomMachine
        title="สามตัวงวดนี้คือ.."
        size={3}
      ></LotteryRandomMachine>
      <LotteryRandomMachine
        title="สองตัวงวดนี้คือ.."
        size={2}
      ></LotteryRandomMachine>
    </>
  )
}

export default Lottery
