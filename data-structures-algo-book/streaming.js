import { Readable } from "stream";

// Mock data from different platforms
const twitter = [
  { platform: "twitter", content: "Loving #javascript and #coding" },
  { platform: "twitter", content: "Just another tweet #fun" },
];

const fb = [
  { platform: "facebook", content: "Learning #javascript today!" },
  { platform: "facebook", content: "Exploring new things #coding" },
];

const gplus = [
  { platform: "googleplus", content: "Google+ is great for #development" },
  { platform: "googleplus", content: "Why not #learn #javascript?" },
];

const github = [
  { platform: "github", content: "Check out this #opensource project #javascript" },
  { platform: "github", content: "GitHub is the best #coding platform" },
];

// Step 1: Merge all platforms into one array
function merge(...sources) {
  return sources.flat();
}

// Step 2: Normalize the message format
function normalize(message) {
  const hashtags = extractHashtags(message.content);
  return {
    platform: message.platform,
    content: message.content,
    hashtags: hashtags,
  };
}

// Step 3: Extract hashtags from the message content
function extractHashtags(content) {
  const hashtagRegex = /#(\w+)/g;
  let matches;
  const hashtags = [];
  while ((matches = hashtagRegex.exec(content)) !== null) {
    hashtags.push(matches[1]); // Push the hashtag without '#'
  }
  return hashtags;
}

// Step 4: Filter messages based on a random hashtag list
function selectHashtag(message) {
  const randomTags = ["javascript", "coding", "opensource", "learn", "fun", "development"];
  return message.hashtags.some((tag) => randomTags.includes(tag));
}

// Step 5: Stream output to stdout
function pipeToStdout(messages) {
  const messageStream = new Readable({
    read() {
      messages.forEach((message) => {
        this.push(`${message.platform}: ${message.content}\n`);
      });
      this.push(null); // End the stream
    },
  });

  messageStream.pipe(process.stdout);
}

// Putting it all together
const messages = merge(twitter, fb, gplus, github);
const normalizedMessages = messages.map(normalize).filter(selectHashtag);
pipeToStdout(normalizedMessages);
