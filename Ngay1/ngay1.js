console.log("Câu 1:");
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
console.log(Product);

console.log("\nCâu 2:");
let products = [
    new Product(1, "Iphone 14 Pro Max", 32000000, 10, "Điện thoại", true),
    new Product(2, "Samsung Galaxy S23 Ultra", 25000000, 15, "Điện thoại", true),
    new Product(3, "MacBook Pro 16 inch", 60000000, 5, "Laptop", false),
    new Product(4, "Dell XPS 13", 40000000, 0, "Laptop", true),
    new Product(5, "Sony WH-1000XM4", 8000000, 20, "Tai nghe", true),
    new Product(6, "Bose QuietComfort 35 II", 7000000, 0, "Tai nghe", false),
    new Product(7, "Bàn phím cơ", 850000, 0, "Accessories", true),
    new Product(8, "Chuột không dây", 450000, 35, "Accessories", true),
    new Product(9, "Màn hình 24 inch", 35000000, 15, "Desktop", true),
    new Product(10, "Laptop Dell XPS 13", 250000000, 10, "Laptop", true),
    new Product(11, "Ổ cứng SSD 1TB", 30000000, 25, "Desktop", true),
    new Product(12, "Tai nghe Bluetooth", 12000000, 30, "Accessories", true),
    new Product(13, "Máy in HP LaserJet", 55000000, 8, "Office", false),
]
console.log(products);

// map (biến đổi): biến đổi từng phần tử -> mảng mới
console.log("\nCâu 3:");
let NewProducts = products.map(p => ({ name: p.name, price: p.price }));
console.log(NewProducts);

// filter (lọc): giữ lại phần tử thỏa điều kiện – trả về true / false
console.log("\nCâu 4:");
let InstockProducts = products.filter(p => p.quantity > 0);
console.log(InstockProducts);

// some (có ít nhất 1) phần tử thỏa?
console.log("\nCâu 5:");
let CheckPorductAbove30M = products.some(p => p.price > 30000000);
console.log(CheckPorductAbove30M);

// every (tất cả) phần tử đều thỏa?
console.log("\nCâu 6:");
let isAvailableProducts = products.filter(p => p.category === "Accessories").every(p => p.isAvailable === true);
console.log(isAvailableProducts);

// reduce là hàm dùng để gom mảng thành 1 giá trị duy nhất
console.log("\nCâu 7:");
let TotalValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log(TotalValue);

// for...of dùng cho mảng lặp qua lấy từng phần tử
console.log("\nCâu 8:");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? 'Đang bán' : 'Ngừng bán'}`);
}

// for...in dùng cho object lặp qua Lấy thuộc tính của object
console.log("\nCâu 9:");
for (const p of products) {
    for (const key in p) {
        console.log(`${key}: ${p[key]}`);
    }
}

console.log("\nCâu 10:");
let ArrayProductsisAvailableAndNotInStock = products.filter(p => p.isAvailable === true && p.quantity > 0).map(p => p.name);
console.log(ArrayProductsisAvailableAndNotInStock);