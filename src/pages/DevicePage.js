import React, { useState, useeffect, useEffect } from 'react'
import { Button, Col, Container, Image, Row, Card } from 'react-bootstrap'
import Star from '../components/Star'
import { useParams } from 'react-router-dom'
import { fetchOneDevices } from '../http/deviceAPI'

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] })
  const { id } = useParams()
  useEffect(() => {}, [])
  fetchOneDevices(id).then((data) => setDevice(data))
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              style={{ position: 'relative', fontSize: 30, marginTop: 20 }}
              className="d-flex align-items-center justify-content-center"
            >
              {device.rating}
              <Star style={{ position: 'absolute', width: 80, height: 80 }} />
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? 'lightgray' : 'transparent',
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  )
}

export default DevicePage
