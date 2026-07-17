-- TheColor SDK exists test

local sdk = require("the-color_sdk")

describe("TheColorSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
