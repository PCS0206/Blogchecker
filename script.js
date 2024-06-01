document.getElementById('blogText').addEventListener('input', function() {
  const text = this.value;
  const wordCount = text.length;
  const wordCountNoSpace = text.replace(/\s+/g, '').length;

  document.getElementById('wordCount').textContent = `글자수: ${wordCount} (공백 포함)`;
  document.getElementById('wordCountNoSpace').textContent = `글자수: ${wordCountNoSpace} (공백 미포함)`;

  const forbiddenWords = ['자연눈썹', '반영구', '문신', 'SMP', '아이라인', '헤어라인','입술','미인점','울쎄라', '리프팅','보톡스','필러','여드름','안마','지압','치료','부종','붓기','경락','개선','윤곽',모발이식','탈모','탈모관리','시술','커버','투피커버''교정','재활','개선','다이어트','매입','매매','금은방','금거래소','금시세','금전망','금값','팔때','살때','판매','구입','구매','매매','매입','개통','펍','라운지','라이브카페','포차','클럽','바','홀덤','홀덤펍','운전연수','주차대행','리스','렌트','보험','보험수리','대차','임대','모텔','분양','입양','운전학원','대출','흥신소','심부름센터','병원','부동산','공인중개사','법률사무소','법무사사무소','한약판매업체','영양제','건강기능식품','렌즈','고물상','추천','할인']; // 금지 단어 리스트
  const foundForbiddenWords = forbiddenWords.filter(word => text.includes(word));

  const warningElement = document.getElementById('warning');
  if (foundForbiddenWords.length > 0) {
    warningElement.textContent = `주의: 금지어 발견 - ${foundForbiddenWords.join(', ')}`;
  } else {
    warningElement.textContent = '';
  }
});
