import React from "react"

const ShowPrediction = (props) => <div>{props.predictionText}</div>

class GetPrediction extends React.Component {
  state = {
    predictionText: "",
    predictionPicked: false,
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
    value: "",
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
    const predictionPicked = this.state.predictions.filter(
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

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleAddOption = () => {
    if (!this.state.value) {
      return alert("podaj wróżbę")
    } else {
      const predictions = [...this.state.predictions]
      predictions.push({ id: predictions.length + 1, text: this.state.value })
      this.setState({
        predictions,
      })
    }
  }

  render() {
    return (
      <>
        <button onClick={this.handleShowPrediction}>Zobacz wróżbę</button>
        <br />

        <input onChange={this.handleOnChange}></input>
        <button onClick={this.handleAddOption}>Dodaj wróżbę</button>
        <br />
        {this.state.predictionPicked ? (
          <ShowPrediction predictionText={this.state.predictionText} />
        ) : null}
      </>
    )
  }
}

export default GetPrediction
