import unittest
import dictTojson,os,sys


class Test_converting(unittest.TestCase):
    # Converting dict to JSON
    def test_converting(self):
        actual = dictTojson.converting({'name': 'Bob',
                                        'age': 12})
        self.assertEqual(actual, '{"name": "Bob", "age": 12}')



