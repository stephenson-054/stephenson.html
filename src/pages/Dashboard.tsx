import { StatsCard } from "@/components/StatsCard"
import { CourseCard } from "@/components/CourseCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  BookOpen, 
  Trophy, 
  Clock,
  Code2,
  Palette,
  Smartphone,
  Gamepad2,
  Brain,
  Zap
} from "lucide-react"

const Dashboard = () => {
  const stats = [
    {
      title: "Active Students",
      value: "1,234",
      change: { value: 12, isPositive: true },
      icon: <Users className="w-4 h-4" />,
      color: "blue" as const
    },
    {
      title: "Courses Completed",
      value: "856",
      change: { value: 8, isPositive: true },
      icon: <BookOpen className="w-4 h-4" />,
      color: "green" as const
    },
    {
      title: "Average Score",
      value: "87%",
      change: { value: 3, isPositive: true },
      icon: <Trophy className="w-4 h-4" />,
      color: "orange" as const
    },
    {
      title: "Study Hours",
      value: "2,456",
      change: { value: 15, isPositive: true },
      icon: <Clock className="w-4 h-4" />,
      color: "purple" as const
    }
  ]

  const courses = [
    {
      title: "HTML Fundamentals",
      description: "Learn the building blocks of web development",
      progress: 75,
      students: 234,
      duration: "4 weeks",
      difficulty: "Beginner" as const,
      color: "orange" as const,
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "CSS Styling",
      description: "Master web design and styling techniques",
      progress: 45,
      students: 189,
      duration: "6 weeks", 
      difficulty: "Beginner" as const,
      color: "blue" as const,
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: "JavaScript Basics",
      description: "Interactive programming for the web",
      progress: 20,
      students: 156,
      duration: "8 weeks",
      difficulty: "Intermediate" as const,
      color: "yellow" as const,
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Mobile App Development",
      description: "Build apps for Android and iOS",
      students: 98,
      duration: "12 weeks",
      difficulty: "Advanced" as const,
      color: "green" as const,
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Game Development",
      description: "Create interactive games and simulations",
      students: 145,
      duration: "10 weeks", 
      difficulty: "Intermediate" as const,
      color: "purple" as const,
      icon: <Gamepad2 className="w-6 h-6" />
    },
    {
      title: "AI & Machine Learning",
      description: "Introduction to artificial intelligence",
      students: 78,
      duration: "14 weeks",
      difficulty: "Advanced" as const,
      color: "pink" as const,
      icon: <Brain className="w-6 h-6" />
    }
  ]

  const recentActivity = [
    { student: "Alice Johnson", course: "HTML Fundamentals", action: "Completed Lesson 5", time: "2 hours ago" },
    { student: "Bob Smith", course: "JavaScript Basics", action: "Started new project", time: "4 hours ago" },
    { student: "Carol Wilson", course: "CSS Styling", action: "Achieved 90% score", time: "6 hours ago" },
    { student: "David Brown", course: "Game Development", action: "Submitted assignment", time: "1 day ago" },
  ]

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening in your coding academy.
          </p>
        </div>
        <Button>
          <BookOpen className="w-4 h-4 mr-2" />
          Create New Course
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Courses Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Popular Courses</h2>
          <Button variant="outline">View All Courses</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div className="space-y-1">
                  <p className="text-sm font-medium">{activity.student}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.action} in {activity.course}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard