import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  UserCheck, 
  UserX, 
  AlertTriangle,
  CheckCircle,
  Settings,
  BarChart3
} from "lucide-react";
import Header from "@/components/Header";

const AdminDashboard = () => {
  const stats = [
    { label: "Total Users", value: "12,548", icon: Users, change: "+12%", color: "text-blue-600" },
    { label: "Revenue (This Month)", value: "₹2,45,600", icon: DollarSign, change: "+18%", color: "text-green-600" },
    { label: "Sessions Completed", value: "8,432", icon: Clock, change: "+15%", color: "text-purple-600" },
    { label: "Platform Rating", value: "4.8/5", icon: TrendingUp, change: "+0.2", color: "text-yellow-600" }
  ];

  const pendingMentors = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Google",
      experience: "5 years",
      role: "Senior Software Engineer",
      appliedDate: "Dec 15, 2024",
      status: "pending"
    },
    {
      id: 2,
      name: "Anjali Singh",
      company: "Microsoft",
      experience: "7 years", 
      role: "Product Manager",
      appliedDate: "Dec 14, 2024",
      status: "pending"
    },
    {
      id: 3,
      name: "Karthik Nair",
      company: "Amazon",
      experience: "4 years",
      role: "Data Scientist", 
      appliedDate: "Dec 13, 2024",
      status: "pending"
    }
  ];

  const recentActivity = [
    {
      type: "mentor_approved",
      message: "Mentor application approved: Priya Sharma (Meta)",
      time: "2 hours ago"
    },
    {
      type: "dispute",
      message: "Dispute reported: Session #12345",
      time: "4 hours ago"
    },
    {
      type: "payment",
      message: "Payment processed: ₹2,400 to mentor Rahul Kumar",
      time: "6 hours ago"
    },
    {
      type: "user_signup",
      message: "New student registration: Arjun Mehta (IIT Delhi)",
      time: "8 hours ago"
    }
  ];

  const topMentors = [
    {
      name: "Priya Sharma",
      company: "Google", 
      sessions: 45,
      rating: 4.9,
      earnings: "₹18,500"
    },
    {
      name: "Rahul Kumar", 
      company: "Microsoft",
      sessions: 38,
      rating: 4.8,
      earnings: "₹15,200"
    },
    {
      name: "Ananya Patel",
      company: "Amazon",
      sessions: 42,
      rating: 4.9,
      earnings: "₹16,800"
    }
  ];

  const handleMentorAction = (mentorId: number, action: 'approve' | 'reject') => {
    console.log(`${action} mentor with ID: ${mentorId}`);
    // Handle mentor approval/rejection logic
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Monitor and manage the AptTechConnect platform</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {stat.change}
                        </Badge>
                      </div>
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className={`w-4 h-4 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Pending Mentor Applications */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <UserCheck className="w-5 h-5" />
                      Pending Mentor Applications
                    </CardTitle>
                    <Badge variant="destructive">{pendingMentors.length} Pending</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingMentors.map((mentor) => (
                      <div key={mentor.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{mentor.name}</h4>
                            <p className="text-sm text-muted-foreground">{mentor.role} at {mentor.company}</p>
                            <p className="text-sm text-muted-foreground">{mentor.experience} • Applied {mentor.appliedDate}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="success"
                            onClick={() => handleMentorAction(mentor.id, 'approve')}
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => handleMentorAction(mentor.id, 'reject')}
                          >
                            <UserX className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Performing Mentors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Top Performing Mentors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topMentors.map((mentor, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-primary">#{index + 1}</span>
                          </div>
                          <Avatar>
                            <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{mentor.name}</h4>
                            <p className="text-sm text-muted-foreground">{mentor.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{mentor.sessions} Sessions</p>
                          <p className="text-sm text-muted-foreground">Rating: {mentor.rating}/5</p>
                          <p className="text-sm text-success font-medium">{mentor.earnings}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" variant="hero">
                    <Settings className="w-4 h-4 mr-2" />
                    Platform Settings
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Manage Users
                  </Button>
                  <Button className="w-full" variant="outline">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Payment Reports
                  </Button>
                  <Button className="w-full" variant="outline">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Analytics
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          activity.type === 'mentor_approved' ? 'bg-success' :
                          activity.type === 'dispute' ? 'bg-destructive' :
                          activity.type === 'payment' ? 'bg-primary' :
                          'bg-secondary'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm">{activity.message}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Platform Health */}
              <Card>
                <CardHeader>
                  <CardTitle>Platform Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">System Status</span>
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        All Systems Operational
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Active Users</span>
                      <span className="font-medium">2,847</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Server Load</span>
                      <span className="font-medium">68%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Response Time</span>
                      <span className="font-medium">127ms</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <p className="text-sm font-medium">High Booking Volume</p>
                      <p className="text-xs text-muted-foreground">25% increase in bookings today</p>
                    </div>
                    <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <p className="text-sm font-medium">New Payment Method</p>
                      <p className="text-xs text-muted-foreground">UPI integration completed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;