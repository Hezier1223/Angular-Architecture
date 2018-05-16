/**
 * App 重新加载之后，页面Loading
 */
function preloaderFinished() {

  const /** @type {?} */ body = document.querySelector('body');
  const /** @type {?} */ preloader = document.querySelector('.preloader');
  body.style.overflow = 'hidden';

  /**
   * @return {?}
   */
  function remove() {
    // preloader value null when running --hmr
    if (!preloader) {
      return;
    }
    preloader.addEventListener('transitionend', function () {
      preloader.className = 'preloader-hidden';
    });
    preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
  }

  (/** @type {?} */ (window)).appBootstrap = () => {
    setTimeout(() => {
      remove();
      body.style.overflow = '';
    }, 100);
  };

}

export { preloaderFinished };
