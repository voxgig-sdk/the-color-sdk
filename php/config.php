<?php
declare(strict_types=1);

// TheColor SDK configuration

class TheColorConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "TheColor",
                "slug" => "the-color",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://www.thecolorapi.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "idn" => [],
                    "scheme" => [],
                ],
            ],
            "entity" => [
        'idn' => [
          'fields' => [
            [
              'name' => 'XYZ',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'cmyk',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'contrast',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'embedded',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'hex',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'hsl',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'hsv',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'image',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'links',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'name',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'rgb',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'idn',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'callback',
                        'orig' => 'callback',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '100,58,0,33',
                        'kind' => 'query',
                        'name' => 'cmyk',
                        'orig' => 'cmyk',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '0047AB',
                        'kind' => 'query',
                        'name' => 'hex',
                        'orig' => 'hex',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '215,100%,34%',
                        'kind' => 'query',
                        'name' => 'hsl',
                        'orig' => 'hsl',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'named',
                        'orig' => 'named',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => '0,71,171',
                        'kind' => 'query',
                        'name' => 'rgb',
                        'orig' => 'rgb',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 350,
                        'kind' => 'query',
                        'name' => 'w',
                        'orig' => 'w',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/id',
                  'parts' => [
                    'id',
                  ],
                  'select' => [
                    'exist' => [
                      'callback',
                      'cmyk',
                      'format',
                      'hex',
                      'hsl',
                      'named',
                      'rgb',
                      'w',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'scheme' => [
          'fields' => [
            [
              'name' => 'XYZ',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'cmyk',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'contrast',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'embedded',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'hex',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'hsl',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'hsv',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'image',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'links',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'name',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'rgb',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'scheme',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'callback',
                        'orig' => 'callback',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '100,58,0,33',
                        'kind' => 'query',
                        'name' => 'cmyk',
                        'orig' => 'cmyk',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 6,
                        'kind' => 'query',
                        'name' => 'count',
                        'orig' => 'count',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '0047AB',
                        'kind' => 'query',
                        'name' => 'hex',
                        'orig' => 'hex',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '215,100%,34%',
                        'kind' => 'query',
                        'name' => 'hsl',
                        'orig' => 'hsl',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'monochrome',
                        'kind' => 'query',
                        'name' => 'mode',
                        'orig' => 'mode',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'named',
                        'orig' => 'named',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => '0,71,171',
                        'kind' => 'query',
                        'name' => 'rgb',
                        'orig' => 'rgb',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 350,
                        'kind' => 'query',
                        'name' => 'w',
                        'orig' => 'w',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/scheme',
                  'parts' => [
                    'scheme',
                  ],
                  'select' => [
                    'exist' => [
                      'callback',
                      'cmyk',
                      'count',
                      'format',
                      'hex',
                      'hsl',
                      'mode',
                      'named',
                      'rgb',
                      'w',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return TheColorFeatures::make_feature($name);
    }
}
