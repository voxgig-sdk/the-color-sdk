

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


describe('IdnEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when THE_COLOR_TEST_LIVE=TRUE.
  afterEach(liveDelay('THE_COLOR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TheColorSDK.test()
    const ent = testsdk.Idn()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.THE_COLOR_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'idn.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"XYZ","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"cmyk","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"contrast","req":false,"type":"`$OBJECT`","index$":2},{"active":true,"name":"embedded","req":false,"type":"`$OBJECT`","index$":3},{"active":true,"name":"hex","req":false,"type":"`$OBJECT`","index$":4},{"active":true,"name":"hsl","req":false,"type":"`$OBJECT`","index$":5},{"active":true,"name":"hsv","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"image","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"links","req":false,"type":"`$OBJECT`","index$":8},{"active":true,"name":"name","req":false,"type":"`$OBJECT`","index$":9},{"active":true,"name":"rgb","req":false,"type":"`$OBJECT`","index$":10}],"name":"idn","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"callback","orig":"callback","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"100,58,0,33","kind":"query","name":"cmyk","orig":"cmyk","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"0047AB","kind":"query","name":"hex","orig":"hex","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"215,100%,34%","kind":"query","name":"hsl","orig":"hsl","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":false,"kind":"query","name":"named","orig":"named","reqd":false,"type":"`$BOOLEAN`","index$":5},{"active":true,"example":"0,71,171","kind":"query","name":"rgb","orig":"rgb","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"example":350,"kind":"query","name":"w","orig":"w","reqd":false,"type":"`$INTEGER`","index$":7}]},"contract":{"id":"GET /id","json":"{\"operationId\":\"getColorById\",\"parameters\":[{\"description\":\"Valid hex code\",\"in\":\"query\",\"name\":\"hex\",\"required\":false,\"schema\":{\"example\":\"0047AB\",\"type\":\"string\"}},{\"description\":\"Valid rgb color, also rgb(0,71,171)\",\"in\":\"query\",\"name\":\"rgb\",\"required\":false,\"schema\":{\"example\":\"0,71,171\",\"type\":\"string\"}},{\"description\":\"Valid hsl color, also hsl(215,100%,34%)\",\"in\":\"query\",\"name\":\"hsl\",\"required\":false,\"schema\":{\"example\":\"215,100%,34%\",\"type\":\"string\"}},{\"description\":\"Valid cmyk color, also cmyk(100,58,0,33)\",\"in\":\"query\",\"name\":\"cmyk\",\"required\":false,\"schema\":{\"example\":\"100,58,0,33\",\"type\":\"string\"}},{\"description\":\"Return results as JSON, SVG or HTML page\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"html\",\"svg\"],\"type\":\"string\"}},{\"description\":\"Height of resulting image, only applicable on SVG format\",\"in\":\"query\",\"name\":\"w\",\"required\":false,\"schema\":{\"default\":100,\"example\":350,\"type\":\"integer\"}},{\"description\":\"Whether to print the color names on resulting image, only applicable on SVG format\",\"in\":\"query\",\"name\":\"named\",\"required\":false,\"schema\":{\"default\":true,\"example\":false,\"type\":\"boolean\"}},{\"description\":\"JSONP callback function name\",\"in\":\"query\",\"name\":\"callback\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"XYZ\":{\"X\":22,\"Y\":25,\"Z\":67,\"fraction\":{\"X\":0.22060823529411763,\"Y\":0.2475505882352941,\"Z\":0.6705831372549019},\"value\":\"XYZ(22, 25, 67)\"},\"_embedded\":{},\"_links\":{\"self\":{\"href\":\"/id?hex=0047AB\"}},\"cmyk\":{\"c\":100,\"fraction\":{\"c\":1,\"k\":0.3294117647058824,\"m\":0.5847953216374269,\"y\":0},\"k\":33,\"m\":58,\"value\":\"cmyk(100, 58, 0, 33)\",\"y\":0},\"contrast\":{\"value\":\"#000000\"},\"hex\":{\"clean\":\"0047AB\",\"value\":\"#0047AB\"},\"hsl\":{\"fraction\":{\"h\":0.5974658869395711,\"l\":0.3352941176470588,\"s\":1},\"h\":215,\"l\":34,\"s\":100,\"value\":\"hsl(215, 100%, 34%)\"},\"hsv\":{\"fraction\":{\"h\":0.5974658869395711,\"s\":1,\"v\":0.6705882352941176},\"h\":215,\"s\":100,\"v\":67,\"value\":\"hsv(215, 100%, 67%)\"},\"image\":{\"bare\":\"http://placehold.it/300x300.png/0047AB/000000\",\"named\":\"http://placehold.it/300x300.png/0047AB/000000&text=Cobalt\"},\"name\":{\"closest_named_hex\":\"#0047AB\",\"distance\":0,\"exact_match_name\":true,\"value\":\"Cobalt\"},\"rgb\":{\"b\":171,\"fraction\":{\"b\":0.6705882352941176,\"g\":0.2784313725490196,\"r\":0},\"g\":71,\"r\":0,\"value\":\"rgb(0, 71, 171)\"}},\"schema\":{\"properties\":{\"XYZ\":{\"properties\":{\"X\":{\"type\":\"integer\"},\"Y\":{\"type\":\"integer\"},\"Z\":{\"type\":\"integer\"},\"fraction\":{\"properties\":{\"X\":{\"type\":\"number\"},\"Y\":{\"type\":\"number\"},\"Z\":{\"type\":\"number\"}},\"type\":\"object\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"_embedded\":{\"type\":\"object\"},\"_links\":{\"properties\":{\"self\":{\"properties\":{\"href\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"cmyk\":{\"properties\":{\"c\":{\"type\":\"integer\"},\"fraction\":{\"properties\":{\"c\":{\"type\":\"number\"},\"k\":{\"type\":\"number\"},\"m\":{\"type\":\"number\"},\"y\":{\"type\":\"number\"}},\"type\":\"object\"},\"k\":{\"type\":\"integer\"},\"m\":{\"type\":\"integer\"},\"value\":{\"type\":\"string\"},\"y\":{\"type\":\"integer\"}},\"type\":\"object\"},\"contrast\":{\"properties\":{\"value\":{\"description\":\"Contrasting color hex value\",\"type\":\"string\"}},\"type\":\"object\"},\"hex\":{\"properties\":{\"clean\":{\"description\":\"Hex color value without hash prefix\",\"type\":\"string\"},\"value\":{\"description\":\"Hex color value with hash prefix\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl\":{\"properties\":{\"fraction\":{\"properties\":{\"h\":{\"type\":\"number\"},\"l\":{\"type\":\"number\"},\"s\":{\"type\":\"number\"}},\"type\":\"object\"},\"h\":{\"type\":\"integer\"},\"l\":{\"type\":\"integer\"},\"s\":{\"type\":\"integer\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"hsv\":{\"properties\":{\"fraction\":{\"properties\":{\"h\":{\"type\":\"number\"},\"s\":{\"type\":\"number\"},\"v\":{\"type\":\"number\"}},\"type\":\"object\"},\"h\":{\"type\":\"integer\"},\"s\":{\"type\":\"integer\"},\"v\":{\"type\":\"integer\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"image\":{\"properties\":{\"bare\":{\"description\":\"URL to placeholder image without text\",\"type\":\"string\"},\"named\":{\"description\":\"URL to placeholder image with color name\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"properties\":{\"closest_named_hex\":{\"description\":\"Hex value of the closest named color\",\"type\":\"string\"},\"distance\":{\"description\":\"Distance from the closest named color\",\"type\":\"integer\"},\"exact_match_name\":{\"description\":\"Whether the name is an exact match\",\"type\":\"boolean\"},\"value\":{\"description\":\"Human-readable color name\",\"type\":\"string\"}},\"type\":\"object\"},\"rgb\":{\"properties\":{\"b\":{\"type\":\"integer\"},\"fraction\":{\"properties\":{\"b\":{\"type\":\"number\"},\"g\":{\"type\":\"number\"},\"r\":{\"type\":\"number\"}},\"type\":\"object\"},\"g\":{\"type\":\"integer\"},\"r\":{\"type\":\"integer\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with color information\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"code\":400,\"example\":\"/id?hex=a674D3\",\"message\":\"The Color API doesn't understand what you mean. Please supply a query parameter of `rgb`, `hsl`, `cmyk` or `hex`.\",\"params\":[],\"path\":\"/id\",\"query\":{}},\"schema\":{\"properties\":{\"code\":{\"description\":\"HTTP error code\",\"type\":\"integer\"},\"example\":{\"description\":\"Example of a correct API call\",\"type\":\"string\"},\"message\":{\"description\":\"Error message description\",\"type\":\"string\"},\"params\":{\"description\":\"Parameters that were processed\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"path\":{\"description\":\"API path that was called\",\"type\":\"string\"},\"query\":{\"description\":\"Query parameters received\",\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid or missing color parameter\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/id","segments":[{"lit":"id"}],"select":{"exist":["callback","cmyk","format","hex","hsl","named","rgb","w"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"idn","name__orig":"idn","Name":"Idn","name_":"idn","name-":"idn","NAME":"IDN","index$":0}, {"active":true,"entity":"idn","key$":"BasicIdnFlow","kind":"basic","name":"BasicIdnFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"idn_ref01","srcdatavar":"idn_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-idn_ref01"}}],"index$":0}]}, 'Idn')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let idn_ref01_data = Object.values(setup.data.existing.idn)[0] as any

    // LOAD
    const idn_ref01_ent = client.Idn()
    const idn_ref01_match_dt0: any = {}
    const idn_ref01_data_dt0 = (await idn_ref01_ent.load(idn_ref01_match_dt0)).data()
    assert(null != idn_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/idn/IdnTestData.json')

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
    ['idn01','idn02','idn03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'THE_COLOR_TEST_IDN_ENTID': idmap,
    'THE_COLOR_TEST_LIVE': 'FALSE',
    'THE_COLOR_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['THE_COLOR_TEST_IDN_ENTID']

  const live = 'TRUE' === env.THE_COLOR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['THE_COLOR_TEST_IDN_ENTID']
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
  
