import {useState, useEffect} from 'react'
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (category)=> {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=> {
        
        getGifts(category)
            .then( imgs => {
            

                setState({
                    data: imgs,
                    loading: false
                });                             

            })


    }, [category]); // [] solo se ejecuta una vez */
   

    return state;

}