// projectImages.js
const kikiImages = import.meta.glob('../assets/projects/kiki-movie/*.{gif,jpg,jpeg,png}', { eager: true });
const portfolioImages = import.meta.glob('../assets/projects/portfolio/*.{gif,jpg,jpeg,png}', { eager: true });
const emotionImages = import.meta.glob('../assets/projects/emotion-diary/*.{gif,jpg,jpeg,png}', { eager: true });
const continueImages = import.meta.glob('../assets/projects/continue-pr/*.{gif,jpg,jpeg,png}', { eager: true });
const crazyImages = import.meta.glob('../assets/projects/crazy-archive/*.{gif,jpg,jpeg,png}', { eager: true });
const daangnImages = import.meta.glob('../assets/projects/daangn-clone/*.{gif,jpg,jpeg,png}', { eager: true });

const getImagesFromModule = (moduleImages) => {
  return (
    Object.values(moduleImages).map(module => module.default)
  )
}

export const projectImages = {
  'KIKI_MOVIE': getImagesFromModule(kikiImages),
  'PORTFOLIO': getImagesFromModule(portfolioImages),
  'EMOTION_DIARY': getImagesFromModule(emotionImages),
  'CONTINUE': getImagesFromModule(continueImages),
  'CRAZY_ARCHIVE': getImagesFromModule(crazyImages),
  'DAANGN': getImagesFromModule(daangnImages)
};