
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'TheColor',
        slug: "the-color",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://www.thecolorapi.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        idn: {
        },
  
        scheme: {
        },
  
    }
  }


  entity = {
    "idn": {
      "fields": [
        {
          "name": "XYZ",
          "title": "Xyz",
          "type": "`$OBJECT`"
        },
        {
          "name": "cmyk",
          "title": "Cmyk",
          "type": "`$OBJECT`"
        },
        {
          "name": "contrast",
          "title": "Contrast",
          "type": "`$OBJECT`"
        },
        {
          "name": "embedded",
          "title": "Embedded",
          "type": "`$OBJECT`"
        },
        {
          "name": "hex",
          "title": "Hex",
          "type": "`$OBJECT`"
        },
        {
          "name": "hsl",
          "title": "Hsl",
          "type": "`$OBJECT`"
        },
        {
          "name": "hsv",
          "title": "Hsv",
          "type": "`$OBJECT`"
        },
        {
          "name": "image",
          "title": "Image",
          "type": "`$OBJECT`"
        },
        {
          "name": "links",
          "title": "Links",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$OBJECT`"
        },
        {
          "name": "rgb",
          "title": "Rgb",
          "type": "`$OBJECT`"
        }
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
                  "lit": "id"
                }
              ],
              "parts": [
                "id"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "callback",
                    "orig": "callback",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "cmyk",
                    "orig": "cmyk",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "100,58,0,33"
                  },
                  {
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "json"
                  },
                  {
                    "name": "hex",
                    "orig": "hex",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "0047AB"
                  },
                  {
                    "name": "hsl",
                    "orig": "hsl",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "215,100%,34%"
                  },
                  {
                    "name": "named",
                    "orig": "named",
                    "type": "`$BOOLEAN`",
                    "kind": "query",
                    "example": false
                  },
                  {
                    "name": "rgb",
                    "orig": "rgb",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "0,71,171"
                  },
                  {
                    "name": "w",
                    "orig": "w",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 350
                  }
                ]
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
                  "w"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "scheme": {
      "fields": [
        {
          "name": "XYZ",
          "title": "Xyz",
          "type": "`$OBJECT`"
        },
        {
          "name": "cmyk",
          "title": "Cmyk",
          "type": "`$OBJECT`"
        },
        {
          "name": "contrast",
          "title": "Contrast",
          "type": "`$OBJECT`"
        },
        {
          "name": "embedded",
          "title": "Embedded",
          "type": "`$OBJECT`"
        },
        {
          "name": "hex",
          "title": "Hex",
          "type": "`$OBJECT`"
        },
        {
          "name": "hsl",
          "title": "Hsl",
          "type": "`$OBJECT`"
        },
        {
          "name": "hsv",
          "title": "Hsv",
          "type": "`$OBJECT`"
        },
        {
          "name": "image",
          "title": "Image",
          "type": "`$OBJECT`"
        },
        {
          "name": "links",
          "title": "Links",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$OBJECT`"
        },
        {
          "name": "rgb",
          "title": "Rgb",
          "type": "`$OBJECT`"
        }
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
                  "lit": "scheme"
                }
              ],
              "parts": [
                "scheme"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "callback",
                    "orig": "callback",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "cmyk",
                    "orig": "cmyk",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "100,58,0,33"
                  },
                  {
                    "name": "count",
                    "orig": "count",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 6
                  },
                  {
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "json"
                  },
                  {
                    "name": "hex",
                    "orig": "hex",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "0047AB"
                  },
                  {
                    "name": "hsl",
                    "orig": "hsl",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "215,100%,34%"
                  },
                  {
                    "name": "mode",
                    "orig": "mode",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "monochrome"
                  },
                  {
                    "name": "named",
                    "orig": "named",
                    "type": "`$BOOLEAN`",
                    "kind": "query",
                    "example": false
                  },
                  {
                    "name": "rgb",
                    "orig": "rgb",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "0,71,171"
                  },
                  {
                    "name": "w",
                    "orig": "w",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 350
                  }
                ]
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
                  "w"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

