import {
    CartesianGrid,
    YAxis,
    XAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";
import "./App.css";
import React from "react";

function App() {
    const defaultText =
        "$:F@#K$RVWPERJWOEJO#JDEO!J#$O!J#O%H%^O@#J^O#J$%^O$%&J%^&*OK^P(K&P*)";
    const [text, setText] = React.useState(defaultText);

    const characters = {};

    for (const char of text) {
        characters[char] = (characters[char] || 0) + 1;
    }

    const chartData = Object.entries(characters).map(([name, value]) => ({
        name: name,
        chars: value,
    }));

    return (
        <div className="App">
            <h1>Characters Count Histogram</h1>
            <label>
                <strong>insert a text</strong>
                <br />
                <input
                    onChange={({ target }) => setText(target.value)}
                    defaultValue={text}
                />
            </label>
            <br />
            <br />
            <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="chars" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default App;
