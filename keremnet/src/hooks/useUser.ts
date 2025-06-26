import { useEffect, useState } from 'react';
import { User } from '../types/User';
import { API_URL } from '../routes/consts';

export function useUser(userId: number) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userId == null) return;
    const fetchUser = async () => {
      try {
        const response = await fetch(`${API_URL}/users/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setError('Failed to load user');
        }
      } catch (err) {
        setError('Error fetching user');
      }
    };
    fetchUser();
  }, [userId]);

  return { user, error };
}