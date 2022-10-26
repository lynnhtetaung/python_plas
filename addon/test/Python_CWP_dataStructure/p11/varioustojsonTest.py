import unittest
from unittest import TestCase
import varioustojson,os,sys


class conversion_Dict_to_Array(TestCase):
    # dict conversion to Array
    def test_conversion_Dict_to_Array(self):
        actual = varioustojson.conversion_Dict_to_Array({"age": 15, "name": "Marry"})
        self.assertEqual(actual, '{"age": 15, "name": "Marry"}')

    # list conversion to Array
    def test_conversion_List_to_array(self):
        actual = varioustojson.conversion_List_to_Array(["orange", "pineapple"])
        self.assertEqual(actual, '["orange", "pineapple"]')

    # tuple conversion to Array
    def test_conversion_tuple_to_array(self):
        actual = varioustojson.conversion_Tuple_to_Array(("watermelon", "bananas"))
        self.assertEqual(actual, '["watermelon", "bananas"]')

    # string conversion to String
    def test_conversion_string_to_string(self):
        actual = varioustojson.conversion_String_to_String("Welcome")
        self.assertEqual(actual, '"Welcome"')

    # int conversion to Number
    def test_conversion_int_to_number(self):
        actual = varioustojson.conversion_Int_to_Number(72)
        self.assertEqual(actual, '72')

    # float conversion to Number
    def test_conversion_float_to_number(self):
        actual = varioustojson.conversion_Float_to_Number(40.12)
        self.assertEqual(actual, '40.12')

    # Boolean conversion to their respective values
    def test_conversion_bool1(self):
        actual = varioustojson.conversion_Bool1(True)
        self.assertEqual(actual, 'true')

    # Boolean conversion to their respective values
    def test_conversion_bool2(self):
        actual = varioustojson.conversion_Bool2(False)
        self.assertEqual(actual, 'false')

    # None value to null
    def test_conversion_none_value(self):
        actual = varioustojson.conversion_none_value(None)
        self.assertEqual(actual, 'null')



