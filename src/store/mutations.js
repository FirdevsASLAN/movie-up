const mutations = {
  addFavorite(state, payload) {
    state.favorites.push(payload);
  },
  removeFavorite(state, payload) {
    state.favorites = state.favorites.filter((fav) => fav !== payload);
  },
};
export default mutations;
