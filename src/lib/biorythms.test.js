import { calculateBiorythms } from "./biorythms";

it('calculates the physical biorhythm', () => {
    const biorythms = calculateBiorythms('1999-12-31', '2022-12-31')
    expect(biorythms.physical).toBeCloseTo(0.9977)
});

it('calculates the emotional biorhythm', () => {
    const biorythms = calculateBiorythms('1999-12-31', '2022-12-31')
    expect(biorythms.emotional).toBeCloseTo(0.2225)
});

it('calculates the intellectual biorhythm', () => {
    const biorythms = calculateBiorythms('1999-12-31', '2022-12-31')
    expect(biorythms.intellectual).toBeCloseTo(-0.4582)
});
