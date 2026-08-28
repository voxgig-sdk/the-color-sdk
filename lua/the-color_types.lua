-- Typed models for the TheColor SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Idn
---@field XYZ? table
---@field cmyk? table
---@field contrast? table
---@field embedded? table
---@field hex? table
---@field hsl? table
---@field hsv? table
---@field image? table
---@field links? table
---@field name? table
---@field rgb? table

---@class IdnLoadMatch
---@field callback? string
---@field cmyk? string
---@field format? string
---@field hex? string
---@field hsl? string
---@field named? boolean
---@field rgb? string
---@field w? number

---@class Scheme
---@field XYZ? table
---@field cmyk? table
---@field contrast? table
---@field embedded? table
---@field hex? table
---@field hsl? table
---@field hsv? table
---@field image? table
---@field links? table
---@field name? table
---@field rgb? table

---@class SchemeListMatch
---@field callback? string
---@field cmyk? string
---@field count? number
---@field format? string
---@field hex? string
---@field hsl? string
---@field mode? string
---@field named? boolean
---@field rgb? string
---@field w? number

local M = {}

return M
