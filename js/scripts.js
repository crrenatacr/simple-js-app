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

    function add(pokemon) {
      if (
        typeof pokemon === 'object' &&
        'name' in pokemon &&
        'height' in pokemon &&
        'type' in pokemon
      ) {
        repository.push(pokemon);
      } else {
        console.log('Invalid Pokemon data.');
      }
    }
  
    function getAll() {
      return repository;
    }
  
    function addListItem(pokemon) {
      let pokemonList = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li'); // Changed div to li
      listItem.classList.add('card');
  
      let button = document.createElement('button'); // Create button element
      button.innerText = pokemon.name; // Set button text to Pokémon's name
      listItem.appendChild(button); // Append button to list item
  
      let cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      let height = document.createElement('p');
      height.innerText = 'Height: ' + pokemon.height;
  
      let type = document.createElement('p');
      type.innerText = 'Type: ' + pokemon.type;
  
      let abilities = document.createElement('p');
      abilities.innerText = 'Abilities: ' + pokemon.abilities.join(', ');
  
      cardBody.appendChild(height);
      cardBody.appendChild(type);
      cardBody.appendChild(abilities);
  
      listItem.appendChild(cardBody); // Append card body to list item
      pokemonList.appendChild(listItem); // Append list item to Pokemon list
    }
  
    // Add the addListItem function to the returned object
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();
  
  // Call addListItem inside the forEach loop
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
  