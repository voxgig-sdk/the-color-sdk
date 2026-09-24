"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SchemeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when THE_COLOR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('THE_COLOR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TheColorSDK.test();
        const ent = testsdk.Scheme();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.THE_COLOR_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'scheme.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "XYZ": { "a": true, "h": "Xyz", "n": "XYZ", "r": false, "t": "`$OBJECT`", "key$": "XYZ", "index$": 0 }, "cmyk": { "a": true, "h": "Cmyk", "n": "cmyk", "r": false, "t": "`$OBJECT`", "key$": "cmyk", "index$": 1 }, "contrast": { "a": true, "h": "Contrast", "n": "contrast", "r": false, "t": "`$OBJECT`", "key$": "contrast", "index$": 2 }, "embedded": { "a": true, "h": "Embedded", "n": "embedded", "r": false, "t": "`$OBJECT`", "key$": "embedded", "index$": 3 }, "hex": { "a": true, "h": "Hex", "n": "hex", "r": false, "t": "`$OBJECT`", "key$": "hex", "index$": 4 }, "hsl": { "a": true, "h": "Hsl", "n": "hsl", "r": false, "t": "`$OBJECT`", "key$": "hsl", "index$": 5 }, "hsv": { "a": true, "h": "Hsv", "n": "hsv", "r": false, "t": "`$OBJECT`", "key$": "hsv", "index$": 6 }, "image": { "a": true, "h": "Image", "n": "image", "r": false, "t": "`$OBJECT`", "key$": "image", "index$": 7 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "t": "`$OBJECT`", "key$": "links", "index$": 8 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$OBJECT`", "key$": "name", "index$": 9 }, "rgb": { "a": true, "h": "Rgb", "n": "rgb", "r": false, "t": "`$OBJECT`", "key$": "rgb", "index$": 10 } }, "name": "scheme", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /scheme", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "callback", "or": "callback", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "100,58,0,33", "k": "query", "n": "cmyk", "or": "cmyk", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 6, "k": "query", "n": "count", "or": "count", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "0047AB", "k": "query", "n": "hex", "or": "hex", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": "215,100%,34%", "k": "query", "n": "hsl", "or": "hsl", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": "monochrome", "k": "query", "n": "mode", "or": "mode", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "ex": false, "k": "query", "n": "named", "or": "named", "r": false, "t": "`$BOOLEAN`", "index$": 7 }, { "a": true, "ex": "0,71,171", "k": "query", "n": "rgb", "or": "rgb", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "ex": 350, "k": "query", "n": "w", "or": "w", "r": false, "t": "`$INTEGER`", "index$": 9 }] }, "k": "http", "m": "GET", "o": "/scheme", "q": { "exist": ["callback", "cmyk", "count", "format", "hex", "hsl", "mode", "named", "rgb", "w"] }, "r": {}, "s": [{ "lit": "scheme" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "scheme", "name__orig": "scheme", "Name": "Scheme", "name_": "scheme", "name-": "scheme", "NAME": "SCHEME", "index$": 1 }, { "active": true, "entity": "scheme", "key$": "BasicSchemeFlow", "kind": "basic", "name": "BasicSchemeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "scheme_ref01" } }], "index$": 0 }] }, 'Scheme', { "GET /scheme": { "protocol": "http", "operationId": "getColorScheme", "responses": { "200": { "description": "Successful response with color scheme", "content": { "application/json": { "schema": { "type": "object", "properties": { "mode": { "description": "The scheme mode used to generate colors", "key$": "mode", "type": "string" }, "count": { "description": "Number of colors in the scheme", "key$": "count", "type": "string" }, "colors": { "items": { "properties": { "XYZ": { "key$": "XYZ", "properties": { "X": { "type": "integer" }, "Y": { "type": "integer" }, "Z": { "type": "integer" }, "fraction": { "properties": { "X": { "type": "number" }, "Y": { "type": "number" }, "Z": { "type": "number" } }, "type": "object" }, "value": { "type": "string" } }, "type": "object" }, "_embedded": { "key$": "_embedded", "type": "object" }, "_links": { "key$": "_links", "properties": { "self": { "properties": { "href": { "type": "string" } }, "type": "object" } }, "type": "object" }, "cmyk": { "key$": "cmyk", "properties": { "c": { "type": "integer" }, "fraction": { "properties": { "c": { "type": "number" }, "k": { "type": "number" }, "m": { "type": "number" }, "y": { "type": "number" } }, "type": "object" }, "k": { "type": "integer" }, "m": { "type": "integer" }, "value": { "type": "string" }, "y": { "type": "integer" } }, "type": "object" }, "contrast": { "key$": "contrast", "properties": { "value": { "description": "Contrasting color hex value", "type": "string" } }, "type": "object" }, "hex": { "key$": "hex", "properties": { "clean": { "description": "Hex color value without hash prefix", "type": "string" }, "value": { "description": "Hex color value with hash prefix", "type": "string" } }, "type": "object" }, "hsl": { "key$": "hsl", "properties": { "fraction": { "properties": { "h": { "type": "number" }, "l": { "type": "number" }, "s": { "type": "number" } }, "type": "object" }, "h": { "type": "integer" }, "l": { "type": "integer" }, "s": { "type": "integer" }, "value": { "type": "string" } }, "type": "object" }, "hsv": { "key$": "hsv", "properties": { "fraction": { "properties": { "h": { "type": "number" }, "s": { "type": "number" }, "v": { "type": "number" } }, "type": "object" }, "h": { "type": "integer" }, "s": { "type": "integer" }, "v": { "type": "integer" }, "value": { "type": "string" } }, "type": "object" }, "image": { "key$": "image", "properties": { "bare": { "description": "URL to placeholder image without text", "type": "string" }, "named": { "description": "URL to placeholder image with color name", "type": "string" } }, "type": "object" }, "name": { "key$": "name", "properties": { "closest_named_hex": { "description": "Hex value of the closest named color", "type": "string" }, "distance": { "description": "Distance from the closest named color", "type": "integer" }, "exact_match_name": { "description": "Whether the name is an exact match", "type": "boolean" }, "value": { "description": "Human-readable color name", "type": "string" } }, "type": "object" }, "rgb": { "key$": "rgb", "properties": { "b": { "type": "integer" }, "fraction": { "properties": { "b": { "type": "number" }, "g": { "type": "number" }, "r": { "type": "number" } }, "type": "object" }, "g": { "type": "integer" }, "r": { "type": "integer" }, "value": { "type": "string" } }, "type": "object" } }, "type": "object", "x-ref": "#/components/schemas/ColorResponse", "index$": 0 }, "key$": "colors", "type": "array" }, "seed": { "key$": "seed", "properties": { "XYZ": { "key$": "XYZ", "properties": { "X": { "type": "integer" }, "Y": { "type": "integer" }, "Z": { "type": "integer" }, "fraction": { "properties": { "X": { "type": "number" }, "Y": { "type": "number" }, "Z": { "type": "number" } }, "type": "object" }, "value": { "type": "string" } }, "type": "object" }, "_embedded": { "key$": "_embedded", "type": "object" }, "_links": { "key$": "_links", "properties": { "self": { "properties": { "href": { "type": "string" } }, "type": "object" } }, "type": "object" }, "cmyk": { "key$": "cmyk", "properties": { "c": { "type": "integer" }, "fraction": { "properties": { "c": { "type": "number" }, "k": { "type": "number" }, "m": { "type": "number" }, "y": { "type": "number" } }, "type": "object" }, "k": { "type": "integer" }, "m": { "type": "integer" }, "value": { "type": "string" }, "y": { "type": "integer" } }, "type": "object" }, "contrast": { "key$": "contrast", "properties": { "value": { "description": "Contrasting color hex value", "type": "string" } }, "type": "object" }, "hex": { "key$": "hex", "properties": { "clean": { "description": "Hex color value without hash prefix", "type": "string" }, "value": { "description": "Hex color value with hash prefix", "type": "string" } }, "type": "object" }, "hsl": { "key$": "hsl", "properties": { "fraction": { "properties": { "h": { "type": "number" }, "l": { "type": "number" }, "s": { "type": "number" } }, "type": "object" }, "h": { "type": "integer" }, "l": { "type": "integer" }, "s": { "type": "integer" }, "value": { "type": "string" } }, "type": "object" }, "hsv": { "key$": "hsv", "properties": { "fraction": { "properties": { "h": { "type": "number" }, "s": { "type": "number" }, "v": { "type": "number" } }, "type": "object" }, "h": { "type": "integer" }, "s": { "type": "integer" }, "v": { "type": "integer" }, "value": { "type": "string" } }, "type": "object" }, "image": { "key$": "image", "properties": { "bare": { "description": "URL to placeholder image without text", "type": "string" }, "named": { "description": "URL to placeholder image with color name", "type": "string" } }, "type": "object" }, "name": { "key$": "name", "properties": { "closest_named_hex": { "description": "Hex value of the closest named color", "type": "string" }, "distance": { "description": "Distance from the closest named color", "type": "integer" }, "exact_match_name": { "description": "Whether the name is an exact match", "type": "boolean" }, "value": { "description": "Human-readable color name", "type": "string" } }, "type": "object" }, "rgb": { "key$": "rgb", "properties": { "b": { "type": "integer" }, "fraction": { "properties": { "b": { "type": "number" }, "g": { "type": "number" }, "r": { "type": "number" } }, "type": "object" }, "g": { "type": "integer" }, "r": { "type": "integer" }, "value": { "type": "string" } }, "type": "object" } }, "type": "object", "x-ref": "#/components/schemas/ColorResponse" }, "_links": { "key$": "_links", "properties": { "schemes": { "properties": { "analogic": { "type": "string" }, "analogic-complement": { "type": "string" }, "complement": { "type": "string" }, "monochrome": { "type": "string" }, "monochrome-dark": { "type": "string" }, "monochrome-light": { "type": "string" }, "quad": { "type": "string" }, "triad": { "type": "string" } }, "type": "object" }, "self": { "type": "string" } }, "type": "object" }, "_embedded": { "key$": "_embedded", "type": "object" } }, "x-ref": "#/components/schemas/SchemeResponse" }, "example": { "mode": "monochrome", "count": "2", "colors": [{ "hex": { "value": "#01122A", "clean": "01122A" }, "rgb": { "fraction": { "r": 0.00392156862745098, "g": 0.07058823529411765, "b": 0.16470588235294117 }, "r": 1, "g": 18, "b": 42, "value": "rgb(1, 18, 42)" }, "hsl": { "fraction": { "h": 0.597560975609756, "s": 0.9534883720930231, "l": 0.08431372549019608 }, "h": 215, "s": 95, "l": 8, "value": "hsl(215, 95%, 8%)" }, "hsv": { "fraction": { "h": 0.597560975609756, "s": 0.976190476190476, "v": 0.16470588235294117 }, "value": "hsv(215, 98%, 16%)", "h": 215, "s": 98, "v": 16 }, "name": { "value": "Midnight", "closest_named_hex": "#011635", "exact_match_name": false, "distance": 217 }, "cmyk": { "fraction": { "c": 0.9761904761904763, "m": 0.5714285714285715, "y": 0, "k": 0.8352941176470589 }, "value": "cmyk(98, 57, 0, 84)", "c": 98, "m": 57, "y": 0, "k": 84 }, "XYZ": { "fraction": { "X": 0.056589019607843134, "Y": 0.06321019607843137, "Z": 0.1650427450980392 }, "value": "XYZ(6, 6, 17)", "X": 6, "Y": 6, "Z": 17 }, "image": { "bare": "http://placehold.it/300x300.png/01122A/FFFFFF", "named": "http://placehold.it/300x300.png/01122A/FFFFFF&text=Midnight" }, "contrast": { "value": "#FFFFFF" }, "_links": { "self": { "href": "/id?hex=01122A" } }, "_embedded": {} }], "seed": { "hex": { "value": "#0047AB", "clean": "0047AB" }, "rgb": { "fraction": { "r": 0, "g": 0.2784313725490196, "b": 0.6705882352941176 }, "r": 0, "g": 71, "b": 171, "value": "rgb(0, 71, 171)" }, "name": { "value": "Cobalt", "closest_named_hex": "#0047AB", "exact_match_name": true, "distance": 0 } }, "_links": { "self": "/scheme?hex=0047AB&mode=monochrome&count=2", "schemes": { "monochrome": "/scheme?hex=0047AB&mode=monochrome&count=2", "monochrome-dark": "/scheme?hex=0047AB&mode=monochrome-dark&count=2", "monochrome-light": "/scheme?hex=0047AB&mode=monochrome-light&count=2", "analogic": "/scheme?hex=0047AB&mode=analogic&count=2", "complement": "/scheme?hex=0047AB&mode=complement&count=2", "analogic-complement": "/scheme?hex=0047AB&mode=analogic-complement&count=2", "triad": "/scheme?hex=0047AB&mode=triad&count=2", "quad": "/scheme?hex=0047AB&mode=quad&count=2" } }, "_embedded": {} } } } }, "400": { "description": "Bad request - Invalid or missing color parameter", "content": { "application/json": { "schema": { "type": "object", "properties": { "code": { "type": "integer", "description": "HTTP error code" }, "message": { "type": "string", "description": "Error message description" }, "query": { "type": "object", "description": "Query parameters received" }, "params": { "type": "array", "items": { "type": "string" }, "description": "Parameters that were processed" }, "path": { "type": "string", "description": "API path that was called" }, "example": { "type": "string", "description": "Example of a correct API call" } }, "x-ref": "#/components/schemas/ErrorResponse" }, "example": { "code": 400, "message": "The Color API doesn't understand what you mean. Please supply a query parameter of `rgb`, `hsl`, `cmyk` or `hex`.", "query": {}, "params": [], "path": "/scheme", "example": "/scheme?hex=FF0&mode=monochrome&count=5" } } } } }, "parameters": [{ "name": "hex", "in": "query", "description": "Valid hex code", "required": false, "schema": { "type": "string", "example": "0047AB" }, "index$": 0 }, { "name": "rgb", "in": "query", "description": "Valid rgb color, also rgb(0,71,171)", "required": false, "schema": { "type": "string", "example": "0,71,171" }, "index$": 1 }, { "name": "hsl", "in": "query", "description": "Valid hsl color, also hsl(215,100%,34%)", "required": false, "schema": { "type": "string", "example": "215,100%,34%" }, "index$": 2 }, { "name": "cmyk", "in": "query", "description": "Valid cmyk color, also cmyk(100,58,0,33)", "required": false, "schema": { "type": "string", "example": "100,58,0,33" }, "index$": 3 }, { "name": "format", "in": "query", "description": "Return results as JSON, SVG or HTML page of results", "required": false, "schema": { "type": "string", "enum": ["json", "html", "svg"], "default": "json" }, "index$": 4 }, { "name": "mode", "in": "query", "description": "Define mode by which to generate the scheme from the seed color", "required": false, "schema": { "type": "string", "enum": ["monochrome", "monochrome-dark", "monochrome-light", "analogic", "complement", "analogic-complement", "triad", "quad"], "default": "monochrome" }, "index$": 5 }, { "name": "count", "in": "query", "description": "Number of colors to return", "required": false, "schema": { "type": "integer", "default": 5, "example": 6 }, "index$": 6 }, { "name": "w", "in": "query", "description": "Height of resulting image, only applicable on SVG format", "required": false, "schema": { "type": "integer", "default": 100, "example": 350 }, "index$": 7 }, { "name": "named", "in": "query", "description": "Whether to print the color names on resulting image, only applicable on SVG format", "required": false, "schema": { "type": "boolean", "default": true, "example": false }, "index$": 8 }, { "name": "callback", "in": "query", "description": "JSONP callback function name", "required": false, "schema": { "type": "string" }, "index$": 9 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let scheme_ref01_data = Object.values(setup.data.existing.scheme)[0];
        // LIST
        const scheme_ref01_ent = client.Scheme();
        const scheme_ref01_match = {};
        const scheme_ref01_list = (await scheme_ref01_ent.list(scheme_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/scheme/SchemeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TheColorSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['scheme01', 'scheme02', 'scheme03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'THE_COLOR_TEST_SCHEME_ENTID': idmap,
        'THE_COLOR_TEST_LIVE': 'FALSE',
        'THE_COLOR_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['THE_COLOR_TEST_SCHEME_ENTID'];
    const live = 'TRUE' === env.THE_COLOR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['THE_COLOR_TEST_SCHEME_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.TheColorSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=SchemeEntity.test.js.map