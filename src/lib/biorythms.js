import dayjs from "dayjs";

export function calculateBiorythms(birthDate, targetDate) {
    return {
        physical: calculateBiorythm(birthDate, targetDate, 23),
        emotional: calculateBiorythm(birthDate, targetDate, 28),
        intellectual: calculateBiorythm(birthDate, targetDate, 33),
    };
}

function calculateBiorythm(birthDate, targetDate, cycle) {
    const birthDay = dayjs(birthDate);
    const targetDay = dayjs(targetDate);
    const diff = targetDay.diff(birthDay, 'day');
    return Math.sin(2 * Math.PI * diff / cycle);
}

