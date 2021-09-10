import {React, Component} from 'react'
import Story from "./components/Story";
import Options from "./components/Options";
import Reminder from "./components/Reminder";
import data from './components/data.json'

const choiceHistory=[] 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      storyCounter:1,
      choice: "",
      storyId: "1"      
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevState) {
    if (prevState.storyCounter !== this.state.storyCounter) {
      choiceHistory.push(this.state.choice);
    }
  }

  handleClick(choice){
    const newId = this.state.storyCounter+1 + choice;
    const option = data[data.findIndex(element => element.id === this.state.storyId)].opciones.a;
    option === "FIN" || option === "FIN." ? window.alert("Este es el fin de la historia") :
    (
    this.setState({
      choice: choice,
      storyCounter: this.state.storyCounter+1, 
      storyId: newId,
    })
    )
  }

  render() {
    
    return (
      <div className="App layout">
        <Story story={data[data.findIndex(element => element.id === this.state.storyId)].historia}/>
        <Options handleClick={this.handleClick} optionContent={data[data.findIndex(element => element.id === this.state.storyId)].opciones}/>
        <Reminder previousChoice={this.state.choice.toUpperCase()} choiceHistory={choiceHistory} />
      </div>
    )
  }
}

export default App; 
