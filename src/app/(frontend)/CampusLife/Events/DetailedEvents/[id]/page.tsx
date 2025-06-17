import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getEventBySlug, getMediaUrl } from '@/payload';

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const EventDetailPage = async ({ params }: EventDetailPageProps) => {
  const { slug } = await params;
  
  // Try to get event from CMS first
  const cmsEvent = await getEventBySlug(slug);

  // Fallback data for development (your existing detailed events data)
  const fallbackEvents: { [key: string]: any } = {
    "brownbag-40-amin-mudzakkir": {
      id: "1",
      date: "Jan 05",
      title: "Series Brownbag 40 with Amin Mudzakkir",
      description: `
        <p>The first Brownbag Series in 2024!</p>
        <p>Join us for our 40th Brownbag Series. In this engaging discussion, we'll delve into how Islamic feminism's intersection with the political economy in Indonesia is reshaping the conventional split between the politics of recognition and redistribution.</p>
        <p>This session, titled 'The Paradox of Feminism in Indonesia: Political Economy, Muslim Piety, and Authority,' will feature Amin Mudzakkir, our COMPOSE fellow and a researcher at PRW BRIN, Indonesia.</p>
      `,
      eventTime: "14:00 - 15:30 PM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/Brownbag-40.png",
      registerLink: "#",
      speaker: "Amin Mudzakkir",
      speakerBio: "COMPOSE fellow and researcher at PRW BRIN, Indonesia"
    },
    "riset-jabar-dissemination": {
      id: "2",
      date: "Dec 28",
      title: "Diseminasi Hasil Awal Penelitian Riset Jabar",
      description: `
        <p>Yuk, gabung dalam diskusi tentang tantangan pembangunan ekonomi dan sosial di Jawa Barat!</p>
        <p>Kegiatan ini akan membahas hasil riset dan mencari solusi untuk Jawa Barat yang lebih maju.</p>
      `,
      eventTime: "14:00 - 15:30 PM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/event2.png",
      registerLink: "#",
    },
    "brownbag-39-muhammad-syukri": {
      id: "3",
      date: "Dec 20",
      title: "Series Brownbag 39 with Muhammad Syukri",
      description: `
        <p>Join us for our 39th Brownbag Series featuring Muhammad Syukri.</p>
        <p>This session will explore village governance and environmental sustainability in Indonesia.</p>
      `,
      eventTime: "14:00 - 15:30 PM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/event3.png",
      registerLink: "#",
      speaker: "Muhammad Syukri"
    },
    "brownbag-38-fathun-karib": {
      id: "4",
      date: "Dec 15",
      title: "Series Brownbag 38 with Fathun Karib",
      description: `
        <p>Join us for our 38th Brownbag Series featuring Fathun Karib.</p>
        <p>This session will discuss contemporary political developments and their implications.</p>
      `,
      eventTime: "14:00 - 15:30 PM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/event4.png",
      registerLink: "#",
      speaker: "Fathun Karib"
    },
    "climate-talk-michiel-schaeffer": {
      id: "5",
      date: "Dec 14",
      title: "The First Climate Talk with Michiel Schaeffer",
      description: `
        <p>Join us for our inaugural Climate Talk series featuring Michiel Schaeffer.</p>
        <p>This session will explore climate change challenges and policy solutions at the global level.</p>
      `,
      eventTime: "14:00 - 15:30 PM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/event5.svg",
      registerLink: "#",
      speaker: "Michiel Schaeffer"
    },
    "brownbag-37-nathanael-sumaktoyo": {
      id: "6",
      date: "Dec 13",
      title: "Series Brownbag 37 with Nathanael G. Sumaktoyo",
      description: `
        <p>Join us for our 37th Brownbag Series featuring Nathanael G. Sumaktoyo.</p>
        <p>This session will examine political behavior and electoral dynamics in Southeast Asia.</p>
      `,
      eventTime: "14:00 - 15:30 PM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/event6.png",
      registerLink: "#",
      speaker: "Nathanael G. Sumaktoyo"
    },
    "brownbag-36-aizat-khairi": {
      id: "7",
      date: "Dec 08",
      title: "Series Brownbag 36 with Aizat bin Khairi",
      description: `
        <p>Join us for our 36th Brownbag Series featuring Aizat bin Khairi.</p>
        <p>This session will discuss Islamic political thought and governance in contemporary Malaysia.</p>
      `,
      eventTime: "14:00 - 15:30 PM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/event7.png",
      registerLink: "#",
      speaker: "Aizat bin Khairi"
    },
    "brownbag-35-arya-budi": {
      id: "8",
      date: "Dec 06",
      title: "Series Brownbag 35 with Arya Budi",
      description: `
        <p>Join us for our 35th Brownbag Series featuring Arya Budi.</p>
        <p>This session will explore urban governance and public policy innovation in Indonesian cities.</p>
      `,
      eventTime: "14:00 - 15:30 PM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/event8.png",
      registerLink: "#",
      speaker: "Arya Budi"
    },
    "brownbag-34-okky-madasari": {
      id: "9",
      date: "Dec 01",
      title: "Series Brownbag 34 with Okky Madasari",
      description: `
        <p>Join us for our 34th Brownbag Series featuring Okky Madasari.</p>
        <p>This session will discuss literature, politics, and social change in contemporary Indonesia.</p>
      `,
      eventTime: "14:00 - 15:30 PM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/event9.png",
      registerLink: "#",
      speaker: "Okky Madasari"
    }
  };

  // Use CMS event if available, otherwise fallback
  const eventData = cmsEvent || fallbackEvents[slug];

  if (!eventData) {
    notFound();
  }

  // Format date for display
  const formattedDate = eventData.eventDate 
    ? new Date(eventData.eventDate).toLocaleDateString('en-US', { 
        month: 'short', 
        day: '2-digit' 
      })
    : eventData.date;

  // Get image URL
  const imageUrl = eventData.image 
    ? (typeof eventData.image === 'string' ? eventData.image : getMediaUrl(eventData.image))
    : eventData.image;

  // Convert CMS rich text to HTML string if needed
  const getDescriptionHTML = (description: any) => {
    if (typeof description === 'string') {
      return description;
    }
    // Handle CMS rich text format - you may need to adjust this based on your rich text structure
    if (description?.root?.children) {
      // This is a simplified conversion - you might want to use a proper rich text renderer
      return description.root.children
        .map((child: any) => {
          if (child.type === 'paragraph') {
            const text = child.children?.map((c: any) => c.text || '').join('') || '';
            return `<p>${text}</p>`;
          }
          return '';
        })
        .join('');
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header>
        <NavBar />
      </header>
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/CampusLife/Events"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </Link>
        </div>

        {/* Event Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-96">
            <Image
              src={imageUrl}
              alt={eventData.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{formattedDate}</div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{eventData.title}</h1>
              </div>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {eventData.eventTime && (
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{eventData.eventTime}</span>
                </div>
              )}
              
              {eventData.location && (
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">{eventData.location}</span>
                </div>
              )}
              
              {eventData.speaker && (
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-gray-700">{eventData.speaker}</span>
                </div>
              )}
            </div>

            {/* Event Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <div dangerouslySetInnerHTML={{ 
                __html: getDescriptionHTML(eventData.description) 
              }} />
            </div>

            {/* Speaker Bio */}
            {eventData.speakerBio && (
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">About the Speaker</h3>
                <p className="text-gray-700">{eventData.speakerBio}</p>
              </div>
            )}

            {/* Register Button */}
            {eventData.registerLink && eventData.registerLink !== "#" && (
              <div className="text-center">
                <Link
                  href={eventData.registerLink}
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Register for Event
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default EventDetailPage;