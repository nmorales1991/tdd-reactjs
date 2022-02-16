describe('setup and teardown', () => {
  beforeEach(() => {
    console.log('antes de cada test');
  });

  afterEach(() => {
    console.log('después de cada test');
  });

  beforeAll(() => {
    console.log('antes de todos los tests');
  });

  afterAll(() => {
    console.log('después de todos los tests');
  });

  test('test 1', () => {
    console.log('test 1');
    expect(true).toBeTruthy();
  });

  test('test 2', () => {
    console.log('test 2');
    expect(false).toBeFalsy();
  });
});
