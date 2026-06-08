import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

interface User {
  id: number;
  name: string;
  email: string;
}

export function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

   useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch');
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="grid gap-4">
      {users.map(user => (
        <div key={user.id} className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-bold">{user.name}</h3>
          <p className="text-gray-500">{user.email}</p>
        </div>
      ))}
    </div>
  );
}