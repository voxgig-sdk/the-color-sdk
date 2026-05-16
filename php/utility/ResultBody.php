<?php
declare(strict_types=1);

// TheColor SDK utility: result_body

class TheColorResultBody
{
    public static function call(TheColorContext $ctx): ?TheColorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
