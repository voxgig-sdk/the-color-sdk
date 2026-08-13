# TheColor SDK utility: make_context

from thecolor_sdk.core.context import TheColorContext


def make_context_util(ctxmap, basectx):
    return TheColorContext(ctxmap, basectx)
