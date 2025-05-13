'use client';

import { client } from '@/utils/client';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [messageText, setMessageText] = useState('');

  const sendMessage = async () => {
    try {
      setLoading(true);
      const response = await client.api.line['send-message'].$post({ 
          json: { message: messageText }
        });
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error sending message:', error);
      setResult({ success: false, message: 'メッセージ送信に失敗しました。' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='bg-red-500 min-h-screen p-6'>
      <div className='max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold mb-6'>LINE メッセージ送信アプリ</h1>
        
        <div className='mb-4'>
          <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
            送信メッセージ
          </label>
          <input
            type='text'
            id='message'
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='送信するメッセージを入力してください'
          />
        </div>
        
        <button 
          onClick={sendMessage} 
          disabled={loading || !messageText.trim()}
          className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors'
        >
          {loading ? '送信中...' : 'メッセージを送信'}
        </button>
        
        {result && (
          <div className={`mt-4 p-3 rounded-md ${result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {result.message}
          </div>
        )}
      </div>
    </main>
  );
}