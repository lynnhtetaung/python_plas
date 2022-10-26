import unittest
import arrayslicing,os,sys


class Test_sliced_array1(unittest.TestCase):
    # Print elements of a range using Slice operation
    def test_sliced_array1(self):
        actual = arrayslicing.sliced_array1([1, 2, 3, 4, 5])
        self.assertEqual(actual, [2, 3])

    # Print elements from a pre-defined point to end
    def test_slice_array2(self):
        actual = arrayslicing.slice_array2([1, 2, 3, 4, 5])
        self.assertEqual(actual, [3, 4, 5])

    # Printing elements from beginning till end
    def test_slice_array3(self):
        actual = arrayslicing.slice_array3([1, 2, 3, 4, 5])
        self.assertEqual(actual, [1, 2, 3, 4, 5])


