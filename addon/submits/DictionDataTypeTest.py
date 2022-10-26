# A quick-demo of Dictionary Usage

import unittest, sys, os
#from DictionDataType import Dictionary
from p11p import Dictionary
from datetime import date
today = date.today().strftime("%Y%m%d")

class Test_Dictionary(unittest.TestCase):
    def setUp(self):
        self.dictionary = Dictionary()

    def test_AddOrUpdate(self):
        # Test the function of adding and modifying data
        # Test function AddOrUpdate(self, parameter)
        # dict.update(dict_2) Adds dictionary dict2's key-values pairs to dict)
        self.dictionary.AddOrUpdate({'StuName': 'Ajeet', 'StuAge': 30, 'StuCity': 'Agra'})
        self.assertEqual(self.dictionary.get_dict(), {'StuName': 'Ajeet', 'StuAge': 30, 'StuCity': 'Agra'})

    def test_delete(self):
        # Test the function of deleting data
        # Test function delete(self, parameter)
        self.dictionary.AddOrUpdate({'StuName':'Ajeet', 'StuAge': 30, 'StuCity': 'Agra'})
        self.assertEqual(self.dictionary.delete('StuName'), 'Ajeet')
        self.assertEqual(self.dictionary.get_dict(), {'StuAge': 30, 'StuCity': 'Agra'})

    def test_get_dict(self):
            # Test the function of obtaining dictionary data
            # Test function get_dict(self)
        self.dictionary.AddOrUpdate({'name': 'Ajeet', 'age': 30})
        self.assertEqual(len(self.dictionary.get_dict()), 2)
        
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
    # completeName = os.path.join(save_path1, 'p11.result')
    completeName = os.path.join(save_path1,'@Python_CWP_basic@p11@' +today + ".result")

    with open(completeName, 'w') as f:
        main(f)













