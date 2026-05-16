<?php
declare(strict_types=1);

// TheColor SDK utility: feature_add

class TheColorFeatureAdd
{
    public static function call(TheColorContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
