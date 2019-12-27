import React from 'react'
import '../css/App.css'
import '../css/index.css'
import paintings from '../data/paintings'
import BoardGame from './BoardGame'
import { withRouter } from 'react-router-dom'

class App extends React.Component {
  state = {
    paintings: [],
    indeciesToPlay: [],
    showStartGameButton: true
  }

  createNewArray = () => {
    // this is the function to call on click of 'start game'
    const newArray = this.setNewArrayofPaintings()
    // creates array of 8 random numbers from 0 to 96
    const arrayOf16 = newArray.concat(...newArray)
    // doubles array of 8 random numbers from 0 to 96
    this.shuffle(arrayOf16)
    // shuffles numbers of the array
  }

  setNewArrayofPaintings = () => {
    const index = [...Array(97).keys()]
    // creates an array of whole numbers 0 to 96
    const newArray = []
    var i = 0
    while (i < 8) {
      // limits length of new array to 8 numbers
      var rand = index[Math.floor(Math.random() * index.length)]
      // pulls a randon number out of the index array
      var indexNew = index.indexOf(rand)
      // sets the index of the randon number as a variable
      if (indexNew > -1) {
        index.splice(indexNew, 1)
        // splices the randon number from the index array
        newArray.push(rand)
        // pushes the randon number into a new array
      }
      i++
    }
    return newArray
    // returns array of 8 randon numbers from the 'index' array without ever
    // repeating any numbers
  }

  shuffle = array => {
    let counter = array.length
    while (counter > 0) {
      const index = Math.floor(Math.random() * counter)
      counter--
      const temp = array[counter]
      array[counter] = array[index]
      array[index] = temp
    }
    this.setState({ indeciesToPlay: array })
  }

  paintingsToPass = () => {
    const indecies = this.state.indeciesToPlay
    const paintings = this.state.paintings
    return indecies.map(index => paintings[index])
  }

  componentDidMount () {
    this.setState({ paintings })
  }

  startGame = () => {
    this.createNewArray()
  }

  endGame = () => {
    this.setState({ showStartGameButton: false })
    //  this.props.history.push('/')
  }

  render () {
    const paintingsToPass = this.paintingsToPass()
    return (
      <div className='App-header'>
        {this.state.showStartGameButton ? (
          <button
            size='large'
            primary
            className='start-page-buttons'
            onClick={() => this.startGame()}
          >
            {' '}
            Start Game{' '}
          </button>
        ) : (
          <h2>CONGRATS, THANKS FOR PLAYING :)</h2>
        )}
        <br />
        <BoardGame
          endGame={this.endGame}
          paintingsToPass={paintingsToPass}
          createNewArray={this.createNewArray}
        />
      </div>
    )
  }
}

export default withRouter(App)
