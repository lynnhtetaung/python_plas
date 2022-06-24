# A quick-demo of accessing strings

import unittest, sys,os
from accessingString import Accessing_String


class display_Test(unittest.TestCase):

    def setUp(self):
        self.accString = Accessing_String()
        self.str = 'Kevin'

    def test_display1(self):
        actual = self.accString.access_string1(0, self.str)
        self.assertEqual(actual, 'K')

    def test_display2(self):
        actual = self.accString.access_string2(2, self.str)
        self.assertEqual(actual, 'v')

    def test_display3(self):
        actual = self.accString.access_string3(-1, self.str)
        self.assertEqual(actual, 'n')

    def test_display4(self):
        actual = self.accString.access_string4(-2, self.str)
        self.assertEqual(actual, 'i')

  