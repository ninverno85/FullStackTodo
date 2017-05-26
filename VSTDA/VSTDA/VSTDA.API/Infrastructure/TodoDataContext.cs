using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using VSTDA.API.Models;

namespace VSTDA.API.Infrastructure
{
    public class TodoDataContext : DbContext
    {
        public TodoDataContext() : base("VSTDA")
        {

        }

        public IDbSet<Todo> Todoes { get; set; }

    }
}