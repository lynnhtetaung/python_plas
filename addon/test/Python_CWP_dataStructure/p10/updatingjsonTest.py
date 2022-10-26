import unittest
import updatingjson,os,sys


class Test_update_json(unittest.TestCase):
    # appending the data
    def test_update_json(self):
        actual = updatingjson.update_json('{"name": "Jame", "languages": ["Japanese", "Chinese"]}', {"pin": 110096})
        self.assertEqual(actual, '{"name": "Jame", "languages": ["Japanese", "Chinese"], "pin": 110096}')


