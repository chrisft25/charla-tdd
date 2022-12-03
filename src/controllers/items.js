export function generateReport (sales) {
  if (!sales) throw new Error('Sales must be provided')
  if (!Array.isArray(sales)) throw new Error('Sales must be an array')
  if (sales.length === 0) return 0

  let total = 0

  for (let i = 0; i < sales.length; i++) {
    total = total + sales[i].quantity * sales[i].price
  }

  return total
}
