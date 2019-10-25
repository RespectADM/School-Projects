using System;
using ProgramA = myNamespace;
using ProgramB = unique;

namespace lesson6HandsOn
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            ProgramA.AnotherProgram.printText();
            ProgramB.UniqueProgram.printOtherText();

        }
    }
}
