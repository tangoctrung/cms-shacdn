import Loading from "@/components/Loading"
import NumberUserNewAndRetentionChart from "@/components/Retention/NumberUserNewAndRetentionChart"
import PercentRetentionUserChart from "@/components/Retention/PercentRetentionUserChart"
import TotalTimeUserPlayChart from "@/components/Retention/TotalTimeUserPlayChart"
import { getDataSummaryService } from "@/endpoint/user/userService"
import useAuthStore from "@/store/useAuthStore"
import { useEffect, useState } from "react"

function Retention() {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)
  const { dateFrom, dateTo } = useAuthStore()

  useEffect(() => {
    async function getDataSummary() {
      setLoading(true)
      const { success, data } = await getDataSummaryService({
        fromDate: dateFrom,
        toDate: dateTo
      })
      if (success) {
        setData(data)
      }
      setLoading(false)
    }
    getDataSummary();
  }, [dateFrom, dateTo])

  return (
    <div className="mt-[52px] ml-[60px] p-4 space-y-6 w-[calc(100%-60px)] h-[calc(100%-52px)] overflow-y-auto">
      <div className='mt-4 w-full flex flex-col md:flex-row'>
        <div className="w-full md:w-[60%] p-[10px] h-[480px]">
          <NumberUserNewAndRetentionChart data={data?.chartData || []} />
        </div>
        <div className="w-full md:w-[40%] p-[10px] h-[480px]">
          <PercentRetentionUserChart data={data?.userRetention} />
        </div>
      </div>
      <div className='mt-4 w-full gap-6 flex flex-col md:flex-row'>
        <div className="w-full md:w-[50%] p-[10px] h-[480px]">
          <TotalTimeUserPlayChart data={data?.engagementChartData || []} />
        </div>
      </div>
      {loading && <Loading />}
    </div>
  )
}

export default Retention