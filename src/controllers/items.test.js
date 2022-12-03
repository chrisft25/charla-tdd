import { generateReport } from './items'

describe('Items Report', () => {
  it('should be a function', () => {
    expect(typeof generateReport).toBe('function')
  })

  it('should throw an error if sales list is not provided', () => {
    expect(() => generateReport()).toThrow()
  })
})
