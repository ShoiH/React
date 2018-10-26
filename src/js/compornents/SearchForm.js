import React from 'react'
import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

class App extends React.Component{
  render(){
    return(
      <div>
        Hello World!
      </div>
    );
  }
}

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <DatePicker
        selected={thisstate.startDate}
        onChange={this.handleChange}
    />;
  }
}

ReactDOM.render(<App />, document.getElementById("content"))
ReactDOM.render(<Example />, document.getElementById("content2"))
