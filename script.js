// script.js
async function copyCode() {
  const codeBlock = document.getElementById('code-block').textContent;
  try {
    await navigator.clipboard.writeText(codeBlock);
    alert('Code copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
