''' A quick-demo of Data Type Usage '''

import unittest,sys, os
#from NumericDataType import Data_Type_Usage
from p4p import Data_Type_Usage
from datetime import date
today = date.today().strftime("%Y%m%d")


class Test_demoString(unittest.TestCase):
    def setUp(self):
        self.data_type_usage = Data_Type_Usage()

    def test_demo_string1type(self):
        # Test for demo_string1type function
        #Test for string data type
        actual = self.data_type_usage.demo_string1type("beginnersbook")
        self.assertEqual(actual, str)

    def test_demo_numeric1type(self):
        # Test for demo_numberic1type function
        # Test for numeric data type
        actual = self.data_type_usage.demo_numeric1type(100)
        self.assertEqual(actual, int)

    def test_demo_numeric2type(self):
        # Test for demo_numberic2type function
        # Test for float data type
        actual = self.data_type_usage.demo_numeric2type(34.45)
        self.assertEqual(actual, float)

    def test_demo_numeric3type(self):
        # Test for demo_numberic3type function
        # Test for complex data type
        actual = self.data_type_usage.demo_numeric3type(3 + 4j)
        self.assertEqual(actual, complex)
        

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
    # completeName = os.path.join(save_path1, 'p4.result')
    completeName = os.path.join(save_path1,'@Python_CWP_basic@p4@' +today + ".result")

    with open(completeName, 'w') as f:
        main(f)


