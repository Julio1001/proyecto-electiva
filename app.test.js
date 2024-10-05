// tests/app.test.js
const holaMundo = require('./app');

test('retorna "Hola, Mundo!"', () => {
    expect(holaMundo()).toBe("Hola, Mundo!");
});