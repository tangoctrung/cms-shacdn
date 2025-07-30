import PieChartDevice from '../Chart/PieChartDevice'
import { COLORS } from '../../constant';
import CardCustom from '../CardCustom';

function NumberUserActivePlatform({
  data,
}: {
  data: any[];
}) {

  const totalUsers = data?.reduce((sum: number, item: any) => sum + item.count, 0);
  const dataPrimary = {
    labels: ["website"],
    datasets: [
      {
        label: '',
        data: [totalUsers],
        backgroundColor: COLORS.slice(0, data?.length),
      },
    ],
  };

  return (
    <CardCustom className='shadow-md h-[480px] w-full' title="Number of active users by platform">
      <div className='max-h-[380px] w-full flex justify-center'>
        {data && data?.length > 0 && <PieChartDevice data={dataPrimary} />}
        {/* {!data && <EmptyData type='' />} */}
      </div>
    </CardCustom>
  )
}

export default NumberUserActivePlatform