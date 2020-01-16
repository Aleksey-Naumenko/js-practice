export const sum = num => {
   return num === 1 ? 1 : num + sum(num - 1);
}