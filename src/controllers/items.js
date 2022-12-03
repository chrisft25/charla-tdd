export function generateReport (sales) {
  if (!sales) throw new Error('Sales must be provided')
  if (!Array.isArray(sales)) throw new Error('Sales must be an array')
}
