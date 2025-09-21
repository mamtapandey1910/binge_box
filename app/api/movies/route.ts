import { NextResponse } from "next/server"

export const GET = async (req: any, res: any) => {

    const token = req.headers.get('authorization')

    const getmovie = await fetch('http://localhost:8000/user/movies',
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: token
            },
            cache: "no-store"
        })
    const data = await getmovie.json()
    return NextResponse.json(data)
}