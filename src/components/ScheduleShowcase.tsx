import { Button } from '@/components/ui/button';
import { Clock, Calendar, Coffee, Moon, Sun } from 'lucide-react';

const ScheduleShowcase = () => {
  const timeSlots = [
    {
      type: 'Morning',
      time: '7:00 AM - 8:30 AM',
      icon: Sun,
      description: 'Perfect for early birds',
      availability: 'Available',
      students: 12,
      maxStudents: 20
    },
    {
      type: 'Midday',
      time: '11:00 AM - 12:30 PM',
      icon: Coffee,
      description: 'Mid-morning energy',
      availability: 'Filling Fast',
      students: 16,
      maxStudents: 20
    },
    {
      type: 'Evening',
      time: '8:00 PM - 9:30 PM',
      icon: Moon,
      description: 'After work schedule',
      availability: 'Popular',
      students: 18,
      maxStudents: 20
    }
  ];

  const weekendSlots = [
    {
      day: 'Saturday',
      time: '10:00 AM - 1:00 PM',
      type: 'Intensive',
      students: 15,
      maxStudents: 20
    },
    {
      day: 'Sunday',
      time: '10:00 AM - 1:00 PM', 
      type: 'Intensive',
      students: 14,
      maxStudents: 20
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Perfect Schedule</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible timing options designed to fit your lifestyle
          </p>
        </div>

        <div className="space-y-12">
          {/* Weekday Schedule */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary" />
              Weekday Sessions
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {timeSlots.map((slot, index) => {
                const IconComponent = slot.icon;
                const progressPercentage = (slot.students / slot.maxStudents) * 100;
                
                return (
                  <div key={index} className="bento-card hover-lift group cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{slot.type}</h4>
                        <p className="text-sm text-muted-foreground">{slot.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{slot.time}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Enrollment</span>
                          <span>{slot.students}/{slot.maxStudents} students</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          slot.availability === 'Available' ? 'bg-accent/10 text-accent-foreground' :
                          slot.availability === 'Filling Fast' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-secondary/10 text-secondary'
                        }`}>
                          {slot.availability}
                        </span>
                        <Button size="sm" className="btn-hero text-xs px-4">
                          Reserve Spot
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Weekend Schedule */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-secondary" />
              Weekend Intensive Sessions
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {weekendSlots.map((slot, index) => {
                const progressPercentage = (slot.students / slot.maxStudents) * 100;
                
                return (
                  <div key={index} className="bento-card hover-lift group cursor-pointer bg-gradient-to-br from-secondary/5 to-accent/5">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-semibold">{slot.day}</h4>
                        <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                          {slot.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{slot.time}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Enrollment</span>
                          <span>{slot.students}/{slot.maxStudents} students</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full transition-all duration-500"
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <Button className="w-full btn-hero">
                        Join Weekend Batch
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Still Not Sure About Timing?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our flexible schedule options ensure you never miss out on learning. We can also arrange custom timings for corporate groups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">
                  Book Free Consultation
                </Button>
                <Button className="btn-secondary">
                  View All Schedules
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleShowcase;