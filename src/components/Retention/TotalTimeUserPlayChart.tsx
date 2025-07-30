import { formatTimeStringToDDMM } from '@/lib/utils';
import SimpleAreaChart from '../Chart/SimpleAreaChart';
import CardCustom from '../CardCustom';

function TotalTimeUserPlayChart({
  data,
}: {
  data: any[];
}) {

  const dataPrimary = data?.map((item: any) => ({
    ...item,
    name: formatTimeStringToDDMM(item?.date),
    value: item?.avgEngagementTimeSec,
  }));
  return (
    <CardCustom className='shadow-md h-[480px]' title="User engagement">
      <div className='h-[380px] flex justify-center'>
        <SimpleAreaChart dataPrimary={dataPrimary} unit='s' isCustomDate={true} />
      </div>
    </CardCustom>
  )
}

export default TotalTimeUserPlayChart