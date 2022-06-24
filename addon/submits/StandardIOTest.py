# A quick-demo of standard input/output Usage from user
import unittest, os, sys
#from StandardIO import StandardIO_Usage
from p1p import StandardIO_Usage
from datetime import date
today = date.today().strftime("%Y%m%d")

class SumTest(unittest.TestCase):
    def setUp(self):
        self.standardIO_usage = StandardIO_Usage()

    def test_Add_Str(self):
        # Test the function of adding string data
        # Test function Add(self)
        self.standardIO_usage.Add("Google")
        self.assertEqual(self.standardIO_usage.get_set(),{'Google'})

    def test_Add_Int(self):
        # Test the function of adding int data
        # Test function Add(self)
        self.standardIO_usage.Add(1)
        self.assertEqual(self.standardIO_usage.get_set(),{1})

    def test_Add_Float(self):
        # Test the function of adding float data
        # Test function Add(self)
        self.standardIO_usage.Add(1.23)
        self.assertEqual(self.standardIO_usage.get_set(),{1.23})
        
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
    # completeName = os.path.join(save_path1, 'p1.result')
    completeName = os.path.join(save_path1,'@Python_CWP_basic@p1@' +today + ".result")

    with open(completeName, 'w') as f:
        main(f)


