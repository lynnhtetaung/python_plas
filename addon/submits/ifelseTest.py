# A quick-demo of If condition Usage

import unittest, os, sys
#from ifelse import Condition
from p5p import Condition
from datetime import date
today = date.today().strftime("%Y%m%d")

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
    # completeName = os.path.join(save_path1, 'p5.result')
    completeName = os.path.join(save_path1,'@Python_CWP_basic@p5@' +today + ".result")
  
    with open(completeName, 'w') as f:
        main(f)

