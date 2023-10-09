import React from 'react';


import commentsData from './dataset_twitterscraper.json'; // Import the CSV data

const Comments = () => {
  // Assuming your CSV file has headers: full_text, reply_count, retweet_count, favorite_count, url
  const commentsWithUsername = commentsData.map(comment => {
    // Extract username from the URL
    const urlParts = comment.url.split('/');
    const username = urlParts[3];

    // Return a new object with extracted username and other comment data
    return {
      full_text: comment.full_text,
      reply_count: parseInt(comment.reply_count),
      retweet_count: parseInt(comment.retweet_count),
      favorite_count: parseInt(comment.favorite_count),
      username: `@${username}`, // Add "@" character to the username
    };
  });

  return (
    <div className='tweets-container'>

      <ul>
      <h1>Tweets</h1>
        {commentsWithUsername.map((comment, index) => (
          <li>
            
            <p>{comment.username}</p>
            <p>{comment.full_text}</p>
            <div className='icons'>
              <spam> ↩️{comment.reply_count}</spam>
              <spam> 🔁 {comment.retweet_count}</spam>
              <spam> ❤️ {comment.favorite_count}</spam>
            </div>
            
            
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
