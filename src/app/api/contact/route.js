import connectDB from '@/app/utils/connectDB'
// import Post from '@/app/models/Contact'
import Contact from '@/app/models/Contact'
import { NextResponse } from 'next/server'

export async function GET(req) {
    return NextResponse.json({ msg: 'success' })
}

export async function POST(req) {
    const body = await req.json() // here we get the frontend/postman form data
    try {
        // connect DB  import
        await connectDB()

        // Insering data to database
        const result = await Contact.create(body)

        return NextResponse.json({ result: result }, { status: 201 })
    } catch (error) {
        console.log(error)

        return NextResponse.json({ msg: 'something went wrong' }, { status: 400 })
    }
}
