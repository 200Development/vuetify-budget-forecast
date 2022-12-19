export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Projected Savings',
        backgroundColor: 'RGB(42, 46, 69)',
        data: [9000 - 4689, 9000 - 4689, 9000 - 4080, 9000 - 4100, 9000 - 4689, 9000 - 3780, 9000 - 4080]
      },
      {
        label: 'Projected Expenses',
        backgroundColor: 'RGB(241, 196, 15)',
        data: [4689, 4689, 4080, 4100, 4689, 3780, 4080]
      },
      {
        label: 'Projected Income',
        backgroundColor: 'RGB(98, 168, 172)',
        data: [9000, 9000, 9000, 9000, 9000, 9000, 9000]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  