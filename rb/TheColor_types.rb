# frozen_string_literal: true

# Typed models for the TheColor SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Idn entity data model.
#
# @!attribute [rw] XYZ
#   @return [Hash, nil]
#
# @!attribute [rw] cmyk
#   @return [Hash, nil]
#
# @!attribute [rw] contrast
#   @return [Hash, nil]
#
# @!attribute [rw] embedded
#   @return [Hash, nil]
#
# @!attribute [rw] hex
#   @return [Hash, nil]
#
# @!attribute [rw] hsl
#   @return [Hash, nil]
#
# @!attribute [rw] hsv
#   @return [Hash, nil]
#
# @!attribute [rw] image
#   @return [Hash, nil]
#
# @!attribute [rw] links
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [Hash, nil]
#
# @!attribute [rw] rgb
#   @return [Hash, nil]
Idn = Struct.new(
  :XYZ,
  :cmyk,
  :contrast,
  :embedded,
  :hex,
  :hsl,
  :hsv,
  :image,
  :links,
  :name,
  :rgb,
  keyword_init: true
)

# Request payload for Idn#load.
#
# @!attribute [rw] callback
#   @return [String, nil]
#
# @!attribute [rw] cmyk
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] hex
#   @return [String, nil]
#
# @!attribute [rw] hsl
#   @return [String, nil]
#
# @!attribute [rw] named
#   @return [Boolean, nil]
#
# @!attribute [rw] rgb
#   @return [String, nil]
#
# @!attribute [rw] w
#   @return [Integer, nil]
IdnLoadMatch = Struct.new(
  :callback,
  :cmyk,
  :format,
  :hex,
  :hsl,
  :named,
  :rgb,
  :w,
  keyword_init: true
)

# Scheme entity data model.
#
# @!attribute [rw] XYZ
#   @return [Hash, nil]
#
# @!attribute [rw] cmyk
#   @return [Hash, nil]
#
# @!attribute [rw] contrast
#   @return [Hash, nil]
#
# @!attribute [rw] embedded
#   @return [Hash, nil]
#
# @!attribute [rw] hex
#   @return [Hash, nil]
#
# @!attribute [rw] hsl
#   @return [Hash, nil]
#
# @!attribute [rw] hsv
#   @return [Hash, nil]
#
# @!attribute [rw] image
#   @return [Hash, nil]
#
# @!attribute [rw] links
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [Hash, nil]
#
# @!attribute [rw] rgb
#   @return [Hash, nil]
Scheme = Struct.new(
  :XYZ,
  :cmyk,
  :contrast,
  :embedded,
  :hex,
  :hsl,
  :hsv,
  :image,
  :links,
  :name,
  :rgb,
  keyword_init: true
)

# Request payload for Scheme#list.
#
# @!attribute [rw] callback
#   @return [String, nil]
#
# @!attribute [rw] cmyk
#   @return [String, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] hex
#   @return [String, nil]
#
# @!attribute [rw] hsl
#   @return [String, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] named
#   @return [Boolean, nil]
#
# @!attribute [rw] rgb
#   @return [String, nil]
#
# @!attribute [rw] w
#   @return [Integer, nil]
SchemeListMatch = Struct.new(
  :callback,
  :cmyk,
  :count,
  :format,
  :hex,
  :hsl,
  :mode,
  :named,
  :rgb,
  :w,
  keyword_init: true
)

