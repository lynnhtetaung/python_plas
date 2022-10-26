# A quick-demo of accessing strings

import unittest, sys,os
#from accessingString import Accessing_String
from p6p import Accessing_String
from datetime import date
today = date.today().strftime("%Y%m%d")


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
    # completeName = os.path.join(save_path1, 'p6.result')
    completeName = os.path.join(save_path1,'@Python_CWP_basic@p6@' +today + ".result")

    
    with open(completeName, 'w') as f:
        main(f)