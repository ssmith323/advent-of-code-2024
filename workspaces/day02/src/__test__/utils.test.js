const { parseDay2 } = require('../utils')

describe('utils', () => {
  describe('parseDay2', () => {
    it('should work 1', () => {
      const actual = parseDay2([48, 46, 47, 49, 51, 54, 56])

      expect(actual).toEqual(1)
    })

    it('should work 2', () => {
      const actual = parseDay2([1, 1, 2, 3, 4, 5])

      expect(actual).toEqual(1)
    })

    it('should work 3', () => {
      const actual = parseDay2([1, 2, 3, 4, 5, 5])

      expect(actual).toEqual(1)
    })

    it('should work 4', () => {
      const actual = parseDay2([5, 1, 2, 3, 4, 5])

      expect(actual).toEqual(1)
    })

    it('should work 5', () => {
      const actual = parseDay2([1, 4, 3, 2, 1])

      expect(actual).toEqual(1)
    })

    it('should work 6', () => {
      const actual = parseDay2([1, 6, 7, 8, 9])

      expect(actual).toEqual(1)
    })

    it('should work 7', () => {
      const actual = parseDay2([1, 2, 3, 4, 3])

      expect(actual).toEqual(1)
    })

    it('should work 8', () => {
      const actual = parseDay2([9, 8, 7, 6, 7])

      expect(actual).toEqual(1)
    })

    it('should work 9', () => {
      const actual = parseDay2([7, 10, 8, 10, 11])

      expect(actual).toEqual(1)
    })

    it('should work 10', () => {
      const actual = parseDay2([29, 28, 27, 25, 26, 25, 22, 20])

      expect(actual).toEqual(1)
    })
  })
})
