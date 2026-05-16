
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TheColorSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TheColorSDK.test()
    equal(null !== testsdk, true)
  })

})
