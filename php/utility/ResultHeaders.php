<?php
declare(strict_types=1);

// TheColor SDK utility: result_headers

class TheColorResultHeaders
{
    public static function call(TheColorContext $ctx): ?TheColorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
