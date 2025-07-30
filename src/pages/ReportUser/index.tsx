import ActiveUsersByCountryChart from "@/components/Dasboard/Components/ActiveUsersByCountryChart"
import Loading from "@/components/Loading"
import NumberGenderUserChart from "@/components/ReportUser/NumberGenderUserChart"
import NumberUserLanguage from "@/components/ReportUser/NumberUserLanguage"
import NumberUserNewAndOldChart from "@/components/ReportUser/NumberUserNewAndOldChart"
import { getDataSummaryService } from "@/endpoint/user/userService"
import useAuthStore from "@/store/useAuthStore"
import { useEffect, useState } from "react"

function ReportUser() {
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
        <div className="w-full md:w-[70%] p-[10px] overflow-hidden h-[500px]">
          <NumberUserNewAndOldChart data={data?.chartData} />
        </div>
        <div className="w-full md:w-[30%] p-[10px] overflow-hidden h-[500px]">
          <NumberGenderUserChart data={data?.userGender} />
        </div>
      </div>
      <div className='mt-4 w-full flex flex-col md:flex-row justify-center'>
        <div className="w-full md:w-[70%] p-[10px] overflow-hidden ">
          <NumberUserLanguage data={data?.userLanguage} />
        </div>

      </div>
      <div className='mt-4 w-full flex flex-col md:flex-row justify-center'>
        <div className='w-full md:w-[70%] p-[10px]'>
          <ActiveUsersByCountryChart data={data?.activeUsersByCountry || []} />
        </div>
      </div>
      {loading && <Loading />}
    </div>
  )
}

export default ReportUser