# A demo of Tuple Usage
import unittest, os, sys
#from TupleUsage import Tuple
from p8p import Tuple
from datetime import date
today = date.today().strftime("%Y%m%d")


class TupleTestCases(unittest.TestCase):
    def setUp(self):
        self.tuple = Tuple()

    def test_connect(self):
        # Test the function of connecting two tuples
        # Test function connect(self, parameter, parameter)
        self.tuple1 = (1, 2)
        self.tuple2 = (99, 'Kelvin')
        self.assertEqual(self.tuple.connect(self.tuple1, self.tuple2), (1, 2, 99, 'Kelvin'))

    def test_get_tuple(self):
        # Test the function of obtaining tuple data
        # Test function get_tuple(self)
        self.tuple = Tuple((1, 2, 99, 'Kevin'))
        self.assertEqual(len(self.tuple.get_tuple()), 4)

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
    # completeName = os.path.join(save_path1, 'p8.result')
    completeName = os.path.join(save_path1,'@Python_CWP_basic@p8@' +today + ".result")

    with open(completeName, 'w') as f:
        main(f)
