# TheColor SDK configuration


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
            "test": {
        "options": {
          "active": False,
        },
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
            "type": "`$OBJECT`",
          },
          {
            "name": "cmyk",
            "type": "`$OBJECT`",
          },
          {
            "name": "contrast",
            "type": "`$OBJECT`",
          },
          {
            "name": "embedded",
            "type": "`$OBJECT`",
          },
          {
            "name": "hex",
            "type": "`$OBJECT`",
          },
          {
            "name": "hsl",
            "type": "`$OBJECT`",
          },
          {
            "name": "hsv",
            "type": "`$OBJECT`",
          },
          {
            "name": "image",
            "type": "`$OBJECT`",
          },
          {
            "name": "links",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "type": "`$OBJECT`",
          },
          {
            "name": "rgb",
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
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "callback",
                      "orig": "callback",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "100,58,0,33",
                      "kind": "query",
                      "name": "cmyk",
                      "orig": "cmyk",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "0047AB",
                      "kind": "query",
                      "name": "hex",
                      "orig": "hex",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "215,100%,34%",
                      "kind": "query",
                      "name": "hsl",
                      "orig": "hsl",
                      "type": "`$STRING`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "named",
                      "orig": "named",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": "0,71,171",
                      "kind": "query",
                      "name": "rgb",
                      "orig": "rgb",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 350,
                      "kind": "query",
                      "name": "w",
                      "orig": "w",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/id",
                "parts": [
                  "id",
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
            "type": "`$OBJECT`",
          },
          {
            "name": "cmyk",
            "type": "`$OBJECT`",
          },
          {
            "name": "contrast",
            "type": "`$OBJECT`",
          },
          {
            "name": "embedded",
            "type": "`$OBJECT`",
          },
          {
            "name": "hex",
            "type": "`$OBJECT`",
          },
          {
            "name": "hsl",
            "type": "`$OBJECT`",
          },
          {
            "name": "hsv",
            "type": "`$OBJECT`",
          },
          {
            "name": "image",
            "type": "`$OBJECT`",
          },
          {
            "name": "links",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "type": "`$OBJECT`",
          },
          {
            "name": "rgb",
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
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "callback",
                      "orig": "callback",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "100,58,0,33",
                      "kind": "query",
                      "name": "cmyk",
                      "orig": "cmyk",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 6,
                      "kind": "query",
                      "name": "count",
                      "orig": "count",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "0047AB",
                      "kind": "query",
                      "name": "hex",
                      "orig": "hex",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "215,100%,34%",
                      "kind": "query",
                      "name": "hsl",
                      "orig": "hsl",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "monochrome",
                      "kind": "query",
                      "name": "mode",
                      "orig": "mode",
                      "type": "`$STRING`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "named",
                      "orig": "named",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": "0,71,171",
                      "kind": "query",
                      "name": "rgb",
                      "orig": "rgb",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 350,
                      "kind": "query",
                      "name": "w",
                      "orig": "w",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/scheme",
                "parts": [
                  "scheme",
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
