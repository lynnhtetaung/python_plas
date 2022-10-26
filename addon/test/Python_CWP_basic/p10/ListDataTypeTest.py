import unittest, sys, os
from ListDataType import List

class ListTestCases(unittest.TestCase):
    def setUp(self):
        self.list = List()

    def test_delist(self):
        # Test the function of deleting list data
        # Test function delist(self)
        self.list.enlist(5) # enlist function to add data

        self.assertEqual(self.list.delist(), 5)
        self.assertEqual(self.list.get_size(), 0)
        self.assertEqual(self.list.delist(), False)

    def test_get_list(self):
        # Test the function of obtaining list data
        # Test function get_list(self)
        self.list.enlist(4)
        self.assertEqual(len(self.list.get_list()), 1)

    def test_get_size(self):
        # Test the function of obtaining the length of the list
        # Test function get_size(self)
        self.list = List([4, 10, 3])
        self.assertEqual(self.list.get_size(), 3)
