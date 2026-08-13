<?php
declare(strict_types=1);

// Typed models for the TheColor SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Idn entity data model. */
class Idn
{
    public ?array $XYZ = null;
    public ?array $cmyk = null;
    public ?array $contrast = null;
    public ?array $embedded = null;
    public ?array $hex = null;
    public ?array $hsl = null;
    public ?array $hsv = null;
    public ?array $image = null;
    public ?array $links = null;
    public ?array $name = null;
    public ?array $rgb = null;
}

/** Request payload for Idn#load. */
class IdnLoadMatch
{
    public ?array $XYZ = null;
    public ?array $cmyk = null;
    public ?array $contrast = null;
    public ?array $embedded = null;
    public ?array $hex = null;
    public ?array $hsl = null;
    public ?array $hsv = null;
    public ?array $image = null;
    public ?array $links = null;
    public ?array $name = null;
    public ?array $rgb = null;
}

/** Scheme entity data model. */
class Scheme
{
    public ?array $XYZ = null;
    public ?array $cmyk = null;
    public ?array $contrast = null;
    public ?array $embedded = null;
    public ?array $hex = null;
    public ?array $hsl = null;
    public ?array $hsv = null;
    public ?array $image = null;
    public ?array $links = null;
    public ?array $name = null;
    public ?array $rgb = null;
}

/** Request payload for Scheme#list. */
class SchemeListMatch
{
    public ?array $XYZ = null;
    public ?array $cmyk = null;
    public ?array $contrast = null;
    public ?array $embedded = null;
    public ?array $hex = null;
    public ?array $hsl = null;
    public ?array $hsv = null;
    public ?array $image = null;
    public ?array $links = null;
    public ?array $name = null;
    public ?array $rgb = null;
}

