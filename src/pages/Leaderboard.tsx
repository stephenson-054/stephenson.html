import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Trophy,
  Medal,
  Crown,
  Star,
  TrendingUp,
  Users,
  Target,
  Zap,
  Calendar,
  Award
} from "lucide-react"

const Leaderboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("all-time")
  const [selectedCategory, setSelectedCategory] = useState("overall")

  const leaderboardData = [
    {
      rank: 1,
      name: "Alice Johnson",
      avatar: "/placeholder.svg",
      points: 2890,
      coursesCompleted: 12,
      streak: 45,
      badges: ["HTML Master", "CSS Expert", "JS Ninja"],
      level: "Expert",
      weeklyGain: 245,
      location: "Nairobi, Kenya"
    },
    {
      rank: 2, 
      name: "Bob Smith",
      avatar: "/placeholder.svg",
      points: 2654,
      coursesCompleted: 10,
      streak: 32,
      badges: ["React Pro", "Debug Master"],
      level: "Advanced",
      weeklyGain: 189,
      location: "Mombasa, Kenya"
    },
    {
      rank: 3,
      name: "Carol Wilson", 
      avatar: "/placeholder.svg",
      points: 2543,
      coursesCompleted: 11,
      streak: 28,
      badges: ["Game Dev", "Python Pro", "AI Explorer"],
      level: "Expert", 
      weeklyGain: 167,
      location: "Kisumu, Kenya"
    },
    {
      rank: 4,
      name: "David Brown",
      avatar: "/placeholder.svg",
      points: 2398,
      coursesCompleted: 9,
      streak: 21,
      badges: ["Mobile Dev", "UI Master"],
      level: "Advanced",
      weeklyGain: 134,
      location: "Eldoret, Kenya"
    },
    {
      rank: 5,
      name: "Emma Davis",
      avatar: "/placeholder.svg", 
      points: 2287,
      coursesCompleted: 8,
      streak: 19,
      badges: ["CSS Wizard", "JS Apprentice"],
      level: "Intermediate",
      weeklyGain: 156,
      location: "Nakuru, Kenya"
    },
    {
      rank: 6,
      name: "Frank Miller",
      avatar: "/placeholder.svg",
      points: 2156,
      coursesCompleted: 7,
      streak: 15,
      badges: ["HTML Basic", "Python Starter"],
      level: "Intermediate", 
      weeklyGain: 89,
      location: "Thika, Kenya"
    },
    {
      rank: 7,
      name: "Grace Lee",
      avatar: "/placeholder.svg",
      points: 1987,
      coursesCompleted: 6,
      streak: 12,
      badges: ["Web Starter", "Logic Master"],
      level: "Beginner",
      weeklyGain: 78,
      location: "Meru, Kenya"
    },
    {
      rank: 8,
      name: "Henry Clark",
      avatar: "/placeholder.svg",
      points: 1834,
      coursesCompleted: 5,
      streak: 9,
      badges: ["Code Rookie", "CSS Beginner"],
      level: "Beginner",
      weeklyGain: 45,
      location: "Nyeri, Kenya"
    }
  ]

  const periods = [
    { id: "weekly", label: "This Week" },
    { id: "monthly", label: "This Month" },
    { id: "all-time", label: "All Time" }
  ]

  const categories = [
    { id: "overall", label: "Overall", icon: <Trophy className="w-4 h-4" /> },
    { id: "courses", label: "Courses", icon: <Target className="w-4 h-4" /> },
    { id: "streaks", label: "Streaks", icon: <Zap className="w-4 h-4" /> },
    { id: "badges", label: "Badges", icon: <Award className="w-4 h-4" /> }
  ]

  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-500" />
      case 2: return <Medal className="w-6 h-6 text-gray-400" />  
      case 3: return <Medal className="w-6 h-6 text-amber-600" />
      default: return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>
    }
  }

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Expert": return "text-education-purple"
      case "Advanced": return "text-education-blue" 
      case "Intermediate": return "text-education-green"
      case "Beginner": return "text-education-orange"
      default: return "text-muted-foreground"
    }
  }

  const topThree = leaderboardData.slice(0, 3)
  const restOfList = leaderboardData.slice(3)

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Leaderboard</h1>
          <p className="text-muted-foreground">
            See how you rank against other coding learners
          </p>
        </div>
        <Button>
          <Users className="w-4 h-4 mr-2" />
          View My Rank
        </Button>
      </div>

      {/* Filter Controls */}
      <div className="flex gap-4 flex-wrap">
        <Card className="flex-1">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Time Period</span>
            </div>
            <div className="flex gap-1">
              {periods.map((period) => (
                <Badge
                  key={period.id}
                  variant={selectedPeriod === period.id ? "default" : "secondary"}
                  className="cursor-pointer"
                  onClick={() => setSelectedPeriod(period.id)}
                >
                  {period.label}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Category</span>
            </div>
            <div className="flex gap-1 flex-wrap">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "secondary"}
                  className="cursor-pointer flex items-center gap-1"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.icon}
                  {category.label}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top 3 Podium */}
      <Card className="bg-gradient-to-br from-education-blue/5 via-education-purple/5 to-education-pink/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-education-orange" />
            Top Performers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {topThree.map((student, index) => (
              <Card key={student.rank} className={`relative overflow-hidden ${index === 0 ? 'ring-2 ring-yellow-500/50' : ''}`}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {getRankIcon(student.rank)}
                  </div>
                  
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={student.avatar} />
                    <AvatarFallback className="bg-education-blue/10 text-education-blue text-lg">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="font-semibold mb-1">{student.name}</h3>
                  <Badge variant="outline" className={getLevelColor(student.level)}>
                    {student.level}
                  </Badge>
                  
                  <div className="mt-4 space-y-2">
                    <div className="text-2xl font-bold text-education-blue">{student.points.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">points</div>
                    
                    <div className="flex justify-center gap-4 text-xs">
                      <div>
                        <div className="font-medium">{student.coursesCompleted}</div>
                        <div className="text-muted-foreground">courses</div>
                      </div>
                      <div>
                        <div className="font-medium flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          {student.streak}
                        </div>
                        <div className="text-muted-foreground">streak</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Full Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Rankings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaderboardData.map((student) => (
              <div 
                key={student.rank} 
                className={`flex items-center gap-4 p-4 rounded-lg border transition-colors hover:bg-muted/50 ${
                  student.rank <= 3 ? 'bg-muted/30' : ''
                }`}
              >
                <div className="flex items-center justify-center w-10">
                  {getRankIcon(student.rank)}
                </div>
                
                <Avatar className="w-12 h-12">
                  <AvatarImage src={student.avatar} />
                  <AvatarFallback className="bg-education-blue/10 text-education-blue">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold truncate">{student.name}</h3>
                    <Badge variant="outline" className={`text-xs ${getLevelColor(student.level)}`}>
                      {student.level}
                    </Badge>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-2">
                    {student.location}
                  </div>
                  
                  <div className="flex gap-1 flex-wrap">
                    {student.badges.slice(0, 2).map((badge, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                    {student.badges.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{student.badges.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="text-right space-y-2">
                  <div className="text-xl font-bold text-education-blue">
                    {student.points.toLocaleString()}
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs text-education-green">
                    <TrendingUp className="w-3 h-3" />
                    +{student.weeklyGain} this week
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div>{student.coursesCompleted} courses</div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {student.streak}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* My Progress */}
      <Card className="bg-education-blue/5 border-education-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-education-blue" />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Current Rank</span>
              <Badge className="bg-education-blue">#15</Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress to next rank</span>
                <span className="font-medium">234 / 500 points</span>
              </div>
              <Progress value={46.8} className="h-2" />
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Complete 2 more courses to reach rank #12! 🚀
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Leaderboard