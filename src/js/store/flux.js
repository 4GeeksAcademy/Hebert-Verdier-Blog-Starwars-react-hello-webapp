const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charactersList: [],
			planetsList: [],
			character: {},
			planet: {},
			favoritesList: [],
			// styleButton: { background: 'DarkGreen' }
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			// OBTENER PERSONAJES
			getCharacters: async () => {
				try {
					let response = await fetch("https://organic-yodel-q7979775vvqq2xr9q-3000.app.github.dev/characters", {
						method: 'GET',
					})
					let data = await response.json()
					setStore({ charactersList: data })
					return true;
				} catch (error) {
					return false;
				}
			},
			// DETALLES DE PERSONAJE
			getDetailsCharacter: async (id) => {
				try {
					let response = await fetch(`https://organic-yodel-q7979775vvqq2xr9q-3000.app.github.dev/character/${id}`, {
						method: 'GET',
					})
					let data = await response.json()
					console.log(data);
					setStore({ character: data })
					return true;
				} catch (error) {
					return false;
				}
			},
			// AÑADIR PERSONAJE
			addCharacter: async (name, birthYear, gender, height, skinColor, eyeColor, image) => {
				try {
					let response = await fetch("https://organic-yodel-q7979775vvqq2xr9q-3000.app.github.dev/character", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							"name": name,
							"birth_year": birthYear,
							"gender": gender,
							"height": height,
							"skin_color": skinColor,
							"eye_color": eyeColor,
							"image": image
						})
					})
					let data = await response.json()
					if (response.ok) {
						return true;
					}
					return data;
				}
				catch (error) {
					console.log(error);
					return { 'error': 'unexpected error' };
				}
			},
			// OBTENER PLANETAS
			getPlanets: async () => {
				try {
					let response = await fetch("https://swapi.dev/api/planets", {
						method: 'GET',
					})
					let data = await response.json()
					setStore({ planetsList: data.results })
					return true;
				} catch (error) {
					return false;
				}
			},
			// DETALLES DE PLANETA
			getDetailsPlanet: async (id) => {
				try {
					let response = await fetch(`https://swapi.dev/api/planets/${id}`, {
						method: 'GET',
					})
					let data = await response.json()
					setStore({ planet: data })
					return true;
				} catch (error) {
					return false;
				}
			},
			// AÑADIR FAVORITO A LA LISTA
			addFavoritesList: (name) => {
				if (getStore().favoritesList.includes(name)) {
					const newList = getStore().favoritesList.filter((item) => item != name)
					setStore({ favoritesList: newList })
				} else {
					setStore({ favoritesList: [...getStore().favoritesList, name] });
				}
			},
		}
	};
};

export default getState;