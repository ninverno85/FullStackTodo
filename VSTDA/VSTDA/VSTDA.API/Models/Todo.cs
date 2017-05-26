using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace VSTDA.API.Models
{
    public class Todo
    {
        //Primary Key
        [Key]
        public int TodoesId { get; set; }


        //Columns
        public String TodoInput { get; set; }
        public int PriorityLevel { get; set; }
        public DateTime CreationDate { get; set; }
    }
}