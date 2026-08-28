// Typed models for the TheColor SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Idn {
  XYZ?: Record<string, any>
  cmyk?: Record<string, any>
  contrast?: Record<string, any>
  embedded?: Record<string, any>
  hex?: Record<string, any>
  hsl?: Record<string, any>
  hsv?: Record<string, any>
  image?: Record<string, any>
  links?: Record<string, any>
  name?: Record<string, any>
  rgb?: Record<string, any>
}

export interface IdnLoadMatch {
  callback?: string
  cmyk?: string
  format?: string
  hex?: string
  hsl?: string
  named?: boolean
  rgb?: string
  w?: number
}

export interface Scheme {
  XYZ?: Record<string, any>
  cmyk?: Record<string, any>
  contrast?: Record<string, any>
  embedded?: Record<string, any>
  hex?: Record<string, any>
  hsl?: Record<string, any>
  hsv?: Record<string, any>
  image?: Record<string, any>
  links?: Record<string, any>
  name?: Record<string, any>
  rgb?: Record<string, any>
}

export interface SchemeListMatch {
  callback?: string
  cmyk?: string
  count?: number
  format?: string
  hex?: string
  hsl?: string
  mode?: string
  named?: boolean
  rgb?: string
  w?: number
}

