import { generateReport } from './items'

describe('Items Report', () => {
  it('should be a function', () => {
    expect(typeof generateReport).toBe('function')
  })
})
