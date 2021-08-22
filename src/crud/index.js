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

        if(this.state.id === "") {
            this.setState({
                makanans : [
                    ...this.state.makanans,
                    {
                        id : this.state.id.length+1,
                        nama : this.state.nama,
                        deskripsi : this.state.deskripsi,
                        harga : this.state.harga
                    }
                ]
            })

        } else {
            const makananygselaindipilih = this.state.makanans
            .filter((makanan) => makanan.id !== this.state.id)
            .map((filterMakanan) => {
                return filterMakanan
            })

            this.setState({
                makanans : [
                    ...makananygselaindipilih,
                    {
                        id : this.state.id.length+1,
                        nama : this.state.nama,
                        deskripsi : this.state.deskripsi,
                        harga : this.state.harga
                    }
                ]
            })
        }


        this.setState({
            nama : "",
            deskripsi : "",
            harga : 0,
            id : ""
        })
    }

    editData = (id) => {
        // console.log('ID : ', id)

        const makananygdipilih = this.state.makanans
        .filter((makanan) => makanan.id === id)
        .map((filterMakanan) => {
            return filterMakanan
        })

        this.setState({
            nama : makananygdipilih[0].nama,
            deskripsi : makananygdipilih[0].deskripsi,
            harga : makananygdipilih[0].harga,
            id : makananygdipilih[0].id,
        })
    }

    render() {
        return (
            <div>
                <Navebar />
                <div className="container mt-3">
                    <h2 className="text-center">CRUD Sederhana dengan React Js</h2>
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    <Tabel makanans={this.state.makanans} editData={this.editData} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Crud