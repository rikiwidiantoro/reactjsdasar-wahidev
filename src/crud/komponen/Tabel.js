import React from "react";
import {Table, thead, tbody, tr, th, td} from 'react-bootstrap'

const Tabel = () => {
    return (
        <Table striped bordered hover className="mt-5">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Nama Makanan</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mie Ayam Bakso</td>
                    <td>Mie Ayam Bakso khas Wonogiri</td>
                    <td>Rp. 20.000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Sate Gulai Kambing</td>
                    <td>Sate Gulai Kambing enak dari Lamongan</td>
                    <td>Rp. 40.000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Nasi Goreng</td>
                    <td>Nasi goreng spesial dengan banyak kondimen</td>
                    <td>Rp. 10.000</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Tabel;