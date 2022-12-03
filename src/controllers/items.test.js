import { generateReport } from './items'

describe('Items Report', () => {
  it('should be a function', () => {
    expect(typeof generateReport).toBe('function')
  })

  it('should throw an error if sales list is not provided', () => {
    expect(() => generateReport()).toThrow('Sales must be provided')
  })

  it('should throw an error if sales is not an array', () => {
    // Arrange
    const sales = Number

    // Act & Assert
    expect(() => generateReport(sales)).toThrow('Sales must be an array')
  })

  it('should return 0 if sales list is empty', () => {
    // Arrange
    const sales = []

    // Act & Assert
    expect(generateReport(sales)).toBe(0)
  })

  it('should return 10 if a list with one $10 item is provided', () => {
    // Arrange
    const sales = [
      {
        productName: 'Baleada',
        quantity: 1,
        price: 10
      }
    ]

    // Act & Assert
    expect(generateReport(sales)).toBe(10)
  })
})
