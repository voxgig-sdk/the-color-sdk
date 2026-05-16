-- TheColor SDK error

local TheColorError = {}
TheColorError.__index = TheColorError


function TheColorError.new(code, msg, ctx)
  local self = setmetatable({}, TheColorError)
  self.is_sdk_error = true
  self.sdk = "TheColor"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TheColorError:error()
  return self.msg
end


function TheColorError:__tostring()
  return self.msg
end


return TheColorError
