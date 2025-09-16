import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star } from "lucide-react"

interface CourseCardProps {
  title: string
  description: string
  progress?: number
  students: number
  duration: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  color: "blue" | "green" | "orange" | "pink" | "purple" | "yellow"
  icon: React.ReactNode
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

export function CourseCard({ 
  title, 
  description, 
  progress, 
  students, 
  duration, 
  difficulty,
  color,
  icon 
}: CourseCardProps) {
  return (
    <Card className={`${colorVariants[color]} hover:shadow-lg transition-shadow`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-xl bg-background ${iconColors[color]}`}>
            {icon}
          </div>
          <Badge variant="secondary" className="text-xs">
            {difficulty}
          </Badge>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {progress !== undefined && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students} students</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
        
        <Button className="w-full" variant={progress ? "default" : "secondary"}>
          {progress ? "Continue Learning" : "Start Course"}
        </Button>
      </CardContent>
    </Card>
  )
}