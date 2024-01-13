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
        abilities: ['inner-focus, infiltrator']
    },

    {
        name: 'Pidgeot',
        height: 1.5,
        type: ['flying', 'normal'],
        abilities: ['keen-eye, tangled-feet, big-pecks']
    },

    {
        name: 'Wigglytuff',
        height: 1,
        type: ['fairy', 'normal'],
        abilities: ['cute-charm, frisk']
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
    }];


    for (let i = 0; i < pokemonList.length; i++) {
        let comment = "";
        if ( pokemonList[i].height >= 0.4 && pokemonList[i].height <= 0.8) {
            comment = " - It's a small Pokemon";
        } else if (pokemonList[i].height >= 0.9 && pokemonList[i].height <= 1.2) {
            comment = " - It's an average Pokemon";
        } else {
            comment = " - It's a big Pokemon!";
        }
        const card = `<div class="card"><h2>${pokemonList[i].name}</h2><p>Height: ${pokemonList[i].height} - ${comment}</p></div>`;
        document.write(card);
        }











