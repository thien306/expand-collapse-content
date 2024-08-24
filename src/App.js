import React, {Component} from'react';
import Content from './Content';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand : false
    };
  }

  toggleExpand = () => {
    this.setState(prevState => ({isExpand : !prevState.isExpand}));
  };

  render() {
    return(
    <div>
      <h1>Conditional rendering</h1>
      {this.state.isExpand ? (
        <div>
          <Content/>
          <button onClick={this.toggleExpand}>Đóng giới thiệu</button>
        </div>
      ) : (
        <button onClick={this.toggleExpand}>Xem giới thiệu</button>

      )}
    </div>
    )
  }
}



export default App;


