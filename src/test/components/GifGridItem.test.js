import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en el archivo GifGridItem", () => {
  const title = "one punch GIF by Adult Swim";
  const url =
    "https://media3.giphy.com/media/l3vRlt8kty8KKeHni/giphy.gif?c…79ada6yamuui69bx0aw98l98cmx34tfeggl0dxngpdpk1a&rid=giphy.gif";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe de comparar correctamente con la imagen", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p").text().trim();

    expect(p).toBe(title);
  });

  test("Debe de tener la imagen igual al url y alt de los props", () => {
    const { src, alt } = wrapper.find("img").props();

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe de tener animate__fadeIn", () => {
    const { className } = wrapper.find("div").props();

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
