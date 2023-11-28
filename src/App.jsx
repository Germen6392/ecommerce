import './App.css'
import Product from './assets/components/Product'
import Button from './assets/components/Button'
function App() {

  return (
    <>
      <div className='container'>
        <h1>Detalle del Producto</h1>
          <Product
                name="Notebook Dell Inspiron"
                sku="3525"
                description="AMD Ryzen 5 5500U 8 GB de RAM 256 GB SSD"
                price="$479.999"
                quantity="10"/>

      </div>
    
      <Button/>

      
    </>
  )
}

export default App
