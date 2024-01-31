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
  
  document.write("<h2>Pokémon List</h2>");
  pokemonRepository.getAll().forEach(function(pokemon) {
    document.write("<p>Name: " + pokemon.name + ", Height: " + pokemon.height + ", Type: " + pokemon.type + "</p>");
  });
  
  document.write("<h2>Find Pokémon by Name</h2>");
  let foundPokemons = pokemonRepository.findByName('Pikachu');
  if (foundPokemons.length > 0) {
    document.write("<p>Found Pokémon: " + foundPokemons[0].name + "</p>");
  } else {
    document.write("<p>No Pokémon found with the name Pikachu</p>");
  }