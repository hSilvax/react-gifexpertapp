const { shallow } = require("enzyme");
const { default: GifExpertApp } = require("../GifExpertApp");

describe("Pruebas de <GifExpertApp/>", () => {
    
    test("Debe de comparar con el snapshot", () => {
        
        const wrapper = shallow(<GifExpertApp/>);

        expect(wrapper).toMatchSnapshot();

    });

    test("Debe de mostrar una lista de categoria", () => {
        
        const categories = ["Macross","Rio"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);

    });
    
    

})
