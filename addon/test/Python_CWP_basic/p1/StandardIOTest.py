# A quick-demo of standard input/output Usage from user
import unittest, os, sys
from StandardIO import StandardIO_Usage


class SumTest(unittest.TestCase):
    def setUp(self):
        self.standardIO_usage = StandardIO_Usage()

    def test_Add_Str(self):
        # Test the function of adding string data
        # Test function Add(self)
        self.standardIO_usage.Add("Google")
        self.assertEqual(self.standardIO_usage.get_set(),{'Google'})

    def test_Add_Int(self):
        # Test the function of adding int data
        # Test function Add(self)
        self.standardIO_usage.Add(1)
        self.assertEqual(self.standardIO_usage.get_set(),{1})

    def test_Add_Float(self):
        # Test the function of adding float data
        # Test function Add(self)
        self.standardIO_usage.Add(1.23)
        self.assertEqual(self.standardIO_usage.get_set(),{1.23})




