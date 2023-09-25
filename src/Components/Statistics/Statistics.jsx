import { PieChart, Pie, Cell } from 'recharts';

const Statistics = () => {
    const getItem = localStorage.getItem("Total_Donation");
    const storedDonation = JSON.parse(getItem) || [];
    const totalDonation = 100 - (storedDonation.length / 12) * 100;
    const yourDonation = (storedDonation.length / 12) * 100;
    console.log(totalDonation,yourDonation)

    const data = [
        { name: 'Total Donation', value: totalDonation },
        { name: 'Your Donation', value: yourDonation },
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
    <div>
        <div className='flex justify-center items-center'>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-8'>
            <p className='text-xl font-medium'>Your Donation <span className='bg-[#00C49F] px-14 ml-2'></span></p>
            <p className='text-xl font-medium'>Total Donation <span className='bg-[#FF444A] px-14 ml-2'></span></p>
        </div>
    </div>
    );
};

export default Statistics;
