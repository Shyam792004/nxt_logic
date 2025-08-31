import { Component } from "react";

class LifeCycleInClass extends Component{

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

    //componentDidMount
    //componentDidUpdate
    //componentWillUnmount

    componentDidMount()
    {
        console.log("this is componentDidMount -call first when the page isload")
        this.setState({
            showText: !this.state.showText,
            changeColor:!this.state.changeColor
        });
    }

    componentDidUpdate(prevProps,prevStates)
    {
        console.log(prevProps,prevStates);
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

export default LifeCycleInClass;