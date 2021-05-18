export default function({ store, redirect }) {
  var sendValue = {
    isHome: false,
    isExperiences: false,
    isThePlays: true,
    isPlayYourPart: false,
    isStory: false,
    isLatest: false
  };
  store.commit("routers/UPDATE_THE_STORE_ROUTERS", sendValue);
}
