import unittest
import jsontostring,os, sys


class Test_conversion(unittest.TestCase):
    #conversion of JSON string to a dictionary
    def test_conversion(self):
        actual = jsontostring.conversion('{"name": "Bob", "languages": ["English", "French"]}')
        self.assertEqual(actual, {'name': 'Bob', 'languages': ['English', 'French']})

