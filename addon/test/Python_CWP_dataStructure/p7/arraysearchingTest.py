import unittest
import arraysearching,os,sys


class Test_using_index1(unittest.TestCase):
    def test_using_index1(self):
        #The index of 1st occurrence of 2 is"
        actual = arraysearching.using_index1(2, [1, 2, 3, 1, 2, 5])
        self.assertEqual(actual, 1)

    def test_using_index2(self):
        #The index of 1st occurrence of 1
        actual = arraysearching.using_index2(1, [1, 2, 3, 1, 2, 5])
        self.assertEqual(actual, 0)
    
    



