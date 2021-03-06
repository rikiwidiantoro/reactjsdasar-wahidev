import { Component } from "react";
import Sub from "./Sub";

class Lifecycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            makanan: 'Bakso',
            data: {},
            tampil: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => {
            this.setState({
                data: json
            })
        })
    }

    ubahMakanan(value) {
        this.setState({
            makanan: value
        })
    }

    render() {
        console.log('Data : ', this.state.data)
        return (
            <div>
                <h1>Lifecycle Component</h1>
                <p>makanan : {this.state.makanan}</p>
                <p>Data : {this.state.data.title}</p>
                <hr />

                <h2>Ubah Makanan</h2>
                <h4>{this.state.makanan}</h4>

                {this.state.tampil && <Sub ubahMakanan={(value) => this.ubahMakanan(value)}/>}

                <button onClick={() => this.setState({tampil : !this.state.tampil})}>Tampil!</button>
            </div>
        )
    }
}

export default Lifecycle