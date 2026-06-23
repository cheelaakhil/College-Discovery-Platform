import "dotenv/config";
import { PrismaClient } from '@prisma/client';
import { colleges } from '../src/data/colleges';

const prisma = new PrismaClient();

function getMockCutoff(collegeId: string, exam: string) {
  // Simple heuristic for mock cutoffs based on ranking
  const college = colleges.find(c => c.id === collegeId);
  if (!college) return 10000;
  
  let baseCutoff = college.ranking * 500;
  
  if (exam === "JEE Advanced") {
    return baseCutoff;
  } else {
    // JEE Main cutoffs are generally higher numbers (easier ranks)
    return baseCutoff * 3;
  }
}

async function main() {
  console.log('Seeding database...');
  
  // Clear existing data
  await prisma.cutoff.deleteMany({});
  await prisma.course.deleteMany({});
  await prisma.predictionResult.deleteMany({});
  await prisma.college.deleteMany({});
  
  for (const c of colleges) {
    console.log(`Adding ${c.shortName}...`);
    
    // Create College
    const college = await prisma.college.create({
      data: {
        id: c.id,
        name: c.name,
        shortName: c.shortName,
        location: c.location,
        state: c.state,
        type: c.type,
        establishedYear: c.establishedYear,
        rating: c.rating,
        ranking: c.ranking,
        image: c.image,
        logo: c.logo,
        description: c.description,
        overview: c.overview,
        
        coursesString: JSON.stringify(c.courses),
        facilitiesString: JSON.stringify(c.facilities),
        accreditationString: JSON.stringify(c.accreditation),
        highlightsString: JSON.stringify(c.highlights),
        
        fees: c.fees,
        tuitionFee: c.feesBreakdown.tuition,
        hostelFee: c.feesBreakdown.hostel,
        otherFee: c.feesBreakdown.other,
        
        avgPackage: c.placements.averagePackage,
        highestPackage: c.placements.highestPackage,
        medianPackage: c.placements.medianPackage,
        placementRate: c.placements.placementRate,
        topRecruitersString: JSON.stringify(c.placements.topRecruiters),
        
        website: c.website,
        
        // Create Courses
        courseDetails: {
          create: c.courseDetails.map(cd => ({
            name: cd.name,
            duration: cd.duration,
            level: cd.level,
            fees: cd.fees,
            seats: cd.seats,
          }))
        },
        
        // Create Mock Cutoffs
        cutoffs: {
          create: [
            {
              exam: "JEE Advanced",
              category: "General",
              closingRank: getMockCutoff(c.id, "JEE Advanced")
            },
            {
              exam: "JEE Main",
              category: "General",
              closingRank: getMockCutoff(c.id, "JEE Main")
            }
          ]
        }
      }
    });
  }
  
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
