export const sortByName = (items: any) => {
  const response = items.sort(function (a: any, b: any) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });

  return response;
};
