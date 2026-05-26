import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        revalidateTag("projects", "default");

        return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (err) {
        return NextResponse.json(
            { message: "Error revalidating" },
            { status: 500 },
        );
    }
}
