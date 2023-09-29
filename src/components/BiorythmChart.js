import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts";

const data = [
    { date: '2022-10-01', physical: 1.0, emotional: -0.5, intellectual: -1.0 },
    { date: '2022-10-02', physical: -1.0, emotional: 1.0, intellectual: 0.0 },
    { date: '2022-10-03', physical: 0.0, emotional: 0.5, intellectual: 1.0 },
];

function BiorythmChart() {
    return (
        <ResponsiveContainer width='100%' height={200}>
            <LineChart data={data}>
                <XAxis dataKey='date'/>
                <Line dataKey="physical" stroke="green"/>
                <Line dataKey="emotional" stroke="red"/>
                <Line dataKey="intellectual" stroke="blue"/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default BiorythmChart;