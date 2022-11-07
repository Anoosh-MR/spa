export const sizeConvertion = (n) => {
  const k = n > 0 ? Math.floor(Math.log2(n) / 10) : 0;
  const rank = (k > 0 ? "KMGT"[k - 1] : "") + "b";
  const count = Math.floor(n / Math.pow(1024, k));
  return count + rank;
};
