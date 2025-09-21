import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { useLocation } from "react-router-dom"
import Dashboard from "./Dashboard"
import Courses from "./Courses"
import Students from "./Students"
import CodeEditor from "./CodeEditor"
import Games from "./Games"
import Leaderboard from "./Leaderboard"
import Settings from "./Settings"

const Index = () => {
  const location = useLocation()
  const currentPath = location.pathname

  const renderPage = () => {
    switch (currentPath) {
      case '/courses':
        return <Courses />
      case '/students':
        return <Students />
      case '/editor':
        return <CodeEditor />
      case '/games':
        return <Games />
      case '/leaderboard':
        return <Leaderboard />
      case '/admin/users':
        return <Students />
      case '/settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1">
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center px-4">
              <SidebarTrigger />
              <div className="ml-auto flex items-center space-x-4">
                <div className="text-sm">
                  <span className="text-muted-foreground">Welcome back,</span>
                  <span className="font-medium ml-1">Teacher</span>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1">
            {renderPage()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
