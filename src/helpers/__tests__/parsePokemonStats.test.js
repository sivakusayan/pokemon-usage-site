import parsePokemonStats from '../parsePokemonStats';

it('should correctly aggregate stat data', () => {
  const dataJSON = '[{"base_stat":48,"effort":0,"stat":{"name":"speed","url":"https://pokeapi.co/api/v2/stat/6/"}},{"base_stat":48,"effort":0,"stat":{"name":"special-defense","url":"https://pokeapi.co/api/v2/stat/5/"}},{"base_stat":48,"effort":0,"stat":{"name":"special-attack","url":"https://pokeapi.co/api/v2/stat/4/"}},{"base_stat":48,"effort":0,"stat":{"name":"defense","url":"https://pokeapi.co/api/v2/stat/3/"}},{"base_stat":48,"effort":0,"stat":{"name":"attack","url":"https://pokeapi.co/api/v2/stat/2/"}},{"base_stat":48,"effort":1,"stat":{"name":"hp","url":"https://pokeapi.co/api/v2/stat/1/"}}]'
  const data = JSON.parse(dataJSON);
  const res = {
    speed: 48,
    'special-defense': 48,
    'special-attack': 48,
    defense: 48,
    attack: 48,
    hp: 48
  };

  expect(parsePokemonStats(data)).toEqual(res);
});