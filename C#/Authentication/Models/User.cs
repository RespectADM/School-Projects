using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lesson7HandsOn.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }

        [ForeignKey("PlaylistId")]
        public Playlist PlaylistName { get; set; }
    }
}

