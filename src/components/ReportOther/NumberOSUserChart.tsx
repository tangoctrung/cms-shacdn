import CardCustom from '../CardCustom';
import LineCustomChart from '../Chart/LineCustomChart'

function NumberOSUserChart({
  data,
}: {
  data: any[];
}) {

  const labelsPrimary = ["Hệ điều hành", "Số người sử dụng"]
  const dataPrimary = data?.map(({ OSplatform, count }) => ({
    label: OSplatform,
    value: count
  }))
  return (
    <CardCustom className='shadow-md h-[480px] overflow-y-scroll viewScrollNone' title="Number of active users by operating system">
      {data && data?.length > 0 && <LineCustomChart dataPrimary={dataPrimary} labelsPrimary={labelsPrimary} />}
    </CardCustom>
  )
}

export default NumberOSUserChart