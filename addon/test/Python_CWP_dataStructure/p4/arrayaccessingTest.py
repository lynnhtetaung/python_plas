import unittest
import arrayaccessing,os,sys


# accessing element of array
class Test_accessing_element1(unittest.TestCase):
    def test_accessing_element1(self):
        actual = arrayaccessing.accessing_element1(0, [1, 2, 3, 4, 5, 6])
        self.assertEqual(actual, 1)

    def test_accessing_element2(self):
        actual = arrayaccessing.accessing_element2(3, [1, 2, 3, 4, 5, 6])
        self.assertEqual(actual, 4)

    def test_accessing_element3(self):
        actual = arrayaccessing.accessing_element3(1, [2.5, 3.2, 3.3])
        self.assertEqual(actual, 3.2)

    def test_accessing_element4(self):
        actual = arrayaccessing.accessing_element4(2, [2.5, 3.2, 3.3])
        self.assertEqual(actual, 3.3)
    


