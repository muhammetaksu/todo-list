export const sortByString = (arr: any) => {
  arr.sort((a: { description: string }, b: { description: string }) => {
    if (a.description > b.description) return 1;
    if (a.description < b.description) return -1;
  });
  return arr;
};
