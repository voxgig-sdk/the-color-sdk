# TheColor SDK feature factory

from thecolor_sdk.feature.base_feature import TheColorBaseFeature
from thecolor_sdk.feature.test_feature import TheColorTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TheColorBaseFeature(),
        "test": lambda: TheColorTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
