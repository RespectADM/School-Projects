using System;

namespace lesson4HandsOn
{
    class Program
    {
        static void Main(string[] args)
        {
           
           Console.WriteLine("Doubled: " + DoubleMe(6));
           Console.WriteLine("Quadrupled: " + QuadrupleMe(4));
           Console.WriteLine("Doubled many times: " + DoubleNumberMultipleTimes(2, 3));
    

        }

        public static int DoubleMe(int num1)
        {
            return(num1 * 2);
        }

        public static int QuadrupleMe(int num2)
        {
            return DoubleMe(DoubleMe(num2));

        }

        public static int DoubleNumberMultipleTimes(int num4, int num5)
        {
            for (int i = 0; i <= num5; i++)
            {
               num4 = DoubleMe(num4);
            }

            return num4;
        }


    }
}
