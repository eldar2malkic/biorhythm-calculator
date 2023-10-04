import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts";
import { calculateBiorythmSeries } from "../lib/biorythms";

function BiorythmChart( birthDate, targetDate ) {
    const series = calculateBiorythmSeries(birthDate, targetDate, 3);
    return (
        <ResponsiveContainer width='100%' height={200}>
            <LineChart data={series}>
                <XAxis dataKey='date'/>
                <Line dataKey="physical" stroke="green"
                    dot={false}
                />
                <Line dataKey="emotional" stroke="red"
                    dot={false}
                />
                <Line dataKey="intellectual" stroke="blue"
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default BiorythmChart;