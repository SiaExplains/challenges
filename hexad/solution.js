const { Package } = require('./components/package');
const { Product } = require('./components/product');
const { PackageCalculator } = require('./components/calculator');

/* in real-app we should store these data in database
 * you can other types of product ;)
 */
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

    // in real-app we should fetch this array by api from database
    return [vegemiteScroll, blueberryMuffin, croissant];
};

demo = () => {
    console.log('bakery package calculator!');
    let predefinedProducts = initProducts();
    console.table(predefinedProducts);
    console.log('Product initialized');
    console.log('-------------------+');
    let calculator = new PackageCalculator(predefinedProducts);
    calculator.readOrderFromInput();
};

demo();
