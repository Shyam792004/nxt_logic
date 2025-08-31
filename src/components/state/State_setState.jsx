import { Component } from "react";

class State_setState extends Component{

    state={
        showText:false,
        changeColor:false
    };

    handleClick=()=>{
      console.log("button clicked");

      const {showText,changeColor}=this.state;
      this.setState({
          showText:!showText,
          changeColor:!changeColor
      });
    }

   
    render()
    {
        console.log(this.state);

        const {showText,changeColor}=this.state;
        return (
            <div>
            {
                showText ?
                <h3 style={{color:changeColor?"red":"black"}}>Class Component</h3>:
                null
            }
            <button onClick={this.handleClick}>ToggleText</button> 
            </div>
        )
    }
}

export default State_setState;