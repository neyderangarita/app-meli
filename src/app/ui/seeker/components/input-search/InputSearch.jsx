import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import '../../hooks/useForm'
import { useForm } from '../../hooks/useForm';

export const InputSearch = ( { onNewProduct } ) => {

    const location = useLocation();
    const { search = '' } = queryString.parse(location.search);

    const onSearchSubmit = (event) => {
        event.preventDefault();
        if( searchText.trim().length <= 1 ) return;
        onNewProduct(searchText.trim())
    }
    const { searchText, onInputChange } = useForm({
        searchText: ''
    });

    return (
    <>
          <form onSubmit={ onSearchSubmit } >
              <input 
                type="text" 
                className='nav-search-input'
                placeholder='Nunca dejes de buscar'
                name='searchText'              
                autoComplete='off'
                value={ searchText }
                onChange={ onInputChange }
                />
                <button type="submit" className="nav-search-btn">
                  <div role="img" aria-label="Buscar" className="nav-icon-search"></div>
                </button>
          </form>

    </>
  )
}
