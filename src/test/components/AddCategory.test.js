import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en el archivo <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de comparar correctamente con la imagen", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar el value de la caja de texto ", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
    const inputValue = wrapper.find("p").text().trim();

    expect(inputValue).toBe(value);
  });

  test("No debe de postear la informacion con submit", () => {
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "cat";

    // simular change
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });
    const inputValue = wrapper.find("input").prop("value").trim();
    // simular submit
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });
    const cleanInputValue = wrapper.find("input").prop("value").trim();

    expect(inputValue).toBe(value);

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(cleanInputValue).toBe("");
  });
});
