if (/Android/gi.test(navigator.userAgent)) {
    const innerHeight = window.innerHeight;
    window.addEventListener('resize', () => {
      const newInnerHeight = window.innerHeight;
      if (innerHeight > newInnerHeight) {
        // 键盘弹出事件处理
      } else {
        // 键盘收起事件处理
        document.getElementsByTagName("body")[0].style.height = window.screen.height;
      }
    });
  } else {
    window.addEventListener('focusin', () => {
      // 键盘弹出事件处理
    });
    window.addEventListener('focusout', () => {
      // 键盘收起事件处理
      document.getElementsByTagName("body")[0].style.height = window.screen.height;
    });
  }