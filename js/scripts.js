let pokemonList = [
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

pokemonList.forEach(pokemon => {
    document.write(`<div class="card">`);
    document.write(`<h2>Name: ${pokemon.name}</h2>`);
    document.write(`<p>Height: ${pokemon.height}</p>`);
    document.write(`<p>Type: ${Array.isArray(pokemon.type) ? pokemon.type.join(', ') : pokemon.type}</p>`);
    document.write(`<p>Abilities: ${pokemon.abilities.join(', ')}</p>`);
    document.write(`</div>`);
});