# A quick-demo of Arithmetic operators Usage
import unittest,sys,os
from ArithmeticOperation import Arithmetic_Operators


class Test_Addition(unittest.TestCase):

    def setUp(self):
        self.arithmetic_operators = Arithmetic_Operators()

    def test_addition(self):
        self.x = 30
        self.y = 20
        #Test the function of addition operators
        actual = self.arithmetic_operators.addition(self.x, self.y)
        self.assertEqual(actual, self.x + self.y)

    def test_subtraction(self):
        self.x = 30
        self.y = 20
        # Test the function of subtraction operators
        actual = self.arithmetic_operators.subtraction(self.x, self.y)
        self.assertEqual(actual, self.x - self.y)

    def test_multiplication(self):
        self.x = 30
        self.y = 20
        # Test the function of multiplication operators
        actual = self.arithmetic_operators.multiplication(self.x, self.y)
        self.assertEqual(actual, self.x * self.y)

    def test_division(self):
        self.x = 30
        self.y = 20
        # Test the function of division operators
        actual = self.arithmetic_operators.division(self.x, self.y)
        self.assertEqual(actual, self.x / self.y)

    def test_modulus(self):
        self.x = 30
        self.y = 20
        # Test the function of modulus operators
        actual = self.arithmetic_operators.modulus(self.x, self.y)
        self.assertEqual(actual, self.x // self.y)

    def test_exponent(self):
        self.x = 30
        self.y = 20
        # Test the function of exponent operators
        actual = self.arithmetic_operators.exponent(self.x, self.y)
        self.assertEqual(actual, self.x ** self.y)
    

