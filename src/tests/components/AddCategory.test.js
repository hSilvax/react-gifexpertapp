import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe("Pruebas en el componente <AddCategory/>", () => {
    
    const setCategory = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategory} />);

    beforeEach(()=> {

        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategory} />);

    });

    test("Debe mostrarse correctamente", () => {

        expect(wrapper).toMatchSnapshot();

    });
    
    test("Debe de cambiar la caja de texto", () => {
        
        const input = wrapper.find("input");
        const value = "Hola mundo";

        input.simulate("change", {target: {value}});

        expect(wrapper.find("p").text().trim()).toBe(value);

    });

    test("No debe de postear la infomacion en submit", () => {
        
        wrapper.find("form").simulate("submit", {preventDefault(){}});

        expect(setCategory).not.toHaveBeenCalled();

    });

    test("Debe de llamar el setCategory y limpiar la caja de texto", () => {
        
        const value = "Hola mundo";
        
        wrapper.find("input").simulate("change", {target:{value}});
        
        wrapper.find("form").simulate("submit", {preventDefault(){}});

        expect(setCategory).toHaveBeenCalled();
        expect(wrapper.find("input").prop("value")).toBe("");
    });
    

})
