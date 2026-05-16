package = "voxgig-sdk-the-color"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/the-color-sdk.git"
}
description = {
  summary = "TheColor SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["the-color_sdk"] = "the-color_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
