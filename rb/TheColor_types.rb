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
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [Hash, nil]
#
# @!attribute [rw] rgb
#   @return [Hash, nil]
#
# @!attribute [rw] xyz
#   @return [Hash, nil]
Idn = Struct.new(
  :cmyk,
  :contrast,
  :embedded,
  :hex,
  :hsl,
  :hsv,
  :image,
  :link,
  :name,
  :rgb,
  :xyz,
  keyword_init: true
)

# Match filter for Idn#load (any subset of Idn fields).
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
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [Hash, nil]
#
# @!attribute [rw] rgb
#   @return [Hash, nil]
#
# @!attribute [rw] xyz
#   @return [Hash, nil]
IdnLoadMatch = Struct.new(
  :cmyk,
  :contrast,
  :embedded,
  :hex,
  :hsl,
  :hsv,
  :image,
  :link,
  :name,
  :rgb,
  :xyz,
  keyword_init: true
)

# Scheme entity data model.
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
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [Hash, nil]
#
# @!attribute [rw] rgb
#   @return [Hash, nil]
#
# @!attribute [rw] xyz
#   @return [Hash, nil]
Scheme = Struct.new(
  :cmyk,
  :contrast,
  :embedded,
  :hex,
  :hsl,
  :hsv,
  :image,
  :link,
  :name,
  :rgb,
  :xyz,
  keyword_init: true
)

# Match filter for Scheme#list (any subset of Scheme fields).
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
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [Hash, nil]
#
# @!attribute [rw] rgb
#   @return [Hash, nil]
#
# @!attribute [rw] xyz
#   @return [Hash, nil]
SchemeListMatch = Struct.new(
  :cmyk,
  :contrast,
  :embedded,
  :hex,
  :hsl,
  :hsv,
  :image,
  :link,
  :name,
  :rgb,
  :xyz,
  keyword_init: true
)

