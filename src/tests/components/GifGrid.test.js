import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas de <GifGrid/>", () => {
    
    const category = "Macross";    

    test("Debe mostrarse bien el control", () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();

    });

    test("Debe de mostrar item cuando se carga imagenes useFetchGifs", () => {
        
        const gifs = [{
            id: "ABC",
            url: "https//localhost/xxxx/xxxx.jpg",
            title: "XXXXXXXX"
        },
        {
            id: "ABC",
            url: "https//localhost/xxxx/xxxx.jpg",
            title: "XXXXXXXX"
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);

    });
    
    

})
