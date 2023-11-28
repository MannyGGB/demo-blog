import { getComments, saveComment } from "@/lib/comments";
import { NextRequest, NextResponse } from "next/server";

// both of our routes are going to get the blog post slug as a URL param
// our comments all have a slug value – we are going to use our slug values to select comments that match that dynamic route on our blog posts
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  // we can add a try and catch here
  const slug = params.slug;
  const comments = await getComments(slug);
  return NextResponse.json({ comments });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const formData = await request.formData();
  const username = formData.get("username") as string;
  const comment = formData.get("comment") as string;

  await saveComment(username, comment, slug);

  return NextResponse.json("Comment saved!");
}
