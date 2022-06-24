# A quick-demo of Arithmetic operators Usage
import unittest,sys,os
#from ArithmeticOperation import Arithmetic_Operators
from p2p import Arithmetic_Operators
from datetime import date
today = date.today().strftime("%Y%m%d")


class Test_Addition(unittest.TestCase):

    def setUp(self):
        self.arithmetic_operators = Arithmetic_Operators()

    def test_addition(self):
        self.x = 30
        self.y = 20
        #Test the function of addition operators
        actual = self.arithmetic_operators.addition(self.x, self.y)
        self.assertEqual(actual, self.x + self.y)

    def test_subtraction(self):
        self.x = 30
        self.y = 20
        # Test the function of subtraction operators
        actual = self.arithmetic_operators.subtraction(self.x, self.y)
        self.assertEqual(actual, self.x - self.y)

    def test_multiplication(self):
        self.x = 30
        self.y = 20
        # Test the function of multiplication operators
        actual = self.arithmetic_operators.multiplication(self.x, self.y)
        self.assertEqual(actual, self.x * self.y)

    def test_division(self):
        self.x = 30
        self.y = 20
        # Test the function of division operators
        actual = self.arithmetic_operators.division(self.x, self.y)
        self.assertEqual(actual, self.x / self.y)

    def test_modulus(self):
        self.x = 30
        self.y = 20
        # Test the function of modulus operators
        actual = self.arithmetic_operators.modulus(self.x, self.y)
        self.assertEqual(actual, self.x // self.y)

    def test_exponent(self):
        self.x = 30
        self.y = 20
        # Test the function of exponent operators
        actual = self.arithmetic_operators.exponent(self.x, self.y)
        self.assertEqual(actual, self.x ** self.y)
    

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
    # completeName = os.path.join(save_path1, 'p2.result')
    completeName = os.path.join(save_path1,'@Python_CWP_basic@p2@' +today + ".result")
  
    with open(completeName, 'w') as f:
        main(f)
