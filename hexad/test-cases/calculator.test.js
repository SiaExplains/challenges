const { Package } = require('../components/package');
const { Product } = require('../components/product');
const { Order } = require('../components/order');
const { PackageCalculator } = require('../components/calculator');

initProducts = () => {
    let vegemiteScroll = new Product('Vegemite Scroll', 'VS5', [
        new Package(3, 6.99),
        new Package(5, 8.99)
    ]);

    let blueberryMuffin = new Product('Blueberry Muffin', 'MB11', [
        new Package(2, 9.95),
        new Package(5, 16.95),
        new Package(8, 24.95)
    ]);

    let croissant = new Product('Croissant', 'CF', [
        new Package(3, 5.95),
        new Package(5, 9.95),
        new Package(9, 16.99)
    ]);
    return [vegemiteScroll, blueberryMuffin, croissant];
};

test('just simple test of class defenition', () => {
    expect(PackageCalculator).toBeDefined();
});

test('test calculation of an order', () => {
    let predefinedProducts = initProducts();
    let calculator = new PackageCalculator(predefinedProducts);
    let mockOrder = new Order(10, 'VS5');
    let mockExpected = '10 VS5 $17.98';
    expect(calculator.readOrderByParameters([mockOrder])).toBe(mockExpected);
});

test('test calculation array of orders', () => {
    let predefinedProducts = initProducts();
    let calculator = new PackageCalculator(predefinedProducts);
    let mockOrder = [
        new Order(10, 'VS5'),
        new Order(14, 'MB11'),
        new Order(13, 'CF')
    ];
    let mockExpected = '10 VS5 $17.9814 MB11 $54.8013 CF $25.85';
    expect(calculator.readOrderByParameters(mockOrder)).toBe(mockExpected);
});
