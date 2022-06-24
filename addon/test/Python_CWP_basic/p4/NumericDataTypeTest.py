''' A quick-demo of Data Type Usage '''

import unittest,sys, os
from NumericDataType import Data_Type_Usage


class Test_demoString(unittest.TestCase):
    def setUp(self):
        self.data_type_usage = Data_Type_Usage()

    def test_demo_string1type(self):
        # Test for demo_string1type function
        #Test for string data type
        actual = self.data_type_usage.demo_string1type("beginnersbook")
        self.assertEqual(actual, str)

    def test_demo_numeric1type(self):
        # Test for demo_numberic1type function
        # Test for numeric data type
        actual = self.data_type_usage.demo_numeric1type(100)
        self.assertEqual(actual, int)

    def test_demo_numeric2type(self):
        # Test for demo_numberic2type function
        # Test for float data type
        actual = self.data_type_usage.demo_numeric2type(34.45)
        self.assertEqual(actual, float)

    def test_demo_numeric3type(self):
        # Test for demo_numberic3type function
        # Test for complex data type
        actual = self.data_type_usage.demo_numeric3type(3 + 4j)
        self.assertEqual(actual, complex)
        


