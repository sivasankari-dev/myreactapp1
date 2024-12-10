import React, { Component } from 'react'
 
class MainComponent extends Component {
    constructor(props){
        super(props);
    }
    state = {
      data : [{name  : "xyz", age : 12, img : "flower.jpeg" ,dob : "11/12/2000", data : {address : "xxxx"}},{name  : "xyz1", age : 21,img : "flower.jpeg" , dob : "21/12/2000", data : {address : "xxxx"}},{name  : "xyz2", age : 28,img : "flower.jpeg" , dob : "09/2/2000", data : {address : "xxxx"}}],
      show : false
    }
    clickHandler = () =>{
      let initialData = [...this.state.data];
      initialData[0].name = "ABC";
      this.setState({show : !this.state.show});
      this.setState({data : initialData});
    }
  render() {
    console.log(this.props)
    return (
      <>
      <div>ClassComponent {this.state.count}</div>
      {this.state.show ? <h1>Heading</h1> : <h1>Heading 2</h1>}
      {this.state.data.map((item)=>{
          return <p>{item.name}</p>
      })}
      <button type = "button" onClick={()=>this.clickHandler()}>Click me</button>
      </>
    )
  }
}
 
export default MainComponent;
 