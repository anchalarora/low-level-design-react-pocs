import { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import "./LiveChat.css";

const data = [
  {
    id: 1,
    name: "Anchal Arora",
    message: "Hello , this game is amazing !!!!!!!!!",
    photo:
      "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
  },
  {
    id: 2,
    name: "Ashish Arora",
    message: "Hello , this game is amazing !",
    photo:
      "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
  },
  {
    id: 3,
    name: "Pooja Arora",
    message: "Hello , this game is amazing !",
    photo:
      "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
  },
  {
    id: 4,
    name: "Sonia Arora",
    message: "Hello , this game is amazing !",
    photo:
      "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
  },
  {
    id: 5,
    name: "jdndn Arora",
    message: "Hello , this game is amazing !",
    photo:
      "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
  },
  {
    id: 6,
    name: "dmdmmd Arora",
    message: "Hello , this game is amazing !",
    photo:
      "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
  },
  {
    id: 7,
    name: "mdmdms Arora",
    message: "Hello , this game is amazing !",
    photo:
      "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
  },
  {
    id: 8,
    name: "Sonfffia Arora",
    message: "Hello , this game is amazing !",
    photo:
      "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
  },
  {
    id: 9,
    name: "eeee Arora",
    message: "Hello , this game is amazing !",
    photo:
      "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
  },
  {
    id: 10,
    name: "trrrr Arora",
    message: "Hello , this game is amazing !",
    photo:
      "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
  },
];
const CHAT_MSGS_LIMIT = 5;
var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
function generateRandomNames() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

// Array of random YouTube chat messages
var textList = [
  "Hey everyone!",
  "Loved this video, great content!",
  "Anyone else watching this live?",
  "Drop a like if you're enjoying the stream!",
  "What time is the next video dropping?",
  "This is so helpful, thanks for sharing!",
  "Can someone explain that part again?",
  "Shoutout to the creator, keep it up!",
  "I totally agree with that!",
  "Who's here before 1K views?",
  "This deserves more likes!",
  "Great editing, well done!",
  "When is the Q&A session?",
  "I've been waiting for this!",
  "Can you please respond to my question?",
  "This is trending for a reason!",
  "Any tips for beginners?",
  "I love this community!",
];

function generateRandomText() {
  var finalText = textList[Math.floor(Math.random() * textList.length)];
  return finalText;
}

// Example usage
console.log(generateRandomText());

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const fetchMessages = () => {
    // fetch messages from server
    const data = [
      {
        name: generateRandomNames(),
        photo:
          "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
        message: generateRandomText(),
      },
    ];

    setMessages((messages) => {
      let messageList = [...data, ...messages];
      messageList = messageList.splice(0, CHAT_MSGS_LIMIT);
      return messageList;
    });
  };
  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      name: "Anchal", // You can change this to actual user name if available
      photo:
        "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
      message: inputMessage,
    };

    setMessages((messages) => {
      let messageList = [newMessage, ...messages];
      messageList = messageList.splice(0, CHAT_MSGS_LIMIT);
      return messageList;
    });

    setInputMessage(""); // Clear input after sending
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessages();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="chat-window">
        {messages.map((item) => {
          return <ChatMessage {...item} />;
        })}
      </div>
      <div>
        <input
          className="chat-input-box"
          type="text"
          value={inputMessage}
          placeholder="Enter text here"
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} // Send message on Enter
        />
      </div>
    </div>
  );
};

export default ChatWindow;
