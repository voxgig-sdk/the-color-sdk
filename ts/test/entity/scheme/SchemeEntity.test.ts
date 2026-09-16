

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TheColorSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('SchemeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when THE_COLOR_TEST_LIVE=TRUE.
  afterEach(liveDelay('THE_COLOR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TheColorSDK.test()
    const ent = testsdk.Scheme()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.THE_COLOR_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'scheme.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"XYZ","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"cmyk","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"contrast","req":false,"type":"`$OBJECT`","index$":2},{"active":true,"name":"embedded","req":false,"type":"`$OBJECT`","index$":3},{"active":true,"name":"hex","req":false,"type":"`$OBJECT`","index$":4},{"active":true,"name":"hsl","req":false,"type":"`$OBJECT`","index$":5},{"active":true,"name":"hsv","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"image","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"links","req":false,"type":"`$OBJECT`","index$":8},{"active":true,"name":"name","req":false,"type":"`$OBJECT`","index$":9},{"active":true,"name":"rgb","req":false,"type":"`$OBJECT`","index$":10}],"name":"scheme","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"callback","orig":"callback","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"100,58,0,33","kind":"query","name":"cmyk","orig":"cmyk","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":6,"kind":"query","name":"count","orig":"count","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"0047AB","kind":"query","name":"hex","orig":"hex","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":"215,100%,34%","kind":"query","name":"hsl","orig":"hsl","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"example":"monochrome","kind":"query","name":"mode","orig":"mode","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"example":false,"kind":"query","name":"named","orig":"named","reqd":false,"type":"`$BOOLEAN`","index$":7},{"active":true,"example":"0,71,171","kind":"query","name":"rgb","orig":"rgb","reqd":false,"type":"`$STRING`","index$":8},{"active":true,"example":350,"kind":"query","name":"w","orig":"w","reqd":false,"type":"`$INTEGER`","index$":9}]},"contract":{"id":"GET /scheme","json":"{\"operationId\":\"getColorScheme\",\"parameters\":[{\"description\":\"Valid hex code\",\"in\":\"query\",\"name\":\"hex\",\"required\":false,\"schema\":{\"example\":\"0047AB\",\"type\":\"string\"}},{\"description\":\"Valid rgb color, also rgb(0,71,171)\",\"in\":\"query\",\"name\":\"rgb\",\"required\":false,\"schema\":{\"example\":\"0,71,171\",\"type\":\"string\"}},{\"description\":\"Valid hsl color, also hsl(215,100%,34%)\",\"in\":\"query\",\"name\":\"hsl\",\"required\":false,\"schema\":{\"example\":\"215,100%,34%\",\"type\":\"string\"}},{\"description\":\"Valid cmyk color, also cmyk(100,58,0,33)\",\"in\":\"query\",\"name\":\"cmyk\",\"required\":false,\"schema\":{\"example\":\"100,58,0,33\",\"type\":\"string\"}},{\"description\":\"Return results as JSON, SVG or HTML page of results\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"html\",\"svg\"],\"type\":\"string\"}},{\"description\":\"Define mode by which to generate the scheme from the seed color\",\"in\":\"query\",\"name\":\"mode\",\"required\":false,\"schema\":{\"default\":\"monochrome\",\"enum\":[\"monochrome\",\"monochrome-dark\",\"monochrome-light\",\"analogic\",\"complement\",\"analogic-complement\",\"triad\",\"quad\"],\"type\":\"string\"}},{\"description\":\"Number of colors to return\",\"in\":\"query\",\"name\":\"count\",\"required\":false,\"schema\":{\"default\":5,\"example\":6,\"type\":\"integer\"}},{\"description\":\"Height of resulting image, only applicable on SVG format\",\"in\":\"query\",\"name\":\"w\",\"required\":false,\"schema\":{\"default\":100,\"example\":350,\"type\":\"integer\"}},{\"description\":\"Whether to print the color names on resulting image, only applicable on SVG format\",\"in\":\"query\",\"name\":\"named\",\"required\":false,\"schema\":{\"default\":true,\"example\":false,\"type\":\"boolean\"}},{\"description\":\"JSONP callback function name\",\"in\":\"query\",\"name\":\"callback\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"_embedded\":{},\"_links\":{\"schemes\":{\"analogic\":\"/scheme?hex=0047AB&mode=analogic&count=2\",\"analogic-complement\":\"/scheme?hex=0047AB&mode=analogic-complement&count=2\",\"complement\":\"/scheme?hex=0047AB&mode=complement&count=2\",\"monochrome\":\"/scheme?hex=0047AB&mode=monochrome&count=2\",\"monochrome-dark\":\"/scheme?hex=0047AB&mode=monochrome-dark&count=2\",\"monochrome-light\":\"/scheme?hex=0047AB&mode=monochrome-light&count=2\",\"quad\":\"/scheme?hex=0047AB&mode=quad&count=2\",\"triad\":\"/scheme?hex=0047AB&mode=triad&count=2\"},\"self\":\"/scheme?hex=0047AB&mode=monochrome&count=2\"},\"colors\":[{\"XYZ\":{\"X\":6,\"Y\":6,\"Z\":17,\"fraction\":{\"X\":0.056589019607843134,\"Y\":0.06321019607843137,\"Z\":0.1650427450980392},\"value\":\"XYZ(6, 6, 17)\"},\"_embedded\":{},\"_links\":{\"self\":{\"href\":\"/id?hex=01122A\"}},\"cmyk\":{\"c\":98,\"fraction\":{\"c\":0.9761904761904763,\"k\":0.8352941176470589,\"m\":0.5714285714285715,\"y\":0},\"k\":84,\"m\":57,\"value\":\"cmyk(98, 57, 0, 84)\",\"y\":0},\"contrast\":{\"value\":\"#FFFFFF\"},\"hex\":{\"clean\":\"01122A\",\"value\":\"#01122A\"},\"hsl\":{\"fraction\":{\"h\":0.597560975609756,\"l\":0.08431372549019608,\"s\":0.9534883720930231},\"h\":215,\"l\":8,\"s\":95,\"value\":\"hsl(215, 95%, 8%)\"},\"hsv\":{\"fraction\":{\"h\":0.597560975609756,\"s\":0.976190476190476,\"v\":0.16470588235294117},\"h\":215,\"s\":98,\"v\":16,\"value\":\"hsv(215, 98%, 16%)\"},\"image\":{\"bare\":\"http://placehold.it/300x300.png/01122A/FFFFFF\",\"named\":\"http://placehold.it/300x300.png/01122A/FFFFFF&text=Midnight\"},\"name\":{\"closest_named_hex\":\"#011635\",\"distance\":217,\"exact_match_name\":false,\"value\":\"Midnight\"},\"rgb\":{\"b\":42,\"fraction\":{\"b\":0.16470588235294117,\"g\":0.07058823529411765,\"r\":0.00392156862745098},\"g\":18,\"r\":1,\"value\":\"rgb(1, 18, 42)\"}}],\"count\":\"2\",\"mode\":\"monochrome\",\"seed\":{\"hex\":{\"clean\":\"0047AB\",\"value\":\"#0047AB\"},\"name\":{\"closest_named_hex\":\"#0047AB\",\"distance\":0,\"exact_match_name\":true,\"value\":\"Cobalt\"},\"rgb\":{\"b\":171,\"fraction\":{\"b\":0.6705882352941176,\"g\":0.2784313725490196,\"r\":0},\"g\":71,\"r\":0,\"value\":\"rgb(0, 71, 171)\"}}},\"schema\":{\"properties\":{\"_embedded\":{\"type\":\"object\"},\"_links\":{\"properties\":{\"schemes\":{\"properties\":{\"analogic\":{\"type\":\"string\"},\"analogic-complement\":{\"type\":\"string\"},\"complement\":{\"type\":\"string\"},\"monochrome\":{\"type\":\"string\"},\"monochrome-dark\":{\"type\":\"string\"},\"monochrome-light\":{\"type\":\"string\"},\"quad\":{\"type\":\"string\"},\"triad\":{\"type\":\"string\"}},\"type\":\"object\"},\"self\":{\"type\":\"string\"}},\"type\":\"object\"},\"colors\":{\"items\":{\"properties\":{\"XYZ\":{\"properties\":{\"X\":{\"type\":\"integer\"},\"Y\":{\"type\":\"integer\"},\"Z\":{\"type\":\"integer\"},\"fraction\":{\"properties\":{\"X\":{\"type\":\"number\"},\"Y\":{\"type\":\"number\"},\"Z\":{\"type\":\"number\"}},\"type\":\"object\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"_embedded\":{\"type\":\"object\"},\"_links\":{\"properties\":{\"self\":{\"properties\":{\"href\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"cmyk\":{\"properties\":{\"c\":{\"type\":\"integer\"},\"fraction\":{\"properties\":{\"c\":{\"type\":\"number\"},\"k\":{\"type\":\"number\"},\"m\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"type\":\"object\"},\"k\":{\"type\":\"integer\"},\"m\":{\"type\":\"integer\"},\"value\":{\"type\":\"string\"},\"y\":{\"type\":\"integer\"}},\"type\":\"object\"},\"contrast\":{\"properties\":{\"value\":{\"description\":\"Contrasting color hex value\",\"type\":\"string\"}},\"type\":\"object\"},\"hex\":{\"properties\":{\"clean\":{\"description\":\"Hex color value without hash prefix\",\"type\":\"string\"},\"value\":{\"description\":\"Hex color value with hash prefix\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl\":{\"properties\":{\"fraction\":{\"properties\":{\"h\":{\"type\":\"number\"},\"l\":{\"type\":\"number\"},\"s\":{\"type\":\"number\"}},\"type\":\"object\"},\"h\":{\"type\":\"integer\"},\"l\":{\"type\":\"integer\"},\"s\":{\"type\":\"integer\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"hsv\":{\"properties\":{\"fraction\":{\"properties\":{\"h\":{\"type\":\"number\"},\"s\":{\"type\":\"number\"},\"v\":{\"type\":\"number\"}},\"type\":\"object\"},\"h\":{\"type\":\"integer\"},\"s\":{\"type\":\"integer\"},\"v\":{\"type\":\"integer\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"image\":{\"properties\":{\"bare\":{\"description\":\"URL to placeholder image without text\",\"type\":\"string\"},\"named\":{\"description\":\"URL to placeholder image with color name\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"properties\":{\"closest_named_hex\":{\"description\":\"Hex value of the closest named color\",\"type\":\"string\"},\"distance\":{\"description\":\"Distance from the closest named color\",\"type\":\"integer\"},\"exact_match_name\":{\"description\":\"Whether the name is an exact match\",\"type\":\"boolean\"},\"value\":{\"description\":\"Human-readable color name\",\"type\":\"string\"}},\"type\":\"object\"},\"rgb\":{\"properties\":{\"b\":{\"type\":\"integer\"},\"fraction\":{\"properties\":{\"b\":{\"type\":\"number\"},\"g\":{\"type\":\"number\"},\"r\":{\"type\":\"number\"}},\"type\":\"object\"},\"g\":{\"type\":\"integer\"},\"r\":{\"type\":\"integer\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"count\":{\"description\":\"Number of colors in the scheme\",\"type\":\"string\"},\"mode\":{\"description\":\"The scheme mode used to generate colors\",\"type\":\"string\"},\"seed\":{\"properties\":{\"XYZ\":{\"properties\":{\"X\":{\"type\":\"integer\"},\"Y\":{\"type\":\"integer\"},\"Z\":{\"type\":\"integer\"},\"fraction\":{\"properties\":{\"X\":{\"type\":\"number\"},\"Y\":{\"type\":\"number\"},\"Z\":{\"type\":\"number\"}},\"type\":\"object\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"_embedded\":{\"type\":\"object\"},\"_links\":{\"properties\":{\"self\":{\"properties\":{\"href\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"cmyk\":{\"properties\":{\"c\":{\"type\":\"integer\"},\"fraction\":{\"properties\":{\"c\":{\"type\":\"number\"},\"k\":{\"type\":\"number\"},\"m\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"type\":\"object\"},\"k\":{\"type\":\"integer\"},\"m\":{\"type\":\"integer\"},\"value\":{\"type\":\"string\"},\"y\":{\"type\":\"integer\"}},\"type\":\"object\"},\"contrast\":{\"properties\":{\"value\":{\"description\":\"Contrasting color hex value\",\"type\":\"string\"}},\"type\":\"object\"},\"hex\":{\"properties\":{\"clean\":{\"description\":\"Hex color value without hash prefix\",\"type\":\"string\"},\"value\":{\"description\":\"Hex color value with hash prefix\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl\":{\"properties\":{\"fraction\":{\"properties\":{\"h\":{\"type\":\"number\"},\"l\":{\"type\":\"number\"},\"s\":{\"type\":\"number\"}},\"type\":\"object\"},\"h\":{\"type\":\"integer\"},\"l\":{\"type\":\"integer\"},\"s\":{\"type\":\"integer\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"hsv\":{\"properties\":{\"fraction\":{\"properties\":{\"h\":{\"type\":\"number\"},\"s\":{\"type\":\"number\"},\"v\":{\"type\":\"number\"}},\"type\":\"object\"},\"h\":{\"type\":\"integer\"},\"s\":{\"type\":\"integer\"},\"v\":{\"type\":\"integer\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"image\":{\"properties\":{\"bare\":{\"description\":\"URL to placeholder image without text\",\"type\":\"string\"},\"named\":{\"description\":\"URL to placeholder image with color name\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"properties\":{\"closest_named_hex\":{\"description\":\"Hex value of the closest named color\",\"type\":\"string\"},\"distance\":{\"description\":\"Distance from the closest named color\",\"type\":\"integer\"},\"exact_match_name\":{\"description\":\"Whether the name is an exact match\",\"type\":\"boolean\"},\"value\":{\"description\":\"Human-readable color name\",\"type\":\"string\"}},\"type\":\"object\"},\"rgb\":{\"properties\":{\"b\":{\"type\":\"integer\"},\"fraction\":{\"properties\":{\"b\":{\"type\":\"number\"},\"g\":{\"type\":\"number\"},\"r\":{\"type\":\"number\"}},\"type\":\"object\"},\"g\":{\"type\":\"integer\"},\"r\":{\"type\":\"integer\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with color scheme\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"code\":400,\"example\":\"/scheme?hex=FF0&mode=monochrome&count=5\",\"message\":\"The Color API doesn't understand what you mean. Please supply a query parameter of `rgb`, `hsl`, `cmyk` or `hex`.\",\"params\":[],\"path\":\"/scheme\",\"query\":{}},\"schema\":{\"properties\":{\"code\":{\"description\":\"HTTP error code\",\"type\":\"integer\"},\"example\":{\"description\":\"Example of a correct API call\",\"type\":\"string\"},\"message\":{\"description\":\"Error message description\",\"type\":\"string\"},\"params\":{\"description\":\"Parameters that were processed\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"path\":{\"description\":\"API path that was called\",\"type\":\"string\"},\"query\":{\"description\":\"Query parameters received\",\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid or missing color parameter\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/scheme","segments":[{"lit":"scheme"}],"select":{"exist":["callback","cmyk","count","format","hex","hsl","mode","named","rgb","w"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"scheme","name__orig":"scheme","Name":"Scheme","name_":"scheme","name-":"scheme","NAME":"SCHEME","index$":1}, {"active":true,"entity":"scheme","key$":"BasicSchemeFlow","kind":"basic","name":"BasicSchemeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"scheme_ref01"}}],"index$":0}]}, 'Scheme')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let scheme_ref01_data = Object.values(setup.data.existing.scheme)[0] as any

    // LIST
    const scheme_ref01_ent = client.Scheme()
    const scheme_ref01_match: any = {}

    const scheme_ref01_list = (await scheme_ref01_ent.list(scheme_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/scheme/SchemeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TheColorSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['scheme01','scheme02','scheme03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'THE_COLOR_TEST_SCHEME_ENTID': idmap,
    'THE_COLOR_TEST_LIVE': 'FALSE',
    'THE_COLOR_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['THE_COLOR_TEST_SCHEME_ENTID']

  const live = 'TRUE' === env.THE_COLOR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['THE_COLOR_TEST_SCHEME_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TheColorSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.THE_COLOR_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
