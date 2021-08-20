import React from "react";
import {Row, Col, Form, Button} from 'react-bootstrap'

const Formulir = () => {
    return (
        <div className="mt-4">
            <Row>
                <Col>
                    <h3>Tambah Data</h3>
                    <hr width="170px"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nama Makanan</Form.Label>
                            <Form.Control type="text" name="nama" autoComplete="off" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Deskripsi Makanan</Form.Label>
                            <Form.Control as="textarea" rows={3} name="deskripsi" autoComplete="off" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Harga</Form.Label>
                            <Form.Control type="number" name="harga" autoComplete="off" />
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