import React from "react";
class App extends React.Component{

  state = {
    isLoading: true
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false})
    },2000)
  } 

  render(){
    console.log("render");
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading.." : "We are ready"}
      </div>
    )
  }  
}

export default App;
