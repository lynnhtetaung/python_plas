# A quick-demo of standard input/output Usage from user
import unittest, os, sys
from SetDataType import Set


class SumTest(unittest.TestCase):
    def setUp(self):
        self.set = Set()

    def test_Add(self):
        # Test the function of adding string data
        # Test function Add(self)
        self.set.Add("Google")
        self.assertEqual(self.set.get_set(),{'Google'})

    def test_get_set(self):
        # Test the function of obtaining set data
        # Test function get_set(self)
        self.set = Set({'orange', 'apple', 'pear', 'banana'})
        self.assertEqual(len(self.set.get_set()), 4)

    def test_get_size(self):
        # Test the function of obtaining the length of the set
        # Test function get_size(self)
        self.set = Set({1.0, "Hello", (1, 2, 3)})
        self.assertEqual(self.set.get_size(), 3)
        







