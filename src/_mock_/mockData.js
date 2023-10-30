export const transactions = [
    {
        id: 0,
        description: "Cool thing 1",
        totalPrice: 10,
        customer: "Gavin",
        customerId: 3
    },
    {
        id: 1,
        description: "Cool stuff 1",
        totalPrice: 34.50,
        customer: "Ricardo",
        customerId: 2
    },
    {
        id: 2,
        description: 'Stoof and things',
        totalPrice: 85.00,
        customer: 'Heather',
        customerId: 1
    },
    {
        id: 3,
        description: 'Food stuff',
        totalPrice: 62.00,
        customer: 'Michell',
        customerId: 4

    },
    {
        id: 4,
        description: 'Gaming stuff',
        totalPrice: 110,
        customer: 'Gavin',
        customerId: 3
    },
    {
        id: 5,
        description: 'Cleaning stuff',
        totalPrice: 37,
        customer: 'Heather',
        customerId: 1
    },
    {
        id: 6,
        description: 'Car stuff',
        totalPrice: 115.00,
        customer: 'Michelle',
        customerId: 4
    },
    {
        id: 7,
        description: 'Pet stuff',
        totalPrice: 87,
        customer: 'Ricardo',
        customerId: 2
    }
];

// Assuming this would be done server-side. Can lift this to the client if needed.
const calculateThreeMonthPurchase = (customerId) => {
    const total = transactions
        .filter((transaction) => transaction.customerId === customerId)
        .reduce((threeMonthPurchase, transaction) => threeMonthPurchase + transaction.totalPrice, 0);
    return total;
}

export const loyaltyMembers = [
    {
        id: 1,
        name: 'Heather',
        threeMonthPurchase: calculateThreeMonthPurchase(1)
    },
    {
        id: 2,
        name: 'Ricardo',
        threeMonthPurchase: calculateThreeMonthPurchase(2)
    },
    {
        id: 3,
        name: 'Gavin',
        threeMonthPurchase: calculateThreeMonthPurchase(3)
    },
    {
        id: 4,
        name: 'Michelle',
        threeMonthPurchase: calculateThreeMonthPurchase(4)
    }
];

