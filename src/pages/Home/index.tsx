import EventCountChart from "@/components/Chart/EventCountChart"
import ActiveUserLineChart from "@/components/Dasboard/ActiveUserLineChart"
import ActiveUsersByCountryChart from "@/components/Dasboard/Components/ActiveUsersByCountryChart"
import OverviewCards from "@/components/Dasboard/OverviewCards"
import RealtimeActiveUsers from "@/components/Dasboard/RealtimeActiveUsers"
import SuggestedSection from "@/components/Dasboard/SuggestedSection"
import Loading from "@/components/Loading"
import { getDataSummaryService } from "@/endpoint/user/userService"
import { diffInDays } from "@/lib/utils"
import useAuthStore from "@/store/useAuthStore"
import { useEffect, useState } from "react"

function Home() {
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

  const distanceDate = diffInDays(dateFrom, dateTo)

  return (
    <div className="mt-[52px] ml-[60px] p-4 space-y-6 w-[calc(100%-60px)] h-[calc(100%-52px)] overflow-y-auto">
      <OverviewCards data={data} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 h-full">
          <ActiveUserLineChart data={data?.chartData || []} />
        </div>
        <div className='h-full'>
          <RealtimeActiveUsers data={data?.topCountries || []} />
        </div>
      </div>
      <div className="w-full overflow-y-hidden">
        <SuggestedSection data={data} distanceDate={distanceDate} />
      </div>
      <div className='w-full gap-6 flex flex-col md:flex-row'>
        <div className='w-full md:w-[60%]'>
          <ActiveUsersByCountryChart data={data?.activeUsersByCountry || []} />
        </div>
        <div className='w-full md:w-[40%]'>
          <EventCountChart data={data?.eventSummary || []} />
        </div>
      </div>
      {loading && <Loading />}
    </div>
  );
}

export default Home