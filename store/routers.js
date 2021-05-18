export const state = () => ({
  isHome: true,
  isExperiences: false,
  isThePlays: false,
  isPlayYourPart: false,
  isStory: false,
  isLatest: false
});

export const mutations = {
  UPDATE_THE_STORE_ROUTERS(state, value) {
    state.isHome = value.isHome;
    state.isExperiences = value.isExperiences;
    state.isThePlays = value.isThePlays;
    state.isPlayYourPart = value.isPlayYourPart;
    state.isStory = value.isStory;
    state.isLatest = value.isLatest;
  }
};

export const actions = {};

export const getters = {};
