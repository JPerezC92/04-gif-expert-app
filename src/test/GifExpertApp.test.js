import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe(" Pruebas en el componente <GifExpertApp />", () => {
  test("Debe de compararse correcamente conla imagen", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar una lista de categorias", () => {
    const categories = ["One Punch", "cat"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper.find("GifGrid").length).toBe(categories.length);
    expect(wrapper).toMatchSnapshot();
  });
});
