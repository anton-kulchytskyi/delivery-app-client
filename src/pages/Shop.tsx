import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SideBar } from '../components/SideBar'
import { SingleShop } from '../components/SingleShop'

type Props = {
  stores: Store[],
  selectedStore: (id: string) => void,
  foods: Food[] | undefined,
  activeStore: string,
  addToCard: (newFood: Food) => void,
  selectedFood: Food[]
}

export const Shop: React.FC<Props> = ({ stores, selectedStore, foods, activeStore, addToCard, selectedFood }) => {
  
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <SideBar
            stores={stores}
            selectedStore={selectedStore}
            activeStore={activeStore}
          />
        </Col>
        <Col md={8}>
          <SingleShop
            foods={foods}
            addToCard={addToCard}
            selectedFood={selectedFood}
          />
        </Col>
      </Row>
    </Container>
  )
}
