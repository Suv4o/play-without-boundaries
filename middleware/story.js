export default function({ store, redirect }) {
  var sendValue = {
    isHome: false,
    isExperiences: false,
    isThePlays: false,
    isPlayYourPart: false,
    isStory: true,
    isLatest: false
  };
  store.commit("routers/UPDATE_THE_STORE_ROUTERS", sendValue);
}
