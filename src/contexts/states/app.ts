export const initApp: State.App = {
  loading: false,
  language: navigator.language.includes('zh') ? 'zh' : 'en',
  appWidth: window.innerWidth,
  appHeight: window.innerHeight
}

export default initApp
