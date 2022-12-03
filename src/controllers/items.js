export function generateReport (sales) {
  if (!sales) throw new Error('Sales must be provided')
  if (!Array.isArray(sales)) throw new Error('Sales must be an array')

  return sales[0].quantity * sales[0].price
}
