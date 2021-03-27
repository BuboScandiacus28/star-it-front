export const setBlurEvent = (e) => {
  if (e.target.value === '') {
    e.target.placeholder = e.target.parentNode.querySelector('span').textContent;
    e.target.parentNode.querySelector('span').style.display = 'none';
  }
  e.preventDefault();
};

export const setFocusEvent = (e) => {
  e.target.placeholder = '';
  e.target.parentNode.querySelector('span').style.display = 'block';
  e.preventDefault();
};
