import unittest, os, sys
#from concatString import Concatenation
from p7p import Concatenation
from datetime import date
today = date.today().strftime("%Y%m%d")

class SumTest(unittest.TestCase):
    def setUp(self):
        self.concatenation = Concatenation()
        # Arrange
        self.a = "Hello"
        self.b = "World"
        self.c = "!"

    def test_concatString(self):
        #test for concat two strings
        result_test = self.concatenation.concatString1(self.a, self.b)
        #self.assertEqual(result_test, self.a + self.b)
        self.assertEqual(result_test, "HelloWorld")

    def test_concatString2(self):
        # test for concat three strings
        result_test = self.concatenation.concatString2(self.a, self.b, self.c)
        # self.assertEqual(result_test, self.a + self.b + self.c)
        self.assertEqual(result_test, "HelloWorld!")

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
    # completeName = os.path.join(save_path1, 'p7.result')
    completeName = os.path.join(save_path1,'@Python_CWP_basic@p7@' +today + ".result")

    with open(completeName, 'w') as f:
        main(f)