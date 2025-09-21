import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { 
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Monitor,
  Save,
  Upload,
  Mail,
  Globe
} from "lucide-react"

const Settings = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and platform settings
          </p>
        </div>
        <Button>
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Information
              </CardTitle>
              <CardDescription>
                Update your personal information and profile settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-education-blue/10 text-education-blue text-xl">
                    TC
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-xs text-muted-foreground mt-1">
                    JPG, PNG up to 2MB
                  </p>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Teacher" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="CodeLearn" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="teacher@codelearn.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell us about yourself..."
                  defaultValue="Passionate coding instructor helping students learn programming through interactive lessons and games."
                />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="Nairobi, Kenya" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" placeholder="https://yourwebsite.com" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Course Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified about new courses and updates
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Student Progress</Label>
                  <p className="text-sm text-muted-foreground">
                    Notifications about student achievements
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Weekly Reports</Label>
                  <p className="text-sm text-muted-foreground">
                    Weekly summary of platform activity
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage your account security and privacy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" placeholder="Enter current password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" placeholder="Enter new password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Enable 2FA
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="grid gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <Monitor className="w-4 h-4 mr-2" />
                    System
                  </Button>
                  <Button variant="ghost" size="sm" className="justify-start">
                    Light
                  </Button>
                  <Button variant="ghost" size="sm" className="justify-start">
                    Dark
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Animations</Label>
                  <p className="text-xs text-muted-foreground">
                    Enable UI animations
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="w-5 h-5" />
                Platform Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Input id="language" defaultValue="English" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input id="timezone" defaultValue="Africa/Nairobi" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-save</Label>
                  <p className="text-xs text-muted-foreground">
                    Automatically save progress
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-education-green">Active</Badge>
                <span className="text-sm">Premium Plan</span>
              </div>
              
              <div className="text-sm space-y-1">
                <p className="text-muted-foreground">Member since</p>
                <p className="font-medium">January 2024</p>
              </div>
              
              <div className="text-sm space-y-1">
                <p className="text-muted-foreground">Last login</p>
                <p className="font-medium">2 hours ago</p>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </CardContent>
          </Card>

          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" size="sm" className="w-full">
                Delete Account
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                This action cannot be undone
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Settings