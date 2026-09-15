-- Datos iniciales del plantel institucional.
-- Valores validos:
-- docente.grado_academico: Lic., M. Sc., Ph. D.
-- docente.tipo: Titular, Interino
-- auxiliar.tipo: academico, investigacion, interaccion social

INSERT INTO public.docente
    (id, nombre, grado_academico, tipo, resumen_cv, correo_institucional, cargo_autoridad, imagen)
VALUES
    (1, 'Juan Carlos Flores Lopez', 'Ph. D.', 'Titular', 'Docente titular con experiencia en estadistica y formacion universitaria.', 'jcflores@fcpn.edu.bo', NULL, '/'),
    (2, 'Ramiro Coa Clemente', 'M. Sc.', 'Interino', 'Docente con experiencia en estadistica aplicada y docencia universitaria.', 'rcoa@fcpn.edu.bo', NULL, '/'),
    (3, 'Nicolas Chavez Quisbert', 'M. Sc.', 'Interino', 'Docente con experiencia en estadistica y participacion academica institucional.', 'nchaves@fcpn.edu.bo', NULL, '/'),
    (4, 'Raul Leon Delgado Alvarez', 'Lic.', 'Interino', 'Docente de la Carrera de Estadistica.', NULL, NULL, '/'),
    (5, 'Nilda Gloria Flores Salinas', 'Lic.', 'Interino', 'Docente con experiencia en formacion estadistica.', 'nildafloress@hotmail.com', NULL, '/'),
    (6, 'Maria de los Angeles Ramos Boutier', 'Lic.', 'Interino', 'Docente de la Carrera de Estadistica.', NULL, NULL, '/'),
    (7, 'Jaime Tito Pinto Ajhuacho', 'Lic.', 'Interino', 'Docente con experiencia en formacion estadistica.', 'jtito@fcpn.edu.bo', NULL, '/'),
    (8, 'Fernando Oday Rivero Suguiura', 'M. Sc.', 'Interino', 'Docente con experiencia en estadistica y participacion academica institucional.', 'friverosuguiura2004@gmail.com', NULL, '/'),
    (9, 'Lucy Gabriela Cuarita Ajno', 'M. Sc.', 'Interino', 'Docente con experiencia en estadistica aplicada.', 'lcuarita@fcpn.edu.bo', NULL, '/'),
    (10, 'Dindo Valdez Blanco', 'M. Sc.', 'Interino', 'Docente con experiencia en estadistica aplicada.', 'dvaldez@fcpn.edu.bo', NULL, '/'),
    (11, 'Emma Martha Mancilla Flores', 'Lic.', 'Interino', 'Docente de la Carrera de Estadistica.', NULL, NULL, '/'),
    (12, 'Marisol Paredes Alarcon', 'Lic.', 'Interino', 'Docente con experiencia en formacion estadistica.', 'mparedes@fcpn.edu.bo', NULL, '/'),
    (13, 'Ivan Yony Aliaga Caceres', 'M. Sc.', 'Interino', 'Docente con experiencia en estadistica aplicada.', NULL, NULL, '/'),
    (14, 'Mario Amilcar Miranda Gonzales', 'Lic.', 'Interino', 'Docente de la Carrera de Estadistica.', NULL, NULL, '/'),
    (15, 'Alvaro Limber Chirino Gutierrez', 'M. Sc.', 'Interino', 'Docente con experiencia en estadistica aplicada.', NULL, NULL, '/'),
    (16, 'Leticia Mendoza Gomez', 'Lic.', 'Interino', 'Docente de la Carrera de Estadistica.', NULL, NULL, '/'),
    (17, 'Benito Oscar Sinani Beltran', 'Lic.', 'Interino', 'Docente de la Carrera de Estadistica.', NULL, NULL, '/'),
    (18, 'Juan Chapi Mamani', 'Lic.', 'Interino', 'Docente de la Carrera de Estadistica.', NULL, NULL, '/'),
    (19, 'Veronica Cuenca Ramallo', 'M. Sc.', 'Interino', 'Docente con experiencia en estadistica aplicada.', NULL, NULL, '/'),
    (20, 'Maria Isabel Conde Altamirano', 'M. Sc.', 'Interino', 'Docente con experiencia en estadistica aplicada.', NULL, NULL, '/'),
    (21, 'Yomar Andoni Machaca Beltran', 'Lic.', 'Interino', 'Docente de la Carrera de Estadistica.', NULL, NULL, '/'),
    (22, 'Fernando Espinoza Centella', 'Lic.', 'Interino', 'Docente de Ingles I en la Carrera de Estadistica.', NULL, NULL, '/'),
    (23, 'Javier Taborga Manrique', 'Lic.', 'Interino', 'Docente de Ingles II en la Carrera de Estadistica.', NULL, NULL, '/');

