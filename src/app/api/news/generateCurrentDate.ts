export const generateCurrnetDate = () => {
  const now = new Date();
  const koreaTime = new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);

  return koreaTime.replace(/\. /g, '').replace(/\./g, ''); // "yyyy. mm. dd." → "yyyymmdd"
};
