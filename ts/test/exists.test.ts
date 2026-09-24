
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TheColorSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TheColorSDK.test()
    equal(testsdk instanceof TheColorSDK, true,
      'TheColorSDK.test() must return a client synchronously')
  })

})
