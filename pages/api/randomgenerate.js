// pages/api/random-kindness.js

const KindGenerate = [
    { act: "Hold the door open for someone.", description: "A small act of courtesy that can brighten someone's day." },
  { act: "Offer to pay for someone's coffee or meal.", description: "Surprising someone with a kind gesture can create a positive impact." },
  { act: "Send a heartfelt message to a friend or family member.", description: "Expressing care and appreciation can strengthen relationships." },
  { act: "Donate unused clothes or items to a local charity.", description: "Giving to those in need can make a difference in their lives." },
  { act: "Compliment a stranger's appearance or style.", description: "Spreading positivity with kind words can boost someone's confidence." },
  { act: "Help someone with their groceries or bags.", description: "Assisting others in carrying heavy items can be a thoughtful gesture." },
  { act: "Write a thank-you note to someone who has impacted your life.", description: "Expressing gratitude can show appreciation and create a positive connection." },
  { act: "Offer to babysit or pet-sit for a friend or neighbor.", description: "Providing assistance can be a kind and helpful gesture." },
  { act: "Plant a tree or flowers in a public space.", description: "Contributing to the environment and beautifying a public area can have a positive impact." },
  { act: "Volunteer at a local soup kitchen or food bank.", description: "Helping those in need can make a meaningful difference in their lives." },
  { act: "Offer to give a friend or family member a ride.", description: "Providing transportation can be a helpful and thoughtful gesture." },
  { act: "Leave a positive review for a local business or service.", description: "Supporting local businesses and spreading positivity can benefit the community." },
  { act: "Listen attentively to someone who needs to talk.", description: "Showing empathy and understanding can make someone feel heard and supported." },
  { act: "Leave a generous tip for a hardworking service worker.", description: "Appreciating someone's hard work and dedication can brighten their day." },
  { act: "Donate blood to a local blood bank.", description: "Providing life-saving blood can make a significant impact on those in need." },
  { act: "Offer to help a neighbor with their household chores.", description: "Assisting with chores can be a kind and practical gesture." },
  { act: "Pick up litter in your local community.", description: "Keeping your community clean and tidy can benefit everyone." },
  { act: "Share a positive or inspirational quote on social media.", description: "Spreading positivity and motivation can inspire others." },
  { act: "Donate old books to a local library or school.", description: "Providing reading materials can benefit others in their learning and enjoyment." },
  { act: "Cook or bake something for a friend, neighbor, or coworker.", description: "Sharing homemade food can be a thoughtful gesture of kindness." },
  { act: "Offer to help someone move or relocate.", description: "Assisting with a move can be physically and emotionally taxing, and offering to help can be greatly appreciated." },
  { act: "Send a care package to a loved one or someone in need.", description: "Providing comfort and support through a care package can show you care." },
  { act: "Pay for the coffee or meal of the person behind you in line.", description: "Surprising a stranger with an act of kindness can create a ripple."},
  { act: "Write a handwritten note of appreciation to a coworker or employee.", description: "Showing gratitude and recognition for someone's hard work can boost their morale." },
  { act: "Help a neighbor with their yard work or gardening.", description: "Assisting with outdoor tasks can be a kind and practical gesture." },
  { act: "Donate to a local animal shelter or rescue organization.", description: "Supporting animal welfare can make a difference in the lives of animals in need." },
  { act: "Offer to tutor or mentor a student in need.", description: "Providing academic support and guidance can be a valuable act of kindness." },
  { act: "Send a motivational or encouraging message to someone going through a tough time.", description: "Offering support and uplifting words can provide comfort during difficult times." },
  { act: "Help a senior citizen with their errands or tasks.", description: "Assisting elderly individuals with daily activities can be a thoughtful gesture." },
  { act: "Leave a kind note or inspirational quote in a public place.", description: "Spreading positivity and inspiration can brighten someone's day." },
  { act: "Offer to walk a neighbor's dog or pet-sit for them.", description: "Assisting with pet care can be a helpful and kind gesture for pet owners." },
  { act: "Offer to help a friend or family member with their home improvement projects.", description: "Providing assistance with DIY projects or repairs can be a practical act of kindness." },
  { act: "Send flowers or a small gift to someone who is feeling down.", description: "Offering comfort and support through a thoughtful gift can show you care." },
  { act: "Offer to help a coworker with their workload or deadlines.", description: "Providing support and assistance in a professional setting can be a kind gesture." },
  { act: "Donate to a charity or cause that you are passionate about.", description: "Supporting a cause you believe in can make a positive impact in the world." },
  { act: "Offer to be a designated driver for a friend or family member.", description: "Providing safe transportation for someone who needs it can be a responsible act of kindness." },
  { act: "Share your skills or talents with others for free, such as teaching a class or offering a service.", description: "Using your skills to benefit others without expecting anything in return can be a selfless act of kindness." },
  { act: "Offer to help a coworker or friend who is feeling overwhelmed or stressed.", description: "Providing emotional support and a listening ear can be a compassionate act of kindness." },
  { act: "Donate your time to volunteer at a local event or organization.", description: "Contributing your time and effort to a worthy cause can make a meaningful difference." },
  { act: "Offer to do a favor for a neighbor or friend, such as picking up groceries or running an errand.", description: "Assisting with practical tasks can be a helpful act of kindness." },
  { act: "Send a handwritten letter or card to a friend or family member.", description: "Taking the time to write a heartfelt message can show you care and appreciate someone." },
  { act: "Offer to help a colleague or friend with their professional development, such as reviewing their resume or providing career advice.", description: "Supporting someone's career growth and development can be a valuable act of kindness." },
  { act: "Participate in a local community clean-up event or environmental conservation effort.", description: "Contributing to the care and preservation of the environment can benefit the community and future generations." },
  ];
  
  const getRandomKindness = (req, res) => {
    const randomIndex = Math.floor(Math.random() * KindGenerate.length);
    const randomAct = KindGenerate[randomIndex];
    res.status(200).json(randomAct);
  };
  
  export default getRandomKindness;
  