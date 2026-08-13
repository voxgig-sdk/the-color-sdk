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
IdnLoadMatch = Struct.new(
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
SchemeListMatch = Struct.new(
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

