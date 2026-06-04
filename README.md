# TheColor SDK

Convert any color between formats, look up its name, and generate harmonic schemes

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About The Color API

[The Color API](https://www.thecolorapi.com) is a small, free HTTP service created by [Josh Beckman](https://github.com/andjosh) that converts colors between formats, identifies the closest named color, and generates harmonic color schemes from a seed color.

What you get from the API:

- Color identification via `GET /id` accepting `hex`, `rgb`, `hsl`, or `cmyk` query parameters.
- Scheme generation via `GET /scheme` with `mode` set to one of `monochrome`, `monochrome-dark`, `monochrome-light`, `analogic`, `analogic-complement`, `complement`, `triad`, or `quad`, plus a `count`.
- Each color response includes hex, RGB, HSL, HSV, CMYK, and XYZ representations, the nearest named color (drawn from a dataset of around 2000 names) with distance metric, a best-contrast text color, and image URLs.
- Responses are available as JSON (default), HTML, or SVG via the `format` parameter; SVG and HTML support an optional `w` width and a name-label toggle.

The service does not document authentication or rate limits, and CORS is reported as enabled. Treat published behaviour as best-effort and consult the GitHub repository for current details.

## Try it

**TypeScript**
```bash
npm install the-color
```

**Python**
```bash
pip install the-color-sdk
```

**PHP**
```bash
composer require voxgig/the-color-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/the-color-sdk/go
```

**Ruby**
```bash
gem install the-color-sdk
```

**Lua**
```bash
luarocks install the-color-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { TheColorSDK } from 'the-color'

const client = new TheColorSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o the-color-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "the-color": {
      "command": "/abs/path/to/the-color-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Idn** | A single identified color resource returned by `GET /id`, carrying hex/RGB/HSL/HSV/CMYK/XYZ values, the closest named color, and a contrast color. | `/id` |
| **Scheme** | A generated palette of colors derived from a seed color via `GET /scheme`, parameterised by `mode` (e.g. `complement`, `triad`, `analogic`) and `count`. | `/scheme` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from thecolor_sdk import TheColorSDK

client = TheColorSDK({})


# Load a specific idn
idn, err = client.Idn(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'thecolor_sdk.php';

$client = new TheColorSDK([]);


// Load a specific idn
[$idn, $err] = $client->Idn(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/the-color-sdk/go"

client := sdk.NewTheColorSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "TheColor_sdk"

client = TheColorSDK.new({})


# Load a specific idn
idn, err = client.Idn(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("the-color_sdk")

local client = sdk.new({})


-- Load a specific idn
local idn, err = client:Idn(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = TheColorSDK.test()
const result = await client.Idn().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = TheColorSDK.test(None, None)
result, err = client.Idn(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = TheColorSDK::test(null, null);
[$result, $err] = $client->Idn(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Idn(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = TheColorSDK.test(nil, nil)
result, err = client.Idn(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Idn(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the The Color API

- Upstream: [https://www.thecolorapi.com](https://www.thecolorapi.com)
- API docs: [https://www.thecolorapi.com/docs](https://www.thecolorapi.com/docs)

- The Color API is described as open source, with source code at [github.com/andjosh/thecolorapi](https://github.com/andjosh/thecolorapi).
- The public service does not publish an explicit licence, rate limit, or attribution requirement.
- Check the upstream repository for the canonical licence and any terms before commercial use.

---

Generated from the The Color API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
