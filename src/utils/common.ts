export const parseSet = <T>(iterable: T[]): Set<T> => {
  const set = new Set<T>();
  iterable.map((val) => set.add(val));
  return set;
};

export const arrayFromSet = <T>(set: Set<T>): T[] => {
  return [...set];
};
