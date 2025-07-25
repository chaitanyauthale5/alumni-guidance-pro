import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Clock, DollarSign, Users, Star, TrendingUp, Video, MessageSquare } from "lucide-react";
import Header from "@/components/Header";

const MentorDashboard = () => {
  const todaySessions = [
    {
      id: 1,
      student: "Arjun Mehta",
      time: "2:00 PM",
      duration: "45 min",
      type: "Video Call",
      topic: "React Interview Preparation",
      amount: 120
    },
    {
      id: 2,
      student: "Sneha Patel",
      time: "4:30 PM", 
      duration: "30 min",
      type: "Chat",
      topic: "Career Guidance",
      amount: 90
    }
  ];

  const upcomingBookings = [
    {
      id: 1,
      student: "Vikash Kumar",
      date: "Tomorrow",
      time: "10:00 AM",
      topic: "Frontend Development Path"
    },
    {
      id: 2,
      student: "Priya Sharma",
      date: "Dec 28",
      time: "3:00 PM", 
      topic: "System Design Basics"
    }
  ];

  const stats = [
    { label: "Total Earnings", value: "₹24,500", icon: DollarSign, color: "text-green-600" },
    { label: "Sessions This Month", value: "28", icon: Video, color: "text-blue-600" },
    { label: "Students Helped", value: "145", icon: Users, color: "text-purple-600" },
    { label: "Average Rating", value: "4.9", icon: Star, color: "text-yellow-600" }
  ];

  const recentReviews = [
    {
      student: "Arjun M.",
      rating: 5,
      comment: "Excellent guidance on system design concepts. Very clear explanations!",
      date: "2 days ago"
    },
    {
      student: "Sneha P.",
      rating: 5,
      comment: "Really helpful session on career planning. Highly recommend!",
      date: "1 week ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, Priya!</h1>
            <p className="text-muted-foreground">Here's how your mentoring is going</p>
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
                        <IconComponent className={`w-4 h-4 ${stat.color}`} />
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
              {/* Today's Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Today's Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {todaySessions.length > 0 ? (
                    <div className="space-y-4">
                      {todaySessions.map((session) => (
                        <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarFallback>{session.student.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{session.student}</h4>
                              <p className="text-sm text-muted-foreground">{session.topic}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge variant="outline">{session.type}</Badge>
                                <span className="text-sm text-muted-foreground">{session.duration}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{session.time}</p>
                            <p className="text-sm text-success font-medium">₹{session.amount}</p>
                            <Button size="sm" className="mt-2">Start Session</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No sessions scheduled for today</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recent Reviews */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Recent Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReviews.map((review, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="text-xs">{review.student.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{review.student}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
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
                  <Button className="w-full" variant="hero">Update Availability</Button>
                  <Button className="w-full" variant="outline">Edit Profile</Button>
                  <Button className="w-full" variant="outline">View Analytics</Button>
                  <Button className="w-full" variant="outline">Withdraw Earnings</Button>
                </CardContent>
              </Card>

              {/* Upcoming Bookings */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingBookings.map((booking) => (
                      <div key={booking.id} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-sm">{booking.student}</h4>
                          <Badge variant="secondary" className="text-xs">{booking.date}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{booking.topic}</p>
                        <p className="text-xs text-muted-foreground">{booking.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>This Month's Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Sessions Goal</span>
                        <span>28/30</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '93%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Rating Maintenance</span>
                        <span>4.9/5.0</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-success h-2 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Earnings Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Earnings Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">This Month</span>
                      <span className="font-medium">₹8,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Pending</span>
                      <span className="font-medium">₹2,100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Available</span>
                      <span className="font-medium text-success">₹14,000</span>
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

export default MentorDashboard;