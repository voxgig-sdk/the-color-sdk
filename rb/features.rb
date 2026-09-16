# TheColor SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TheColorFeatures
  def self.make_feature(name)
    case name
    when "base"
      TheColorBaseFeature.new
    when "ratelimit"
      TheColorRatelimitFeature.new
    when "retry"
      TheColorRetryFeature.new
    when "test"
      TheColorTestFeature.new
    when "timeout"
      TheColorTimeoutFeature.new
    else
      TheColorBaseFeature.new
    end
  end
end
