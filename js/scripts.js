var pokemonRepository = (function () {
  let repository = [
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

  // Public functions
  function getAll() {
    return pokemonList;
  }

  function add(item) {
    if (typeof item === 'object' && 'name' in item && 'height' in item && 'type' in item) {
      pokemonList.push(item);
    } else {
      console.log('Invalid Pokemon data.');
    }
  }

  // Return an object with public functions
  return {
    getAll: getAll,
    add: add
  };
})();

// Test the functions
console.log(pokemonRepository.getAll());

pokemonRepository.add({
  name: 'Charmander',
  height: 0.6,
  type: 'fire',
  abilities: ['blaze']
});

console.log(pokemonRepository.getAll());