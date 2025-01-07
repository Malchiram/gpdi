// app/api/proxy/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request:Request) {
  const url = new URL(request.url);
  const endpoint = url.searchParams.get('endpoint');  // Ambil parameter endpoint

  if (!endpoint) {
    return NextResponse.json({ error: 'No endpoint provided' }, { status: 400 });
  }

  const strapiUrl = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;

  try {
   const res = await axios.get(strapiUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    const response = NextResponse.json(res.data);

    // Tambahkan Header CORS
    response.headers.set('Access-Control-Allow-Origin', '*'); // Ubah * ke domain spesifik jika perlu
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return response;
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}
