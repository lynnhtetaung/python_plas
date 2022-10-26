import unittest
import arraycreation,sys,os


# creating an array with integer type
class Test_array_creation1(unittest.TestCase):
    def test_array_creation1(self):
        actual = arraycreation.array_creation1([1, 2, 3])
        self.assertEqual(actual, [1, 2, 3])

    # creating an array with float type
    def test_array_creation2(self):
        actual = arraycreation.array_creation2([2.5, 3.2, 3.3])
        self.assertEqual(actual, [2.5, 3.2, 3.3])

