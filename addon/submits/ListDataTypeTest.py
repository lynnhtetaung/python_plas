import unittest, sys, os
#from ListDataType import List
from p10p import List
from datetime import date
today = date.today().strftime("%Y%m%d")

class ListTestCases(unittest.TestCase):
    def setUp(self):
        self.list = List()

    def test_delist(self):
        # Test the function of deleting list data
        # Test function delist(self)
        self.list.enlist(5) # enlist function to add data

        self.assertEqual(self.list.delist(), 5)
        self.assertEqual(self.list.get_size(), 0)
        self.assertEqual(self.list.delist(), False)

    def test_get_list(self):
        # Test the function of obtaining list data
        # Test function get_list(self)
        self.list.enlist(4)
        self.assertEqual(len(self.list.get_list()), 1)

    def test_get_size(self):
        # Test the function of obtaining the length of the list
        # Test function get_size(self)
        self.list = List([4, 10, 3])
        self.assertEqual(self.list.get_size(), 3)

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
    # completeName = os.path.join(save_path1, 'p10.result')
    completeName = os.path.join(save_path1,'@Python_CWP_basic@p10@' +today + ".result")

    with open(completeName, 'w') as f:
        main(f)