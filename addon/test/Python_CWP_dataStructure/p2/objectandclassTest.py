import unittest
import objectandclass,sys,os


# accessing object information
class Test_access_obj(unittest.TestCase):
    def test_access_obj(self):
        actual = objectandclass.access_obj("Ram", 6)
        self.assertEqual(actual, "Height of Ram is 6")

    def test_access_obj1(self):
        actual = objectandclass.access_obj1("Ram", 60)
        self.assertEqual(actual, "Weight of Ram is 60")

    def test_access_obj2(self):
        actual = objectandclass.ram.eating("Pizza")
        self.assertEqual(actual, "Ram is eating Pizza")

    def test_access_obj3(self):
        actual = objectandclass.access_obj3("Steve", 7)
        self.assertEqual(actual, "Height of Steve is 7")

    def test_access_obj4(self):
        actual = objectandclass.access_obj4("Steve", 56.3)
        self.assertEqual(actual, "Weight of Steve is 56.3")

    def test_access_obj5(self):
        actual = objectandclass.steve.eating("Big Kahuna Burger")
        self.assertEqual(actual, "Steve is eating Big Kahuna Burger")


