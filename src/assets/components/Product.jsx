import './Product.css'
function Product({name,sku,description,price,quantity}) {
    return ( 
    <>
        <div className="container-product">
        <article>
          <h3>{name}</h3>
            <ul>
              <li>SKU {sku}</li>
              <li>{description}</li>
              <li>{price}</li>
              <li>Cantidad Disponible: {quantity}</li>
            </ul>  
        </article>
        </div>
    </>
    )
}
export default Product
