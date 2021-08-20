import React from "react";
import {Table, thead, tbody, tr, th, td} from 'react-bootstrap'

const Tabel = () => {
    return (
        <Table striped bordered hover className="mt-5">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Riki</td>
                    <td>Widiantoro</td>
                    <td>@rikiwidiantoro</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Riki</td>
                    <td>Widiantoro</td>
                    <td>@rikiwidiantoro</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Riki</td>
                    <td>Widiantoro</td>
                    <td>@rikiwidiantoro</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Tabel;