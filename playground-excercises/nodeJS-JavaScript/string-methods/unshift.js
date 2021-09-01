// Probamos .unshift
let estudiantes = [
    {
        nombre: 'Alvaro',
        promedio: 9,
        curso: 'Android',
    },
    {
        nombre: 'Daniel',
        promedio: 6,
        curso: 'Full Stack',
    },
    {
        nombre: 'Alexis',
        promedio: 3,
        curso: 'iOS',
    }
];
estudiantes.unshift(
    {
        nombre: 'Mariana',
        promedio: 9,
        curso: 'Full Stack',
    }
);
estudiantes.unshift(
    {
        nombre: 'Francisco',
        promedio: 2,
        curso: 'Android',
    }
);