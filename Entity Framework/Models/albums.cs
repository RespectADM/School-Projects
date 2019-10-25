using System;
using System.Collections.Generic;

namespace ScaffoldExistingExample.Models
{
    public partial class albums
    {
        public long AlbumId { get; set; }
        public string Title { get; set; }
        public long ArtistId { get; set; }
    }
}
