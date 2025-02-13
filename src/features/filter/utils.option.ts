/** 필터에 표시할 옵션 value를 반환하는 함수 */
export const getOptionValue = (
  defaultOption: string,
  selectedOption: string[]
) => {
  // 선택된 옵션이 없는 경우
  if (!selectedOption || selectedOption.length === 0) {
    return defaultOption;
  }

  // 다수 선택된 경우
  if (selectedOption.length > 1) {
    return `${selectedOption[0]} 외 ${selectedOption.length - 1}개`;
  }

  return selectedOption[0];
};
