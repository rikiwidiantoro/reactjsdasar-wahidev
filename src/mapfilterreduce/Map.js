import React from "react"

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
        </div>
    )
}

export default Map