INSERT INTO public.administrativo
    (id, nombre, cargo, correo_institucional, imagen)
VALUES
    (1, 'Silvia Aranibar Silva', 'Secretaria Ejecutiva', NULL, '/'),
    (2, 'Alfredo Candia Chambi', 'Operador de Computacion', NULL, '/'),
    (3, 'Mario Alberto Clavel Salcedo', 'Mensajero', NULL, '/'),
    (4, 'Emilia Lidia Daza Mendoza', 'Auxiliar de Biblioteca', NULL, '/'),
    (5, 'Rene Quelca Suntura', 'Kardista Academico', NULL, '/'),
    (6, 'Yomar Erika Michel Valle', 'Tecnico de Registro', NULL, '/'),
    (7, 'Oscar Ramiro Rodriguez Lliulli', 'Oficinista', NULL, '/'),
    (8, 'Lidia Mamani Mayta', 'Portero Mensajero', NULL, '/'),
    (9, 'Ana Maria Panca Perez', 'Secretaria IETA', NULL, '/');

INSERT INTO public.auxiliar
    (id, nombre, tipo, imagen, materia, paralelo, dias_auxiliatura, horario_auxiliatura, aula)
VALUES
    (1, 'Richard Daniel Mancilla Mamani', 'academico', '/', 'Probabilidad I - Estadistica I', 'A', 'Lunes', '12:00 - 14:00', 'P2-A2'),
    (2, 'Gabriel Yujra Machaca', 'academico', '/', 'Inv. Operativa I', 'A', 'Lunes', '12:00 - 14:00', 'P2-A2'),
    (3, 'Marcelo Sebastian Tudela Toro', 'academico', '/', 'Inv. Operativa II', 'A', 'Lunes', '12:00 - 14:00', 'P2-A2'),
    (4, 'Jose Alejandro Zegarra Espinoza', 'academico', '/', 'Teoria de Probabilidad / Muestreo I', 'A', 'Lunes', '12:00 - 14:00', 'P2-A2'),
    (5, 'Cardenas Soria Adriana', 'investigacion', '/', NULL, NULL, NULL, NULL, NULL),
    (6, 'Valentina Valdez Vega', 'academico', '/', 'Estadistica Descriptiva', 'A', 'Lunes', '12:00 - 14:00', 'P2-A2'),
    (7, 'Rafaela Jhovana Condori Quino', 'academico', '/', 'Probabilidad II', 'A', 'Lunes', '12:00 - 14:00', 'P2-A2'),
    (8, 'Grover Huanca Flores', 'academico', '/', 'Inferencia Estadistica I', 'A', 'Lunes', '12:00 - 14:00', 'P2-A2'),
    (9, 'Carlos Enrique Guzman Delgado', 'academico', '/', 'Inferencia Estadistica I', 'A', 'Lunes', '12:00 - 14:00', 'P2-A2'),
    (10, 'Manuel Alejandro Loayza Medina', 'academico', '/', 'Inv. Operativa I', 'A', 'Lunes', '12:00 - 14:00', 'P2-A2'),
    (11, 'Daniel Franklin Cespedes Quispe', 'investigacion', '/', NULL, NULL, NULL, NULL, NULL),
    (12, 'Cardenas Soria Alejandro', 'investigacion', '/', NULL, NULL, NULL, NULL, NULL),
    (13, 'Rode Belen Valeriano Torrez', 'interaccion social', '/', NULL, NULL, NULL, NULL, NULL),
    (14, 'Laura Elizabeth Quenta Marca', 'interaccion social', '/', NULL, NULL, NULL, NULL, NULL),
    (15, 'Alex Suxo Poma', 'interaccion social', '/', NULL, NULL, NULL, NULL, NULL);
