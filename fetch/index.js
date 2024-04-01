async function fetchData() {
    try {
        const pokemonName = document.getElementById("PokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Pokemon não foi achado");
        }

        const data = await response.json();
        const pokemonImg = document.getElementById("PokemonImg");
        const pokemonSprite = data.sprites.front_default;
        console.log(data);

        pokemonImg.src = pokemonSprite;
        pokemonImg.style.display = "flex";
        pokemonImg.style.width = "200px";
        pokemonImg.style.justifyContent = "center";

        const pokemonUsername = document.getElementById("PokemonUsername");
        pokemonUsername.textContent = data.name.toUpperCase();

        const types = document.getElementsByClassName("types");
        const type1 = document.getElementById("tipo1");
        const type2 = document.getElementById("tipo2");
        const type1read = data.types[0].type.name;
        const type2read = data.types[1] ? data.types[1].type.name : undefined;

        type1.textContent = type1read.toUpperCase();

        if (type2read === undefined) {
            type2.style.display = "none";
        } else {
            type2.textContent = type2read.toUpperCase();
            type2.style.display = "block"; 
        }
        

        for (let i = 0; i < types.length; i++) {
            const typeElement = types[i];
            const type = typeElement.textContent.toLowerCase();
            switch (type) {
                case "fire":
                    typeElement.style.color = "#ED410B";
                    break;
                case "grass":
                    typeElement.style.color = "#6EBC31";
                    break;
                case "water":
                    typeElement.style.color = "#318FEF";
                    break;
                case "electric":
                    typeElement.style.color = "#F2A70A";
                    break;
                case "ground":
                    typeElement.style.color = "#E4CF5E";
                    break;
                case "bug":
                    typeElement.style.color = "#A6B71F";
                    break;
                case "normal":
                    typeElement.style.color = "#C8C2BB"
                    break;
                case "flying":
                    typeElement.style.color = "#8397E8"
                    break;
                case "fighting":
                    typeElement.style.color = "#662D1B"
                    break;
                case "poison":
                    typeElement.style.color = "#884289"
                    break;
                case "rock":
                    typeElement.style.color = "#A48B40"
                    break;
                case "psychic":
                    typeElement.style.color = "#EA447E"
                    break;
                case "ice":
                    typeElement.style.color = "#6CD2F5"
                    break;
                case "ghost":
                    typeElement.style.color = "#5C5CB0"
                    break;
                case "steel":
                    typeElement.style.color = "#B6B4C2"
                    break;
                case "dragon":
                    typeElement.style.color = "#705BD9"
                    break;
                case "dark":
                    typeElement.style.color = "#4D382A"
                    break;
                case "fairy":
                    typeElement.style.color = "#F6AFF3"
                    break;

                default:
                    break;
            }
        }

        const pokemonNumber = document.getElementById("pokemonumber");
        pokemonNumber.textContent = `Nº ${data.id}`;
    } catch (error) {
        console.error(error);
    }

}


// fetch("https://pokeapi.co/api/v2/pokemon/1")
//     .then(Response => Response.json())
//     .then(data => console.log(data.name))

//     .catch(error => console.error(error));