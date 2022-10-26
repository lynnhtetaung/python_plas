# A quick-demo of standard input/output Usage from user
import unittest, os, sys
#from SetDataType import Set
from p12p import Set
from datetime import date
today = date.today().strftime("%Y%m%d")

class SumTest(unittest.TestCase):
    def setUp(self):
        self.set = Set()

    def test_Add(self):
        # Test the function of adding string data
        # Test function Add(self)
        self.set.Add("Google")
        self.assertEqual(self.set.get_set(),{'Google'})

    def test_get_set(self):
        # Test the function of obtaining set data
        # Test function get_set(self)
        self.set = Set({'orange', 'apple', 'pear', 'banana'})
        self.assertEqual(len(self.set.get_set()), 4)

    def test_get_size(self):
        # Test the function of obtaining the length of the set
        # Test function get_size(self)
        self.set = Set({1.0, "Hello", (1, 2, 3)})
        self.assertEqual(self.set.get_size(), 3)
        
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
    # completeName = os.path.join(save_path1, 'p12.result')
    completeName = os.path.join(save_path1,'@Python_CWP_basic@p12@' +today + ".result")

    with open(completeName, 'w') as f:
        main(f)







