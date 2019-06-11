// utils.js: this is global js provided to all apps
function counter() {
  let count = 0;
  return () => {
    return count++;
  };
}
export const makeCounter = counter();
console.log(makeCounter());
