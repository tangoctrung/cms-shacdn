import PieChart from '../Chart/PieChartDevice'
import { COLORS } from '../../constant';
import CardCustom from '../CardCustom';

function NumberGenderUserChart({
  data,
}: {
  data: any[];
}) {

  const dataPrimary = {
    labels: data?.map(item => item?.gender),
    datasets: [
      {
        label: '',
        data: data?.map(item => item?.count),
        backgroundColor: COLORS.slice(0, data?.length)
      },
    ],
  };
  return (
    <CardCustom title="User gender" className='shadow-md h-[480px] overflow-y-scroll viewScrollNone'>
      <div className='max-h-[380px] flex justify-center'>
        {data && data?.length > 0 && <PieChart data={dataPrimary} />}
        {/* {!data && <EmptyData type='' />} */}
      </div>
    </CardCustom>
  )
}

export default NumberGenderUserChart