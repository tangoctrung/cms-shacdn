import { formatTimeStringToDDMM } from '@/lib/utils';
import LineRoundChart from '../Chart/LineRoundChart'
import CardCustom from '../CardCustom';

function NumberUserNewAndRetentionChart({
  data,
}: {
  data: any[];
}) {

  const dataKey = ["newUsers", "returningUsers"]
  const dataPrimary = data?.map(item => ({
    ...item,
    returningUsers: (item?.newUsers - item?.activeUsers) >= 0 ? item?.newUsers - item?.activeUsers : 0,
    name: formatTimeStringToDDMM(item?.date)
  }))

  return (
    <CardCustom className='shadow-md h-[480px]' title="New users and returning users">
      <div className='h-[380px] flex justify-center'>
        <LineRoundChart dataKey={dataKey} dataPrimary={dataPrimary} />
      </div>
    </CardCustom>
  )
}

export default NumberUserNewAndRetentionChart