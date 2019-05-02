import React from 'react'

function Card() {
  return (
    <a href='https://google.com' className="card">
        <div
            className="card__img"
            style={{
                backgroundImage:
                'url("https://lh3.googleusercontent.com/PRotPPURtGlMjzxd8Irny87OqVJUjfhzgve-xPsmnzpwzf9uC1wtsQ5_DeVg5n1P-AOKb7Coj79N0abcYKn5WVvu3najPsRxV5szk0c")'
            }}
        />
        <div className="card__content">
            <div className="card__type">
            Course
            </div>
            <div className="card__title">
            Introduction to Machine Learning Problem Framing
            </div>
            <div className="card__description">
            This one-hour course introduces the machine learning mindset and helps you identify appropriate situations for machine learning.
            </div>
        </div>
        <i className="card__openInNewIcon material-icons">
            open_in_new
        </i>
    </a>
  )
}

export default Card
