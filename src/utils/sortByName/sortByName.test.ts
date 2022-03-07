import sortByName from './sortByName';
import '@testing-library/jest-dom';

describe('dateFormatter', () => {
  test('should return date formatted', () => {
    const items = [
      { name: 'matt' },
      { name: 'robs' },
      { name: 'edward' },
      { name: 'anne' },
    ];
    expect(sortByName(items)).toEqual([
      { name: 'anne' },
      { name: 'edward' },
      { name: 'matt' },
      { name: 'robs' },
    ]);
  });
});
