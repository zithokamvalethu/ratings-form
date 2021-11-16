import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     ratings: "*",
      rate: [],
    };
  }
  updateMessage(event) {
 
    this.setState({
      ratings: event.target.value,
    });
  }
  handleClick(event) {
   event.preventDefault();
    var rate =this.state.rate;
    rate.push(this.state.ratings);
    this.setState({
      rate: rate,
    });
  
    
  }



  renderRows() {
    return this.state.rate.map(function (rating,ratingsNumber) {
      return (
        <tr key={"rate" + ratingsNumber}>
          <td>
            <input type="number" value={rating} />
          </td>
        </tr>
      );
    });
  }
  render() {
  

    return (
      <div>
        <label>rating</label>
        <input type="number" onChange={this.updateMessage.bind(this)} />

        <button onClick={this.handleClick.bind(this)}>submit rate</button>
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
