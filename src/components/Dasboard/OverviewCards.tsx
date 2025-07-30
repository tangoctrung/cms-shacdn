import { formatTimeNumber } from "@/lib/utils";
import CountUp from "../CountUp";
import { Skeleton } from "../ui/skeleton";
import CardCustom from "../CardCustom";

export default function OverviewCards({
    data,
}: {
    data: any;
}) {

    const totalEvent = data?.eventSummary?.reduce((sum: number, item: any) => sum + item?.count, 0)
    const stats = [
        { type: "number", title: 'Active users', value: data?.activeUsers },
        { type: "number", title: 'Event count', value: totalEvent },
        { type: "number", title: 'New users', value: data?.newUsers },
        { type: "string", title: 'Average interaction time', value: formatTimeNumber(data?.avgEngagementTimeSec) },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data && stats.map((s) => (
                <CardCustom key={s.title} className='shadow-md'>
                    <p className="text-gray-500">{s.title}</p>
                    {s?.type === "number" ?
                        <CountUp target={s?.value || 0} duration={1000} className="text-xl font-semibold" /> :
                        <p className="text-xl font-semibold">{s.value}</p>}
                </CardCustom>
            ))}
            {!data &&
                <>
                    <Skeleton className='!h-24 !w-full' />
                    <Skeleton className='!h-24 !w-full' />
                    <Skeleton className='!h-24 !w-full' />
                    <Skeleton className='!h-24 !w-full' />
                </>}
        </div>
    );
}