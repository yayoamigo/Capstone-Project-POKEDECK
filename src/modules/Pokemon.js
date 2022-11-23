const endpoint = 'https://pokeapi.co/api/v2/pokemon/';
export default class Pokemon {
  static getPokemon = async (id) => {
    const result = await fetch(`${endpoint}${id}`).then((data) => data.json());
    return result;
  }
}