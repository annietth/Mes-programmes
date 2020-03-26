export default { title: 'Page' };

export const withText = () => '<button class="btn"> Hi it s Annie</button>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};
