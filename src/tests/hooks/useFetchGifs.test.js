import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";

describe("Pruebas en useFetchGifs", () => {

    const category = "Macross";

    test("Debe retornar el estado inicial", async() => {       
        
        //const {data: images, loading} = useFetchGifs(category);
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs(category));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });    

    test("Debe de retornar un array de imagenes y loading en false", async() => {
        
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs(category));
        await waitForNextUpdate();
        
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });    

})
