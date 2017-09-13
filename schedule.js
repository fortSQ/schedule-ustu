const NUMERATOR     = 0; // числитель
const DENOMINATOR   = 1; // знаменатель

/**
 * Дни недели
 */
const MONDAY    = 1;
const TUESDAY   = 2;
const WEDNESDAY = 3;
const THURSDAY  = 4;
const FRIDAY    = 5;
const SATURDAY  = 6;

/**
 * Пары
 */
const FIRST     = 1;
const SECOND    = 2;
const THIRD     = 3;
const FOURTH    = 4;
const FIFTH     = 5;

/**
 * Длительность пар
 */
const PAIR_TIME = {
    [FIRST]: {from: '08:30', to: '10:00'},
    [SECOND]: {from: '10:10', to: '11:40'},
    [THIRD]: {from: '12:00', to: '13:30'},
    [FOURTH]: {from: '14:30', to: '16:00'},
    [FIFTH]: {from: '16:10', to: '17:40'},
};

/**
 * Период расписания
 */
var startDate = '2017-09-01';
var endDate = '2017-12-31';

/**
 * Сетка расписания
 */
var schedule = {
    [NUMERATOR]: {
        [MONDAY]: {
            [SECOND]: 'Производственная санитария и гигиена труда (л) 120А',
            [THIRD]: 'Нормо-технич. база обеспечения безопасности (л) 120А',
            [FOURTH]: 'Производственная безопасность (л/р) 118А',
        },
        [TUESDAY]: {
            [FIRST]: 'Производственная безопасность (л) 120А',
            [SECOND]: 'Экспертиза условий труда и аттестация персонала (л) 120А',
            [THIRD]: 'Нефтегазопромысловое оборудование (л) 308Д',
        },
        [WEDNESDAY]: {
            [FIRST]: 'Экспертиза условий труда и аттестация персонала (пр) 120А',
            [SECOND]: 'Инженерная психология (пр) 35Г',
            [THIRD]: 'Бурение скважин (л) 214Д',
            [FOURTH]: 'Производственная безопасность (пр) 120А',
        },
        [THURSDAY]: {
            [SECOND]: 'ДЕНЬ',
            [THIRD]: 'КУРСОВОГО',
            [FOURTH]: 'ПРОЕКТИРОВАНИЯ',
        },
    },
    [DENOMINATOR]: {
        [MONDAY]: {
            [FIRST]: 'Производственная безопасность (пр) 120А',
            [SECOND]: 'Производственная санитария и гигиена труда (л) 120А',
            [THIRD]: 'Нефтегазопромысловое оборудование (пр) 308Д',
            [FOURTH]: 'Производственная безопасность (л/р) 118А',
        },
        [TUESDAY]: {
            [FIRST]: 'Производственная безопасность (л) 120А',
            [SECOND]: 'Нормо-технич. база обеспечения безопасности (пр) 120А',
            [THIRD]: 'Бурение скважин (пр) 216Д',
            [FOURTH]: 'Производственная санитария и гигиена труда (л/р) 119А',
        },
        [WEDNESDAY]: {
            [FIRST]: 'Экспертиза условий труда и аттестация персонала (пр) 120А',
            [SECOND]: 'Инженерная психология (пр) 35Г',
            [THIRD]: 'Инженерная психология (л) 35Г',
        },
        [THURSDAY]: {
            [SECOND]: 'ДЕНЬ',
            [THIRD]: 'КУРСОВОГО',
            [FOURTH]: 'ПРОЕКТИРОВАНИЯ',
        },
        [FRIDAY]: {
            [SECOND]: 'Бурение скважин (л/р) 101,102,212Д',
            [THIRD]: 'Нефтегазопромысловое оборудование (л/р) 308Д',
        },
    },
};