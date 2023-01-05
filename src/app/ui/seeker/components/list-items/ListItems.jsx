
import './ListItems.css'
import { Link } from 'react-router-dom'

export const ListItems = ({ producto }) => {
  
  return (
     <>
         
         <div className="container text-center color-container">
              <div className="row">
                <div className="image">                  
                  <img src={producto.picture} className="picture-list" />
                </div>
                <div className="detail-list">
                  <p className="price-list">$ {producto.price.amount} </p>
                  <Link className='' to={`./items/${ producto.id }`}>
                    <p className="title-list">{producto.title}</p>
                  </Link>
                </div>
                <div className="detail-city">                  
                  <p className="title-city">{producto.city}</p>
                </div>
              </div>
         </div>
    </>
  )
}
