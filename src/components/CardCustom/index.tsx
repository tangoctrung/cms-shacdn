import { cn } from "@/lib/utils"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

function CardCustom(
  { children, title, className }:
    { children: React.ReactNode, title?: string, className?: string }
) {
  return (
    <Card className={cn("bg-white !rounded-sm p-0 gap-3 pt-8", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription></CardDescription>
        <CardAction></CardAction>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}

export default CardCustom