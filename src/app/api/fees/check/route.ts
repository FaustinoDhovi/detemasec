import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

export async function POST(request: NextRequest) {
  try {
    const { studentId, fullName } = await request.json()

    if (!studentId || !fullName) {
      return NextResponse.json(
        { error: 'Student ID and Full Name are required' },
        { status: 400 }
      )
    }

    // Query Sanity for the student
    const query = `*[_type == "student" && studentId == $studentId && fullName == $fullName][0]{
      _id,
      studentId,
      fullName,
      firstName,
      lastName,
      email,
      phone,
      totalFees,
      amountPaid,
      balance,
      accountStatus,
      course,
      yearOfStudy
    }`

    const student = await client.fetch(query, { studentId, fullName })

    if (!student) {
      return NextResponse.json(
        { error: 'Student not found. Please check your details.' },
        { status: 404 }
      )
    }

    // Get recent transactions
    const transactionsQuery = `*[_type == "feeTransaction" && references($studentId)] | order(transactionDate desc)[0..9]{
      transactionId,
      transactionDate,
      transactionType,
      amount,
      description,
      receiptNumber,
      verified
    }`

    const transactions = await client.fetch(transactionsQuery, {
      studentId: student._id,
    })

    return NextResponse.json({
      student,
      transactions,
      balance: student.balance || student.totalFees - student.amountPaid,
    })
  } catch (error) {
    console.error('Error checking fees:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}