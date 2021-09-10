import {React, Component} from 'react'
import data from './data.json'

class Story extends Component{
    render(){
        return(
            <h1 className="story">{this.props.story}</h1>
        )
    }
}

export default Story;