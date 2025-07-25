import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Star, 
  MapPin, 
  Building, 
  Calendar,
  Clock,
  Video,
  MessageSquare,
  ArrowLeft,
  CheckCircle,
  Award,
  Users,
  TrendingUp
} from "lucide-react";
import Header from "@/components/Header";

const MentorProfile = () => {
  const { id } = useParams();
  
  // Mock mentor data - in real app, fetch based on id
  const mentor = {
    id: 1,
    name: "Priya Sharma",
    role: "Senior Software Engineer",
    company: "Google",
    experience: "5 years",
    rating: 4.9,
    reviews: 127,
    totalSessions: 245,
    responseTime: "Usually responds within 2 hours",
    price: 150,
    avatar: "/placeholder.svg",
    skills: ["React", "System Design", "Interview Prep", "JavaScript", "Node.js", "MongoDB"],
    location: "Bangalore, India",
    languages: ["English", "Hindi", "Kannada"],
    bio: "Passionate software engineer with 5+ years of experience at Google. I specialize in frontend development, system design, and helping students crack technical interviews. I've mentored 200+ students and helped them land jobs at top tech companies.",
    education: [
      { degree: "B.Tech Computer Science", institution: "IIT Bangalore", year: "2018" },
      { degree: "M.Tech Software Engineering", institution: "IISc Bangalore", year: "2020" }
    ],
    workExperience: [
      { role: "Senior Software Engineer", company: "Google", duration: "2022 - Present" },
      { role: "Software Engineer", company: "Microsoft", duration: "2020 - 2022" },
      { role: "Intern", company: "Amazon", duration: "2019 - 2020" }
    ],
    specializations: [
      "Technical Interview Preparation",
      "System Design for Beginners", 
      "React & Frontend Development",
      "Career Guidance for Software Engineers"
    ],
    achievements: [
      "Top 1% Mentor on AptTechConnect",
      "Helped 50+ students get placed in FAANG",
      "Average rating of 4.9/5 across 127 reviews",
      "Expert in System Design interviews"
    ],
    availability: [
      { day: "Monday", slots: ["10:00 AM", "2:00 PM", "6:00 PM"] },
      { day: "Tuesday", slots: ["11:00 AM", "3:00 PM"] },
      { day: "Wednesday", slots: ["10:00 AM", "4:00 PM", "7:00 PM"] },
      { day: "Thursday", slots: ["2:00 PM", "5:00 PM"] },
      { day: "Friday", slots: ["10:00 AM", "6:00 PM"] }
    ]
  };

  const reviews = [
    {
      id: 1,
      student: "Arjun M.",
      rating: 5,
      comment: "Excellent guidance on system design concepts. Priya explained everything clearly and provided practical examples. Highly recommend!",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      student: "Sneha P.",
      rating: 5,
      comment: "Amazing session on React interview preparation. She helped me understand complex concepts and I got the job! Thank you so much.",
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      student: "Vikash K.",
      rating: 4,
      comment: "Great mentor with deep knowledge. The session was very helpful for my frontend development journey.",
      date: "1 month ago",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/find-mentors"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Find Mentors
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Header */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-6">
                    <Avatar className="w-24 h-24">
                      <AvatarFallback className="text-2xl">{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h1 className="text-3xl font-bold mb-2">{mentor.name}</h1>
                          <p className="text-xl text-muted-foreground mb-2">{mentor.role}</p>
                          <div className="flex items-center space-x-4 mb-3">
                            <div className="flex items-center">
                              <Building className="w-4 h-4 mr-1 text-primary" />
                              <span className="font-medium text-primary">{mentor.company}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1 text-muted-foreground" />
                              <span className="text-muted-foreground">{mentor.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge className="bg-success/10 text-success border-success/20">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1 mb-1">
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            <span className="font-bold">{mentor.rating}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{mentor.reviews} reviews</p>
                        </div>
                        <div className="text-center">
                          <div className="font-bold mb-1">{mentor.totalSessions}</div>
                          <p className="text-xs text-muted-foreground">Sessions</p>
                        </div>
                        <div className="text-center">
                          <div className="font-bold mb-1">{mentor.experience}</div>
                          <p className="text-xs text-muted-foreground">Experience</p>
                        </div>
                        <div className="text-center">
                          <div className="font-bold mb-1 text-primary">₹{mentor.price}</div>
                          <p className="text-xs text-muted-foreground">per minute</p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">{mentor.responseTime}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">{mentor.bio}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.languages.map((language, index) => (
                          <Badge key={index} variant="secondary">{language}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Skills & Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.skills.map((skill, index) => (
                          <Badge key={index} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card>
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mentor.workExperience.map((exp, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium">{exp.role}</h4>
                          <p className="text-sm text-primary">{exp.company}</p>
                          <p className="text-xs text-muted-foreground">{exp.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specializations */}
              <Card>
                <CardHeader>
                  <CardTitle>Specializations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {mentor.specializations.map((spec, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Reviews ({mentor.reviews})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="text-xs">{review.student.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{review.student}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">Verified</Badge>
                            )}
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

            {/* Sidebar - Booking */}
            <div className="space-y-6">
              {/* Booking Card */}
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Book a Session</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-primary">₹{mentor.price}</div>
                    <div className="text-sm text-muted-foreground">per minute</div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Session Type</label>
                    <Select defaultValue="video">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">
                          <div className="flex items-center">
                            <Video className="w-4 h-4 mr-2" />
                            Video Call
                          </div>
                        </SelectItem>
                        <SelectItem value="chat">
                          <div className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Chat Only
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Duration</label>
                    <Select defaultValue="30">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes (₹2,250)</SelectItem>
                        <SelectItem value="30">30 minutes (₹4,500)</SelectItem>
                        <SelectItem value="45">45 minutes (₹6,750)</SelectItem>
                        <SelectItem value="60">60 minutes (₹9,000)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">What would you like to discuss?</label>
                    <Textarea 
                      placeholder="Brief description of what you'd like to learn or discuss..."
                      rows={3}
                    />
                  </div>

                  <Separator />

                  <Button className="w-full" variant="hero" size="lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Session
                  </Button>
                  
                  <Button className="w-full" variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    You can cancel or reschedule up to 24 hours before the session
                  </p>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mentor.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm">Students Helped</span>
                      </div>
                      <span className="font-medium">200+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-success" />
                        <span className="text-sm">Success Rate</span>
                      </div>
                      <span className="font-medium">95%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span className="text-sm">Avg Response</span>
                      </div>
                      <span className="font-medium">2 hours</span>
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

export default MentorProfile;