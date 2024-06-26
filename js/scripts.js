var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      // Capitalize the first letter of the name
      pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      repository.push(pokemon);
    } else {
      console.log('Invalid Pokemon data.');
    }
  }

  function getAll() {
    return repository;
  }

  function addListItem(pokemon) {
    var pokemonList = document.querySelector('.pokemon-list');
    var listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'list-group-item-action'); // Adding Bootstrap classes
    listItem.setAttribute('role', 'listitem'); // Adding ARIA role

    // Creating a button element with Bootstrap button utility classes
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-secondary', 'btn-block'); // Adding Bootstrap button classes
    button.setAttribute('type', 'button'); // Setting button type to 'button' to prevent form submission

    // Add event listeners to handle button hover
    button.addEventListener('mouseover', function () {
      button.classList.remove('btn-secondary');
      button.classList.add('btn-success');
    });

    button.addEventListener('mouseout', function () {
      button.classList.remove('btn-success');
      button.classList.add('btn-secondary');
    });

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });

    listItem.appendChild(button); // Appending the button to the list item
    pokemonList.appendChild(listItem); // Appending the list item to the Pokemon list
  }

  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        hideLoadingMessage();
        data.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function loadDetails(pokemon) {
    showLoadingMessage();
    return fetch(pokemon.detailsUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        hideLoadingMessage();
        // Add details to the Pokemon object
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types.map(function (type) {
          return type.type.name;
        });
        // Check if Pokemon has abilities
        if (details.abilities) {
          pokemon.abilities = details.abilities.map(function (ability) {
            return ability.ability.name;
          });
        } else {
          pokemon.abilities = [];
        }
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  // Function to show loading message
  function showLoadingMessage() {
    var loadingMessage = document.createElement('div');
    loadingMessage.classList.add('loading-message');
    loadingMessage.innerText = 'Loading...';
    document.body.appendChild(loadingMessage);
  }

  // Function to hide loading message
  function hideLoadingMessage() {
    var loadingMessage = document.querySelector('.loading-message');
    if (loadingMessage) {
      loadingMessage.remove();
    }
  }

  // Function to show modal with Pokemon details
  function showModal(pokemon) {
    var modalTitle = document.querySelector('.modal-title');
    var modalImage = document.querySelector('.modal-image');
    var modalName = document.querySelector('.modal-name');
    var modalHeight = document.querySelector('.modal-height');
    var modalAbilities = document.querySelector('.modal-abilities');

    modalTitle.innerText = pokemon.name;
    modalImage.setAttribute('src', pokemon.imageUrl);
    modalName.innerText = 'Name: ' + pokemon.name;
    modalHeight.innerText = 'Height: ' + pokemon.height + 'm';
    modalAbilities.innerText = 'Abilities: ' + pokemon.abilities.join(', ');

    $('#pokemonModal').modal('show');
  }

  // Expose methods
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

// Function to initialize the Pokemon repository
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});