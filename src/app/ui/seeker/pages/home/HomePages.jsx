import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import '../../hooks/useForm'
import { useForm } from '../../hooks/useForm';
import './HomePages.css'
import { useDispatch, useSelector } from 'react-redux';
import { ListItems } from '../../components/list-items/ListItems'

import { InputSearch } from '../../components/input-search/InputSearch';
import { getProducts } from '../../helpers/getProducts';

import { useEffect } from 'react';
import { getProduct } from '../../../../infrastucture/driven-adapter/store/slices/seeker';

export const HomePages = () => {

  //const [products, setProducts] = useState([]);

  // const getProduct = async(searchText) => {
  //   const newProduct = await getProducts(searchText);
  //   setProducts(newProduct)
  // }

  const onAddProducto = (searchText) => {
    debugger;
    dispatch( getProduct(searchText) );
  }

  const dispatch = useDispatch();

  const { isLoading, products  = [], page } = useSelector( state => state.products );


  // useEffect(() => {
  //   dispatch( getProduct(searchText) );    
  // }, [])


  return (
    <>
      <div className='navbar-header'>
        <a className="nav-logo" href="/"></a>
        <div className='nav-search'>
          <InputSearch 
            onNewProduct={ onAddProducto }
          />
        </div>
      </div>

      <div>
        <br />
      </div>

      <div>
        {
          products.map( (producto)  => ( 
              <ListItems 
                key={producto} 
                producto={producto}
              />
          ))
        }
      </div>

    </>

  )

}
