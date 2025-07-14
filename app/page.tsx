import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Waves, Users, Trophy, Calendar, MapPin, Clock, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SwimClubLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-400 p-2 rounded-full">
                <Waves className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold">SJSU Swim Club</h1>
                <p className="text-sm text-blue-100">Spartan Aquatics</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="hover:text-yellow-300 transition-colors">
                Home
              </Link>
              <Link href="#about" className="hover:text-yellow-300 transition-colors">
                About
              </Link>
              <Link href="#events" className="hover:text-yellow-300 transition-colors">
                Events
              </Link>
              <Link href="#join" className="hover:text-yellow-300 transition-colors">
                Join
              </Link>
              <Link href="#contact" className="hover:text-yellow-300 transition-colors">
                Contact
              </Link>
            </nav>
            <Button className="bg-yellow-400 text-blue-600 hover:bg-yellow-300 font-semibold">Join Now</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-400 text-blue-600 mb-4 text-sm font-semibold">San Jose State University</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
              Welcome to the
              <span className="block text-yellow-500">SJSU Swim Club</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Dive into excellence with the Spartan Swim Club. Whether you're a beginner or competitive swimmer, join
              our community of passionate athletes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Join the Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Swimming pool with lanes underwater view"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-blue-600/20"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join SJSU Swim Club?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of being part of our vibrant swimming community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Join a supportive community of swimmers at all skill levels. Make lifelong friendships and training
                  partners.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Competition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Participate in local and regional competitions. Push your limits and achieve personal bests.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Professional coaching and structured training programs designed to improve your technique and
                  endurance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Join the Spartan Swim Club</h2>
              <p className="text-xl text-blue-100 mb-8">
                Ready to make a splash? Join our team and start your swimming journey with us. We welcome swimmers of
                all levels and provide the support you need to succeed.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span>Flexible training schedules</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-yellow-400" />
                  <span>All skill levels welcome</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="h-5 w-5 text-yellow-400" />
                  <span>Competitive opportunities</span>
                </div>
              </div>
              <Button size="lg" className="bg-yellow-400 text-blue-600 hover:bg-yellow-300 font-semibold px-8 py-3">
                Join Us Today
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Swimming pool facility"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Stay updated with our latest activities and competitions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-100 text-blue-600">Competition</Badge>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-lg">Regional Championships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Join us for the annual regional swimming championships. All team members are encouraged to
                  participate.
                </CardDescription>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Aquatic Center
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-100 text-green-600">Training</Badge>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-lg">Technique Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Special workshop focusing on stroke technique and breathing patterns for all skill levels.
                </CardDescription>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Pool Deck
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-yellow-100 text-yellow-600">Social</Badge>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-lg">Team BBQ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  End of season celebration with food, games, and team bonding activities for all members.
                </CardDescription>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Campus Quad
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Have questions? We'd love to hear from you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>swimclub@sjsu.edu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>(408) 924-SWIM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>
                    SJSU Aquatic Center
                    <br />
                    San Jose, CA 95192
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Practice Schedule</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray-600">6:00 AM - 8:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray-600">5:00 PM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span className="text-gray-600">8:00 AM - 10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-gray-600">Rest Day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-yellow-400 p-2 rounded-full">
                <Waves className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold">SJSU Swim Club</h3>
                <p className="text-sm text-blue-100">Spartan Aquatics</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-blue-100">© 2024 San Jose State University Swim Club. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
