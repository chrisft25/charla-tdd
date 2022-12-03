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
})
