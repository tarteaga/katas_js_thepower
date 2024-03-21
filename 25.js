const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let totalSales = 0;

for (const product of products) {
  totalSales += product.sellCount;
}

const averageSales = totalSales / products.length;

console.log("Total de ventas:", totalSales);
console.log("Media de ventas:", averageSales);
