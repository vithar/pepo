block('icon')
  .mod('type', 'home')
  .content()(function () {
    var prev = applyNext();

    prev.content = '<path d="M60.034 33.795l-26-23.984a2.997 2.997 0 0 0-4.068 0l-26 23.984a3 3 0 0 0 4.068 4.41l2.265-2.09 6.809 24.683A3 3 0 0 0 20 63h24a3 3 0 0 0 2.892-2.202l6.809-24.683 2.265 2.09a2.988 2.988 0 0 0 2.033.795 3 3 0 0 0 2.035-5.205zM32 53a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-11a6.999 6.999 0 1 1 0-13.998A7 7 0 1 1 32 42z"></path>'
    prev.attrs.viewBox = '0 0 64 72';
    prev.attrs.height = 28;
    prev.attrs.width = 26;

    return prev;
  });
