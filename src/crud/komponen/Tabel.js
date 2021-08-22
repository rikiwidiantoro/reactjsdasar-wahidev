import React from "react";
import {Table} from 'react-bootstrap'

const Tabel = ({makanans, editData, hapusData}) => {
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
                {/* <tr>
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
                </tr> */}
                {makanans.map((makanan, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{makanan.nama}</td>
                            <td>{makanan.deskripsi}</td>
                            <td>Rp. {makanan.harga}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => editData(makanan.id)}>Edit Data</button>{' '}
                                <button className="btn btn-danger" onClick={() => hapusData(makanan.id)}>Hapus Data</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default Tabel;