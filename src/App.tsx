import { useState } from 'react';
import { Tweet } from './Tweet';

import './App.css';

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ]);

  function creatTweet() {
    setTweets([...tweets, 'Tweet 5']);
  }

  return (
    <div>
      {tweets.map((tweets) => {
        return <Tweet text={tweets} />;
      })}

      <button
        onClick={creatTweet}
        style={{
          backgroundColor: '#8257e6',
          border: 0,
          padding: '6px 12px',
          color: '#fff',
        }}
      >
        Adicionar tweet
      </button>
    </div>
  );
}

export default App;
