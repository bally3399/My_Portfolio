import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
    const filePath = join(process.cwd(), 'public', 'BimsCv.pdf');
    try {
        const fileBuffer = await readFile(filePath);
        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'inline; filename="BimsCv.pdf"',
            },
            status: 200,
        });
    } catch (error) {
        console.error('Error serving PDF:', error);
        return new NextResponse('File not found', { status: 404 });
    }
}