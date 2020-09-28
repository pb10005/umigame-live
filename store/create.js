export const state = () => ({
  puzzle: {
    title: "",
    puzzle: "",
    answer: "",
    reference: ""
  }
});

export const mutations = {
  setPuzzle(state, payload) {
    state.puzzle = payload;
  }
};

export const getters = {
  puzzle({ puzzle }) {
    return puzzle;
  }
};
