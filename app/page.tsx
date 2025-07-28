"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Waves, Users, Trophy, Calendar, MapPin, Clock, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { events, Event } from "@/lib/events"

export default function SwimClubLanding() {
  useEffect(() => {
    // This is needed to prevent a horizontal scrollbar on mobile when using overflow-x-auto
    // on a grid that has min-width: 0 and max-width: none.
    // See https://stackoverflow.com/questions/64009700/overflow-x-auto-on-grid-with-min-width-0-and-max-width-none-causes-horizontal-scrollbar
    const updateGridWidth = () => {
      const grid = document.querySelector(
        ".md\\:grid-cols-2.lg\\:grid-cols-3.md\\:overflow-x-visible.hide-scrollbar"
      ) as HTMLElement | null;
      if (grid) {
        grid.style.width = "100%"; // Force grid to take full width
      }
    };

    updateGridWidth(); // Set initial width
    window.addEventListener("resize", updateGridWidth);
    return () => window.removeEventListener("resize", updateGridWidth);
  }, []);

  // Filter events to only show those in the future (not past the current day)
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to midnight for accurate comparison
  const futureEvents = events.filter((event: Event) => {
    // Parse event date as local midnight
    const [year, month, day] = event.date.split('-').map(Number);
    const eventDate = new Date(year, month - 1, day).setHours(0, 0, 0, 0);
    return eventDate >= today.getTime();
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-full">
                <Image
                  src="/San-Jose-State-Spartans-logo.png"
                  alt="SJSU Spartans Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
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
            <Link href="#join">
              <Button className="bg-yellow-400 text-blue-600 hover:bg-yellow-300 font-semibold">Join Now</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <Link href="https://www.sjsu.edu/" target="_blank" rel="noopener noreferrer">
              <Badge className="bg-yellow-400 text-blue-600 mb-4 text-sm font-semibold hover:bg-yellow-300 transition-colors cursor-pointer">San Jose State University</Badge>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
              Welcome to the
              <span className="block text-yellow-500">SJSU Swim Club</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Dive into excellence with the Spartan Swim Club. Whether you're a beginner or competitive swimmer, join
              our community of passionate athletes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#join">
                <Button size="lg" className="bg-[#0055a2] hover:bg-[#004278] text-white px-8 py-3">
                  Join the Team
                </Button>
              </Link>
              <Link href="#about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/AdobeStock_44759320.jpeg?height=400&width=800"
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
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4"> 
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join SJSU Swim Club?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of being part of our vibrant swimming community.
            </p>
            <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed tracking-tight max-w-3xl mx-auto mt-6 mb-2">
              Joining the <span className="font-semibold text-blue-700">SJSU Swim Club</span> is more than just swimming laps—it's about becoming part of a supportive and energetic community. Whether you're looking to compete at a high level, improve your fitness, or simply make new friends, our club offers opportunities for everyone. Experience the thrill of competition, the discipline of regular training, and the camaraderie that comes from being part of a team. As a student-athlete, you'll develop lifelong skills in <span className="font-semibold text-blue-700">leadership</span>, <span className="font-semibold text-blue-700">time management</span>, and <span className="font-semibold text-blue-700">teamwork</span>, all while making unforgettable memories in and out of the pool.
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

      {/* About the Coach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Your Coach</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Our head coach brings a wealth of experience and passion to the SJSU Swim Club. With over 15 years of swimming experience and 3 years as an age group coach, our coach is dedicated to helping every swimmer reach their full potential.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Experience & Credentials</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-semibold">•</span>
                      <span><strong>Age Group Coach:</strong> 3 years of coaching experience working with swimmers of all skill levels</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-semibold">•</span>
                      <span><strong>Swimming Experience:</strong> Over 15 years of competitive and recreational swimming</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-semibold">•</span>
                      <span><strong>Ironman 70.3 Competitor:</strong> Endurance athlete with experience in triathlon events</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-semibold">•</span>
                      <span><strong>Mikes Bikes Development Team:</strong> Elite cycling team athlete with cross-training expertise</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Coaching Philosophy</h3>
                  <p className="text-gray-600">
                    Our coach believes in developing well-rounded athletes through a combination of technical swimming skills, 
                    cross-training, and mental preparation. With experience in multiple endurance sports, our coach brings 
                    a unique perspective to swim training that emphasizes overall athletic development.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    "Whether you're a beginner learning the basics or an experienced swimmer looking to improve your times, 
                    I'm here to help you achieve your goals and develop a lifelong love for swimming."
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/Coach Photo.jpg"
                  alt="SJSU Swim Club Coach"
                  width={500}
                  height={600}
                  className="rounded-xl shadow-2xl object-cover w-full h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
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
                  <Clock className="h-10 w-10 text-yellow-400" />
                  <span>Flexible training schedules</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-10 w-10 text-yellow-400" />
                  <span>All skill levels welcome</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="h-10 w-10 text-yellow-400" />
                  <span>Competitive opportunities</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Swimming pool facility"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              /> */}
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeLwMwG72SDTj-mRY2yCt0Rbp7TPG1R_InMN6dcZ9BQr4cPaA/viewform?embedded=true" width="640" height="640">Loading…</iframe>            </div>
          </div>
        </div>
      </section>

      {/* Detailed Modules Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Three Core Pillars</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The SJSU Swim Club is built on three fundamental pillars that create a comprehensive swimming experience. 
              Each pillar is designed to develop different aspects of your swimming journey and personal growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Community Module */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Community</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  At the heart of our swim club is a vibrant, supportive community that welcomes swimmers of all skill levels. 
                  Whether you're a complete beginner or an experienced competitor, you'll find your place here.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">What You'll Experience:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Weekly team bonding activities and social events</li>
                    <li>• Mentorship programs pairing experienced swimmers with newcomers</li>
                    <li>• Study groups and academic support from fellow student-athletes</li>
                    <li>• Leadership opportunities within the club structure</li>
                    <li>• Lifelong friendships with like-minded individuals</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-500">
                  Our community extends beyond the pool - we're a family that supports each other in and out of the water.
                </p>
              </div>
            </div>

            {/* Competition Module */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Competition</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Challenge yourself and push your limits through structured competitive opportunities. 
                  Our competition program is designed to help you achieve personal bests and represent SJSU with pride.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Competitive Opportunities:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Local and regional swim meets throughout the season</li>
                    <li>• Intercollegiate competitions against other universities</li>
                    <li>• Club championships and record-breaking attempts</li>
                    <li>• Specialized training for different stroke techniques</li>
                    <li>• Performance tracking and goal-setting support</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-500">
                  Whether you're aiming for personal records or team victories, our competitive program will help you excel.
                </p>
              </div>
            </div>

            {/* Training Module */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Waves className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Training</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Develop your swimming skills through professional coaching and structured training programs. 
                  Our comprehensive training approach focuses on technique, endurance, and overall fitness.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Training Components:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Professional coaching from certified swim instructors</li>
                    <li>• Personalized training plans based on skill level</li>
                    <li>• Technique workshops for all four competitive strokes</li>
                    <li>• Strength and conditioning programs</li>
                    <li>• Recovery and injury prevention education</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-500">
                  Our training programs are designed to help you become a stronger, more efficient swimmer.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              These three pillars work together to create a holistic swimming experience. 
              <span className="font-semibold text-blue-600"> Community </span>provides the foundation, 
              <span className="font-semibold text-yellow-600"> Competition </span>drives improvement, and 
              <span className="font-semibold text-green-600"> Training </span>builds the skills. 
              Join us to experience the perfect balance of all three!
            </p>
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

          {/* Responsive Carousel/Horizontal Scroll */}
          <div className="flex overflow-x-auto gap-6 hide-scrollbar py-2">
            {futureEvents.length === 0 ? (
              <Card className="min-w-[300px] max-w-xs flex-shrink-0 hover:shadow-lg transition-shadow bg-gray-50 border-dashed border-2 border-gray-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-gray-200 text-gray-500">Info</Badge>
                  </div>
                  <CardTitle className="text-lg text-gray-700">No events right now!</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-gray-500">
                    Please check back soon for upcoming swim club events. Stay tuned for updates!
                  </CardDescription>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="mr-2">📅</span>
                    <span>All caught up</span>
                  </div>
                </CardContent>
              </Card>
            ) : (
              futureEvents.map((event: Event, idx: number) => (
                <Card key={idx} className="min-w-[300px] max-w-xs flex-shrink-0 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge className={event.badgeClass}>{event.type}</Badge>
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{event.description}</CardDescription>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <span className="mr-2">📅</span>
                      <span>{event.date}</span>
                      <span className="mx-2">|</span>
                      <span>⏰ {event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
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
              <div className="bg-white p-2 rounded-full">
                <Image
                  src="/San-Jose-State-Spartans-logo.png"
                  alt="SJSU Spartans Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
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
