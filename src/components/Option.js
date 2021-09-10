import { React, Component } from 'react'

class Option extends Component {
    render() {
        return (
            <div className="option">
                <button onClick={() => this.props.handleClick(this.props.buttonName)} className="buttons">{this.props.option}</button>
                <h2>{this.props.optionContent}</h2>
            </div>
        )
    }
}
export default Option;