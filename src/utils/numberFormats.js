export function numberWithcommas(x) {
  if (x !== null) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
