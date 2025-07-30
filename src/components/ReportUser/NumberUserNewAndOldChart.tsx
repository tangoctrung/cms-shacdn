import { formatTimeStringToDDMM } from '@/lib/utils';
import LineRoundChart from '../Chart/LineRoundChart'
import CardCustom from '../CardCustom';

function NumberUserNewAndOldChart({
  data,
}: {
  data: any[];
}) {

  const dataKey = ["newUsers", "activeUsers"]

  const dataPrimary = data?.map(item => ({
    ...item,
    name: formatTimeStringToDDMM(item?.date)
  }))

  return (
    <CardCustom className='shadow-md h-[480px] overflow-y-scroll viewScrollNone' title="Number of active and new users">
      <div className='h-[380px] flex justify-center'>
        <LineRoundChart dataKey={dataKey} dataPrimary={dataPrimary} />
      </div>
    </CardCustom>
  )
}

export default NumberUserNewAndOldChart