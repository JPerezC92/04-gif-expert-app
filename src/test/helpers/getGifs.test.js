import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en el archivo getGifs", () => {
  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifs("Sonic");

    expect(gifs.length).toBe(10);
  });

  test("Debe de retornar 0 elementos", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
