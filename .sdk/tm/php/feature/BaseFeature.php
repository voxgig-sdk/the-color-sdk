<?php
declare(strict_types=1);

// TheColor SDK base feature

class TheColorBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TheColorContext $ctx, array $options): void {}
    public function PostConstruct(TheColorContext $ctx): void {}
    public function PostConstructEntity(TheColorContext $ctx): void {}
    public function SetData(TheColorContext $ctx): void {}
    public function GetData(TheColorContext $ctx): void {}
    public function GetMatch(TheColorContext $ctx): void {}
    public function SetMatch(TheColorContext $ctx): void {}
    public function PrePoint(TheColorContext $ctx): void {}
    public function PreSpec(TheColorContext $ctx): void {}
    public function PreRequest(TheColorContext $ctx): void {}
    public function PreResponse(TheColorContext $ctx): void {}
    public function PreResult(TheColorContext $ctx): void {}
    public function PreDone(TheColorContext $ctx): void {}
    public function PreUnexpected(TheColorContext $ctx): void {}
}
