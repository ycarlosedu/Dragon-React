import DateFormatter from './dateFormatter';
import '@testing-library/jest-dom';

describe('dateFormatter', () => {
  test('should return date formatted', () => {
    expect(DateFormatter('02-20-2021')).toEqual('20/02/2021');
    expect(DateFormatter('02-03-2021')).toEqual('03/02/2021');
    expect(DateFormatter('12/02/2021')).toEqual('02/12/2021');
    expect(DateFormatter('12,20,2021')).toEqual('20/12/2021');
  });
});
