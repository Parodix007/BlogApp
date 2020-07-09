import React from 'react';

class App extends React.Component{
  state={
    dane: null
  }
  componentDidMount(){
    fetch('/dane')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => new Error(err))
  }
  render(){
    return(
      <>
        <h1>Client heredasdwasdaw</h1>
        <p>{this.state.dane}</p>
      </>
    )
  }
}
export default App;
