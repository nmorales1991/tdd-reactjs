function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

describe('matchers', () => {
  test('toBe', () => { // exactamente iguales
    expect(true).toBe(true);
  });

  test('toEqual', () => { // para objetos o arrays
    const data = { one: 1 };
    data.two = 2;
    expect(data).toEqual({ one: 1, two: 2 });

    const arr = ['one', 'two'];
    expect(arr).toEqual(['one', 'two']);
  });

  test('not toBe', () => { // negación toBe
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test('there is no I in team', () => { // match strings
    expect('team').not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => { // match strings
    expect('Christoph').toMatch(/stop/);
  });

  test('compiling android goes as expected', () => { // test exceptions
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
});
