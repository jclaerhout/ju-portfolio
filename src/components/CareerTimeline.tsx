export default function CareerTimeline() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-100 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-10">Career Timeline</h2>
        <div className="space-y-6">
          {[
            {
              date: 'May 2025 - Present',
              description: 'Started working as a Junior Network Administrator at the RTBF.'
            },
            {
              date: 'January - April 2025',
              description: 'Interning as a Network Administrator at the RTBF.'
            },
            {
              date: 'January 2025',
              description: 'Achieved Cisco Certified Network Associate (CCNA) certification.'
            },
            {
              date: 'October - December 2024',
              description: 'Cisco Network Engineer Bootcamp at BeCode.'
            },
            {
              date: '2021 - 2024',
              description: "Bachelor's degree in IT Technology at EPHEC, with an internship at DiabHealth from February to May 2024. Graduated in June 2024."
            },
            {
              date: '2018 - 2021',
              description: 'Studied Computer Science at UCLouvain.'
            },
            {
              date: 'June 2018',
              description: 'Earned my CESS (Belgian high school diploma).'
            },
            {
              date: 'January 14, 2000',
              description: 'Born in Belgium.'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <span className="w-6 h-6 bg-accent rounded-full flex-shrink-0"></span>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{item.date}</h3>
                <p className="text-textDark">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
