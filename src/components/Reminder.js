import { React, Component } from 'react'

class Reminder extends Component {
    render() {
        return (
            <div className="reminder">
                <h3>Seleccion anterior: {this.props.previousChoice}</h3>
                <h4>Historial de opciones: </h4>
                <ul>
                    {
                        this.props.choiceHistory.map(choice => <li>{choice.toUpperCase()}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default Reminder;