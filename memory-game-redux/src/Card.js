import React from 'react'

class Card extends React.Component {
  state = {
    flippedOver: false
  }

  flipCard = e => {
    this.setState({ flippedOver: !this.state.flippedOver })
  }

  flipCardAndInitiate = e => {
    this.props.flipCardOnBoard()
    this.setState(
      { flippedOver: !this.state.flippedOver },
      this.props.putPaintingInPlay(this.props.card)
    )
  }

  checkImgToShow = () => {
    if (this.props.removedPaintings.includes(this.props.card)) {
      return <div className='out-of-rotation' />
    }
    if (this.props.flippedCards === 0 && this.state.flippedOver === true) {
      this.setState({ flippedOver: false })
      return (
        <div>
          {' '}
          <img
            onClick={e => this.flipCardAndInitiate(e)}
            className='img'
            src='http://www.thecontemporarychester.com/wp-content/uploads/2016/01/image9.jpg'
            alt='Make Art Not War artist: Shepard Fairey'
          />
        </div>
      )
    }
    if (
      this.state.flippedOver === true &&
      this.props.flippedCards > 1 &&
      this.props.inPlay[0] === this.props.card
    ) {
      return (
        <div className='flipped-card-div'>
          <img
            className='img-flipped'
            src={this.props.card.image}
            alt={this.props.card.title}
          />
          <p className='details'>
            Title: {this.props.card.title} Artist: {this.props.card.artist.name}
          </p>
          <button
            className='ui mini button blue'
            onClick={e => this.props.checkMatch(this.props.card)}
          >
            Match?
          </button>
        </div>
      )
    }
    if (this.state.flippedOver === true) {
      return (
        <div className='flipped-card-div'>
          <img
            className='img-flipped'
            src={this.props.card.image}
            alt={this.props.card.title}
          />
          <p className='details'>
            Title: {this.props.card.title} Artist: {this.props.card.artist.name}
          </p>
        </div>
      )
    }
    if (this.props.flippedCards >= 2) {
      return (
        <div>
          {' '}
          <img
            className='img'
            src='http://www.thecontemporarychester.com/wp-content/uploads/2016/01/image9.jpg'
            alt='Make Art Not War artist: Shepard Fairey'
          />
        </div>
      )
    }
    if (this.state.flippedOver === false) {
      return (
        <div>
          {' '}
          <img
            onClick={e => this.flipCardAndInitiate(e)}
            className='img'
            src='http://www.thecontemporarychester.com/wp-content/uploads/2016/01/image9.jpg'
            alt='Make Art Not War artist: Shepard Fairey'
          />
        </div>
      )
    }
  }

  // }

  render () {
    return <div className='card-div'>{this.checkImgToShow()}</div>
  }
}

export default Card
