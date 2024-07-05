internal class Program
{
    private static void Main(string[] args)
    {
        while (true)
        {
            global::System.Object value = Console.WriteLine("Who is a real pilot?");
            string pilot = Console.ReadLine();
            if (pilot == "vadim")
            {
                Console.WriteLine("He is a great guy with big dick, but he is not a pilot.");

            }
            else if (pilot == "y")
            {
                Console.WriteLine("That is right! he is a pilot. But what is his penis size?");
                while (true)
                {

                    int size = int.Parse(Console.ReadLine());
                    if (size >= 4)
                    {
                        Console.WriteLine("No, its smaller! Try again!");

                    }
                    else
                    {
                        Console.WriteLine("yes its about 2 or 3santim!");

                    }

                }

            }
            else
            {
                Console.WriteLine("I eve dont know him");
            }
        }
    }
}