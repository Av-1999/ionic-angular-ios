import { createAnimation } from '@ionic/angular';


export const hideAnimation = async (className) => {
  const animationA = createAnimation()
    .addElement(document.querySelector(`.${className}`))
    .duration(100)
    // .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
    .fromTo('opacity', '1', '0');
  await animationA.play();
};

export const sendMessageAnimation = async (className) => {
  const animation = createAnimation()
  .addElement(document.querySelector(`.${className}`))
  .duration(100)
  .fromTo('border', '0', '10');
  await animation.play();
};


