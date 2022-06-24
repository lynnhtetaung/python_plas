import unittest, os, sys
from concatString import Concatenation


class SumTest(unittest.TestCase):
    def setUp(self):
        self.concatenation = Concatenation()
        # Arrange
        self.a = "Hello"
        self.b = "World"
        self.c = "!"

    def test_concatString(self):
        #test for concat two strings
        result_test = self.concatenation.concatString1(self.a, self.b)
        #self.assertEqual(result_test, self.a + self.b)
        self.assertEqual(result_test, "HelloWorld")

    def test_concatString2(self):
        # test for concat three strings
        result_test = self.concatenation.concatString2(self.a, self.b, self.c)
        # self.assertEqual(result_test, self.a + self.b + self.c)
        self.assertEqual(result_test, "HelloWorld!")

