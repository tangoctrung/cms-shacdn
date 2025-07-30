import { convertNameLanguage } from '@/lib/utils';
import CustomBarChart from '../Chart/BarChart';
import CardCustom from '../CardCustom';

function NumberUserLanguage({
  data,
}: {
  data: any[];
}) {

  const dataConvert = data?.map(item => ({
    ...item,
    language: convertNameLanguage(item?.language)
  }))

  const dataPrimary = dataConvert?.map(({ language, count }) => ({
    name: language,
    value: count
  }))
  return (
    <CardCustom className='shadow-md h-[400px]' title="Users active by language">
      <div className='w-full flex justify-center'>
        <CustomBarChart dataKey='NumberUserLanguage' dataPrimary={dataPrimary} />
      </div>
    </CardCustom>
  )
}

export default NumberUserLanguage