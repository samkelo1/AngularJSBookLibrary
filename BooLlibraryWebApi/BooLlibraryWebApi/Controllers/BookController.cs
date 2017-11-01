using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace BooLlibraryWebApi.Controllers
{
    public class BookController : ApiController
    {
        // GET: /Books/  

        public ActionResult Index()
        {
            return View();
        }

        private ActionResult View()
        {
            throw new NotImplementedException();
        }
    }
}
