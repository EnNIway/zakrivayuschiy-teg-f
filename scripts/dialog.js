const dialog = document.querySelector('.memory-dialog');
const openDialogButton = document.querySelector('.save-button');

openDialogButton.addEventListener('click', () => {
  dialog.showModal();
});

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
