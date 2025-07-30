import CardCustom from '../CardCustom';
import HorizontalBarChart from '../Chart/HorizontalBarChart'

function NumberUserActiveBrower({
  data,
}: {
  data: any[];
}) {
  const labelPrimary = data?.map(item => item?.browsers)
  const dataPrimary = data?.map(item => item?.count)
  return (
    <CardCustom className='shadow-md h-[480px] overflow-y-scroll viewScrollNone' title="Number of active users by browser">
      <div className='max-h-[380px] w-full'>
        {data && data?.length > 0 && <HorizontalBarChart labelsPrimary={labelPrimary} dataPrimary={dataPrimary} />}
        {/* {!data && <EmptyData type='' />} */}
      </div>
    </CardCustom>
  )
}

export default NumberUserActiveBrower