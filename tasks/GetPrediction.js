import React from "react"

const ShowPrediction = (props) => <div>{props.predictionText}</div>

class GetPrediction extends React.Component {
  state = {
    predictionText: "",
    predictionPicked: false,
  }

  static defaultProps = {
    predictions: [
      {
        id: 1,
        text: "This is the first prediction",
      },
      {
        id: 2,
        text: "This is the second prediction",
      },
      {
        id: 3,
        text: "This is the third predicttion",
      },
    ],
  }

  handleShowPrediction = () => {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(1)
      max = Math.floor(3)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const numberOfPredictions = this.props.predictions.length
    const randomId = getRandomIntInclusive(1, numberOfPredictions)
    const predictionPicked = this.props.predictions.filter(
      (prediction) => prediction.id === randomId
    )

    const prediction = predictionPicked.map((prediction) => {
      const predictionText = prediction.text

      return predictionText
    })

    this.setState({
      predictionPicked: true,
      predictionText: prediction,
    })
  }

  render() {
    return (
      <>
        <button onClick={this.handleShowPrediction}>Zobacz wróżbę</button>
        {this.state.predictionPicked ? (
          <ShowPrediction predictionText={this.state.predictionText} />
        ) : null}
      </>
    )
  }
}

export default GetPrediction
