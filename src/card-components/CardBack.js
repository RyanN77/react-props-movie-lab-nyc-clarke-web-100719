import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = (rating) => {
    if(rating){
      return (
        <img src={imgMapper[zero]}></img>
        )
    } else {
      return <h4>no rating found</h4>
    }
    // implement meeeee! See the readme for instructions
  }

  render() {
    return (
      <div className="card-back">
        <h3 className="title"></h3>
        <span />
        {console.log(this.props)}
        {this.props.title}
        {this.props.genres.join(', ')}
        {this.generateRatingElement(this.props.IMDBRating)}
        
        { /* your rating element should go here -- you can invoke methods within JSX, à la: this.myMethod() */ }
        <span />
        <h5 className="genres"></h5>
      </div>
    )
  }
}
