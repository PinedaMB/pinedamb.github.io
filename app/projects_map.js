const projects_map = [
    {
        name: "Capacítate en Género",
        description: {
            "es": "Plataforma web de cursos online impartido por el Instituto Quintanarroense de la Mujer (ahora SEMUJERES).",
            "en": "Online platform for courses taught by the Instituto Quintanarroense de la Mujer (now SEMUJERES).",
        },
        finished: true,
        folder: "ceg",
        link: "https://capacitateengenero.semujeres.qroo.gob.mx",
        modal: {
            images: [
                "/projects/ceg/view_1.png",
                "/projects/ceg/view_2.png",
                "/projects/ceg/view_3.png",
            ],
            title: "Proyecto Capacítate en Género",
            description: {
                "es": "Esta plataforma fue desarrollada para el Instituto Quintanarroense de la Mujer (ahora SEMUJERES) del estado de Quintana Roo. En la plataforma se pueden encontrar cursos online de capacitación para la equidad de género y diversidad sexual.",
                "en": "This platform was developed for the Instituto Quintanarroense de la Mujer (now SEMUJERES) of the state of Quintana Roo. On the platform you can find online courses for gender equity and sexual diversity training.",
            },
            problem: {
                "es": "El instituto realizaba diversos cursos en formato presencial, por lo que dichos cursos eran repetidos año tras año y en diveras fechas, lo cual dificultaba la organización y la participación de los asistentes.",
                "en": "The institute carried out various courses in a face-to-face format, so that these courses were repeated year after year and on different dates, which made it difficult to organize and the participation of the attendees.",
            },
            solution: {
                "es": "Se desarrolló una plataforma web que permite a los usuarios inscribirse a los cursos online, de forma que se puedan organizar de manera más eficiente y se pueda acceder a los cursos desde cualquier lugar. Los capacitadores pueden administrar los cursos, administrar el material del curso y los asistentes pueden inscribirse a los cursos desde la plataforma.",
                "en": "A web platform was developed that allows users to register for online courses, so that they can be organized in a more efficient way and access the courses from anywhere. The instructors can manage the courses, manage the course material and the students can register for the courses from the platform.",
            },
            tecnologies: [
                {
                    name: "PHP",
                    icon: "devicon-php-plain colored",
                },
                {
                    name: "jQuery",
                    icon: "devicon-jquery-plain colored",
                },
                {
                    name: "Bootstrap",
                    icon: "devicon-bootstrap-plain colored",
                },
                {
                    name: "MySQL",
                    icon: "devicon-mysql-plain colored",
                },
                {
                    name: "Codeigniter 4",
                    icon: "devicon-codeigniter-plain colored",
                },
            ]
        }
    },
]

export default projects_map;