# Typed models for the TheColor SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Idn:
    cmyk: Optional[dict] = None
    contrast: Optional[dict] = None
    embedded: Optional[dict] = None
    hex: Optional[dict] = None
    hsl: Optional[dict] = None
    hsv: Optional[dict] = None
    image: Optional[dict] = None
    link: Optional[dict] = None
    name: Optional[dict] = None
    rgb: Optional[dict] = None
    xyz: Optional[dict] = None


@dataclass
class IdnLoadMatch:
    cmyk: Optional[dict] = None
    contrast: Optional[dict] = None
    embedded: Optional[dict] = None
    hex: Optional[dict] = None
    hsl: Optional[dict] = None
    hsv: Optional[dict] = None
    image: Optional[dict] = None
    link: Optional[dict] = None
    name: Optional[dict] = None
    rgb: Optional[dict] = None
    xyz: Optional[dict] = None


@dataclass
class Scheme:
    cmyk: Optional[dict] = None
    contrast: Optional[dict] = None
    embedded: Optional[dict] = None
    hex: Optional[dict] = None
    hsl: Optional[dict] = None
    hsv: Optional[dict] = None
    image: Optional[dict] = None
    link: Optional[dict] = None
    name: Optional[dict] = None
    rgb: Optional[dict] = None
    xyz: Optional[dict] = None


@dataclass
class SchemeListMatch:
    cmyk: Optional[dict] = None
    contrast: Optional[dict] = None
    embedded: Optional[dict] = None
    hex: Optional[dict] = None
    hsl: Optional[dict] = None
    hsv: Optional[dict] = None
    image: Optional[dict] = None
    link: Optional[dict] = None
    name: Optional[dict] = None
    rgb: Optional[dict] = None
    xyz: Optional[dict] = None

