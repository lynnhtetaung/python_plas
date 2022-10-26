import unittest
import objCreationnoconstr

# prints attribute value
class Test_num(unittest.TestCase):
    def test_num(self):
        self.assertEqual(objCreationnoconstr.obj.num, 100)


# calling method hello()
class Test_call(unittest.TestCase):
    def test_call(self):
        self.assertEqual(objCreationnoconstr.obj.hello(), "Hello World!")


# prints attribute value
class Test_docstring(unittest.TestCase):
    def test_docstring(self):
        actual = objCreationnoconstr.docstring("This class demonstrates the creation of objects")
        self.assertEqual(actual, "This class demonstrates the creation of objects")


