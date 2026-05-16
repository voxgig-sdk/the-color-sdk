<?php
declare(strict_types=1);

// TheColor SDK utility: prepare_body

class TheColorPrepareBody
{
    public static function call(TheColorContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
