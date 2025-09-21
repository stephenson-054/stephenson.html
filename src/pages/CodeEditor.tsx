import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { 
  Play,
  Save,
  Download,
  Upload,
  Code2,
  Eye,
  RotateCcw,
  FileText,
  Lightbulb
} from "lucide-react"

const CodeEditor = () => {
  const [activeTab, setActiveTab] = useState("html")
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to CodeLearn!</h1>
    <p>Start coding and see your results instantly.</p>
    
    <div class="container">
        <button onclick="sayHello()">Click Me!</button>
    </div>
</body>
</html>`)
  
  const [cssCode, setCssCode] = useState(`body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.container {
    text-align: center;
    margin-top: 50px;
}

button {
    background: #4CAF50;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
}

button:hover {
    background: #45a049;
    transform: scale(1.05);
}

h1 {
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}`)

  const [jsCode, setJsCode] = useState(`function sayHello() {
    alert("Hello from CodeLearn! 🎉");
    
    // Change button text after click
    const button = document.querySelector('button');
    button.textContent = "Clicked! ✅";
    
    // Add some animation
    button.style.animation = "bounce 0.5s ease";
}

// Add bounce animation
const style = document.createElement('style');
style.textContent = \`
@keyframes bounce {
    0%, 20%, 60%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    80% { transform: translateY(-5px); }
}
\`;
document.head.appendChild(style);

console.log("JavaScript loaded successfully! 🚀");`)

  const tabs = [
    { id: "html", label: "HTML", icon: <FileText className="w-4 h-4" /> },
    { id: "css", label: "CSS", icon: <Lightbulb className="w-4 h-4" /> },
    { id: "js", label: "JavaScript", icon: <Code2 className="w-4 h-4" /> }
  ]

  const getCurrentCode = () => {
    switch(activeTab) {
      case "html": return htmlCode
      case "css": return cssCode
      case "js": return jsCode
      default: return ""
    }
  }

  const setCurrentCode = (code: string) => {
    switch(activeTab) {
      case "html": setHtmlCode(code); break
      case "css": setCssCode(code); break
      case "js": setJsCode(code); break
    }
  }

  const generatePreview = () => {
    return `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode.replace('</body>', `<script>${jsCode}</script></body>`)}
        </body>
      </html>
    `
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Code Editor</h1>
          <p className="text-muted-foreground">
            Write, test, and run your code in real-time
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Import
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Save className="w-4 h-4 mr-2" />
            Save Project
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Code Editor Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Code Editor
              </CardTitle>
              <div className="flex gap-1">
                <Button variant="outline" size="sm">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
                <Button size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Run Code
                </Button>
              </div>
            </div>
            
            {/* Language Tabs */}
            <div className="flex gap-1 p-1 bg-muted rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="relative">
              <Badge 
                variant="secondary" 
                className="absolute top-2 right-2 z-10 bg-background/80 backdrop-blur-sm"
              >
                {activeTab.toUpperCase()}
              </Badge>
              <Textarea 
                value={getCurrentCode()}
                onChange={(e) => setCurrentCode(e.target.value)}
                className="min-h-[400px] font-mono text-sm bg-muted/50 resize-none"
                placeholder={`Enter your ${activeTab.toUpperCase()} code here...`}
              />
            </div>
            
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Lines: {getCurrentCode().split('\n').length}</span>
              <span>Characters: {getCurrentCode().length}</span>
            </div>
          </CardContent>
        </Card>

        {/* Preview Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Live Preview
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="border rounded-lg bg-white min-h-[400px] overflow-hidden">
              <iframe 
                srcDoc={generatePreview()}
                className="w-full h-[400px] border-0"
                title="Preview"
                sandbox="allow-scripts"
              />
            </div>
            
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">💡 Tips:</p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Changes are reflected in real-time</li>
                <li>• Use browser console (F12) for debugging</li>
                <li>• Try adding interactive elements with JavaScript</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Code Examples & Challenges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-education-blue/20 bg-education-blue/5">
              <CardContent className="p-4">
                <h4 className="font-semibold text-education-blue mb-2">HTML Basics</h4>
                <p className="text-sm text-muted-foreground mb-3">Learn semantic HTML structure</p>
                <Button variant="outline" size="sm" className="w-full">
                  Load Example
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-education-green/20 bg-education-green/5">
              <CardContent className="p-4">
                <h4 className="font-semibold text-education-green mb-2">CSS Animations</h4>
                <p className="text-sm text-muted-foreground mb-3">Create smooth animations</p>
                <Button variant="outline" size="sm" className="w-full">
                  Load Example
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-education-orange/20 bg-education-orange/5">
              <CardContent className="p-4">
                <h4 className="font-semibold text-education-orange mb-2">JS Interactions</h4>
                <p className="text-sm text-muted-foreground mb-3">Add dynamic behavior</p>
                <Button variant="outline" size="sm" className="w-full">
                  Load Example
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CodeEditor