import React from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap'

type Props = {
  stores: Store[],
  selectedStore: (id: string) => void,
  activeStore: string,
}

export const SideBar: React.FC <Props> = (
  {
    stores,
    selectedStore,
    activeStore
  }) => {
  return (
    <Row>
      <Col>
        {stores.map(store => (
          <Card
            border="info"
            className="mb-2 text-center"
            key={store._id}
            bg={activeStore === store._id ? '' : 'secondary'}
          >
            <Card.Body>
              <Button
                variant="info"
                onClick={() => selectedStore(store._id)}
              >
                {store.name}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  )
}
