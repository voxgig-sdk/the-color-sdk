# TheColor SDK utility: make_context
require_relative '../core/context'
module TheColorUtilities
  MakeContext = ->(ctxmap, basectx) {
    TheColorContext.new(ctxmap, basectx)
  }
end
