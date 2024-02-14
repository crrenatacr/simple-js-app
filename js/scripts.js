let pokemonRepository = (function() {
  let pokemonList = (function() {
    return [
      {
        name: 'Pikachu',
        height: 0.4,
        type: 'electric',
        abilities: ['static', 'lightningrod']
      },

      {
        name: 'Vulpix',
        height: 0.6,
        type: 'fire',
        abilities: ['flash-fire', 'drought']
      },

      {
        name: 'Zubat',
        height: 0.8,
        type: ['poison', 'flying'],
        abilities: ['inner-focus', 'infiltrator']
      },

      {
        name: 'Pidgeot',
        height: 1.5,
        type: ['flying', 'normal'],
        abilities: ['keen-eye', 'tangled-feet', 'big-pecks']
      },

      {
        name: 'Wigglytuff',
        height: 1,
        type: ['fairy', 'normal'],
        abilities: ['cute-charm', 'frisk']
      },

      {
        name: 'Flareon',
        height: 0.9,
        type: 'fire',
        abilities: ['flash-fire', 'guts']
      },

      {
        name: 'Bellossom',
        height: 0.4,
        type: 'grass',
        abilities: ['chlorophyll', 'healer']
      },

      {
        name: 'Vileplume',
        height: 1.2,
        type: ['grass', 'poison'],
        abilities: ['effect-spore', 'chlorophyll']
      },

      {
        name: 'Horsea',
        height: 0.4,
        type: 'water',
        abilities: ['damp', 'swift-swim', 'sniper']
      }
    ];
  })();

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    if (typeof item === 'object' && Object.keys(item).length === 4) {
      pokemonList.push(item);
    } else {
      console.error('Invalid Pokémon data.');
    }
  }

  function findByName(name) {
    return pokemonList.filter(function(pokemon) {
      return pokemon.name.toLowerCase() === name.toLowerCase();
    });
  }

  return {
    getAll: getAll,
    add: add,
    findByName: findByName
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: "Pikachu", height: 0.3,
type: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach (function (pokemon) {
  let.pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = "placeholder";
  button.classList.add("button=class")
});