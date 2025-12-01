import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  projects: Project[] = [
    {
      title: 'RR NUEVA NATURALEZA(SOFTWARE)',
      description: `Software local de adquisición de datos y monitoreo, para la supervisión y gestión de un cultivo 
      acuapónico en la unidad productiva de la empresa Comercializadora Nueva Naturaleza de Madrid, Cundinamarca,
      capaz de visualizar, monitorear y controlar todos los parámetros del sistema acuapónico, mediante una aplicación
      local y un worker service(Servicio de segundo plano), así tambien la capacidad de realizar predicciones 
      y recomendar a la tomar decisiones basadas en modelos de inteligencia artificial.`,
      images: [
        { path: 'images/RRNUEVANATURALEZAS/Actuadores.png', alt: 'Actuadores' },
        { path: 'images/RRNUEVANATURALEZAS/Control.png', alt: 'Control' },
        { path: 'images/RRNUEVANATURALEZAS/Inicio.png', alt: 'Inicio' },
        { path: 'images/RRNUEVANATURALEZAS/Sensorica.png', alt: 'Sensorica' },
        { path: 'images/RRNUEVANATURALEZAS/Reportes.png', alt: 'Reportes' },
        { path: 'images/RRNUEVANATURALEZAS/Grafica.png', alt: 'Grafica' },
        { path: 'images/RRNUEVANATURALEZAS/Graficas.png', alt: 'Graficas' },
        { path: 'images/RRNUEVANATURALEZAS/Servicio.jpg', alt: 'Servicio' }
      ],
      tech: ['C#', 'Electron', 'ASP.NET', 'Angular', 'Worker Service', 'SQL Server', 'SCRUM', 'HTML', 'CSS', 'TS'],
      github: 'https://github.com/carlosandresramos/RR_Nueva_Naturaleza_Frontend_Angular',
      githubBackend: 'https://github.com/carlosandresramos/RR_Nueva_Naturaleza_Frontend_Angular',
    },

    {
      title: 'RR NUEVA NATURALEZA(HARDWARE)',
      description: `Sistema electrónico que permita integrar, gestionar y controlar de forma
      básica y precisa todos los componentes del sistema acuapónico (actuadores, sensores, comunicaciones)
      a través de la adquisición de datos en función de la actualización de los datos del agua y las 
      condiciones ambientales para el empresa COMERCIALIZADORA NUEVA NATURALEZA.`,
      images: [
        { path: 'images/RRNUEVANATURALEZAH/PECES.jpg', alt: 'Peces' },
        { path: 'images/RRNUEVANATURALEZAH/MTU.jpg', alt: 'Mtu' },
        { path: 'images/RRNUEVANATURALEZAH/RTU.jpg', alt: 'Rtu' },
        { path: 'images/RRNUEVANATURALEZAH/SENSORES.jpg', alt: 'Sensores' },
        { path: 'images/RRNUEVANATURALEZAH/TANQUES.jpg', alt: 'Tanques' },
        { path: 'images/RRNUEVANATURALEZAH/JSON.jpg', alt: 'Json' }
      ],
      tech: ['Arduino', 'C', 'ATmega328', 'ATmega2560 ', 'JSON', 'RS485', 'Actuadores', 'Sensores'],
      github: '',
      githubBackend: '',
    },

    {
      title: 'RRSCONTROLLER',
      description: `RRSCONTROLLER es una aplicación web diseñada para gestionar y
       administrar los envíos de alimentos de la PAE a diversas instituciones. Permite 
       controlar la base de datos de alimentos, administrar los menús de cada envío y recibir 
       notificaciones de recepción.`,
      images: [
        { path: 'images/RRSCONTROLLER/Login.png', alt: 'Login' },
        { path: 'images/RRSCONTROLLER/MenúManager.png', alt: 'Menú' },
        { path: 'images/RRSCONTROLLER/Reportes.png', alt: 'Reportes' },
        { path: 'images/RRSCONTROLLER/RegistrarUsuario.png', alt: 'Usuario' },
        { path: 'images/RRSCONTROLLER/RegistrarMenú.png', alt: 'Menu' },
        { path: 'images/RRSCONTROLLER/InfoMenu.png', alt: 'Informacion' },
      ],
      tech: ['.NET Core', 'C#', 'SQL Server', 'Bootstrap', 'HTML', 'CSS'],
      github: '',
      githubBackend: '',
    },

     {
      title: 'RRSEASYPARK',
      description: `RRSEASYPARK es un sistema de estacionamiento y gestión de parqueaderos 
      publicos que permite a los usuarios, incluidos los discapacitados, localizar y reservar
      espacios con anticipación. Proporciona información en tiempo real sobre la disponibilidad
      de espacios, optimizando su uso y reduciendo el estrés.`,
      images: [
        { path: 'images/RRSEASYPARK/BuscarParqueadero.png', alt: 'Parqueadero' },
        { path: 'images/RRSEASYPARK/CambiarDatos.png', alt: 'Datos' },
        { path: 'images/RRSEASYPARK/EditarParqueadero.png', alt: 'Editar' },
        { path: 'images/RRSEASYPARK/Home.png', alt: 'Inicio' },
        { path: 'images/RRSEASYPARK/Nosotros.png', alt: 'Nosotros' },
        { path: 'images/RRSEASYPARK/IniciarSesion.png', alt: 'Sesion' },
        { path: 'images/RRSEASYPARK/ParqueaderosDisponibles.png', alt: 'Disponibles' },
      ],
      tech: ['Angular', '.NET', 'TypeScript', 'Azure', 'Postman', 'Swagger', 'Jira', 'SQLServer', 'SCRUM'],
      github: 'https://github.com/carlosandresramos/RRSEASYPARKFRONT',
      githubBackend: 'https://github.com/carlosandresramos/RRSEASYPARK'
    },

    {
      title: 'GraphCVE',
      description: `Proyecto de ciencia de datos a partir de APIs que genera gráficas de los CVEs 
      encontrados en los software de múltiples computadoras. Ofrece un enfoque integral para monitorear 
      y análizar la seguridad informática, además poder tener visualizaciones claras de las 
      vulnerabilidades para facilitar la toma de decisiones y la priorización de tareas de mantenimiento.`,
      images: [
        { path: 'images/Dashboard/CVEsMásComunes.png', alt: 'Comunes' },
        { path: 'images/Dashboard/CVEsMasCriticos.png', alt: 'Criticos' },
        { path: 'images/Dashboard/Dashboard.png', alt: 'Dashboard' },
        { path: 'images/Dashboard/MaquinasMasVulnerables.png', alt: 'Maquinas' }
      ],
      tech: ['Python', 'Flask', 'MongoDB', 'Jupyter'],
    }


  ];

  getProjects() {
    return this.projects;
  }
  
}
