import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { SingleFood } from './SingleFood'
import { BagCheckFill } from "react-bootstrap-icons";

type Props = {
  foods: Food[] | undefined,
  addToCard: (newFood: Food) => void,
  selectedFood: Food[]
}

export const SingleShop: React.FC<Props> = ({ foods, addToCard, selectedFood }) => {
  return (
    <Row
      xs={1}
      md={2}
      className="g-4"
    >
      {foods?.map(food => (
        <Col>
          <SingleFood
            food={food}
          />
          <Button
            variant="primary"
            onClick={() => addToCard(food)}
          >
            Add to card
          </Button>
          {selectedFood.filter(e => e.id === food.id).length > 0 && <BagCheckFill />}
        </Col>
      ))}
    </Row>
  )
}
