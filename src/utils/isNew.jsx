export const isNew = (createdAt) => {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const diffInMs = now - createdDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return diffInDays <= 7;
};
