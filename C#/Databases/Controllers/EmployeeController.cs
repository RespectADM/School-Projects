using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using SqliteFromScratch;

namespace SqliteFromScratch.Controllers {
    [Route("api/[Controller]")]

    public class EmployeeController : Controller {
        [HttpGet]

        public List<Employee> GetData()
        {
            List<Employee> employees = new List<Employee>();
            
            string dataSource = "Data Source=" + Path.GetFullPath("chinook.db");
            
            using(SqliteConnection conn = new SqliteConnection(dataSource)) {
                conn.Open();

                string sql = $"select * from employees where hiredate < 2003;";

                using(SqliteCommand command = new SqliteCommand(sql, conn)) {
                    using(SqliteDataReader reader = command.ExecuteReader()) {
                        while (reader.Read()) 
                        {
                            Employee newEmployee = new Employee() {
                        Id = reader.GetInt32(0),
                        FirstName = reader.GetString(1),
                        LastName = reader.GetString(2),
                        Title = reader.GetString(3),
                        ReportsTo = reader.GetInt32(4),
                        BirthDate = reader.GetInt32(5),
                        HireDate = reader.GetInt32(6),
                        Address = reader.GetString(7),
                        City = reader.GetString(8),
                        State = reader.GetString(9),
                        Country = reader.GetString(10),
                        PostalCode = reader.GetString(11),
                        Phone = reader.GetString(12),
                        Fax = reader.GetString(13),
                        Email = reader.GetString(14),
                        
                        };

                        employees.Add(newEmployee);
                    }
                }

                conn.Close();
            }

            return employees;    
        }
      }
      


    }
}
