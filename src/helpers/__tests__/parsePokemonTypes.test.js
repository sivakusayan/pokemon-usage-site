import parsePokemonTypes from '../parsePokemonTypes';

it('should correctly extract type', () => {
  const dataJSON = '[{"slot":1,"type":{"name":"normal","url":"https://pokeapi.co/api/v2/type/1/"}}]'
  const data = JSON.parse(dataJSON);
  const res = ["normal"];

  expect(parsePokemonTypes(data)).toEqual(res);
});

it('should extract types in proper order', () => {
  const dataJSON = '[{"slot":2,"type":{"name":"dark","url":"https://pokeapi.co/api/v2/type/17/"}},{"slot":1,"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"}}]'
  const data = JSON.parse(dataJSON);
  const res = ["water", "dark"];

  expect(parsePokemonTypes(data)).toEqual(res);
})