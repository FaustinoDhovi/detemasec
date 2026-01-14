import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function GET() {
  const testStudentId = 'DET-2026-004';
  
  try {
    const query = `*[_type == "student" && studentId == $studentId][0]{
      _id,
      studentId,
      fullName
    }`;
    
    const student = await client.fetch(query, { 
      studentId: testStudentId
    });

    return NextResponse.json({
      success: true,
      searchedFor: testStudentId,
      student: student,
      cleanName: student ? student.fullName.replace(/\s+/g, '').toLowerCase() : null,
      envVars: {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET
      }
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}