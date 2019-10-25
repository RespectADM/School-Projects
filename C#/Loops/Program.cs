using System;

namespace lesson3HandsOn
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] names = new string[] {"Emily", "Harry", "Rupert", "Clara", "Lily", "Michael"};
            for(int i = 0; i < names.Length; i++)
            {
                Console.WriteLine("Have you seen " + names[i]);
            }
            for(int idx = names.Length; idx >= 0; idx--)
            {
                Console.WriteLine("Have you seen " + names[idx]);
            }
        }
    }
}
