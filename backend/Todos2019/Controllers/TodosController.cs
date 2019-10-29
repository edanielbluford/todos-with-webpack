using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Todos2019.Controllers
{
    [Route("api/todos")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private static List<string> all = new List<string>()
        {
            "Remodel Bathroom",
            "Finish my laser app",
            "Do things with kids"
        };

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return all;
        }


        [HttpPost]
        public ActionResult<bool> Post([FromBody] string todo)
        {
            all.Add(todo);
            return true;
        }
    }
}