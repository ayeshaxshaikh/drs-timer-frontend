import React, { useState } from 'react';
import './Timer.css';

const URL = 'https://drs-timer-backend-fhheakashabcdyb8.canadacentral-01.azurewebsites.net';

function TimerCreation() {

  const [loading, setLoading] = useState(false);

  const createTimer15 = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}/createTimer15`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create timer');
      }

      const data = await response.json();
      window.open(`/15s/${data.uniqueId}`, '_blank');
    } catch (error) {
      console.error('Error creating timer:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const createTimer2 = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}/createTimer2`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create timer');
      }

      const data = await response.json();
      window.open(`/2s/${data.uniqueId}`, '_blank');
    } catch (error) {
      console.error('Error creating timer:', error);
    } finally {
      setLoading(false);
    }
  };

  const createTimer4 = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}/createTimer4`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create timer');
      }

      const data = await response.json();
      window.open(`/4s/${data.uniqueId}`, '_blank');
    } catch (error) {
      console.error('Error creating timer:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="control-container">
      <h1>Create Timer</h1>
        <button onClick={createTimer15} disabled={loading} className='create-btn'>
        {loading ? 'Creating...' : 'Create 15s Timer'}
      </button>
      <button onClick={createTimer2} disabled={loading} className='create-btn'>
        {loading ? 'Creating...' : 'Create 2s Timer'}
      </button>
      <button onClick={createTimer4} disabled={loading} className='create-btn'>
        {loading ? 'Creating...' : 'Create 4s Timer'}
      </button>
    </div>
  );
}

export default TimerCreation;
