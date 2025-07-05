import React, { useState, useEffect } from 'react';
import Button from './ui/button';
import Card from './ui/card';

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('posts');
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const fetchData = async (endpoint, setter) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setter(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('posts', setPosts);
    fetchData('users', setUsers);
  }, []);

  const currentData = tab === 'posts' ? posts : users;
  const filteredData = currentData.filter(item => {
    const searchText = search.toLowerCase();
    if (tab === 'posts') {
      return item.title.toLowerCase().includes(searchText) || item.body.toLowerCase().includes(searchText);
    }
    return item.name.toLowerCase().includes(searchText) || item.email.toLowerCase().includes(searchText);
  });

  const paginatedData = filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <section id="api-data" className="py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <Card>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">API Data</h2>
            
            {/* Tabs */}
            <div className="flex justify-center gap-2">
              <Button variant={tab === 'posts' ? 'primary' : 'outline'} onClick={() => { setTab('posts'); setPage(1); }}>
                Posts ({posts.length})
              </Button>
              <Button variant={tab === 'users' ? 'primary' : 'outline'} onClick={() => { setTab('users'); setPage(1); }}>
                Users ({users.length})
              </Button>
            </div>

            {/* Search */}
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder={`Search ${tab}...`}
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </Card>

        {loading && (
          <Card>
            <div className="text-center py-8">
              <div className="animate-spin w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">Loading...</p>
            </div>
          </Card>
        )}

        {error && (
          <Card>
            <div className="text-center py-8 text-red-600 dark:text-red-400">
              <p>Error: {error}</p>
              <Button variant="danger" onClick={() => fetchData(tab, tab === 'posts' ? setPosts : setUsers)} className="mt-4">
                Retry
              </Button>
            </div>
          </Card>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedData.map(item => (
                <Card key={item.id}>
                  {tab === 'posts' ? (
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                          Post #{item.id}
                        </span>
                        <span className="text-xs text-gray-500">User {item.userId}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.body}</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                          <p className="text-sm text-gray-500">@{item.username}</p>
                        </div>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <p>📧 {item.email}</p>
                        <p>📞 {item.phone}</p>
                        <p>🏢 {item.company.name}</p>
                        <p>📍 {item.address.city}</p>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Card>
                <div className="flex justify-center items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
                    Previous
                  </Button>
                  <span className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                    Page {page} of {totalPages}
                  </span>
                  <Button variant="outline" size="sm" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
                    Next
                  </Button>
                </div>
              </Card>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ApiData;