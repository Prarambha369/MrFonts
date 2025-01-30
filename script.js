// script.js
function copyCode(id) {
  const codeBlock = document.getElementById(id);
  if (codeBlock) {
    const textArea = document.createElement('textarea');
    textArea.value = codeBlock.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Code copied to clipboard!');
  } else {
    console.error(`Element with id ${id} not found.`);
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}