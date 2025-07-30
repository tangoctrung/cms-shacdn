import CustomBarChart from '../../Chart/BarChart';
import CardCustom from '@/components/CardCustom';

export default function NewUsersByChannelChart({
    data,
}: {
    data: any[];
}) {

    const dataPrimary = data?.map(({ channel, count }) => ({
        name: channel,
        value: count
    }))

    return (
        <CardCustom title="New users by channel" className='h-full'>
            <div className='w-full flex justify-center'>
                <CustomBarChart dataKey="channel" dataPrimary={dataPrimary} />
            </div>
        </CardCustom>
    );
}