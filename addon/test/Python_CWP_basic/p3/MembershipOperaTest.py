# A quick-demo of Membership operators Usage

import unittest,os, sys
from MembershipOpera import Membership_Operators


class Test_demoMembership1(unittest.TestCase):
    def setUp(self):
        self.membership_operators = Membership_Operators()
        self.str1 = "H"
        self.str2 = "HelloWorld"
        self.str3 = "HelloWorld!"

    def test_demo_membership1(self):
        #Test for demo_membership (str 1 is included in str2)
        actual = self.membership_operators.demo_membership1(self.str1, self.str2)
        self.assertTrue(actual, True)

    def test_demo_membership2(self):
        # Test for demo_membership (str 2 is included in str3)
        actual = self.membership_operators.demo_membership2(self.str2, self.str3)
        self.assertTrue(actual, True)

    # add false condition
    def test_demo_membership3(self):
        # Test for demo_membership (str 3 is not included in str2)
        actual = self.membership_operators.demo_membership3(self.str3, self.str2)
        self.assertTrue(actual, False)

