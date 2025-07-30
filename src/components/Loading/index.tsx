import { Spinner } from "../ui/spinner"

function Loading() {
  return (
    <div className='fixed z-[200] w-screen h-screen top-0 left-0 flex justify-center items-center'>
      <div className='absolute w-full h-full top-0 left-0 bg-black/20'></div>
      <Spinner size='large' className="text-popover font-bold" />
    </div>
  )
}

export default Loading