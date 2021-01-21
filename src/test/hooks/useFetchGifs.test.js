import { renderHook } from "@testing-library/react-hooks";
import useFetchGifs from "../../hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe de retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("cat"));
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("Debe de retornar un arreglo de imagenes y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("dog"));
    await waitForNextUpdate();

    const { data, loading } = result.current;
    expect(data.length).toEqual(10);
    expect(loading).toBeFalsy();
  });
});
