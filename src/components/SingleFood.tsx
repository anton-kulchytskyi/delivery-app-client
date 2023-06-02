import React from 'react'
import { Card } from 'react-bootstrap'

type Props = {
  food: Food
}

export const SingleFood: React.FC<Props> = ({ food }) => {
  return (
    <Card
      style={{ width: '16rem' }}
      key={food.id}
      className="mb-2 text-center"
    >
      <Card.Img
        variant="top"
        src={`https://placehold.co/70x30/orange/white?text=${food.name}`}
      />
      <Card.Body>
        <Card.Text>
          {`${food.price}$`}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
