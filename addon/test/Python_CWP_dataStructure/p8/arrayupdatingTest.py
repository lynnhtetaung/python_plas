import unittest
import arrayupdating,os,sys


class Test_before_update(unittest.TestCase):
    # printing original array
    def test_before_update(self):
        actual = arrayupdating.before_update([1, 2, 3, 1])
        self.assertEqual(actual, [1, 2, 3, 1])

    # updating a element in a array
    def test_after_update(self):
        actual = arrayupdating.after_update([1, 2, 3, 1])
        self.assertEqual(actual, [1, 2, 6, 1])

    # updating a element in a array
    def test_after_update1(self):
        actual = arrayupdating.after_update1([1, 2, 3, 1])
        self.assertEqual(actual, [1, 2, 3, 8])


