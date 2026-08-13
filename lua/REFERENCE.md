# TheColor Lua SDK Reference

Complete API reference for the TheColor Lua SDK.


## TheColorSDK

### Constructor

```lua
local sdk = require("the-color_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Idn(data)`

Create a new `Idn` entity instance. Pass `nil` for no initial data.

#### `Scheme(data)`

Create a new `Scheme` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## IdnEntity

```lua
local idn = client:Idn(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `XYZ` | `table` | No |  |
| `cmyk` | `table` | No |  |
| `contrast` | `table` | No |  |
| `embedded` | `table` | No |  |
| `hex` | `table` | No |  |
| `hsl` | `table` | No |  |
| `hsv` | `table` | No |  |
| `image` | `table` | No |  |
| `links` | `table` | No |  |
| `name` | `table` | No |  |
| `rgb` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Idn():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IdnEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SchemeEntity

```lua
local scheme = client:Scheme(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `XYZ` | `table` | No |  |
| `cmyk` | `table` | No |  |
| `contrast` | `table` | No |  |
| `embedded` | `table` | No |  |
| `hex` | `table` | No |  |
| `hsl` | `table` | No |  |
| `hsv` | `table` | No |  |
| `image` | `table` | No |  |
| `links` | `table` | No |  |
| `name` | `table` | No |  |
| `rgb` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Scheme():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SchemeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

