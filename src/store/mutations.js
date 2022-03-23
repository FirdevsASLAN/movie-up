const mutations = {
  addFavorite(state, payload) {
    state.favorites.push(payload);
  },
};
export default mutations;
