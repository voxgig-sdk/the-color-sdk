# TheColor SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module TheColorFeatures
  def self.make_feature(name)
    case name
    when "base"
      TheColorBaseFeature.new
    when "test"
      TheColorTestFeature.new
    else
      TheColorBaseFeature.new
    end
  end
end
