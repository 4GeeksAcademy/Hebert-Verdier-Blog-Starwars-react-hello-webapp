const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charactersList: [],
			planetsList: [],
			character: {},
			planet: {},
			favoritesList: [],
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
			// PERSONAJES
			// OBTENER PERSONAJES
			getCharacters: async () => {
				try {
					let response = await fetch("https://organic-yodel-q7979775vvqq2xr9q-3000.app.github.dev/characters", {
						method: 'GET',
					})
					let data = await response.json()
					if (response.ok) {
						setStore({ charactersList: data })
						return true;
					}
					setStore({ charactersList: false })
					return false;
				} catch (error) {
					setStore({ charactersList: false })
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
			// PLANETAS
			// OBTENER PLANETAS
			getPlanets: async () => {
				try {
					let response = await fetch("https://organic-yodel-q7979775vvqq2xr9q-3000.app.github.dev/planets", {
						method: 'GET',
					})
					let data = await response.json()
					if (response.ok) {
						setStore({ planetsList: data })
						return true;
					}
					setStore({ planetsList: false })
					return false;
				} catch (error) {
					setStore({ planetsList: false })
					return false;
				}
			},
			// DETALLES DE PLANETA
			getDetailsPlanet: async (id) => {
				try {
					let response = await fetch(`https://organic-yodel-q7979775vvqq2xr9q-3000.app.github.dev/planet/${id}`, {
						method: 'GET',
					})
					let data = await response.json()
					setStore({ planet: data })
					return true;
				} catch (error) {
					return false;
				}
			},
			// AÑADIR PLANETA
			addPlanet: async (name, climate, population, orbital_period, rotation_period, diameter, image) => {
				try {
					let response = await fetch("https://organic-yodel-q7979775vvqq2xr9q-3000.app.github.dev/planet", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							"name": name,
							"climate": climate,
							"population": population,
							"orbital_period": orbital_period,
							"rotation_period": rotation_period,
							"diameter": diameter,
							"image": image
						})
					})
					let data = await response.json()
					if (response.ok) {
						return data ;
					}
					return data;
				}
				catch (error) {
					console.log(error);
					return { 'error': 'unexpected error' };
				}
			},
			// FAVORITOS
			// OBTENER FAVORITOS
			getFavorites: async () => {
				try {
					let response = await fetch("https://organic-yodel-q7979775vvqq2xr9q-3000.app.github.dev/favorites/user/1", {
						method: 'GET',
					})
					let data = await response.json()
					if (response.ok) {
						setStore({ favoritesList: data.favorites })
						return true;
					}
					setStore({ favoritesList: false })
					console.log(getStore().favoritesList);
					return false;
				} catch (error) {
					setStore({ favoritesList: false })
					console.log(getStore().favoritesList);
					return false;
				}
			},
			// AÑADIR FAVORITO
			addFavoriteCharacter: async (user_id, character_id) => {
				try {
					let response = await fetch(`https://organic-yodel-q7979775vvqq2xr9q-3000.app.github.dev/favorite/user/character/${user_id}/${character_id}`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
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
			// ELIMINAR FAVORITO
			deleteFavoriteCharacter: async (user_id, planet_id) => {
				try {
					let response = await fetch(`https://organic-yodel-q7979775vvqq2xr9q-3000.app.github.dev/favorite/user/planet/${user_id}/${planet_id}`, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json'
						},
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

			// AÑADIR FAVORITO A LA LISTA
			// addFavoritesList: (name) => {
			// 	if (getStore().favoritesList.includes(name)) {
			// 		const newList = getStore().favoritesList.filter((item) => item != name)
			// 		setStore({ favoritesList: newList })
			// 	} else {
			// 		setStore({ favoritesList: [...getStore().favoritesList, name] });
			// 	}
			// },
		}
	};
};

export default getState;