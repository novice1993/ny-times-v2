/** 필터에 표시할 옵션 value를 반환하는 함수 */
export const getFilterValue = (
  defaultFilter: string,
  selectedFilter: string[]
) => {
  // 선택된 옵션이 없는 경우
  if (!selectedFilter || selectedFilter.length === 0) {
    return defaultFilter;
  }

  // 다수 선택된 경우
  if (selectedFilter.length > 1) {
    return `${selectedFilter[0]} 외 ${selectedFilter.length - 1}개`;
  }

  return selectedFilter[0];
};
