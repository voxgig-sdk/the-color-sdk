package voxgigthecolorsdk

import (
	"github.com/voxgig-sdk/the-color-sdk/go/core"
	"github.com/voxgig-sdk/the-color-sdk/go/entity"
	"github.com/voxgig-sdk/the-color-sdk/go/feature"
	_ "github.com/voxgig-sdk/the-color-sdk/go/utility"
)

// Type aliases preserve external API.
type TheColorSDK = core.TheColorSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TheColorEntity = core.TheColorEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TheColorError = core.TheColorError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewIdnEntityFunc = func(client *core.TheColorSDK, entopts map[string]any) core.TheColorEntity {
		return entity.NewIdnEntity(client, entopts)
	}
	core.NewSchemeEntityFunc = func(client *core.TheColorSDK, entopts map[string]any) core.TheColorEntity {
		return entity.NewSchemeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTheColorSDK = core.NewTheColorSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewTheColorSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *TheColorSDK  { return NewTheColorSDK(nil) }
func Test() *TheColorSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
