
import { db } from "@/lib/db";


export default async function getBlogs() {
  try {
    

    const listings = await db.listing.findMany({
    
    
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
