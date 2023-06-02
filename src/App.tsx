import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Shop } from './pages/Shop'
import { ShoppingCard } from './pages/ShoppingCard'
import { Header } from './components/Header'
import { getShops } from './api/shops';

export function App() {
  const [stores, setStores] = useState<Store[] | []>([])
  const [activeStore, setActiveStore] = useState<string>('')
  const [selectedFood, setSelectedFood] = useState<Food[] | []>([])

  useEffect(() => {
    const fetchData = async () => {
      const shopsFromDB = await getShops();

      setStores(shopsFromDB);
    };

    fetchData();
  }, []);

  const selectedStore = (id: string) => {
    console.log(id);
    
    setActiveStore(activeStore === id ? '' : id)
  }  

  const productList = stores.find(store => store._id === activeStore)?.foods;

  const addToCard = (newFood: Food) => {
    setSelectedFood([ ...selectedFood, newFood ])
  }

  return (
  <>
    <Header />
    <Container>
      <Routes>
        <Route
          path='/'
          element={
            <Shop
              stores={stores}
              selectedStore={selectedStore}
              foods={productList}
              activeStore={activeStore}
              addToCard={addToCard}
              selectedFood={selectedFood}
            />
          }
        />
        <Route
          path='/card'
          element={
            <ShoppingCard
              selectedFood={selectedFood}
            />
          }
        />
      </Routes>
    </Container>
  </>
  )
}
