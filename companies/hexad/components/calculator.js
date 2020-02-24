const { Order } = require('./order');
const readline = require('readline');

class PackageCalculator {
    constructor(products) {
        this.products = products;
        this.orders = [];
        this.finalResult = '';
    }

    /* this is an extra method that you didn't mention it in assignment, but
     * I added this feature for two reason:
     * 1. add new ability
     * 2. send data via parameters to testing my app by JEST!
     */
    readOrderByParameters(orders) {
        this.orders = [...orders];
        this.calculateAllOrders();
        return this.finalResult;
    }

    readOrderFromInput() {
        console.log(
            `Enter your input on each line, then press Ctrl+D to terminate and calculate: `
        );
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: true
        });
        rl.on('line', input => {
            let [amount, code] = input.split(' ');
            this.orders.push(new Order(amount, code));
        }).on('close', () => {
            this.calculateAllOrders();
        });
    }

    calculateAllOrders() {
        console.log('-----------------+');
        let finalResult = '';
        this.orders.map(order => {
            let product = this.products.find(p => p.code === order.code);
            let calculated = this.calculateAnOrder(order);
            let totalCostPerProduct = 0;
            let output = '';
            calculated.forEach(p => {
                let pack = product.packages.find(pk => pk.size === p.size);
                totalCostPerProduct += pack.cost * p.count;
                output += `     ${p.count} x ${pack.size} $${pack.cost}\r\n`;
            });
            let totalForEachProduct = `${order.amount} ${
                order.code
            } $${totalCostPerProduct.toFixed(2)}`;
            this.finalResult += totalForEachProduct;
            console.log(totalForEachProduct);

            console.log(output);
        });
    }

    calculateAnOrder(order) {
        let product = this.products.find(p => p.code === order.code);
        if (!product) {
            console.log('PACKAGE NOT DEFINED!');
            return [];
        }
        product.packages.sort(function(pack1, pack2) {
            return pack1.size - pack2.size;
        });

        let resultOfPackages = this.minimumCombination(
            order.amount,
            product.packages
        );
        return resultOfPackages;
    }
    minimumCombination(total, packages) {
        let packSizes = packages.map(p => {
            return p.size;
        });

        let T = [];
        let R = [];
        T[0] = 0;
        for (let i = 1; i <= total; i++) {
            T[i] = parseFloat(Number.MAX_SAFE_INTEGER) - 1;
            R[i] = -1;
        }
        for (let j = 0; j < packSizes.length; j++) {
            for (let i = 1; i <= total; i++) {
                if (i >= packSizes[j]) {
                    if (T[i - packSizes[j]] + 1 <= T[i]) {
                        T[i] = 1 + T[i - packSizes[j]];
                        R[i] = j;
                    }
                }
            }
        }
        return this.makeCombination(R, packSizes);
    }
    makeCombination(R, packSize) {
        let result = [];

        if (R[R.length - 1] == -1) {
            console.log('No package is possible');
            return;
        }
        let start = R.length - 1;
        while (start != 0) {
            let j = R[start];
            if (result.some(cc => cc.size == packSize[j])) {
                let index = result.findIndex(x => x.size == packSize[j]);
                result[index].count = result[index].count + 1;
            } else {
                result.push({ size: packSize[j], count: 1 });
            }

            start = start - packSize[j];
        }
        return result;
    }
}

module.exports = {
    PackageCalculator
};
