import { DateRangePicker } from "@/components/ui/date-range-picker";
import { formatDate } from "@/lib/utils";
import useAuthStore from "@/store/useAuthStore";
import type { DateRange } from "react-day-picker";
import { useLocation } from "react-router-dom";

function Header() {
  const path = useLocation().pathname;
  const { dateFrom, dateTo, setDate } = useAuthStore()

  function renderTitleHeader() {
    switch (path) {
      case "/":
        return "Home";
      case "/retention":
        return "Retention";
      case "/user-reports":
        return "User Reports";
      case "/other-reports":
        return "Other Reports";
      default:
        return "Page Not Found";
    }
  }

  function handleUpdateDate(values: { range: DateRange; rangeCompare?: DateRange | undefined; }) {
    const from = formatDate(values.range.from);
    const to = formatDate(values.range.to);
    if (from && to) {
      setDate(from, to);
    }
  }
  return (
    <div className="fixed top-0 left-[60px] h-13 w-[calc(100%-60px)] bg-bg9 flex items-center justify-between px-10 border-b border-b-border">
      <p className="sm:block hidden text-xl font-semibold">{renderTitleHeader()}</p>
      <div className="w-[calc(100%)] sm:w-auto">
        <DateRangePicker
          onUpdate={(values) => handleUpdateDate(values)}
          initialDateFrom={dateFrom}
          initialDateTo={dateTo}
          align="start"
          locale="en-GB"
          showCompare={false}
        />
      </div>
    </div>
  )
}

export default Header