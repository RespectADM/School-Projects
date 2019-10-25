using System;

namespace lesson5HandsOn
{
    public class Person
    {
        string firstName;
        string lastName;
        int age;

        public string FirstName
        {
            get
            {
                return firstName;
            }
            set
            {
                firstName = value;
            }
        }

        public string LastName
        {
            get
            {
                return lastName;
            }

            set
            {
                lastName = value;
            }
        }

        public int Age
        {
            get
            {
                return age;
            }
            set
            {
                if (value < 0)
                {
                    Console.WriteLine("Invalid age, use 0");
                    age = 0;
                }
                else
                {
                    age = value;
                }
            }
        }

        public Person()
        {
            firstName = "";
            lastName = "";
            age = 0;
        }

        public Person(string personFirstName, string personLastName, int personAge)
        {
            firstName = personFirstName;
            lastName = personLastName;
            age = personAge;

            if (age < 0)
            {
                Console.WriteLine("Invalid age, use 0");
                age = 0;
            }
            Console.WriteLine(firstName + " " + lastName + " is " + age + " years old.");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Person person1 = new Person();
            Person person2 = new Person();

            person1.FirstName = "Austin";
            person1.LastName = "Manansala";
            person1.Age = 23;

            person2.FirstName = "Josh";
            person2.LastName = "Hess";
            person2.Age = 21;

            Console.WriteLine(person1.FirstName + " " + person1.LastName + " is " + person1.Age + " years old.");
            Console.WriteLine(person2.FirstName + " " + person2.LastName + " is " + person2.Age + " years old.");

            Person person3 = new Person("Gabby", "Hess", -18);
            Person person4 = new Person("Chelsey", "Manansala", 19);


        }
    }
}
