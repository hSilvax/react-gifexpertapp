import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []})=> {

    //const categories = ["Macross", "Samurai X", "Dragon Ball"];
    const [categories, setCategories] = useState(defaultCategories);

    /*const handleAdd = ()=> {

        //setCategories([...categories, "One Punch"]);
        setCategories( cats=> [...cats, "One Punch"]); 

    }*/

    return (

        <>
            <h2>GifExpertApp</h2>
            <hr/>
            
           <AddCategory setCategories={setCategories} />           

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    )
                }
            </ol>        


        </>

    );

}

export default GifExpertApp;