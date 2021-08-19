import { Component } from "react";

class Operan extends Component {

    // GantiMakanan(makananBaru) {
    //     this.setState({
    //         makanan: makananBaru
    //     })
    // }

    render() {
        // trik spread operator
        const {makanan, GantiMakanan} = this.props

        return (
            <div>
                <h2>Operan State yang menjadi Props = {makanan}</h2>
                <button onClick={()=>GantiMakanan('Mie Ayam')}>Ganti Makanan</button>
            </div>
        )
    }
}

export default Operan