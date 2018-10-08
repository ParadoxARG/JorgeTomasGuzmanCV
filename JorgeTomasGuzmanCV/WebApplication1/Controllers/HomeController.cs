﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Conocimientos()
        {
            return View();
        }

        public IActionResult CursosCertificaciones()
        {
            return View();
        }

        public IActionResult ExperienciaLaboral()
        {
            return View();
        }
        public IActionResult Idiomas()
        {
            return View();
        }
        public IActionResult FormacionAcademica()
        {
            return View();
        }
        public IActionResult Contacto()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
