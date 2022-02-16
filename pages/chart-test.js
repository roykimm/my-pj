import BarChart from "../components/Charts/BarChart";
import DoughnutChart from "../components/Charts/DoughnutChart";
import LineChart from "../components/Charts/LineChart";
import PieChart from "../components/Charts/PieChart";

const ChartTest = () => {
    return (
        <div>
            <BarChart />
            <DoughnutChart />
            <LineChart />
            <PieChart />
        </div>
    )
}

export default ChartTest;