import { formatNumberEN } from '@/lib/utils';
import CardCustom from '../CardCustom';
// import { Table } from '../ui/table';

// const columns = [
//     { title: 'Country', dataIndex: 'country', key: 'country' },
//     { title: 'Active Users', dataIndex: 'users', key: 'users' },
// ];

export default function RealtimeActiveUsers({
    data,
}: {
    data: any[];
}) {

    const totalUsers = data?.reduce((sum: number, item: any) => sum + item.count, 0);
    let dataTable: any[] = [];
    if (data && data?.length > 0) {
        dataTable = data?.map((item: any) => ({
            ...item,
            users: formatNumberEN(item?.count) || 0
        }))
        dataTable.sort((x, y) => y?.count - x?.count);
    }

    return (
        <CardCustom title="Top users country" className="bg-white p-4 rounded shadow-md h-[400px]">
            {data &&
                <>
                    <p className="text-2xl font-bold mb-4">{formatNumberEN(totalUsers)}</p>
                    <div className='max-h-[240px] overflow-y-scroll viewScroll'>
                        {/* <Table defaultValue={dataTable} columns={columns} pagination={false} size="small" /> */}
                    </div>
                </>}
        </CardCustom>
    );
}