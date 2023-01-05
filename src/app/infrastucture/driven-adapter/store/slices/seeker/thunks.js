import { meliAPI } from '../../../api/meliAPI';
import { setSeeker, startLoadingSeeker } from './seekerSlice';



export const getProduct = ( page ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingSeeker() );

        const { data } = await meliAPI.get(`items?q=${ page }`);

        dispatch( setSeeker({ products: data.items, page: 1 }) );

    }
}