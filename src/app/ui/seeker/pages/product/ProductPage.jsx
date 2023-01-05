import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../helpers/getProductById';
import { useEffect, useState } from 'react';
import { InputSearch } from '../../components/input-search/InputSearch';
import './ProductPage.css'

export const ProductPage = () => {

  const { id } = useParams();
  const [product, setProductId] = useState([]);

  const getProductId = async(id) => {
    const newProduct = await getProductById(id);
    setProductId(newProduct)
  }

  useEffect( () => {
    getProductId(id);
  }, []);


  return (
    <>

      <div className='navbar-header'>
        <a className="nav-logo" href="/"></a>
        <div className='nav-search'>
        <form >
              <input 
                type="text" 
                className='nav-search-input'
                placeholder='Nunca dejes de buscar'
                name='searchText'              
                autoComplete='off'
                />
                <button type="submit" className="nav-search-btn">
                  <div role="img" aria-label="Buscar" className="nav-icon-search"></div>
                </button>
          </form>
        </div>
      </div>

      <div>
        <br />
      </div>


      <div className='container text-center center-div'>
          <div className="row">
            <div className='col'>
              <img 
                src={product.picture} 
                alt="imagen alternativa"
                className="picture"
                />
            </div>

            <div className='col'>
              <div className="col-4">
                  <p className="state">{product.condition} - {product.sold_quantity} vendidos</p>
                  <p className="title">{product.title}</p>
                  <p className='price'>$ {product.sold_quantity} </p>
              </div>
              <div className='aling'>
                <button type="button" className="style btn btn-primary">Comprar</button>
              </div>
              
            </div>
            <br /><br />
            <p className='detail'>Descripción del Producto</p>
            <p className='description'>{product.description}</p>
          </div>
      </div>
    </>
  )
}
