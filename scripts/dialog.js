const saveButton = document.querySelector('.save-button');
const dialog = document.querySelector('.memory-dialog');

saveButton.addEventListener('click', () => {
  if (!dialog.open) dialog.showModal();
});

dialog.querySelector('form').addEventListener('submit', () => {
  dialog.close();
});
