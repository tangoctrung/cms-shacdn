import DoughnutChart from '../Chart/DoughnutChart'
import { COLORS } from '../../constant';
import CardCustom from '../CardCustom';

function NumberCategoryDeviceChart({
  data,
}: {
  data: any[];
}) {
  const dataPrimary = {
    labels: data?.map(item => "web-" + item?.devices),
    datasets: [
      {
        label: 'users: ',
        data: data?.map(item => item?.count),
        backgroundColor: COLORS.slice(0, data?.length),
      },
    ],
  };
  return (
    <CardCustom className='shadow-md h-[480px] overflow-y-scroll viewScrollNone' title="Number of active users by device category">
      <div className='max-h-[380px] flex justify-center'>
        <DoughnutChart data={dataPrimary} />
      </div>
    </CardCustom>
  )
}

export default NumberCategoryDeviceChart