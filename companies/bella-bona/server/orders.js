const express = require('express');
const _ = require('lodash');
const orderRoutes = express.Router();

orderRoutes.get('/', (req, res) => {
    res.status(200).json([
        {
            customerId: 100,
            customerName: 'Siavash Ghanbari',
            dishName: 'Dish A',
            deliveryDate: '2020-02-10',
            companyName: 'BMW',
            companyId: 100
        },
        {
            customerId: 101,
            customerName: 'Tushar Pillai',
            dishName: 'Dish B',
            deliveryDate: '2020-02-11',
            companyName: 'Benz',
            companyId: 101
        },
        {
            customerId: 102,
            customerName: 'Natalie',
            dishName: 'Dish C',
            deliveryDate: '2020-02-08',
            companyName: 'BMW',
            companyId: 100
        },
        {
            customerId: 103,
            customerName: 'Maxillian',
            dishName: 'Dish D',
            deliveryDate: '2020-01-08',
            companyName: 'BMW',
            companyId: 100
        },

        {
            customerId: 104,
            customerName: 'Rose',
            dishName: 'Dish E',
            deliveryDate: '2020-01-08',
            companyName: 'Benz',
            companyId: 101
        },

        {
            customerId: 105,
            customerName: 'Johnatan',
            dishName: 'Dish F',
            deliveryDate: '2020-01-18',
            companyName: 'Bella',
            companyId: 102
        }
    ]);
});

module.exports = orderRoutes;
