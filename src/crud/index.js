import { Component } from "react";
import Formulir from "./komponen/Formulir";
import Navebar from "./komponen/Navbar";
import Tabel from "./komponen/Tabel";

class Crud extends Component {
    render() {
        return (
            <div>
                <Navebar />
                <div className="container mt-3">
                    <h2 className="text-center">CRUD Sederhana dengan React Js</h2>
                    <Formulir />
                    <Tabel />
                </div>
            </div>
        )
    }
}

export default Crud