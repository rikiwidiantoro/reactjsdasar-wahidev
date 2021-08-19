import React from "react"
// import Filter from "./Filter"

const makanans = [
    {
        nama: 'Soto',
        harga: 12000
    },
    {
        nama: 'Bakso',
        harga: 10000
    },
    {
        nama: 'Mie Ayam',
        harga: 8000
    },
    {
        nama: 'Nasi Goreng',
        harga: 15000
    }
]

// reduce() >> mengeksekusi nilai pada setiap element dengan tipe array dan menampilkan dalam sebuah nilai saja
const totalHargaMenu = makanans.reduce((totalMakanan, makanan) => {
    return (
        totalMakanan + makanan.harga
    )
}, 0)

const Map = () => {
    return (
        <div>

            {/* map() >> memecah/menampilkan array saru persatu */}
            <h1>Map() Sederhana</h1>
            <h3>Menu : </h3>
            <ul>
                {makanans.map((makanan, index) => <li>{index+1}. {makanan.nama} -- harganya Rp.{makanan.harga}</li>) }
            </ul>

            {/* filter() >> memilih isi array berdasarkan kriteria tertentu */}
            <h1>Filter harga yang lebih dari Rp.11000</h1>
            <ul>
                {makanans.filter((makanan) => makanan.harga > 11000)
                .map((makanan) => <li>{makanan.nama} - harganya Rp.{makanan.harga}</li>)}
            </ul>

            {/* reduce() */}
            <h1>Reduce || total harga semua makanan</h1>
            <p>Total semua makanan Rp.{totalHargaMenu}</p>
            
        </div>
    )
}

export default Map