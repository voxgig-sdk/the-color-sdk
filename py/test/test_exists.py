# TheColor SDK exists test

import pytest
from thecolor_sdk import TheColorSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TheColorSDK.test(None, None)
        assert testsdk is not None
