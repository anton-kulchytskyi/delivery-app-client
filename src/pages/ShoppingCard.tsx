import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Form } from '../components/Form'
import { SingleFood } from '../components/SingleFood'

type Props = {
  selectedFood: Food[]
}

export const ShoppingCard: React.FC<Props> = ({ selectedFood }) => {  
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Form />
        </Col>
        <Col md={8}>
          {selectedFood.map((food) => (
            <SingleFood food={food}/>
          ))}
        </Col>
      </Row>
    </Container>
  )
}
