
import "./Worddata.css"
import { Component } from "react";
class Worddata extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="word" onSubmit={this.handleSubmit}>
          <label>
           
                  <input className="inpuword" type="text" value={this.state.value} onChange={this.handleChange}
            placeholder= {this.props.type}     />
          </label>
          <input className="inpusubmit" type="submit" value="Submit" />
        </form>
      );
    }
}
export default Worddata