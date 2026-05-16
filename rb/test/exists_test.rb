# TheColor SDK exists test

require "minitest/autorun"
require_relative "../TheColor_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = TheColorSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
