function throwError() {
  throw new Error('Ocurrió un error');
}

describe('test matchers', () => {
  test('testing matchers', () => {
    expect(true).toBe(true); // exactamente igual
    expect('hola Mundo').toMatch(/mundo/i); // busca en un string
    const arr = ['nicolás', 'pepe'];
    const obj = { nombre: 'nicolás', edad: 30 };
    expect(arr).toEqual(arr); // busca que el array sea igual a lo que se va a comparar
    expect(arr).toContain('pepe'); // busca que en el array venga un elemento
    expect(obj).toEqual(obj); // compara el objeto
    expect(null).toBeNull(); // ve si es nulo
    expect(() => throwError()).toThrow(); // ve si ocurrió un error
    expect(() => throwError()).toThrow(/ocurrió un error/i); // ve si ocurrió un error con su mensaje correspondiente
  });
});
