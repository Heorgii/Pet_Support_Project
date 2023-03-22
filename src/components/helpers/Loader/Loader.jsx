import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { baseColor } from 'components/baseStyles/Variables.styled';

const onLoading = () => {
  return Loading.circle('Loading...', {
    backgroundColor: 'rgba(0,0,0,0.5)',
    svgSize: '160px',
    svgColor: `${baseColor.colors.orangeLight}`,
    messageFontSize: '20px',
  });
};

const onLoaded = () => {
  return Loading.remove();
};

export { onLoading, onLoaded };
