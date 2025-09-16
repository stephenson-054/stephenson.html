import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    isPositive: boolean
  }
  icon: React.ReactNode
  color: "blue" | "green" | "orange" | "pink" | "purple" | "yellow"
}

const colorVariants = {
  blue: "bg-education-blue/10 border-education-blue/20",
  green: "bg-education-green/10 border-education-green/20",
  orange: "bg-education-orange/10 border-education-orange/20", 
  pink: "bg-education-pink/10 border-education-pink/20",
  purple: "bg-education-purple/10 border-education-purple/20",
  yellow: "bg-education-yellow/10 border-education-yellow/20",
}

const iconColors = {
  blue: "text-education-blue",
  green: "text-education-green", 
  orange: "text-education-orange",
  pink: "text-education-pink",
  purple: "text-education-purple",
  yellow: "text-education-yellow",
}

export function StatsCard({ title, value, change, icon, color }: StatsCardProps) {
  return (
    <Card className={colorVariants[color]}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg bg-background ${iconColors[color]}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs flex items-center gap-1 ${
            change.isPositive ? "text-education-green" : "text-destructive"
          }`}>
            {change.isPositive ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            {change.value}% from last month
          </p>
        )}
      </CardContent>
    </Card>
  )
}