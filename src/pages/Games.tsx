import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Play,
  Trophy,
  Gamepad2,
  Users,
  Star,
  Clock,
  Target,
  Zap,
  Brain,
  Code2
} from "lucide-react"

const Games = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const games = [
    {
      id: 1,
      title: "Code Combat",
      description: "Learn programming through epic adventures and battles",
      category: "Programming",
      difficulty: "Beginner",
      players: 1523,
      rating: 4.8,
      duration: "15-30 min",
      skills: ["JavaScript", "Logic", "Problem Solving"],
      color: "blue" as const,
      icon: <Code2 className="w-6 h-6" />,
      completed: false
    },
    {
      id: 2,
      title: "CSS Grid Garden",
      description: "Master CSS Grid by growing your virtual garden",
      category: "Web Design", 
      difficulty: "Intermediate",
      players: 892,
      rating: 4.9,
      duration: "20-40 min",
      skills: ["CSS Grid", "Layout", "Design"],
      color: "green" as const,
      icon: <Target className="w-6 h-6" />,
      completed: true
    },
    {
      id: 3,
      title: "Algorithm Race",
      description: "Compete in real-time algorithm solving challenges",
      category: "Algorithms",
      difficulty: "Advanced",
      players: 456,
      rating: 4.7,
      duration: "10-20 min", 
      skills: ["Algorithms", "Data Structures", "Speed"],
      color: "orange" as const,
      icon: <Zap className="w-6 h-6" />,
      completed: false
    },
    {
      id: 4,
      title: "HTML Hero",
      description: "Build websites and save the digital world",
      category: "Web Development",
      difficulty: "Beginner",
      players: 2341,
      rating: 4.6,
      duration: "25-35 min",
      skills: ["HTML", "Semantic Web", "Accessibility"],
      color: "purple" as const,
      icon: <Brain className="w-6 h-6" />,
      completed: true
    },
    {
      id: 5,
      title: "Debug Detective",
      description: "Find and fix bugs in mysterious code scenarios",
      category: "Debugging",
      difficulty: "Intermediate", 
      players: 678,
      rating: 4.5,
      duration: "15-25 min",
      skills: ["Debugging", "Testing", "Critical Thinking"],
      color: "pink" as const,
      icon: <Target className="w-6 h-6" />,
      completed: false
    },
    {
      id: 6,
      title: "Flexbox Froggy",
      description: "Help Froggy and friends reach their lily pads using Flexbox",
      category: "Web Design",
      difficulty: "Beginner",
      players: 1876,
      rating: 4.9,
      duration: "20-30 min", 
      skills: ["Flexbox", "CSS", "Layout"],
      color: "yellow" as const,
      icon: <Code2 className="w-6 h-6" />,
      completed: true
    }
  ]

  const categories = ["all", "Programming", "Web Design", "Web Development", "Algorithms", "Debugging"]

  const filteredGames = selectedCategory === "all" 
    ? games 
    : games.filter(game => game.category === selectedCategory)

  const completedGames = games.filter(game => game.completed).length
  const totalPlayers = games.reduce((sum, game) => sum + game.players, 0)
  const avgRating = (games.reduce((sum, game) => sum + game.rating, 0) / games.length).toFixed(1)

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

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Coding Games</h1>
          <p className="text-muted-foreground">
            Learn programming through fun and interactive games
          </p>
        </div>
        <Button>
          <Gamepad2 className="w-4 h-4 mr-2" />
          Create Game
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-education-blue" />
              <div>
                <p className="text-2xl font-bold">{games.length}</p>
                <p className="text-sm text-muted-foreground">Available Games</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-education-green" />
              <div>
                <p className="text-2xl font-bold">{completedGames}</p>
                <p className="text-sm text-muted-foreground">Games Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-education-orange" />
              <div>
                <p className="text-2xl font-bold">{totalPlayers.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Players</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-education-purple" />
              <div>
                <p className="text-2xl font-bold">{avgRating}</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "All Games" : category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Games Completed</span>
              <span className="font-medium">{completedGames} / {games.length}</span>
            </div>
            <Progress value={(completedGames / games.length) * 100} className="h-3" />
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Keep playing to unlock new challenges! 🎮
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Games Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredGames.map((game) => (
          <Card key={game.id} className={`${colorVariants[game.color]} hover:shadow-lg transition-all group relative overflow-hidden`}>
            {game.completed && (
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-education-green text-white">
                  ✓ Completed
                </Badge>
              </div>
            )}
            
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-xl bg-background ${iconColors[game.color]}`}>
                  {game.icon}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{game.rating}</span>
                </div>
              </div>
              <CardTitle className="text-lg">{game.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{game.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <Badge variant="outline">{game.difficulty}</Badge>
                <Badge variant="secondary">{game.category}</Badge>
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{game.players} players</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{game.duration}</span>
                </div>
              </div>
              
              <div className="flex gap-1 flex-wrap">
                {game.skills.slice(0, 3).map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <Button 
                className="w-full group-hover:scale-105 transition-transform" 
                variant={game.completed ? "outline" : "default"}
              >
                <Play className="w-4 h-4 mr-2" />
                {game.completed ? "Play Again" : "Start Game"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Gamepad2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No games found</h3>
            <p className="text-muted-foreground">Try selecting a different category</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Games