namespace todoapi.Models
{
    public class TodoItem
    {
        public long id { get; set; }
        public string ItemName { get; set; }
        public bool Iscomplete { get; set; }
    }
}