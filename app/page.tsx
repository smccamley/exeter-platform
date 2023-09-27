import Image from 'next/image'

export default function Home() {
  return (
    <main style={{backgroundColor:'white', color:'black'}}>
      <div className="container mx-auto">
        <div className="grid grid-cols-6 gap-20 py-20">
          <div className="col-span-3 space-y-20">
            <h1 className="text-5xl font-bold">Digital Services to power the future of Higher Education on a <span className="underline decoration-unigreen">Planetary</span> scale.</h1>
            <h2 className="text-2xl font-light">The University of Exeter's Digital Platform is the easiest way to build the tools and services that Students and Staff will love without the pain, frustration and cost of doing it on your own. Brought to life by the lovely people in the University of Exeter's Digital Team ❤️</h2>
            <div className="grid grid-cols-4 gap-5">
            <a href="#Ash Roots">
              <img className="rounded-full w-full ring-4 ring-gray-100 hover:ring-unigreen transition-all" src="https://pbs.twimg.com/profile_images/1448177220892205057/kAnl7XlU_400x400.jpg" />
            </a>
            <a href="#Simon Issac">
              <img className="rounded-full w-full ring-4 ring-gray-100 hover:ring-unigreen transition-all" src="/simon.jpg" />
            </a>
            <a href="#Helen Cocks">
              <img className="rounded-full w-full ring-4 ring-gray-100 hover:ring-unigreen transition-all" src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/15494/helen_bw.790067e8d1f0.png" />
            </a>
            <a href="#Joe Holland">
              <img className="rounded-full w-full ring-4 ring-gray-100 hover:ring-unigreen transition-all" src="https://media.licdn.com/dms/image/C4E03AQF3WrOp_nZW2g/profile-displayphoto-shrink_800_800/0/1524738998120?e=2147483647&amp;v=beta&amp;t=LeUiXmePQrrbZbA1pT_Y_iHYSXKm5nORUqlDYJkyZtQ"/></a>
              <a href="#Mina Esghaei">
                <img className="rounded-full w-full ring-4 ring-gray-100 hover:ring-unigreen transition-all" src="https://media.licdn.com/dms/image/D4E03AQHdK4Y1AY2TZw/profile-displayphoto-shrink_800_800/0/1684879616655?e=2147483647&amp;v=beta&amp;t=qfxkIvZzrJyIuYkuBG2JiXmkP6s0e1svgolQ_FVOiD0"/>  
              </a>
                <a href="#Aleksandra Puxley">
                  <img className="rounded-full w-full ring-4 ring-gray-100 hover:ring-unigreen transition-all" src="https://media.licdn.com/dms/image/C4E03AQF6ajmY7Hgf4w/profile-displayphoto-shrink_800_800/0/1580066837971?e=2147483647&amp;v=beta&amp;t=UCIa1p5NA87j5JnJymPYCFZQu-stq8m7gjFpbYZ1rEY"/>
                </a>
                <a href="#Chris Durban">
                  <img className="rounded-full w-full ring-4 ring-gray-100 hover:ring-unigreen transition-all" src="https://media.licdn.com/dms/image/C5103AQGqMSM2V4QtxA/profile-displayphoto-shrink_800_800/0/1516312545390?e=2147483647&amp;v=beta&amp;t=BpBMjin7swGGPyDiNfFo9xWkCmhG2Lo2VT_cUVkicqw"/>  
                </a>
                <a href="#Mariano Sanchez-Luppi">
                  <img className="rounded-full w-full ring-4 ring-gray-100 hover:ring-unigreen transition-all" src="https://media.licdn.com/dms/image/C4E03AQEE-gdxX-gMdQ/profile-displayphoto-shrink_800_800/0/1652450005209?e=2147483647&amp;v=beta&amp;t=rMzV4KYl9K6ajJtZqMkfkqS6LRfWg6SDLMWw8zQO9M4"/>
                </a>
                </div>
              </div>
              <div className="col-span-3">
                <img className="w-full rounded-lg p-20 hover:rotate-6 transition-all" src="globe.png"/>
              </div>
            </div>
          </div>
        <div className="bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-6 gap-20 py-20">
              <div className="col-span-3 space-y-10">
                <h2 className="text-3xl">What is the Higher Education Digital Platform?</h2>
                <p>The University of Exeter set out to revolutionise the way we work and study with a razor-sharp focus on the user experience. We are all familiar with living our lives online, it is immediate, timeless, borderless and has found a way to become an every day part of our daily lives.</p><p>Immediately we hit a barrage of brick walls that wanted to stop us from making radical changes - legacy technology, rigid processes and layers of approvals to make any changes to existing systems and services. This is the opposite from the way that our team are used to working so we had to find a new way.</p><p>We fully embrace the Agile principles and develop everything based on sound user research. What are the problems and pain points of our students and staff? What would amazing look like? How quickly can we get a version out of the door so we can refine and improve?</p>
                <p>To deliver on our goals that are enshrined in our Digital Strategy 2030 we built a brand new, data-driven, modular and flexible platform that allows us to build new stuff and plumb it into the existing systems and processes without needing to make huge changes and introduce large risks to the business.</p>
                <p>We believe in working together, as a team, with other parts of the University and, most importantly, with other Educational institutions around the world. To that end - we welcome you to benefit from the work we have done and start your journey to a future-proof, global University.</p></div>
                <div className="col-span-3 grid grid-cols-2 gap-10 text-center">
                  <div className="border-2 rounded-lg p-5">
                    <h3 className="font-bold text-2xl pb-5">Traditional Approach</h3>
                    <ul className="space-y-1">
                      <li>❌ Legacy IT Systems</li>
                      <li>❌ Start with nothing</li>
                      <li>❌ Expensive to maintain</li>
                      <li>❌ Inflexible to change</li>
                      <li>❌ Requires recruitment</li>
                      <li>❌ Building more siloes</li>
                      <li>❌ Slow development time</li>
                      <li>❌ Expensive to build</li>
                    </ul>
                    </div>
                    <div className="border-2 rounded-lg bg-white p-5">
                      <h3 className="font-bold text-2xl pb-5">Our Platform</h3>
                      <ul className="space-y-1">
                        <li>✅ Modern Cloud Infrastructure</li>
                        <li>✅ Existing services</li>
                        <li>✅ Subscription based services</li>
                        <li>✅ Quick to adapt and improve</li>
                        <li>✅ Support on tap</li>
                        <li>✅ Joining a network of experts</li>
                        <li>✅ Start today</li>
                        <li>✅ Pay for what you use</li>
                        <li className="py-10 font-bold">PLUS Access To</li>
                        <li>✅ Product Management support</li>
                        <li>✅ UX Researcher</li>
                        <li>✅ UI Designers</li>
                        <li>✅ Content writers</li>
                        <li>✅ Agile practitioners</li>
                      </ul>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      <div className="bg-[url(/digital.jpg)]">
                        <div className="container mx-auto">
                          <div className="grid grid-cols-6 gap-20 py-20">
                            <h1 className="col-span-6 text-5xl text-white font-bold">Become a digital-first University</h1>
                            <h2 className="col-span-2 text-3xl text-white font-sans">💚 Available Now!</h2>
                            <h2 className="col-span-4 text-3xl text-white font-sans">⏳ Coming Soon</h2>
                            <div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl">
                              <h3 className="font-bold text-2xl">🧑 Customer Management</h3>
                              <p>Sign in however you wish, Facebook, Google, Email and get an account that will be with you for your entire life of learning. Build up a powerful profile of your users and provide them with the services and products that they want.</p>
                              <ul>
                                <li className="block ">💚 Sign up with Google, Microsoft or Email</li>
                                <li className="block ">💚 Account deletion</li>
                                </ul>
                                <ul>
                                  <li className="block ">⏳ Sign up with Facebook, WeeBo and others</li>
                                  <li className="block ">⏳ Collect bespoke profile data</li>
                                  <li className="block ">⏳ Data export</li>
                                </ul>
                              </div>
                              <div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl">
                                <h3 className="font-bold text-2xl">💳 eCommerce</h3>
                                <p>From Degrees to Hoodies. Allow users to pay in their way - speed up the transactions and increase sales across your University using rock solid payment services that your finance department will love.</p>
                                <ul>
                                  <li className="block ">💚 List products and manage stock</li>
                                  <li className="block ">💚 Accepts major payment cards</li>
                                  <li className="block ">💚 Links to Shopify</li>
                                  <li className="block ">💚 Connections to T1</li>
                                </ul>
                                <ul>
                                  <li className="block ">⏳ Crypto payments</li>
                                  <li className="block ">⏳ BACS</li>
                                  <li className="block ">⏳ Pay in installments</li>
                                </ul>
                                </div>
                                <div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl">
                                  <h3 className="font-bold text-2xl">💻 Online Education</h3>
                                  <p>Deliver powerful and engaging content to your customers wherever they are, whenever they want. Learn Macro-Economics at Midnight, Business Studies on the Bus. Break down the barriers to success by taking World class education directly to the people who want it.</p>
                                  <ul>
                                    <li className="block ">💚 Interface with ELE</li>
                                    <li className="block ">💚 Host Massive Online Collaborative Courses</li>
                                    <li className="block ">💚 Provide free content</li>
                                    </ul>
                                    <ul>
                                      <li className="block ">⏳ Connect with 3rd party content platforms</li>
                                      <li className="block ">⏳ Connect with fellow learners</li>
                                      </ul>
                                      </div>
                                      <div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl">
                                        <h3 className="font-bold text-2xl">🌋 Carbon Impact Calculator</h3>
                                        <p>We have developed a sector-leading carbon calculator. Accurately estimate your carbon impact from all of your business activities and learn how you can reduce them.</p>
                                        <ul>
                                          <li className="block ">💚 API to upload activity data</li>
                                          <li className="block ">💚 Export carbon calculation data</li>
                                          </ul>
                                          <ul>
                                            <li className="block ">⏳ Easy to use interface</li>
                                            <li className="block ">⏳ Connections to existing services</li>
                                            </ul>
                                            </div>
                                            <div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl">
                                              <h3 className="font-bold text-2xl">🧭 Attendance Monitoring</h3>
                                              <p>Students can record their attendance to lectures and seminars. Gain insights into Student welfare and engagement.</p>
                                              <ul>
                                                <li className="block ">💚 Check-in to a location</li>
                                                <li className="block ">💚 Tier 4 Visa Compliance</li>
                                                <li className="block ">💚 Data export</li>
                                                </ul>
                                                <ul>
                                                  <li className="block ">⏳ Two-factor check in</li>
                                                  <li className="block ">⏳ Real-time location data</li>
                                                  <li className="block ">⏳ Cohort analysis</li>
                                                  </ul>
                                                  </div>
                                                  <div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl">
                                                    <h3 className="font-bold text-2xl">🧑🏻&zwj;🤝&zwj;🧑🏻 Admissions Portal</h3>
                                                    <p>Provide your users with a seamless admissions experience. From registering an interest through to providing evidence of qualificiation and onwards to onboarding.</p>
                                                    <ul>
                                                      <li className="block ">💚 Registers of interest</li>
                                                      <li className="block ">💚 Online support content</li>
                                                      <li className="block ">💚 HESA compliant data collection</li>
                                                      <li className="block ">💚 Upload supporting documentation</li>
                                                      </ul>
                                                      <ul>
                                                        <li className="block ">⏳ Real-time updates</li>
                                                        <li className="block ">⏳ Live chat with admissions</li>
                                                        </ul></div><div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl"><h3 className="font-bold text-2xl">🤖 Chatbot</h3>
                                                        <p>Our chatbot service uses the latest in AI to get the right answers to the right people at the right time. Aggregate all of your static content and allow people to ask questions in normal human language. Intelligent redirection to real people for sensitive or complex issues.</p>
                                                        <ul>
                                                          <li className="block ">💚 Simple questions and answers</li>
                                                        <li className="block ">💚 Data update API</li>
                                                        </ul><ul><li className="block ">⏳ Automatic data scraping</li>
                                                        <li className="block ">⏳ Customised responses</li>
                                                        <li className="block ">⏳ Powered by ChatGPT</li>
                                                        </ul></div><div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl"><h3 className="font-bold text-2xl">📝 Content Management</h3>
                                                        <p>Power all of your digital channels through one single content management system. Organize content by type and audience and have it served through powerful APIs.</p><ul><li className="block ">💚 Add rich content</li>
                                                        <li className="block ">💚 Classify through tags</li>
                                                        <li className="block ">💚 Classify by location</li>
                                                        <li className="block ">💚 Apply start and end times to content</li>
                                                        </ul><ul><li className="block ">⏳ Provide bespoke content per-user type</li>
                                                        <li className="block ">⏳ Deliver location-aware content</li>
                                                        <li className="block ">⏳ Connect to existing CMS</li>
                                                        </ul></div><div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl"><h3 className="font-bold text-2xl">⏰ Timetables</h3>
                                                        <p>Support your students in balancing and managing their days. Powerful scheduling tools to track lectures and seminars whether they are in a physical space or cyberspace.</p><ul><li className="block ">💚 Connect to Semestry</li>
                                                        <li className="block ">💚 Automatic data updates</li>
                                                        <li className="block ">💚 Filter by seminar or lecture type</li>
                                                        <li className="block ">💚 Hide optional seminars and lectures</li>
                                                        </ul><ul><li className="block ">⏳ Connections to 3rd party services</li>
                                                        <li className="block ">⏳ Links back to learning materials</li>
                                                        </ul></div><div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl"><h3 className="font-bold text-2xl">🎟️ Events</h3>
                                                        <p>Organize, promote and manage attendance to events whether in real life or online.</p><ul><li className="block ">💚 Promote and share</li>
                                                        <li className="block ">💚 Track and manage interest</li>
                                                        <li className="block ">💚 Record attendance</li>
                                                        <li className="block ">💚 Sell tickets</li>
                                                        </ul><ul><li className="block ">⏳ Post event feedback</li>
                                                        <li className="block ">⏳ Connect attendees</li>
                                                        </ul></div><div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl"><h3 className="font-bold text-2xl">☑️ Task Management</h3>
                                                        <p>Getting things done! From turning in your Doctoral thesis to picking up some milk - keep track of all of your tasks in one place.</p><ul><li className="block ">💚 Track due dates</li>
                                                        <li className="block ">💚 Track importance</li>
                                                        </ul><ul><li className="block ">⏳ Connect to external services</li>
                                                        <li className="block ">⏳ Share tasks</li>
                                                        <li className="block ">⏳ Share event status</li>
                                                        </ul></div><div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl"><h3 className="font-bold text-2xl">🏘️ Space and Venue Management</h3>
                                                        <p>Avoid double booking your valuable working space. Book rooms and desks for you and your team. Invite others to collaborate.</p><ul><li className="block ">💚 Room booking by date, time and location</li>
                                                        <li className="block ">💚 Track attendees and room capacity</li>
                                                        <li className="block ">💚 Track room equipment and function</li>
                                                        </ul><ul>
                  <li className="block ">⏳ Combine with online meeting spaces</li>
                <li className="block ">⏳ Facilities management</li>
                <li className="block ">⏳ Monitor and track room condition and maintenace</li>
                </ul>
                </div>
                <div className="col-span-6">
                  <button className="bg-white border-4 p-5 rounded-full font-bold shadow-xl">👋 If you have a great idea, get in touch! Let's work together.</button>
                  </div>
                  </div>
                  </div>
                  </div>
                  <div className="bg-[url(/tech.jpg)]">
                    <div className="container mx-auto">
                      <div className="grid grid-cols-6 gap-20 py-20">
                        <h1 className="col-span-6 text-5xl text-white font-bold">Future-proof Technology</h1>
                        <div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl">
                          <h3 className="font-bold text-2xl">📡 Easy API Access</h3>
                          <p>Our powerful set of APIs are well documented and allow you to integrate your existing services. Our APIs are version controlled for consistency - nobody likes changes that break things.</p>
                          <ul>
                            </ul>
                            <ul>
                              </ul>
                              </div>
                              <div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl">
                                <h3 className="font-bold text-2xl">🚀 Fast Innovation and Evolution</h3>
                                <p>We are always building new features and services - working with the broader community to solve all of our problems in one go. Join us as a part of our Beta testing team and try out the new stuff before anyone else.</p>
                                <ul>
                                  </ul>
                                  <ul>
                                    </ul>
                                    </div>
                                    <div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl">
                                      <h3 className="font-bold text-2xl">🔒 Secure by Design</h3><p>Data security and Integrity that will make the powers that be smile - fully compliant with the most robust security and data protection standards. Our systems are constantly monitoring the platform for issues and threats so we can kill them off before they have a chance to cause any trouble.</p>
                                      <ul>
                                        </ul>
                                        <ul>
                                          </ul>
                                          </div>
                                          <div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl">
                                            <h3 className="font-bold text-2xl">🧪 Tested to destruction</h3>
                                            <p>All of our code is automatically tested at every level. Integration, Unit and Functional. We bring in external experts to try and break our security measures before anything is deployed to our customers - they always fail.</p>
                                            <ul>
                                              </ul>
                                              <ul>
                                                </ul>
                                                </div>
                                                <div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl">
                                                  <h3 className="font-bold text-2xl">⚙️ Version control</h3>
                                                  <p>Everything we do is version controlled and broken into small functional chunks - this lets us release features when they are ready and deploy versions of our services as and when we need to.</p>
                                                  <ul>
                                                    </ul>
                                                    <ul>
                                                      </ul>
                                                      </div>
                                                      <div className="col-span-2 p-5 bg-white rounded-lg border-4 space-y-5 shadow-xl">
                                                        <h3 className="font-bold text-2xl">⚖️ We follow all of the rules</h3>
                                                        <p>Our platform complies to the latest standards and regulations. GDPR, ISO 27001, AWS Well-Architected framework and more. Regular audits by our data security and compliance teams keep us on our toes.</p>
                                                        <ul>
                                                          </ul>
                                                          <ul>
                                                            </ul>
                                                            </div>
                                                            <div className="col-span-6">
                                                              <button className="bg-white border-4 p-5 rounded-full font-bold shadow-xl">👋 If you have a great idea, get in touch! Let's work together.</button>
                                                              </div>
                                                              </div>
                                                              </div>
                                                              </div>
                                                              <div className="bg-gray-50">
                                                                <div className="container mx-auto">
                                                                  <div className="grid grid-cols-6 gap-20 py-20">
                                                                    <h1 className="col-span-6 text-5xl font-bold">Our People</h1>
                                                                    <div className="col-span-6 flex gap-10" id="Ash Roots">
                                                                      <div className="grow w-5/6" id="Ash Roots">
                                                                        <p className="text-2xl font-light border-l-4 border-gray-200 pl-20">"The University of Exeters Digital Platform has allowed us to launch the apps and services we have needed to deliver on our Digital Strategy 2030. We have a joined up user experience, happy users and the University is seeing a massive increase in Student satisfaction."
                                                                        <span className="block font-bold pt-5">Ash Roots - Chief Digital Officer<a href="https://twitter.com/@ashroots">
                                                                          <img className="w-10 inline ml-5" src="https://cdn.icon-icons.com/icons2/2201/PNG/512/twitter_logo_circle_icon_134015.png"/></a>
                <a href="https://tiktok.com/@ashjtroots">
                  <img className="w-8 inline" src="https://image.similarpng.com/very-thumbnail/2020/10/Tiktok-icon-logo-premium-vector-PNG.png"/>
                </a>
                </span>
                </p>
                </div>
                <div className="w-1/6">
                  <img src="https://pbs.twimg.com/profile_images/1448177220892205057/kAnl7XlU_400x400.jpg" className="w-100 rounded-full"/>
                  </div>
                  </div>
                  <div className="col-span-6 flex gap-10" id="Simon Issac">
                    <div className="grow w-5/6" id="Simon Issac">
                      <p className="text-2xl font-light border-l-4 border-gray-200 pl-20">"The Digital team is growing quickly. We have onboarded dozens of multi-skilled, experienced people from across the world to help us to deliver the Digital Strategy. We have the freedom to flex every aspect of our team culture to make this an amazing place to work for everyone who joins us."<span className="block font-bold pt-5">Simon Issac - Head of People Chapter</span></p></div><div className="w-1/6"><img src="https://www.exeter.ac.uk/media/universityofexeter/digitalcapability/images/Simon-Isaacs_465x465.jpg" className="w-100 rounded-full"/></div></div><div className="col-span-6 flex gap-10" id="Helen Cocks"><div className="grow w-5/6" id="Helen Cocks"><p className="text-2xl font-light border-l-4 border-gray-200 pl-20">"Our KPIs speak for themselves. We hold ourselves to strict targets to ensure that every quarter we are moving closer to our ambitious goals. Any training, support, mentoring, kit or services the team needs to do their jobs to the best of their ability is in our gift. This unmatched support has proved itself to be essential in delivering our key business objectives."<span className="block font-bold pt-5">Helen Cocks - Head of Business Chapter</span></p></div><div className="w-1/6"><img src="https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/15494/helen_bw.790067e8d1f0.png" className="w-100 rounded-full"/></div></div><div className="col-span-6 flex gap-10" id="Joe Holland"><div className="grow w-5/6" id="Joe Holland"><p className="text-2xl font-light border-l-4 border-gray-200 pl-20">"Our user is the most important person in our world. We do not design our products to only look great, they are designed to be the most frictionless and enjoyable user experience possible. This obsessive attention to the user and their changing needs and our ability to rapidly prototype and innovate means that we are building products and services that your customers will love."<span className="block font-bold pt-5">Joe Holland - Head of Design Chapter</span></p></div><div className="w-1/6"><img src="https://media.licdn.com/dms/image/C4E03AQF3WrOp_nZW2g/profile-displayphoto-shrink_800_800/0/1524738998120?e=2147483647&amp;v=beta&amp;t=LeUiXmePQrrbZbA1pT_Y_iHYSXKm5nORUqlDYJkyZtQ" className="w-100 rounded-full"/></div></div><div className="col-span-6 flex gap-10" id="Mina Esghaei"><div className="grow w-5/6" id="Mina Esghaei"><p className="text-2xl font-light border-l-4 border-gray-200 pl-20">"We are a fast evolving team in an even faster evolving world. Having true agility is essential for us to be able to respond to this dynamic and exciting digital world. We live and breathe the core principles of agile, people over process, conversations over contractual negotiations - these aren't meaningless business sentiments but the rules by which we live. Being able to pivot and re-focus and and when we need to allows to us deliver products and features quickly and cheaply."<span className="block font-bold pt-5">Mina Esghaei - Head of Agile Chapter</span></p></div><div className="w-1/6"><img src="https://media.licdn.com/dms/image/D4E03AQHdK4Y1AY2TZw/profile-displayphoto-shrink_800_800/0/1684879616655?e=2147483647&amp;v=beta&amp;t=qfxkIvZzrJyIuYkuBG2JiXmkP6s0e1svgolQ_FVOiD0" className="w-100 rounded-full"/></div></div>
                      <div className="col-span-6 flex gap-10" id="Aleksandra Puxley"><div className="grow w-5/6" id="Aleksandra Puxley">
                        <p className="text-2xl font-light border-l-4 border-gray-200 pl-20">"We have so many ideas bouncing around the Digital team for what we want to do next and what problems we think we should be solving. The Product team comprise experts from both the digital and academic worlds - a perfect blend of people to chip away at complex challenges and bring products to market that will make a true positive impact in people`s lives. By joining us you are getting in at the start of what will be an exciting journey of innovation."
                      <span className="block font-bold pt-5">Aleksandra Puxley - Product Director</span>
                      </p>
                      </div>
                      <div className="w-1/6">
                        <img src="https://media.licdn.com/dms/image/C4E03AQF6ajmY7Hgf4w/profile-displayphoto-shrink_800_800/0/1580066837971?e=2147483647&amp;v=beta&amp;t=UCIa1p5NA87j5JnJymPYCFZQu-stq8m7gjFpbYZ1rEY" className="w-100 rounded-full"/></div></div><div className="col-span-6 flex gap-10" id="Chris Durban"><div className="grow w-5/6" id="Chris Durban"><p className="text-2xl font-light border-l-4 border-gray-200 pl-20">"We started building the Digital Platform knowing that it was going to grow and need to respond to change quickly, safely and using industry best practices. By using micro services and scalable cloud infrastructure we have found the sweet spot between rapid innvation and world class reliability. There is no point in building products that you love if the only work now and again - we aim to be so reliable that you couldn`t imagine why anyone would ever look to build their own services."<span className="block font-bold pt-5">Chris Durban - Head of Engineering Chapter</span>
                      </p></div><div className="w-1/6">
                        <img src="https://media.licdn.com/dms/image/C5103AQGqMSM2V4QtxA/profile-displayphoto-shrink_800_800/0/1516312545390?e=2147483647&amp;v=beta&amp;t=BpBMjin7swGGPyDiNfFo9xWkCmhG2Lo2VT_cUVkicqw" className="w-100 rounded-full"/></div></div>
                      <div className="col-span-6 flex gap-10" id="Mariano Sanchez-Luppi">
                        <div className="grow w-5/6" id="Mariano Sanchez-Luppi">
                        <p className="text-2xl font-light border-l-4 border-gray-200 pl-20">"Every single thing we do comes back to data - it is the blood that runs through the veins of the digital platform. Our dedicated data team is not only ensuring that the data is being protected and processed according to the most stringent standards but we are also building powerful data analysis processes. Through these processes you will be able to learn more about your users than you had first imagined opening up the ability to offer targeted and relevant content. Our single souce of truth will empower your business intellegence and enable informed and timely business decisions that will save you time and money."
                      <span className="block font-bold pt-5">Mariano Sanchez-Luppi - Head of Data Chapter</span>
                      </p>
                      </div>
                      <div className="w-1/6">
                        <img src="https://media.licdn.com/dms/image/C4E03AQEE-gdxX-gMdQ/profile-displayphoto-shrink_800_800/0/1652450005209?e=2147483647&amp;v=beta&amp;t=rMzV4KYl9K6ajJtZqMkfkqS6LRfWg6SDLMWw8zQO9M4" className="w-100 rounded-full"/>

                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      <div className="bg-gray-100 h-32">

                      </div>
            </main>
  )
}
