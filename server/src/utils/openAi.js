import { openai } from "./../app.js";
export const getOpenAi = async function getOpenAIResponse(text) {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are a crypto assistant specializing in summarizing group conversations. You will receive data in an array where each item contains:
                      Group Name: The name of the group.
                      Group Messages: A list of messages exchanged in the group.
                      Your tasks:
                      Determine Context: Analyze the messages to check if the discussion is about crypto topics, especially the TON ecosystem, memecoins, and prices. double and triple check to make sure its about tokens or not.
                      If not, respond with: no crypto talk, fren .
                      Summarize Messages: If the discussion is crypto-related:
                      Mention the group name.
                      Summarize the key points from their messages, organizing by group.
                      Ensure the summary is clear, short, concise, and captures any important crypto-related details discussed in the groups.`
          },
          {
            role: "user",
            content: text
          }
        ],
      });
  
      return completion.choices[0].message.content;
    } catch (error) {
      throw new Error(`OpenAI API error: ${error.message}`);
    }
  }
export const getOpenAiTweet = async function getOpenAIResponse(text) {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are a crypto assistant specializing in summarizing group conversations. You will receive data in an array where each item contains:
                      token Name: The name of the token.
                      tweets: A list of messages exchanged in the twitter.
                      Your tasks:
                      Determine Context: Analyze the tweets to check if the discussion is about crypto topics and then Summarize them.
                      DO NOT GIVE ANY INFO FROM YOUR MEMORY, only and only summrize anything that is said in the tweets. 
                      Mention the token name.
                      Summarize the key points from their tweets, organizing by token name.
                      Ensure the summary is clear, short, concise, and captures any important crypto-related details discussed in the tweets.`
          },
          {
            role: "user",
            content: text
          }
        ],
      });
  
      return completion.choices[0].message.content;
    } catch (error) {
      throw new Error(`OpenAI API error: ${error.message}`);
    }
  }