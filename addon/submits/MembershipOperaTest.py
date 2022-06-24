# A quick-demo of Membership operators Usage

import unittest,os, sys
#from MembershipOpera import Membership_Operators
from p3p import Membership_Operators
from datetime import date
today = date.today().strftime("%Y%m%d")


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


def main(out=sys.stderr, verbosity=2):
    loader = unittest.TestLoader()  
    suite = loader.loadTestsFromModule(sys.modules[__name__])
    unittest.TextTestRunner(out, verbosity=verbosity).run(suite)

if __name__ == '__main__':
    #path = os.getcwd()
    #completeName = os.path.join(path, 'p1.result')
    #with open(completeName, 'w') as f:
     #   main(f)
    
    save_path1 = '/Users/soethandara/Desktop/PLAS_Node/Docker/NPLAS-All/addon/results'
    # completeName = os.path.join(save_path1, 'p3.result')
    completeName = os.path.join(save_path1,'@Python_CWP_basic@p3@' +today + ".result")

    with open(completeName, 'w') as f:
        main(f)