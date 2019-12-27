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

  setNewArrayofPaintings = () => {
    const index = [...Array(97).keys()] // this works
    const newArray = []
    var i = 0
    while (i < 8) {
      var rand = index[Math.floor(Math.random() * index.length)] // this works
      var indexNew = index.indexOf(rand)
      if (indexNew > -1) {
        index.splice(indexNew, 1)
        newArray.push(rand)
      }
      i++
    }
    return newArray
  }

  createNewArray = () => {
    // this is the function to call on click of 'start game'
    const newArray = this.setNewArrayofPaintings()
    const arrayOf16 = newArray.concat(...newArray)
    this.shuffle(arrayOf16)
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
    this.setState({ showLeaderboard: true })
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
