package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "TheColor",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://www.thecolorapi.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"idn": map[string]any{},
				"scheme": map[string]any{},
			},
		},
		"entity": map[string]any{
			"idn": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "XYZ",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "cmyk",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "contrast",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "embedded",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "hex",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "hsl",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "hsv",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "image",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "links",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "rgb",
						"type": "`$OBJECT`",
					},
				},
				"name": "idn",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "callback",
											"orig": "callback",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "100,58,0,33",
											"kind": "query",
											"name": "cmyk",
											"orig": "cmyk",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "0047AB",
											"kind": "query",
											"name": "hex",
											"orig": "hex",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "215,100%,34%",
											"kind": "query",
											"name": "hsl",
											"orig": "hsl",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "named",
											"orig": "named",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "0,71,171",
											"kind": "query",
											"name": "rgb",
											"orig": "rgb",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 350,
											"kind": "query",
											"name": "w",
											"orig": "w",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/id",
								"parts": []any{
									"id",
								},
								"select": map[string]any{
									"exist": []any{
										"callback",
										"cmyk",
										"format",
										"hex",
										"hsl",
										"named",
										"rgb",
										"w",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"scheme": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "XYZ",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "cmyk",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "contrast",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "embedded",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "hex",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "hsl",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "hsv",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "image",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "links",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "rgb",
						"type": "`$OBJECT`",
					},
				},
				"name": "scheme",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "callback",
											"orig": "callback",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "100,58,0,33",
											"kind": "query",
											"name": "cmyk",
											"orig": "cmyk",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 6,
											"kind": "query",
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "0047AB",
											"kind": "query",
											"name": "hex",
											"orig": "hex",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "215,100%,34%",
											"kind": "query",
											"name": "hsl",
											"orig": "hsl",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "monochrome",
											"kind": "query",
											"name": "mode",
											"orig": "mode",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "named",
											"orig": "named",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "0,71,171",
											"kind": "query",
											"name": "rgb",
											"orig": "rgb",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 350,
											"kind": "query",
											"name": "w",
											"orig": "w",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/scheme",
								"parts": []any{
									"scheme",
								},
								"select": map[string]any{
									"exist": []any{
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
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
