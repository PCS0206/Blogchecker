document.getElementById('blogText').addEventListener('input', function() {
  const text = this.value;
  const wordCount = text.length;
  const wordCountNoSpace = text.replace(/\s+/g, '').length;

  document.getElementById('wordCount').textContent = `글자수: ${wordCount} (공백 포함)`;
  document.getElementById('wordCountNoSpace').textContent = `글자수: ${wordCountNoSpace} (공백 미포함)`;

  const forbiddenWords = ['금지어1', '금지어2', '금지어3']; // 금지 단어 리스트
  const foundForbiddenWords = forbiddenWords.filter(word => text.includes(word));

  const warningElement = document.getElementById('warning');
  if (foundForbiddenWords.length > 0) {
    warningElement.textContent = `주의: 금지어 발견 - ${foundForbiddenWords.join(', ')}`;
  } else {
    warningElement.textContent = '';
  }
});
