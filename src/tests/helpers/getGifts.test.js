import { getGifts } from "../../helpers/getGifs";

describe("Pruebas con getGifs fecth", ()=> {
    
    test("Debe de traer 10 elementos", async() => {
        
        const gifs = await getGifts("Macross");

        //console.log(gifs.length);

        expect(gifs.length).toBe(10);        

    });  
    
    test("Debe de traer 0 elementos", async() => {
        
        const gifs = await getGifts("");
        
        expect(gifs.length).toBe(0);        

    });

});