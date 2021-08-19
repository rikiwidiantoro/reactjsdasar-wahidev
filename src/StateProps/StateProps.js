import { Component } from "react";

class StateProps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            makanan : 'Bakso'
        }
    }

    GantiMakanan(makananBaru) {
        this.setState({
            makanan: makananBaru
        })
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p>Nama makanan = <strong>{this.state.makanan}</strong></p>
                {/* <button onClick={()=> this.setState({makanan:'Soto'})}>Ganti Makanan</button> */}
                <button onClick={()=> this.GantiMakanan('Soto')}>Ganti Makanan</button>
            </div>
        )
    }
}

export default StateProps