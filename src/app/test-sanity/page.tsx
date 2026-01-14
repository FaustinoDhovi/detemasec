import { client } from '@/sanity/lib/client';

export default async function TestSanityPage() {
  let students = [];
  let error = null;
  
  try {
    students = await client.fetch(`*[_type == "student"]{
      _id,
      studentId,
      fullName,
      grade,
      status
    }`);
  } catch (e: any) {
    error = e.message;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Sanity Connection Test</h1>
        
        <div className="mb-4 p-4 bg-blue-50 rounded">
          <h2 className="font-bold">Configuration:</h2>
          <p>Project ID: {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'NOT SET'}</p>
          <p>Dataset: {process.env.NEXT_PUBLIC_SANITY_DATASET || 'NOT SET'}</p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded">
            <h2 className="font-bold">Error:</h2>
            <p>{error}</p>
          </div>
        )}

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Students Found: {students.length}</h2>
        </div>

        {students.length > 0 ? (
          <div className="space-y-4">
            {students.map((student: any) => (
              <div key={student._id} className="border p-4 rounded">
                <p><strong>Student ID:</strong> {student.studentId}</p>
                <p><strong>Full Name:</strong> {student.fullName}</p>
                <p><strong>Grade:</strong> {student.grade}</p>
                <p><strong>Status:</strong> {student.status}</p>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Name without spaces:</strong> {student.fullName.replace(/\s+/g, '').toLowerCase()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No students found in database</p>
        )}
      </div>
    </div>
  );
}