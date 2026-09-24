# TheColor SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "TheColor",
            "slug": "the-color",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://www.thecolorapi.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "idn": {},
                "scheme": {},
            },
        },
        "entity": {
      "idn": {
        "fields": [
          {
            "name": "XYZ",
            "title": "Xyz",
            "type": "`$OBJECT`",
          },
          {
            "name": "cmyk",
            "title": "Cmyk",
            "type": "`$OBJECT`",
          },
          {
            "name": "contrast",
            "title": "Contrast",
            "type": "`$OBJECT`",
          },
          {
            "name": "embedded",
            "title": "Embedded",
            "type": "`$OBJECT`",
          },
          {
            "name": "hex",
            "title": "Hex",
            "type": "`$OBJECT`",
          },
          {
            "name": "hsl",
            "title": "Hsl",
            "type": "`$OBJECT`",
          },
          {
            "name": "hsv",
            "title": "Hsv",
            "type": "`$OBJECT`",
          },
          {
            "name": "image",
            "title": "Image",
            "type": "`$OBJECT`",
          },
          {
            "name": "links",
            "title": "Links",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$OBJECT`",
          },
          {
            "name": "rgb",
            "title": "Rgb",
            "type": "`$OBJECT`",
          },
        ],
        "name": "idn",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/id",
                "segments": [
                  {
                    "lit": "id",
                  },
                ],
                "parts": [
                  "id",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "callback",
                      "orig": "callback",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "cmyk",
                      "orig": "cmyk",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "100,58,0,33",
                    },
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                    {
                      "name": "hex",
                      "orig": "hex",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "0047AB",
                    },
                    {
                      "name": "hsl",
                      "orig": "hsl",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "215,100%,34%",
                    },
                    {
                      "name": "named",
                      "orig": "named",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "rgb",
                      "orig": "rgb",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "0,71,171",
                    },
                    {
                      "name": "w",
                      "orig": "w",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 350,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "callback",
                    "cmyk",
                    "format",
                    "hex",
                    "hsl",
                    "named",
                    "rgb",
                    "w",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "scheme": {
        "fields": [
          {
            "name": "XYZ",
            "title": "Xyz",
            "type": "`$OBJECT`",
          },
          {
            "name": "cmyk",
            "title": "Cmyk",
            "type": "`$OBJECT`",
          },
          {
            "name": "contrast",
            "title": "Contrast",
            "type": "`$OBJECT`",
          },
          {
            "name": "embedded",
            "title": "Embedded",
            "type": "`$OBJECT`",
          },
          {
            "name": "hex",
            "title": "Hex",
            "type": "`$OBJECT`",
          },
          {
            "name": "hsl",
            "title": "Hsl",
            "type": "`$OBJECT`",
          },
          {
            "name": "hsv",
            "title": "Hsv",
            "type": "`$OBJECT`",
          },
          {
            "name": "image",
            "title": "Image",
            "type": "`$OBJECT`",
          },
          {
            "name": "links",
            "title": "Links",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$OBJECT`",
          },
          {
            "name": "rgb",
            "title": "Rgb",
            "type": "`$OBJECT`",
          },
        ],
        "name": "scheme",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/scheme",
                "segments": [
                  {
                    "lit": "scheme",
                  },
                ],
                "parts": [
                  "scheme",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "callback",
                      "orig": "callback",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "cmyk",
                      "orig": "cmyk",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "100,58,0,33",
                    },
                    {
                      "name": "count",
                      "orig": "count",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 6,
                    },
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                    {
                      "name": "hex",
                      "orig": "hex",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "0047AB",
                    },
                    {
                      "name": "hsl",
                      "orig": "hsl",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "215,100%,34%",
                    },
                    {
                      "name": "mode",
                      "orig": "mode",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "monochrome",
                    },
                    {
                      "name": "named",
                      "orig": "named",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "rgb",
                      "orig": "rgb",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "0,71,171",
                    },
                    {
                      "name": "w",
                      "orig": "w",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 350,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "callback",
                    "cmyk",
                    "count",
                    "format",
                    "hex",
                    "hsl",
                    "mode",
                    "named",
                    "rgb",
                    "w",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
