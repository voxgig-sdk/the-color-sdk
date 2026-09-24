

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"XYZ":{"a":true,"h":"Xyz","n":"XYZ","r":false,"t":"`$OBJECT`","key$":"XYZ","index$":0},"cmyk":{"a":true,"h":"Cmyk","n":"cmyk","r":false,"t":"`$OBJECT`","key$":"cmyk","index$":1},"contrast":{"a":true,"h":"Contrast","n":"contrast","r":false,"t":"`$OBJECT`","key$":"contrast","index$":2},"embedded":{"a":true,"h":"Embedded","n":"embedded","r":false,"t":"`$OBJECT`","key$":"embedded","index$":3},"hex":{"a":true,"h":"Hex","n":"hex","r":false,"t":"`$OBJECT`","key$":"hex","index$":4},"hsl":{"a":true,"h":"Hsl","n":"hsl","r":false,"t":"`$OBJECT`","key$":"hsl","index$":5},"hsv":{"a":true,"h":"Hsv","n":"hsv","r":false,"t":"`$OBJECT`","key$":"hsv","index$":6},"image":{"a":true,"h":"Image","n":"image","r":false,"t":"`$OBJECT`","key$":"image","index$":7},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":8},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$OBJECT`","key$":"name","index$":9},"rgb":{"a":true,"h":"Rgb","n":"rgb","r":false,"t":"`$OBJECT`","key$":"rgb","index$":10}},"name":"idn","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /id","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"callback","or":"callback","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"100,58,0,33","k":"query","n":"cmyk","or":"cmyk","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"0047AB","k":"query","n":"hex","or":"hex","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"215,100%,34%","k":"query","n":"hsl","or":"hsl","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":false,"k":"query","n":"named","or":"named","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"ex":"0,71,171","k":"query","n":"rgb","or":"rgb","r":false,"t":"`$STRING`","index$":6},{"a":true,"ex":350,"k":"query","n":"w","or":"w","r":false,"t":"`$INTEGER`","index$":7}]},"k":"http","m":"GET","o":"/id","q":{"exist":["callback","cmyk","format","hex","hsl","named","rgb","w"]},"r":{},"s":[{"lit":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"idn","name__orig":"idn","Name":"Idn","name_":"idn","name-":"idn","NAME":"IDN","index$":0}, {"active":true,"entity":"idn","key$":"BasicIdnFlow","kind":"basic","name":"BasicIdnFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"idn_ref01","srcdatavar":"idn_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-idn_ref01"}}],"index$":0}]}, 'Idn', {"GET /id":{"protocol":"http","operationId":"getColorById","responses":{"200":{"description":"Successful response with color information","content":{"application/json":{"schema":{"type":"object","properties":{"hex":{"key$":"hex","properties":{"clean":{"description":"Hex color value without hash prefix","type":"string"},"value":{"description":"Hex color value with hash prefix","type":"string"}},"type":"object"},"rgb":{"key$":"rgb","properties":{"b":{"type":"integer"},"fraction":{"properties":{"b":{"type":"number"},"g":{"type":"number"},"r":{"type":"number"}},"type":"object"},"g":{"type":"integer"},"r":{"type":"integer"},"value":{"type":"string"}},"type":"object"},"hsl":{"key$":"hsl","properties":{"fraction":{"properties":{"h":{"type":"number"},"l":{"type":"number"},"s":{"type":"number"}},"type":"object"},"h":{"type":"integer"},"l":{"type":"integer"},"s":{"type":"integer"},"value":{"type":"string"}},"type":"object"},"hsv":{"key$":"hsv","properties":{"fraction":{"properties":{"h":{"type":"number"},"s":{"type":"number"},"v":{"type":"number"}},"type":"object"},"h":{"type":"integer"},"s":{"type":"integer"},"v":{"type":"integer"},"value":{"type":"string"}},"type":"object"},"name":{"key$":"name","properties":{"closest_named_hex":{"description":"Hex value of the closest named color","type":"string"},"distance":{"description":"Distance from the closest named color","type":"integer"},"exact_match_name":{"description":"Whether the name is an exact match","type":"boolean"},"value":{"description":"Human-readable color name","type":"string"}},"type":"object"},"cmyk":{"key$":"cmyk","properties":{"c":{"type":"integer"},"fraction":{"properties":{"c":{"type":"number"},"k":{"type":"number"},"m":{"type":"number"},"y":{"type":"number"}},"type":"object"},"k":{"type":"integer"},"m":{"type":"integer"},"value":{"type":"string"},"y":{"type":"integer"}},"type":"object"},"XYZ":{"key$":"XYZ","properties":{"X":{"type":"integer"},"Y":{"type":"integer"},"Z":{"type":"integer"},"fraction":{"properties":{"X":{"type":"number"},"Y":{"type":"number"},"Z":{"type":"number"}},"type":"object"},"value":{"type":"string"}},"type":"object"},"image":{"key$":"image","properties":{"bare":{"description":"URL to placeholder image without text","type":"string"},"named":{"description":"URL to placeholder image with color name","type":"string"}},"type":"object"},"contrast":{"key$":"contrast","properties":{"value":{"description":"Contrasting color hex value","type":"string"}},"type":"object"},"_links":{"key$":"_links","properties":{"self":{"properties":{"href":{"type":"string"}},"type":"object"}},"type":"object"},"_embedded":{"key$":"_embedded","type":"object"}},"x-ref":"#/components/schemas/ColorResponse","index$":0},"example":{"hex":{"value":"#0047AB","clean":"0047AB"},"rgb":{"fraction":{"r":0,"g":0.2784313725490196,"b":0.6705882352941176},"r":0,"g":71,"b":171,"value":"rgb(0, 71, 171)"},"hsl":{"fraction":{"h":0.5974658869395711,"s":1,"l":0.3352941176470588},"h":215,"s":100,"l":34,"value":"hsl(215, 100%, 34%)"},"hsv":{"fraction":{"h":0.5974658869395711,"s":1,"v":0.6705882352941176},"h":215,"s":100,"value":"hsv(215, 100%, 67%)","v":67},"name":{"value":"Cobalt","closest_named_hex":"#0047AB","exact_match_name":true,"distance":0},"cmyk":{"fraction":{"c":1,"m":0.5847953216374269,"y":0,"k":0.3294117647058824},"value":"cmyk(100, 58, 0, 33)","c":100,"m":58,"y":0,"k":33},"XYZ":{"fraction":{"X":0.22060823529411763,"Y":0.2475505882352941,"Z":0.6705831372549019},"value":"XYZ(22, 25, 67)","X":22,"Y":25,"Z":67},"image":{"bare":"http://placehold.it/300x300.png/0047AB/000000","named":"http://placehold.it/300x300.png/0047AB/000000&text=Cobalt"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=0047AB"}},"_embedded":{}}}}},"400":{"description":"Bad request - Invalid or missing color parameter","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"integer","description":"HTTP error code"},"message":{"type":"string","description":"Error message description"},"query":{"type":"object","description":"Query parameters received"},"params":{"type":"array","items":{"type":"string"},"description":"Parameters that were processed"},"path":{"type":"string","description":"API path that was called"},"example":{"type":"string","description":"Example of a correct API call"}},"x-ref":"#/components/schemas/ErrorResponse"},"example":{"code":400,"message":"The Color API doesn't understand what you mean. Please supply a query parameter of `rgb`, `hsl`, `cmyk` or `hex`.","query":{},"params":[],"path":"/id","example":"/id?hex=a674D3"}}}}},"parameters":[{"name":"hex","in":"query","description":"Valid hex code","required":false,"schema":{"type":"string","example":"0047AB"},"index$":0},{"name":"rgb","in":"query","description":"Valid rgb color, also rgb(0,71,171)","required":false,"schema":{"type":"string","example":"0,71,171"},"index$":1},{"name":"hsl","in":"query","description":"Valid hsl color, also hsl(215,100%,34%)","required":false,"schema":{"type":"string","example":"215,100%,34%"},"index$":2},{"name":"cmyk","in":"query","description":"Valid cmyk color, also cmyk(100,58,0,33)","required":false,"schema":{"type":"string","example":"100,58,0,33"},"index$":3},{"name":"format","in":"query","description":"Return results as JSON, SVG or HTML page","required":false,"schema":{"type":"string","enum":["json","html","svg"],"default":"json"},"index$":4},{"name":"w","in":"query","description":"Height of resulting image, only applicable on SVG format","required":false,"schema":{"type":"integer","default":100,"example":350},"index$":5},{"name":"named","in":"query","description":"Whether to print the color names on resulting image, only applicable on SVG format","required":false,"schema":{"type":"boolean","default":true,"example":false},"index$":6},{"name":"callback","in":"query","description":"JSONP callback function name","required":false,"schema":{"type":"string"},"index$":7}],"securitySource":"unspecified"}})
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
  
