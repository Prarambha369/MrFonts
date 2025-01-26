// script.js
function copyCode() {
  const codeBlock = document.getElementById('code-block');
  const textArea = document.createElement('textarea');
  textArea.value = codeBlock.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  alert('Code copied to clipboard!');
}