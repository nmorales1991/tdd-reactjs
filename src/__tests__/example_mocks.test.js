import axios from 'axios';
import Users from '../testsFiles/usuarios';

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index], 'hola');
  }
}
jest.mock('axios');
describe('mocks', () => {
  test('mock function', () => {
    const mockCallback = jest.fn((x, z) => 42 + x + z); // crea un mock de una función
    forEach([0, 1], mockCallback);

    // console.log(mockCallback.mock); // propiedad .mock trae datos de lo que ejecutó la función

    expect(mockCallback.mock.calls.length).toBe(2); // calls son las llamadas que se hicieron a esa función
    expect(mockCallback.mock.calls[0][0]).toBe(0); // primer array es el número de llamada, segundo array es el número del argumento de la función
    expect(mockCallback.mock.results[0].value).toBe('42hola'); // result es la respuesta por cada llamada de la función
  });

  test('valores retorno simulados', () => {
    const myMock = jest.fn();
    console.log(myMock()); // undefined

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('hola');
    console.log(myMock(), myMock()); // 10, hola
  });

  test('axios mock', async () => {
    const mockUser = [{ name: 'Bob' }];
    const mockResp = { data: mockUser };
    axios.get.mockResolvedValue(mockResp);
    const user = await Users.getUser();
    console.log(user); // respuesta desde el mock, descomentar el mock de axios de la línea 9 para que salga la llamada real a la api
    expect(user).toEqual(mockResp);
  });
});
