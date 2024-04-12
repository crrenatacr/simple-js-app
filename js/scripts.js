var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  

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
    var pokemonList = document.querySelector('.pokemon-list');
    var listItem = document.createElement('li');
    listItem.classList.add('card');

    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn');
    button.classList.add('card-button'); // Add a class for button styling
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
      showModal(pokemon);
    });
  }

  function showLoadingMessage() {
    var loadingMessage = document.createElement('div');
    loadingMessage.innerText = 'Loading...';
    loadingMessage.classList.add('loading-message');
    document.body.appendChild(loadingMessage);
  }

  function hideLoadingMessage() {
    var loadingMessage = document.querySelector('.loading-message');
    if (loadingMessage) {
      loadingMessage.remove();
    }
  }

  function showModal(pokemon) {
    var modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');

    var modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');

    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    var closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.classList.add('modal-close');

    closeButton.addEventListener('click', function () {
      closeModal();
    });

    var pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.imgUrl;
    pokemonImage.alt = pokemon.name;
    pokemonImage.classList.add('modal-image');

    var nameParagraph = document.createElement('p');
    nameParagraph.innerText = 'Name: ' + pokemon.name;

    var heightParagraph = document.createElement('p');
    heightParagraph.innerText = 'Height: ' + pokemon.height;

    modalContent.appendChild(closeButton);
    modalContent.appendChild(pokemonImage);
    modalContent.appendChild(nameParagraph);
    modalContent.appendChild(heightParagraph);

    modalContainer.appendChild(modalContent);

    modalOverlay.appendChild(modalContainer);

    document.body.appendChild(modalOverlay);

    window.addEventListener('click', function (event) {
      if (event.target === modalOverlay) {
        closeModal();
      }
    });

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  }

  function closeModal() {
    var modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.remove();
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
