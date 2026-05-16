
import { Context } from './Context'


class TheColorError extends Error {

  isTheColorError = true

  sdk = 'TheColor'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  TheColorError
}

