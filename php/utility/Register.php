<?php
declare(strict_types=1);

// TheColor SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

TheColorUtility::setRegistrar(function (TheColorUtility $u): void {
    $u->clean = [TheColorClean::class, 'call'];
    $u->done = [TheColorDone::class, 'call'];
    $u->make_error = [TheColorMakeError::class, 'call'];
    $u->feature_add = [TheColorFeatureAdd::class, 'call'];
    $u->feature_hook = [TheColorFeatureHook::class, 'call'];
    $u->feature_init = [TheColorFeatureInit::class, 'call'];
    $u->fetcher = [TheColorFetcher::class, 'call'];
    $u->make_fetch_def = [TheColorMakeFetchDef::class, 'call'];
    $u->make_context = [TheColorMakeContext::class, 'call'];
    $u->make_options = [TheColorMakeOptions::class, 'call'];
    $u->make_request = [TheColorMakeRequest::class, 'call'];
    $u->make_response = [TheColorMakeResponse::class, 'call'];
    $u->make_result = [TheColorMakeResult::class, 'call'];
    $u->make_point = [TheColorMakePoint::class, 'call'];
    $u->make_spec = [TheColorMakeSpec::class, 'call'];
    $u->make_url = [TheColorMakeUrl::class, 'call'];
    $u->param = [TheColorParam::class, 'call'];
    $u->prepare_auth = [TheColorPrepareAuth::class, 'call'];
    $u->prepare_body = [TheColorPrepareBody::class, 'call'];
    $u->prepare_headers = [TheColorPrepareHeaders::class, 'call'];
    $u->prepare_method = [TheColorPrepareMethod::class, 'call'];
    $u->prepare_params = [TheColorPrepareParams::class, 'call'];
    $u->prepare_path = [TheColorPreparePath::class, 'call'];
    $u->prepare_query = [TheColorPrepareQuery::class, 'call'];
    $u->result_basic = [TheColorResultBasic::class, 'call'];
    $u->result_body = [TheColorResultBody::class, 'call'];
    $u->result_headers = [TheColorResultHeaders::class, 'call'];
    $u->transform_request = [TheColorTransformRequest::class, 'call'];
    $u->transform_response = [TheColorTransformResponse::class, 'call'];
});
