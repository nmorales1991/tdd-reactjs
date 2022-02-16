import axios from 'axios';
import Users from '../testsFiles/usuarios';

function testFunction(a, b, multiplicar) {
  const suma = a + b;
  // multiplicar(suma, 'hola');
  multiplicar(suma);
}
jest.mock('axios');
describe('mocks', () => {
  test('mock function', () => {
    // const mockMultiplicar = jest.fn((x, hola) => x * 10 + hola);
    const mockMultiplicar = jest.fn((x) => x * 10);
    testFunction(1, 2, mockMultiplicar);
    testFunction(5, 3, mockMultiplicar);
    console.log(mockMultiplicar.mock);
    expect(mockMultiplicar.mock.calls.length).toBe(2); // calls son las llamadas que se hicieron a esa función
    expect(mockMultiplicar.mock.calls[0][0]).toBe(3); // primer array es el número de llamada, segundo array es el número del argumento de la función
    // expect(mockMultiplicar.mock.calls[1][1]).toBe('hola'); // segunda llamada, segundo parámetro
    expect(mockMultiplicar.mock.results[0].value).toBe(30);
  });

  test('valores retorno simulados', () => {
    const myMock = jest.fn();
    console.log(myMock()); // undefined

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('hola');
    console.log(myMock(), myMock()); // 10, hola
  });

  test('axios mock', async () => {
    const mockResp = { data: [{ name: 'Bob' }] };
    axios.get.mockResolvedValue(mockResp);
    const user = await Users.getUser();
    // console.log(user); // respuesta desde el mock, comentar jest.mock y mockResolverValue para que haga la llamada normal
    expect(user).toEqual(mockResp);
  });
});
