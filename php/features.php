<?php
declare(strict_types=1);

// TheColor SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class TheColorFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new TheColorBaseFeature();
            case "test":
                return new TheColorTestFeature();
            default:
                return new TheColorBaseFeature();
        }
    }
}
