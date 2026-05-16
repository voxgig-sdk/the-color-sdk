<?php
declare(strict_types=1);

// TheColor SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TheColorMakeContext
{
    public static function call(array $ctxmap, ?TheColorContext $basectx): TheColorContext
    {
        return new TheColorContext($ctxmap, $basectx);
    }
}
