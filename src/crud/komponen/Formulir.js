import React from "react";
import {Row, Col, Form, Button} from 'react-bootstrap'

const Formulir = ({nama, deskripsi, harga, handleSubmit, handleChange, id}) => {
    return (
        <div className="mt-4">
            <Row>
                <Col>
                    <h3>{id ? "Edit Data" : "Tambah Data"}</h3>
                    <hr width="170px"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={(event) => handleSubmit(event)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nama Makanan</Form.Label>
                            <Form.Control type="text" name="nama" autoComplete="off" value={nama} onChange={(event) => handleChange(event)} />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Deskripsi Makanan</Form.Label>
                            <Form.Control as="textarea" rows={3} name="deskripsi" autoComplete="off" value={deskripsi} onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Harga</Form.Label>
                            <Form.Control type="number" name="harga" autoComplete="off" value={harga} onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Button variant="dark" type="submit">
                            Kirim!
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Formulir;