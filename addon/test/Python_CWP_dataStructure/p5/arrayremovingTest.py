import unittest
import arrayremoving,os,sys


#removing element in a Array
class Test_demo_remove1(unittest.TestCase):
    def test_demo_remove1(self):
        actual = arrayremoving.demo_remove1(12, [10, 11, 12, 13, 14])
        self.assertEqual(actual, [10, 11, 13, 14])

    def test_demo_remove2(self):
        actual = arrayremoving.demo_remove2(1.1, [1.1, 2.1, 3.1, 4.1, 5.1])
        self.assertEqual(actual, [2.1, 3.1, 4.1, 5.1])
