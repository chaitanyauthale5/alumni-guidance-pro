import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Star, TrendingUp, Users, BookOpen, MessageSquare } from "lucide-react";
import Header from "@/components/Header";

const StudentDashboard = () => {
  const upcomingSessions = [
    {
      id: 1,
      mentor: "Priya Sharma",
      company: "Google",
      time: "Today, 3:00 PM",
      duration: "45 min",
      type: "Video Call",
      topic: "System Design Interview Prep"
    },
    {
      id: 2,
      mentor: "Rahul Kumar",
      company: "Microsoft",
      time: "Tomorrow, 10:00 AM",
      duration: "30 min",
      type: "Chat",
      topic: "Product Management Career Path"
    }
  ];

  const recentSessions = [
    {
      id: 1,
      mentor: "Ananya Patel",
      company: "Amazon",
      date: "Yesterday",
      rating: 5,
      feedback: "Excellent session on data science interview preparation"
    },
    {
      id: 2,
      mentor: "Vikram Singh",
      company: "Flipkart",
      date: "3 days ago", 
      rating: 4,
      feedback: "Great insights on frontend development trends"
    }
  ];

  const stats = [
    { label: "Sessions Completed", value: "12", icon: Clock },
    { label: "Hours Learned", value: "18", icon: BookOpen },
    { label: "Mentors Connected", value: "8", icon: Users },
    { label: "Average Rating", value: "4.8", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, Arjun!</h1>
            <p className="text-muted-foreground">Ready to continue your learning journey?</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
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
              {/* Upcoming Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Upcoming Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingSessions.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingSessions.map((session) => (
                        <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarFallback>{session.mentor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{session.mentor}</h4>
                              <p className="text-sm text-muted-foreground">{session.company}</p>
                              <p className="text-sm text-muted-foreground">{session.topic}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{session.time}</p>
                            <p className="text-sm text-muted-foreground">{session.duration} • {session.type}</p>
                            <Button size="sm" className="mt-2">Join Session</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No upcoming sessions</p>
                      <Button className="mt-4">Book a Session</Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recent Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Recent Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>{session.mentor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{session.mentor}</h4>
                            <p className="text-sm text-muted-foreground">{session.company} • {session.date}</p>
                            <p className="text-sm">{session.feedback}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
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
                  <Button className="w-full" variant="hero">Find Mentors</Button>
                  <Button className="w-full" variant="outline">Schedule Session</Button>
                  <Button className="w-full" variant="outline">View Profile</Button>
                  <Button className="w-full" variant="outline">Settings</Button>
                </CardContent>
              </Card>

              {/* Recommended Mentors */}
              <Card>
                <CardHeader>
                  <CardTitle>Recommended for You</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Amit Sharma</h4>
                        <p className="text-xs text-muted-foreground">Senior SDE at Meta</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs">4.9</span>
                          <Badge variant="secondary" className="text-xs">₹120/min</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>SK</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Sneha Kapoor</h4>
                        <p className="text-xs text-muted-foreground">PM at Zomato</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs">4.8</span>
                          <Badge variant="secondary" className="text-xs">₹180/min</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Learning Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Interview Prep</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>System Design</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
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

export default StudentDashboard;