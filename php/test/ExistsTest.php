<?php
declare(strict_types=1);

// TheColor SDK exists test

require_once __DIR__ . '/../thecolor_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TheColorSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
