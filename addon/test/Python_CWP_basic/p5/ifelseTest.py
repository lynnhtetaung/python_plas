# A quick-demo of If condition Usage

import unittest, os, sys
from ifelse import Condition


class Test_demoCondition(unittest.TestCase):
    def setUp(self):
        self.condition = Condition()

    def test_demo_condition(self):
        #Test for Positive Number
        actual = self.condition.demo_Condition(9)
        self.assertEqual(actual, "Positive number")

    def test_demo_condition1(self):
        # Test for Negative Number
        actual = self.condition.demo_Condition1(-9)
        self.assertEqual(actual, "Negative number")

    def test_demo_condition2(self):
        # Test for Zero Number
        actual = self.condition.demo_Condition2(0)
        self.assertEqual(actual, "Zero")
             


