using System;

namespace lesson8Handson
{
    public interface Animal
    {
        void eat();
    }
    public interface Mammal: Animal
    {   
        void speak();

        void run();

    }
    public class Dog: Mammal
    {
        public void speak()
        {
            Console.WriteLine("Bark!");
        }

        public void run()
        {
            Console.WriteLine("Dogs can run at a top speed of 45 mph!");
        }

        public void eat()
        {
            Console.WriteLine("Dogs eat bones.");
        }
    }
    public class Cat: Mammal
    {
        public void speak()
        {
            Console.WriteLine("Meow!");
        }

        public void run()
        {
            Console.WriteLine("Cats can run at a top speed of 30 mph!");
        }

        public void eat()
        {
            Console.WriteLine("Cats eat mice.");
        }
    }
    public class Cow: Mammal, Animal
    {

        public void speak()
        {
            Console.WriteLine("Moo!");
        }

        public void run()
        {
            Console.WriteLine("Cows can run at a top speed of 25 mph!");
        }

        public void eat()
        {
            Console.WriteLine("Cows eat grass.");
        }
    }
    
    class Program
    {
        static void Main(string[] args)
        {
            
            Dog Lou = new Dog();
            Cat Aby = new Cat();
            Cow Bessy = new Cow();
            Lou.speak();
            Lou.run();
            Lou.eat();           
            Console.WriteLine("----------");
            Aby.speak();
            Aby.run();
            Aby.eat();
            Console.WriteLine("----------");
            Bessy.speak();
            Bessy.run();
            Bessy.eat();

            
        }
    }
}
