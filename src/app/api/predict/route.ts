import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { rank, exam, category, state } = body;

    if (!rank || !exam) {
      return NextResponse.json({ error: 'Rank and Exam are required' }, { status: 400 });
    }

    const rankNumber = parseInt(rank);

    // Get all cutoffs for the specified exam and category
    // In our mock seed, we only have "General" category seeded for simplicity,
    // so we'll fallback to "General" if no specific category cutoffs exist yet.
    const cutoffs = await prisma.cutoff.findMany({
      where: {
        exam,
        category: category || "General"
      },
      include: {
        college: true
      }
    });

    const safe: any[] = [];
    const reach: any[] = [];
    const dream: any[] = [];

    cutoffs.forEach(cutoff => {
      // Calculate prediction logic
      // Safe: User rank is well below the closing rank (closing rank is a larger number)
      // Reach: User rank is close to the closing rank
      // Dream: User rank is slightly higher than the closing rank (closing rank is a smaller number)
      
      const diff = cutoff.closingRank - rankNumber;
      
      // We will structure the returned college data similarly to the old CollegeCard props
      const collegeData = {
        ...cutoff.college,
        placements: {
          averagePackage: cutoff.college.avgPackage,
          highestPackage: cutoff.college.highestPackage,
          medianPackage: cutoff.college.medianPackage,
          placementRate: cutoff.college.placementRate,
          topRecruiters: JSON.parse(cutoff.college.topRecruitersString)
        },
        feesBreakdown: {
          tuition: cutoff.college.tuitionFee,
          hostel: cutoff.college.hostelFee,
          other: cutoff.college.otherFee
        }
      };

      // Let's say if closingRank is >= rank + 1000, it's Safe
      if (cutoff.closingRank >= rankNumber + 1000) {
        safe.push(collegeData);
      } 
      // If closingRank is within a 1000 margin above, or up to 500 below the user's rank, it's Reach
      else if (cutoff.closingRank >= rankNumber - 500) {
        reach.push(collegeData);
      } 
      // If closingRank is up to 2000 below the user's rank, it's Dream
      else if (cutoff.closingRank >= rankNumber - 2000) {
        dream.push(collegeData);
      }
    });

    return NextResponse.json({
      safe: safe.slice(0, 5),    // limit to top 5 in each category
      reach: reach.slice(0, 5),
      dream: dream.slice(0, 5)
    });

  } catch (error) {
    console.error('Prediction error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
