import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Building, Clock, Filter, Search } from "lucide-react";
import Header from "@/components/Header";

const FindMentors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Mock mentor data
  const mentors = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Software Engineer",
      company: "Google",
      experience: "5 years",
      rating: 4.9,
      reviews: 127,
      price: 150,
      avatar: "/placeholder.svg",
      skills: ["React", "System Design", "Interview Prep"],
      location: "Bangalore"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Product Manager",
      company: "Microsoft",
      experience: "7 years",
      rating: 4.8,
      reviews: 89,
      price: 200,
      avatar: "/placeholder.svg",
      skills: ["Product Strategy", "Market Research", "Leadership"],
      location: "Hyderabad"
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Data Scientist",
      company: "Amazon",
      experience: "4 years",
      rating: 4.9,
      reviews: 156,
      price: 180,
      avatar: "/placeholder.svg",
      skills: ["Machine Learning", "Python", "Analytics"],
      location: "Mumbai"
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Frontend Developer",
      company: "Flipkart",
      experience: "6 years",
      rating: 4.7,
      reviews: 94,
      price: 120,
      avatar: "/placeholder.svg",
      skills: ["JavaScript", "Vue.js", "UI/UX"],
      location: "Delhi"
    },
    {
      id: 5,
      name: "Shreya Gupta",
      role: "DevOps Engineer",
      company: "Zomato",
      experience: "5 years",
      rating: 4.8,
      reviews: 73,
      price: 140,
      avatar: "/placeholder.svg",
      skills: ["AWS", "Docker", "Kubernetes"],
      location: "Pune"
    },
    {
      id: 6,
      name: "Arjun Reddy",
      role: "Backend Developer",
      company: "Paytm",
      experience: "8 years",
      rating: 4.9,
      reviews: 112,
      price: 160,
      avatar: "/placeholder.svg",
      skills: ["Node.js", "MongoDB", "Microservices"],
      location: "Bangalore"
    }
  ];

  const companies = ["Google", "Microsoft", "Amazon", "Flipkart", "Zomato", "Paytm"];
  const roles = ["Software Engineer", "Product Manager", "Data Scientist", "Frontend Developer", "DevOps Engineer", "Backend Developer"];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCompany = !selectedCompany || mentor.company === selectedCompany;
    const matchesRole = !selectedRole || mentor.role.toLowerCase().includes(selectedRole.toLowerCase());
    const matchesPrice = !priceRange || 
                        (priceRange === "under-100" && mentor.price < 100) ||
                        (priceRange === "100-150" && mentor.price >= 100 && mentor.price <= 150) ||
                        (priceRange === "150-200" && mentor.price >= 150 && mentor.price <= 200) ||
                        (priceRange === "above-200" && mentor.price > 200);
    
    return matchesSearch && matchesCompany && matchesRole && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Mentor</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with industry experts from top companies and accelerate your career growth
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card rounded-lg p-6 shadow-soft mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by name, role, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                <SelectTrigger>
                  <SelectValue placeholder="Company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Companies</SelectItem>
                  {companies.map(company => (
                    <SelectItem key={company} value={company}>{company}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Roles</SelectItem>
                  {roles.map(role => (
                    <SelectItem key={role} value={role}>{role}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Prices</SelectItem>
                  <SelectItem value="under-100">Under ₹100/min</SelectItem>
                  <SelectItem value="100-150">₹100-150/min</SelectItem>
                  <SelectItem value="150-200">₹150-200/min</SelectItem>
                  <SelectItem value="above-200">Above ₹200/min</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing {filteredMentors.length} mentor{filteredMentors.length !== 1 ? 's' : ''}
            </p>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Mentors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => (
              <Card key={mentor.id} className="hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={mentor.avatar} alt={mentor.name} />
                      <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg leading-tight">{mentor.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{mentor.role}</p>
                      <div className="flex items-center mt-1">
                        <Building className="w-3 h-3 mr-1 text-primary" />
                        <span className="text-sm font-medium text-primary">{mentor.company}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                        <span className="font-medium">{mentor.rating}</span>
                        <span className="text-sm text-muted-foreground">({mentor.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3 mr-1" />
                        {mentor.location}
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {mentor.experience} experience
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {mentor.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <span className="text-2xl font-bold text-primary">₹{mentor.price}</span>
                        <span className="text-sm text-muted-foreground">/min</span>
                      </div>
                      <Link to={`/mentor/${mentor.id}`}>
                        <Button variant="professional" size="sm">
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredMentors.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No mentors found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or browse all mentors
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCompany("");
                  setSelectedRole("");
                  setPriceRange("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindMentors;