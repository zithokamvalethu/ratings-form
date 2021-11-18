import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     ratings: "",
      rate: [],
    };
  }
  starRatings(starNumberRating) {
        var ratings = [];
        for (var i = 0; i < starNumberRating; i++) {
          ratings.push("*");
        }

        return ratings;
  }
  updateMessage(event) {
 
    this.setState({
      ratings: event.target.value,
    });
  }
  handleClick(event) {
    event.preventDefault();
    if (Number(this.state.ratings) > 10) {
      return alert(
      "Number should not be above 10"
    )
    }
    this.setState({
      ...this.state, rate: [...this.state.rate, this.starRatings(+this.state.ratings)]
    })
    this.setState({
      ratings:""
    })

  }
  renderRows() {
    return this.state.rate.map(function (rating,index) {
      return (
        <tr key={index}>
          <td>
            {rating
           }
          </td>
        </tr>
      );
    });
  }
  render() {
  

    return (
      <div>
        <form onSubmit={this.handleClick.bind(this)}>
          <label>rating</label>
          <input type="number" onChange={this.updateMessage.bind(this)} />

          <button type="submit">submit rate</button>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>Star Rating</th>
            </tr>
          </thead>
          <tbody> {this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
