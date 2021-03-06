import { shallow } from "enzyme";
import CategoriesGrid from "../../components/CategoriesGrid";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en el componente <CategoriesGrid />", () => {
  const category = "cat";

  test("Debe de compararse correctamente con la imagen", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<CategoriesGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABCD",
        title: "awesome funny gif",
        url: "https://localhost/any/thing.gif",
      },
      {
        id: "BFSFDS",
        title: "2 awesome funny gif",
        url: "https://localhost/any/thing.gif",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<CategoriesGrid category={category} />);

    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
