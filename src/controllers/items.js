export function generateReport (sales) {
  if (!sales) throw new Error('Sales must be provided')
  if (!Array.isArray(sales)) throw new Error('Sales must be an array')
  if (sales.length === 0) return 0

  const total = sales.reduce((accum, value) => {
    const itemFinalPrice = value.quantity * value.price
    return accum + itemFinalPrice
  }, 0)

  return total
}
