import { useState } from "react"
import { CourseCard } from "@/components/CourseCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search,
  Plus,
  Code2,
  Palette,
  Smartphone,
  Gamepad2,
  Brain,
  Zap,
  Database,
  Globe
} from "lucide-react"

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const allCourses = [
    {
      title: "HTML Fundamentals",
      description: "Learn the building blocks of web development with semantic HTML",
      progress: 75,
      students: 234,
      duration: "4 weeks",
      difficulty: "Beginner" as const,
      color: "orange" as const,
      icon: <Code2 className="w-6 h-6" />,
      category: "Web Development"
    },
    {
      title: "CSS Styling & Flexbox",
      description: "Master modern CSS including Flexbox, Grid, and animations",
      progress: 45,
      students: 189,
      duration: "6 weeks", 
      difficulty: "Beginner" as const,
      color: "blue" as const,
      icon: <Palette className="w-6 h-6" />,
      category: "Web Development"
    },
    {
      title: "JavaScript ES6+",
      description: "Modern JavaScript programming with ES6+ features",
      progress: 20,
      students: 156,
      duration: "8 weeks",
      difficulty: "Intermediate" as const,
      color: "yellow" as const,
      icon: <Zap className="w-6 h-6" />,
      category: "Programming"
    },
    {
      title: "React Development",
      description: "Build dynamic user interfaces with React components",
      students: 98,
      duration: "10 weeks",
      difficulty: "Intermediate" as const,
      color: "blue" as const,
      icon: <Code2 className="w-6 h-6" />,
      category: "Frontend"
    },
    {
      title: "Mobile App Development",
      description: "Create native mobile applications for Android and iOS",
      students: 67,
      duration: "12 weeks",
      difficulty: "Advanced" as const,
      color: "green" as const,
      icon: <Smartphone className="w-6 h-6" />,
      category: "Mobile Development"
    },
    {
      title: "Game Development Unity",
      description: "Create 2D and 3D games using Unity engine",
      students: 145,
      duration: "10 weeks", 
      difficulty: "Intermediate" as const,
      color: "purple" as const,
      icon: <Gamepad2 className="w-6 h-6" />,
      category: "Game Development"
    },
    {
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts",
      students: 203,
      duration: "8 weeks",
      difficulty: "Beginner" as const,
      color: "green" as const,
      icon: <Code2 className="w-6 h-6" />,
      category: "Programming"
    },
    {
      title: "Database Design & SQL",
      description: "Master database concepts and SQL querying",
      students: 89,
      duration: "6 weeks",
      difficulty: "Intermediate" as const,
      color: "orange" as const,
      icon: <Database className="w-6 h-6" />,
      category: "Backend"
    },
    {
      title: "AI & Machine Learning",
      description: "Introduction to artificial intelligence and ML algorithms",
      students: 78,
      duration: "14 weeks",
      difficulty: "Advanced" as const,
      color: "pink" as const,
      icon: <Brain className="w-6 h-6" />,
      category: "AI/ML"
    }
  ]

  const filteredCourses = allCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categories = ["All", "Web Development", "Programming", "Mobile Development", "Game Development", "Frontend", "Backend", "AI/ML"]

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-muted-foreground">
            Explore our comprehensive coding curriculum
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Course
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search courses or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Course Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-education-blue" />
              <div>
                <p className="text-2xl font-bold">{allCourses.length}</p>
                <p className="text-sm text-muted-foreground">Total Courses</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-education-green" />
              <div>
                <p className="text-2xl font-bold">{allCourses.filter(c => c.progress).length}</p>
                <p className="text-sm text-muted-foreground">Active Enrollments</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-education-purple" />
              <div>
                <p className="text-2xl font-bold">{allCourses.reduce((sum, c) => sum + c.students, 0)}</p>
                <p className="text-sm text-muted-foreground">Total Students</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Courses Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Courses