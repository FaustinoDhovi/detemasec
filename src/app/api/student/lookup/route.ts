import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(request: NextRequest) {
  try {
    const { fullName, schoolId } = await request.json();

    if (!fullName || !schoolId) {
      return NextResponse.json(
        { error: 'Full name and school ID are required' },
        { status: 400 }
      );
    }

    // Query Sanity for student data
    const query = `*[_type == "student" && schoolId == $schoolId && fullName == $fullName][0] {
      fullName,
      schoolId,
      feeBalance,
      "transactions": *[_type == "transaction" && references(^._id)] | order(date desc) {
        date,
        description,
        amount,
        type
      }
    }`;

    const student = await client.fetch(query, { fullName, schoolId });

    if (!student) {
      return NextResponse.json(
        { error: 'Student not found. Please check your details.' },
        { status: 404 }
      );
    }

    return NextResponse.json(student);
  } catch (error) {
    console.error('Lookup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
