import formatNumber from 'format-number';

export const formatAsCurrency = (value: number): string => {
  const formatter = formatNumber();
  return formatter(value);
};
