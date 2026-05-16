package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewIdnEntityFunc func(client *TheColorSDK, entopts map[string]any) TheColorEntity

var NewSchemeEntityFunc func(client *TheColorSDK, entopts map[string]any) TheColorEntity

