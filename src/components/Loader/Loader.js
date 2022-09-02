import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function startLoader() {
  Loading.dots({
    svgColor: '#FFA17F',
    backgroundColor: 'transparent',
    svgSize: '100px',
  });
}

export function stopLoader() {
  Loading.remove(200);
}

export function Loader() {
  startLoader();
  stopLoader();
}