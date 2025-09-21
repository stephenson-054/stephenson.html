import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { 
  Search,
  UserPlus,
  Users,
  GraduationCap,
  Trophy,
  Clock,
  Mail,
  Phone,
  MapPin
} from "lucide-react"

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "/placeholder.svg",
      course: "JavaScript ES6+",
      progress: 85,
      joinDate: "Jan 2024",
      status: "Active",
      completedCourses: 3,
      totalHours: 125,
      location: "Nairobi, Kenya"
    },
    {
      id: 2,
      name: "Bob Smith", 
      email: "bob@example.com",
      avatar: "/placeholder.svg",
      course: "React Development",
      progress: 65,
      joinDate: "Feb 2024",
      status: "Active",
      completedCourses: 2,
      totalHours: 98,
      location: "Mombasa, Kenya"
    },
    {
      id: 3,
      name: "Carol Wilson",
      email: "carol@example.com", 
      avatar: "/placeholder.svg",
      course: "CSS Styling",
      progress: 92,
      joinDate: "Dec 2023",
      status: "Active",
      completedCourses: 4,
      totalHours: 156,
      location: "Kisumu, Kenya"
    },
    {
      id: 4,
      name: "David Brown",
      email: "david@example.com",
      avatar: "/placeholder.svg", 
      course: "Game Development",
      progress: 45,
      joinDate: "Mar 2024",
      status: "Active",
      completedCourses: 1,
      totalHours: 67,
      location: "Eldoret, Kenya"
    },
    {
      id: 5,
      name: "Emma Davis",
      email: "emma@example.com",
      avatar: "/placeholder.svg",
      course: "Python Programming", 
      progress: 78,
      joinDate: "Jan 2024",
      status: "Active",
      completedCourses: 2,
      totalHours: 134,
      location: "Nakuru, Kenya"
    },
    {
      id: 6,
      name: "Frank Miller",
      email: "frank@example.com",
      avatar: "/placeholder.svg",
      course: "AI & Machine Learning",
      progress: 23,
      joinDate: "Apr 2024", 
      status: "Inactive",
      completedCourses: 0,
      totalHours: 34,
      location: "Thika, Kenya"
    }
  ]

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const activeStudents = students.filter(s => s.status === "Active").length
  const totalHours = students.reduce((sum, s) => sum + s.totalHours, 0)
  const avgProgress = Math.round(students.reduce((sum, s) => sum + s.progress, 0) / students.length)

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Students</h1>
          <p className="text-muted-foreground">
            Monitor student progress and engagement
          </p>
        </div>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          Add Student
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-education-blue" />
              <div>
                <p className="text-2xl font-bold">{students.length}</p>
                <p className="text-sm text-muted-foreground">Total Students</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-education-green" />
              <div>
                <p className="text-2xl font-bold">{activeStudents}</p>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-education-orange" />
              <div>
                <p className="text-2xl font-bold">{avgProgress}%</p>
                <p className="text-sm text-muted-foreground">Avg Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-education-purple" />
              <div>
                <p className="text-2xl font-bold">{totalHours}</p>
                <p className="text-sm text-muted-foreground">Total Hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search students by name, email, or course..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
      </Card>

      {/* Students List */}
      <div className="grid gap-4">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={student.avatar} />
                    <AvatarFallback className="bg-education-blue/10 text-education-blue">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{student.name}</h3>
                      <Badge variant={student.status === "Active" ? "default" : "secondary"}>
                        {student.status}
                      </Badge>
                    </div>
                    
                    <div className="grid gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        {student.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        {student.location}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm">
                      <div>
                        <span className="text-muted-foreground">Current Course: </span>
                        <span className="font-medium">{student.course}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Joined: </span>
                        <span className="font-medium">{student.joinDate}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Course Progress</span>
                        <span className="font-medium">{student.progress}%</span>
                      </div>
                      <Progress value={student.progress} className="h-2" />
                    </div>
                  </div>
                </div>
                
                <div className="text-right space-y-2">
                  <div className="text-sm">
                    <div className="text-muted-foreground">Completed</div>
                    <div className="font-semibold text-education-green">{student.completedCourses} courses</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-muted-foreground">Study Time</div>
                    <div className="font-semibold text-education-purple">{student.totalHours}h</div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No students found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Students