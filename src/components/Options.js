import { React, Component } from 'react'
import Option from './Option';

class Options extends Component {
    render() {
        return (
            <div className="options">
                <Option buttonName="a" handleClick={this.props.handleClick} option="A" optionContent={this.props.optionContent.a}/>
                <Option buttonName="b" handleClick={this.props.handleClick} option="B" optionContent={this.props.optionContent.b}/>
            </div>
        )
    }
}

export default Options;