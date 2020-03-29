import {assert} from 'chai'

describe('fake test', () => {
  it('should assert 1 + 2 = 3', () => {
    const actual = 1 + 2
    const expected = 3
    assert.strictEqual(actual, expected)
  })
})
