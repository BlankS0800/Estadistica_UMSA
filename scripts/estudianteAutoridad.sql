-- Datos iniciales del estamento estudiantil del HCC.
-- La columna imagen usa '/' cuando no existe una fotografía cargada.

INSERT INTO public.estudiante_autoridad
    (id, nombre, cargo, imagen)
VALUES
    (1, 'Univ. Jhoseline Gloria Chambi Velasco', 'Delegada Estudiantil', '/images/institucional/estudiante_chambi.jpeg'),
    (2, 'Univ. Alejandra Edith Salas Birrueta', 'Delegada Estudiantil', '/images/institucional/estudiante_salas.jpeg'),
    (3, 'Univ. Alejandra Adela Velarde Machicado', 'Delegada Estudiantil', '/images/institucional/estudiante_velarde.jpeg');
