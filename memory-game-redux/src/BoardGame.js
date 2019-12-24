import React from 'react'
import Card from './Card'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

let flippedCards = 0

class BoardGame extends React.Component {
  state = {
    paintingInPlay: [],
    cards: 0,
    removedPaintings: []
  }

  checkMatch = painting => {
    const painting1 = this.state.paintingInPlay[1]
    if (painting.id === painting1.id) {
      MySwal.fire({
        imageUrl: 'https://media.giphy.com/media/flYwljLseVZWE/giphy.gif',
        text: 'They Match!',
        imageWidth: 300,
        imageHeight: 200,
        width: 300,
        background: '#090526',
        confirmButtonColor: 'cornflowerblue',
        padding: '.25em',
        imageAlt: 'Bob Ross',
        animation: false
      })
      this.removePaintings(painting.id)
      this.setState({ paintingInPlay: [] })
      this.clearCardCount()
    } else {
      this.setState({ paintingInPlay: [] })
      MySwal.fire({
        imageUrl: 'https://media.giphy.com/media/rYEAkYihZsyWs/giphy.gif',
        imageWidth: 300,
        imageHeight: 200,
        confirmButtonText: 'Next!',
        background: '#090526',
        imageAlt: 'Bob Ross',
        padding: '.25em',
        confirmButtonColor: 'cornflowerblue',
        width: 300,
        animation: false
      })
      this.clearCardCount()
    }
  }

  flipCardOnBoard = () => {
    flippedCards += 1
    this.setState({ cards: flippedCards })
  }

  clearCardCount = () => {
    flippedCards = 0
    this.setState({ cards: flippedCards })
  }

  removePaintings = id => {
    const cards = this.props.paintingsToPass
    const newArray = cards.filter(
      filteredPainting => filteredPainting.id === id
    )
    this.setState(
      { removedPaintings: this.state.removedPaintings.concat(newArray) },
      this.endGame
    )
  }

  endGame = () => {
    if (this.state.removedPaintings.length === 16) {
      this.props.endGame()
    }
  }

  putPaintingInPlay = painting => {
    if (flippedCards === 1) {
      this.setState({ paintingInPlay: painting })
    }
    if (flippedCards === 2) {
      this.setState({ paintingInPlay: [painting, this.state.paintingInPlay] })
    }
  }

  render () {
    const cards = this.props.paintingsToPass

    return (
      <div className='grid-container'>
        {cards.map(card => (
          <Card
            className='grid-item'
            removedPaintings={this.state.removedPaintings}
            key={card.id}
            card={card}
            checkMatch={this.checkMatch}
            flippedCards={this.state.cards}
            inPlay={this.state.paintingInPlay}
            flipCardOnBoard={this.flipCardOnBoard}
            putPaintingInPlay={this.putPaintingInPlay}
          />
        ))}
      </div>
    )
  }
}

export default BoardGame
