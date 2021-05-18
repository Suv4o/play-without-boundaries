export default function({ store, redirect }) {
  var sendValue = {
    isHome: false,
    isExperiences: false,
    isThePlays: false,
    isPlayYourPart: true,
    isStory: false,
    isLatest: false
  };
  store.commit("routers/UPDATE_THE_STORE_ROUTERS", sendValue);
}
