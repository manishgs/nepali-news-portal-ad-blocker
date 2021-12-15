
domReady(() => {
    bindCheckboxes();
    initRateButton();
  })
  
  function domReady (callback) {
    if (document.readyState === 'complete') {
      callback()
    } else {
      window.addEventListener('load', callback, false);
    }
  }
  
  function bindCheckboxes() {
    for (const $setting of document.querySelectorAll('.setting')) {
      const $input = $setting.querySelector('input')
      $input.checked = localStorage[$input.name] === 'true'
      $setting.addEventListener('change', (event) => {
        localStorage[$input.name] = $input.checked
        chrome.storage.sync.set({[$input.name]:$input.checked});
      }, false)
    }
  }
  
  function initRateButton() {
    document.querySelector('.rating').href = `https://chrome.google.com/webstore/detail/${chrome.runtime.id}/reviews`
  }