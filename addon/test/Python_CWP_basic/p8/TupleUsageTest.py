# A demo of Tuple Usage
import unittest, os, sys
from TupleUsage import Tuple


class TupleTestCases(unittest.TestCase):
    def setUp(self):
        self.tuple = Tuple()

    def test_connect(self):
        # Test the function of connecting two tuples
        # Test function connect(self, parameter, parameter)
        self.tuple1 = (1, 2)
        self.tuple2 = (99, 'Kelvin')
        self.assertEqual(self.tuple.connect(self.tuple1, self.tuple2), (1, 2, 99, 'Kelvin'))

    def test_get_tuple(self):
        # Test the function of obtaining tuple data
        # Test function get_tuple(self)
        self.tuple = Tuple((1, 2, 99, 'Kevin'))
        self.assertEqual(len(self.tuple.get_tuple()), 4)

