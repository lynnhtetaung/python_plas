# A quick-demo of Membership Test in Tuples
# in: Checks whether an element exists in the specified tuple.
# not in: Checks whether an element does not exist in the specified tuple.

import unittest, sys, os
#from MemberTuple import Membership
from p9p import Membership
from datetime import date
today = date.today().strftime("%Y%m%d")

class Test_demoMember(unittest.TestCase):
    def setUp(self):
        self.membership = Membership()
        self.member1 = (11)
        self.member2 = (11, 22, 33, 44, 55, 66)
        self.member3 = (2, 3, 5)

    def test_check_membership1(self):
        actual = self.membership.check_membership1(self.member1, self.member2)
        self.assertTrue(actual, True)

    def test_check_membership2(self):
        actual = self.membership.check_membership2(self.member1, self.member3)
        self.assertFalse(actual, True)

def main(out=sys.stderr, verbosity=2):
    loader = unittest.TestLoader()  
    suite = loader.loadTestsFromModule(sys.modules[__name__])
    unittest.TextTestRunner(out, verbosity=verbosity).run(suite)

if __name__ == '__main__':
    #path = os.getcwd()
    #completeName = os.path.join(path, 'p1.result')
    #with open(completeName, 'w') as f:
     #   main(f)
    
    save_path1 = 'addon/results'
    # completeName = os.path.join(save_path1, 'p9.result')
    completeName = os.path.join(save_path1,'@Python_CWP_basic@p9@' +today + ".result")

    with open(completeName, 'w') as f:
        main(f)
