import BarChart from '../Chart/BarChart';
import { Card } from '../ui/card';

export default function EventCountChart({
    data,
}: {
    data: any[];
}) {

    const dataPrimary = data?.map(({ event, count }) => ({
        name: event,
        value: count
    }))

    return (
        <Card title="Event count by event name" className='h-[480px]'>
            <div className='w-full h-[400px] flex justify-center items-center'>
                <BarChart dataKey="event" dataPrimary={dataPrimary} />
            </div>
        </Card>
    );
}