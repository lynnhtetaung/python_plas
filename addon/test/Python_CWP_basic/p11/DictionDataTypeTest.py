# A quick-demo of Dictionary Usage

import unittest, sys, os
from DictionDataType import Dictionary


class Test_Dictionary(unittest.TestCase):
    def setUp(self):
        self.dictionary = Dictionary()

    def test_AddOrUpdate(self):
        # Test the function of adding and modifying data
        # Test function AddOrUpdate(self, parameter)
        # dict.update(dict_2) Adds dictionary dict2's key-values pairs to dict)
        self.dictionary.AddOrUpdate({'StuName': 'Ajeet', 'StuAge': 30, 'StuCity': 'Agra'})
        self.assertEqual(self.dictionary.get_dict(), {'StuName': 'Ajeet', 'StuAge': 30, 'StuCity': 'Agra'})

    def test_delete(self):
        # Test the function of deleting data
        # Test function delete(self, parameter)
        self.dictionary.AddOrUpdate({'StuName':'Ajeet', 'StuAge': 30, 'StuCity': 'Agra'})
        self.assertEqual(self.dictionary.delete('StuName'), 'Ajeet')
        self.assertEqual(self.dictionary.get_dict(), {'StuAge': 30, 'StuCity': 'Agra'})

    def test_get_dict(self):
            # Test the function of obtaining dictionary data
            # Test function get_dict(self)
        self.dictionary.AddOrUpdate({'name': 'Ajeet', 'age': 30})
        self.assertEqual(len(self.dictionary.get_dict()), 2)
 














