import Loading from "@/components/Loading"
import NumberCategoryDeviceChart from "@/components/ReportOther/NumberCategoryDeviceChart"
import NumberOSUserChart from "@/components/ReportOther/NumberOSUserChart"
import NumberUserActiveBrower from "@/components/ReportOther/NumberUserActiveBrower"
import NumberUserActivePlatform from "@/components/ReportOther/NumberUserActivePlatform"
import { getDataSummaryService } from "@/endpoint/user/userService"
import useAuthStore from "@/store/useAuthStore"
import { useEffect, useState } from "react"

function ReportOther() {
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-4">
          <NumberUserActivePlatform data={data?.platformSummary || []} />
        </div>
        <div className="md:col-span-8">
          <NumberOSUserChart data={data?.osSummary || []} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8">
          <NumberUserActiveBrower data={data?.browserSummary || []} />
        </div>
        <div className="md:col-span-4">
          <NumberCategoryDeviceChart data={data?.deviceCategory || []} />
        </div>
      </div>
      {loading && <Loading />}
    </div>
  )
}

export default ReportOther