var pokemonRepository = (function () {
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
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
    let listItem = document.createElement('li');
    listItem.classList.add('card');

    let button = document.createElement('button');
    button.innerText = pokemon.name;
    listItem.appendChild(button);

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });

    pokemonList.appendChild(listItem);
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
          let pokemon = {
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
        pokemon.imgUrl = details.sprites.front_default;
        pokemon.height = details.height;
        // Assigning additional details from API response
        pokemon.types = details.types.map((type) => type.type.name);
        pokemon.abilities = details.abilities.map((ability) => ability.ability.name);
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
    });
  }

  function showLoadingMessage() {
    let loadingMessage = document.createElement('div');
    loadingMessage.innerText = 'Loading...';
    loadingMessage.classList.add('loading-message');
    document.body.appendChild(loadingMessage);
  }

  function hideLoadingMessage() {
    let loadingMessage = document.querySelector('.loading-message');
    if (loadingMessage) {
      loadingMessage.remove();
    }
  }

  function showModal(pokemon) {
    // Create modal overlay
    let modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');

    // Create modal container
    let modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');

    // Create modal content
    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Create close button
    let closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.classList.add('modal-close');

    // Add close button event listener
    closeButton.addEventListener('click', function () {
      closeModal(modalOverlay);
    });

    // Create image element
    let pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.imgUrl;
    pokemonImage.alt = pokemon.name;
    pokemonImage.classList.add('modal-image');

    // Create name paragraph
    let nameParagraph = document.createElement('p');
    nameParagraph.innerText = 'Name: ' + pokemon.name;

    // Create height paragraph
    let heightParagraph = document.createElement('p');
    heightParagraph.innerText = 'Height: ' + pokemon.height;

    // Create types paragraph
    let typesParagraph = document.createElement('p');
    typesParagraph.innerText = 'Types: ' + pokemon.types.join(', ');

    // Create abilities paragraph
    let abilitiesParagraph = document.createElement('p');
    abilitiesParagraph.innerText = 'Abilities: ' + pokemon.abilities.join(', ');

    // Append elements to modal content
    modalContent.appendChild(closeButton);
    modalContent.appendChild(pokemonImage);
    modalContent.appendChild(nameParagraph);
    modalContent.appendChild(heightParagraph);
    modalContent.appendChild(typesParagraph);
    modalContent.appendChild(abilitiesParagraph);

    // Append modal content to modal container
    modalContainer.appendChild(modalContent);

    // Append modal container to modal overlay
    modalOverlay.appendChild(modalContainer);

    // Append modal overlay to body
    document.body.appendChild(modalOverlay);

    // Allow closing modal via keyboard
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal(modalOverlay);
      }
    });
  }

  function closeModal(modalOverlay) {
    document.body.removeChild(modalOverlay);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
