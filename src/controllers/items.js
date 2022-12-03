export function generateReport (sales) {
  if (!sales) throw new Error('Sales must be provided')
  if (!Array.isArray(sales)) throw new Error('Sales must be an array')
  if (sales.length === 0) return 0

  return sales[0].quantity * sales[0].price
}
