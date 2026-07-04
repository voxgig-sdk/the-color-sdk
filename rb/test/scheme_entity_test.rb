# Scheme entity test

require "minitest/autorun"
require "json"
require_relative "../TheColor_sdk"
require_relative "runner"

class SchemeEntityTest < Minitest::Test
  def test_create_instance
    testsdk = TheColorSDK.test(nil, nil)
    ent = testsdk.Scheme(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = scheme_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "scheme." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set THECOLOR_TEST_SCHEME_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    scheme_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.scheme")))
    scheme_ref01_data = nil
    if scheme_ref01_data_raw.length > 0
      scheme_ref01_data = Helpers.to_map(scheme_ref01_data_raw[0][1])
    end

    # LIST
    scheme_ref01_ent = client.Scheme(nil)
    scheme_ref01_match = {}

    scheme_ref01_list_result = scheme_ref01_ent.list(scheme_ref01_match, nil)
    assert scheme_ref01_list_result.is_a?(Array)

  end
end

def scheme_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "scheme", "SchemeTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = TheColorSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["scheme01", "scheme02", "scheme03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["THECOLOR_TEST_SCHEME_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "THECOLOR_TEST_SCHEME_ENTID" => idmap,
    "THECOLOR_TEST_LIVE" => "FALSE",
    "THECOLOR_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["THECOLOR_TEST_SCHEME_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["THECOLOR_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = TheColorSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["THECOLOR_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["THECOLOR_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
