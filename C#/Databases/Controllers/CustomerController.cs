using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using SqliteFromScratch;

namespace SqliteFromScratch.Controllers {
    [Route("api/[Controller]")]

    public class CustomerController : Controller {
        [HttpGet]

        public List<Customer> GetData()
        {
            List<Customer> customers = new List<Customer>();
            
            string dataSource = "Data Source=" + Path.GetFullPath("chinook.db");
            
            using(SqliteConnection conn = new SqliteConnection(dataSource)) {
                conn.Open();

                string sql = $"select * from customers limit 20;";

                using(SqliteCommand command = new SqliteCommand(sql, conn)) {
                    using(SqliteDataReader reader = command.ExecuteReader()) {
                        while (reader.Read()) 
                        {
                            Customer newCustomer = new Customer() {
                        Id = reader.GetInt32(0),
                        FirstName = reader.GetString(1),
                        LastName = reader.GetString(2),
                        Company = reader.GetString(3),
                        Address = reader.GetString(4),
                        City = reader.GetString(5),
                        State = reader.GetString(6),
                        Country = reader.GetString(7),
                        PostalCode = reader.GetString(8),
                        Phone = reader.GetString(9),
                        Fax = reader.GetString(10),
                        Email = reader.GetString(11),
                        SupportRepId = reader.GetInt32(12)
                        };

                        customers.Add(newCustomer);
                    }
                }

                conn.Close();
            }

            return customers;    
        }
      }
      


    }
}
