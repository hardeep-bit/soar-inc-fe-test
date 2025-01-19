const recentTransactions = [{
  id: '56beeeb9-0f59-432a-bed1-73a3cfff511', // temp uuid
  action: 'credit',
  via: 'cash',
  amount: '8199',
  currency: '$',
  actionVia: {
    id: '56beeeb9-0f59-432a-bed1-73a32342224',
    name: 'Sohal Khan'
  },
  date: '2025-01-11T06:00:00.000Z'
}, {
  id: '56beeeb9-0f59-432a-bed1-73a3cffc8534', // temp uuid
  action: 'debit',
  via: 'creditcard',
  amount: '1001',
  currency: '$',
  actionVia: {
    id: '56beeeb9-0f59-432a-bed1-73a3cffc8534',
    name: 'Hardeep Singh'
  },
  date: '2025-01-17T06:00:00.000Z'
}, {
  id: '56beeeb9-0f59-432a-bed1-73a3cffc8123', // temp uuid
  action: 'credit',
  via: 'wallet',
  amount: '10',
  currency: '$',
  actionVia: {
    id: '56beeeb9-0f59-432a-bed1-623562623',
    name: 'Paypal'
  },
  date: '2025-01-16T06:00:00.000Z'
},{
  id: '56beeeb9-0f59-432a-bed1-73a3cffc414', // temp uuid
  action: 'credit',
  via: 'wallet',
  amount: '19',
  currency: '$',
  actionVia: {
    id: '56beeeb9-0f59-432a-bed1-73a3cff214234',
    name: 'Paypal'
  },
  date: '2025-01-14T06:00:00.000Z'
}]

export default recentTransactions;