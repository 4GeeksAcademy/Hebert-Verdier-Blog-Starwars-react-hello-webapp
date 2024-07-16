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
			// OBTENER PERSONAJES
			getCharacters: async () => {
				try {
					let response = await fetch("https://swapi.dev/api/people", {
						method: 'GET',
					})
					let data = await response.json()
					setStore({ charactersList: data.results })
					return true;
				} catch (error) {
					console.log(error);
					return false;
				}
			},
			// DETALLES DE PERSONAJE
			getDetailsCharacter: async (id) => {
				try {
					let response = await fetch(`https://swapi.dev/api/people/${id}`, {
						method: 'GET',
					})
					let data = await response.json()
					setStore({ character: data })
					console.log(data);
					return true;
				} catch (error) {
					console.log(error);
					return false;
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
					console.log(error);
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
					console.log(data);
					return true;
				} catch (error) {
					console.log(error);
					return false;
				}
			},
			addFavoritesList: () => {
				
			}
		}
	};
};

export default getState;
