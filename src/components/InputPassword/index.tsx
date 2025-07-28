import { useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';

interface Props {
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  autoFocus?: boolean;
}
function InputPassword({
  placeholder,
  onChange,
  className,
}: Props) {
  const [isShowPass, setIsShowPass] = useState(false)

  return (
    <div className={`relative`}>
      <Input
        type={isShowPass ? "text" : "password"}
        placeholder={placeholder || ""}
        className={cn('border-bg8 w-full', className)}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
        autoComplete='on'
      />
      <div className='absolute cursor-pointer right-1 top-[50%] translate-y-[-50%]' onClick={() => setIsShowPass(!isShowPass)}>
        {!isShowPass ?
          <Eye /> :
          <EyeClosed />}
      </div>
    </div>
  )
}

export default InputPassword