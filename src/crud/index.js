import { Component } from "react";
import Footer from "./komponen/Footer";
import Formulir from "./komponen/Formulir";
import Navebar from "./komponen/Navbar";
import Tabel from "./komponen/Tabel";

class Crud extends Component {
    constructor(props) {
        super(props)

        this.state = {
            makanans : [],
            nama : "",
            deskripsi : "",
            harga : 0,
            id : ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log('Data : ', this.state)
    }

    render() {
        return (
            <div>
                <Navebar />
                <div className="container mt-3">
                    <h2 className="text-center">CRUD Sederhana dengan React Js</h2>
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    <Tabel />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Crud